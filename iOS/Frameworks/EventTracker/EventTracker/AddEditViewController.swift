//
//  AddEditViewController.swift
//  EventTracker
//
//  Created by Betalantz on 9/20/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

protocol AddEditViewControllerDelegate: class {
    func savePressed(sender: AddEditViewController)
}

class AddEditViewController: UIViewController {
    @IBOutlet weak var addEventField: UITextField!
    @IBOutlet weak var addInfoField: UITextField!
    @IBOutlet weak var addDateField: UIDatePicker!
    
    var eventToEdit: Event?
    var delegate: AddEditViewControllerDelegate?
    
    @IBAction func saveButtonPressed(_ sender: UIButton) {
        delegate?.savePressed(sender: self)
        performSegue(withIdentifier: "unwindToEventVCWithSegue", sender: self)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let original = eventToEdit {
            addEventField.text = original.title
            addInfoField.text = original.info
            addDateField.setDate(original.time!, animated: true)
        }
    }
    
}
