//
//  ViewController.swift
//  ColdCall
//
//  Created by Betalantz on 9/7/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numLabel: UILabel!
    let nameList = [
        "Arden", "Bolly", "Craik", "Oryx", "MadAdam"
    ]
    var randNum = 0
    @IBAction func callButtonPressed(_ sender: UIButton) {
        print("You called?")
        let currName = Int(arc4random_uniform(5))
        randNum = Int(arc4random_uniform(5)) + 1
        nameLabel.text = nameList[currName]
        numLabel.text = String(randNum)
        switch randNum {
        case 1, 2:
            numLabel.textColor = UIColor.red
        case 3, 4:
            numLabel.textColor = UIColor.orange
        case 5:
            numLabel.textColor = UIColor.green
        default:
            numLabel.textColor = UIColor.black
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

