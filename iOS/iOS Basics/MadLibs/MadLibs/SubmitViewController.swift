//
//  SubmitViewController.swift
//  MadLibs
//
//  Created by Betalantz on 9/13/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

class SubmitViewController: UIViewController {

    weak var delegate: SubmitViewControllerDelegate?
    var filler = [String]()
    @IBOutlet var textCollection: [UITextField]!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textCollection.sort { $0.tag < $1.tag }

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
        for i in 0..<textCollection.count {
            if let entry = textCollection[i].text {
                filler.append(entry)
            }
        }
        print(filler)
        delegate?.submitButtonPressed(by: self, with: filler)
        
    }
    
}
