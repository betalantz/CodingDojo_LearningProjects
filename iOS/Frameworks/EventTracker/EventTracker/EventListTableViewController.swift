//
//  EventListTableViewController.swift
//  EventTracker
//
//  Created by Betalantz on 9/20/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit
import CoreData

class EventListTableViewController: UITableViewController, AddEditViewControllerDelegate {
//    var test:NSFetchedResultsController?
    // *************
    // Global variables and setup
    // *************
    @IBAction func unwindToEventVC(segue:UIStoryboardSegue) { }
    
    var incompEvents = [Event]()
    var compEvents = [Event]()
    var cellsInSection: [[Event]]?  // This line gave me trouble.
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    func updateView() {
        fetchAllIncompleteItems()
        fetchAllCompleteItems()
        cellsInSection = [incompEvents, compEvents]  // This line also threw errors, but perhaps b/c of line 21
        self.tableView.reloadData()
    }
    func fetchAllIncompleteItems() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Event")
        let compPredicate = NSPredicate(format: "completed == %@", false as CVarArg)
        let timeSort = NSSortDescriptor(key: "time", ascending:true)
        request.predicate = compPredicate
        request.sortDescriptors = [timeSort]
        do {
            let result = try managedObjectContext.fetch(request)
            incompEvents = result as! [Event]
        } catch {
            print("\(error)")
        }
        print(incompEvents)
    }
    func fetchAllCompleteItems() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Event")
        let compPredicate = NSPredicate(format: "completed == %@", true as CVarArg)
        let timeSort = NSSortDescriptor(key: "time", ascending:true)
        request.predicate = compPredicate
        request.sortDescriptors = [timeSort]
        do {
            let result = try managedObjectContext.fetch(request)
            compEvents = result as! [Event]
        } catch {
            print("\(error)")
        }
        print(compEvents)
    }
    let mySection = ["Incomplete", "Complete"]
    

    override func viewDidLoad() {
        super.viewDidLoad()
        updateView()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    // *************
    // Populating and Rendering table and section view
    // *************
    override func numberOfSections(in tableView: UITableView) -> Int {
        return mySection.count
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return cellsInSection![section].count
    }
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return mySection[section]
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
//        var cell: UITableViewCell?
        let cell = tableView.dequeueReusableCell(withIdentifier: "EventCell", for: indexPath)
        if indexPath.section == 0 {
            let currEvent = incompEvents[indexPath.row]
            cell.detailTextLabel?.text = currEvent.title!
            cell.textLabel?.text = formatDate(dateObj: currEvent.time!)
            
         } else if indexPath.section == 1 {
//            let cell = tableView.dequeueReusableCell(withIdentifier: "EventCell", for: indexPath)
            let currEvent = compEvents[indexPath.row]
            cell.detailTextLabel?.text = currEvent.title!
            cell.textLabel?.text = formatDate(dateObj: currEvent.time!)
        }
        return cell
    }
    func formatDate(dateObj: Date) -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "h:mm a"
        let dateString = dateFormatter.string(from: dateObj)
        return dateString
    }
    // *************
    // Segues
    // *************
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "segueAddEditEvent", sender: self)
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let controller = segue.destination as! AddEditViewController
        controller.delegate = self
        
        if let currEvent: Event = sender as? Event {
            controller.eventToEdit = currEvent
            controller.navigationItem.title = controller.eventToEdit?.title
        }
        
    }
    
    // **************
    // Create and Update Operations
    // **************
    func savePressed(sender: AddEditViewController) {
        var eventItem: Event?
        if let _ = sender.eventToEdit {
            eventItem = sender.eventToEdit!
        } else {
            eventItem = (NSEntityDescription.insertNewObject(forEntityName: "Event", into: managedObjectContext) as! Event)
            incompEvents.append(eventItem!)
        }
        eventItem!.title = sender.addEventField.text
        eventItem!.info = sender.addInfoField.text
        eventItem!.time = sender.addDateField.date
        eventItem!.completed = false
        
        do {
            try managedObjectContext.save()
            
        } catch {
            print("\(error)")
        }
        updateView()
    }
   
    // **************
    // Edit and Delete Slider
    // **************
    override func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let delete = UITableViewRowAction(style: .destructive, title: "Delete") {
            (action, indexPath) in
            print(indexPath)
            let selectedToDo = self.cellsInSection![indexPath.section].remove(at: indexPath.row)
            self.tableView.deleteRows(at: [indexPath], with: .automatic)
            self.managedObjectContext.delete(selectedToDo)
            do {
                try self.managedObjectContext.save()
            } catch {
                print("\(error)")
            }
//            self.updateView()
        }
        let edit = UITableViewRowAction(style: .destructive, title: "Edit") {
            (action, indexPath) in
            let currentToDo = self.cellsInSection![indexPath.section][indexPath.row]
            self.performSegue(withIdentifier: "segueAddEditEvent", sender: currentToDo)
        }
        edit.backgroundColor = UIColor.blue
        return [delete, edit]
    }
    // *************
    // Toggle: event complete/incomplete
    // *************

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        _ = tableView.cellForRow(at: indexPath)
        let selectedEvent = cellsInSection![indexPath.section][indexPath.row]
        selectedEvent.completed = selectedEvent.completed ? false : true
        do {
            try self.managedObjectContext.save()
        } catch {
            print("Error at didSelectRowAt")
            print("\(error)")
        }
        updateView()
    }
    

}
