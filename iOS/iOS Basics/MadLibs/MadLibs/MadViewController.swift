//
//  ViewController.swift
//  MadLibs
//
//  Created by Betalantz on 9/13/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

class MadViewController: UIViewController, SubmitViewControllerDelegate {
    
    @IBOutlet weak var filledText: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func submitButtonPressed(by controller: SubmitViewController, with madLib: Array<Any>) {
        print ("""
                \(madLib)
            """)
         filledText.text = "We are having a perfectly \(madLib[0]) time now. Later, we will \(madLib[1]) and \(madLib[2]) in the \(madLib[3])."
        dismiss(animated: true, completion: nil)
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "ComposeText" {
            let controller = segue.destination as! SubmitViewController
            controller.delegate = self
        }
    }
}

