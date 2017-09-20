//
//  ViewController.swift
//  ToDoList
//
//  Created by Betalantz on 9/15/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit
import CoreData

class ToDoViewController: UITableViewController, DisplayTaskCellDelegate, AddViewControllerDelegate {
    
    // *************
    // Global variables and setup
    // *************
    
    @IBAction func unwindToToDoVC(segue:UIStoryboardSegue) { }
    
    var items = [ToDoItem]()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    func fetchAllItems() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ToDoItem")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [ToDoItem]
        } catch {
            print("\(error)")
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllItems()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    // *************
    // Populating and Rendering table view
    // *************
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "DisplayTaskCell", for: indexPath) as! DisplayTaskCell
        let currTask = items[indexPath.row]
        cell.taskDisplayLabel.text = currTask.task!
        cell.descDisplayLabel.text = currTask.desc
        cell.dateDisplayLabel.text = formatDate(dateObj: currTask.date!)
        cell.checkedLabel.isHidden = currTask.checked ? false : true
        cell.delegate = self
        return cell
    }
    func formatDate(dateObj: Date) -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd/yyyy h:mm a"
        let dateString = dateFormatter.string(from: dateObj)
        return dateString
    }
    
    // *************
    // Segues
    // *************
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "segueAddNewTask", sender: self)
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let controller = segue.destination as! AddViewController
        controller.delegate = self
        
        if let currToDo: ToDoItem = sender as? ToDoItem {
            controller.taskToEdit = currToDo
        }

    }
    
    // **************
    // Create and Update Operations
    // **************
    func savePressed(sender: AddViewController) {
        
        var toDoTask: ToDoItem?
        if let _ = sender.taskToEdit {
            toDoTask = sender.taskToEdit!
        } else {
            toDoTask = (NSEntityDescription.insertNewObject(forEntityName: "ToDoItem", into: managedObjectContext) as! ToDoItem)
            items.append(toDoTask!)
        }
        toDoTask!.task = sender.addTaskField.text
        toDoTask!.desc = sender.addDescField.text
        toDoTask!.date = sender.addDateField.date
        toDoTask!.checked = false
        
        do {
            try managedObjectContext.save()
            
        } catch {
            print("\(error)")
        }
        self.tableView.reloadData()
    }
    
    // **************
    // Edit and Delete Slider
    // **************
    
    override func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let delete = UITableViewRowAction(style: .destructive, title: "Delete") {
            (action, indexPath) in
            let selectedToDo = self.items.remove(at: indexPath.row)
            self.tableView.deleteRows(at: [indexPath], with: .automatic)
            self.managedObjectContext.delete(selectedToDo)
            do {
                try self.managedObjectContext.save()
            } catch {
                print("\(error)")
            }
        }
        let edit = UITableViewRowAction(style: .destructive, title: "Edit") {
            (action, indexPath) in
            let currentToDo = self.items[indexPath.row]
            self.performSegue(withIdentifier: "segueAddNewTask", sender: currentToDo)
        }
        edit.backgroundColor = UIColor.blue
        return [delete, edit]
    }
    
    // *************
    // Toggle: Mark cell/task as complete/checked
    // *************
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let selectedCell = tableView.cellForRow(at: indexPath) as! DisplayTaskCell
        let selectedTask = items[indexPath.row]
        if selectedTask.checked == false {
            selectedTask.checked = true
            selectedCell.checkedLabel.isHidden = false
        } else {
            selectedTask.checked = false
            selectedCell.checkedLabel.isHidden = true
        }
        do {
            try self.managedObjectContext.save()
        } catch {
            print("Error at didSelectRowAt")
            print("\(error)")
        }
    }

}

