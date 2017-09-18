//
//  ViewController.swift
//  BinaryCounter
//
//  Created by Betalantz on 9/14/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

class BinaryViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, CounterCellDelegate {
    
    
    
    @IBOutlet weak var counterTableView: UITableView!
    @IBOutlet weak var totalLabel: UILabel!
    
    var powersOf = [Int]()
    var total = 0
    
    func generatePowers() {
        var count = 1
        let multiplier = 10
        for _ in 1...16 {
            powersOf.append(count)
            count *= multiplier
        }
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return powersOf.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CounterCell", for: indexPath) as! CounterCell
        cell.cellCounter.text = "\(powersOf[indexPath.row])"
        cell.delegate = self
        return cell
    }
    
    func addValue(controller: CounterCell, with text: String, at: IndexPath? = nil) {
        if let path = at {
            print(path)
        }
        if let valueToAdd = Int(text) {
            total += valueToAdd
        }
        updateUI()
        
    }
    func subtractValue(controller: CounterCell, with text: String) {
        if let valueToAdd = Int(text) {
            total -= valueToAdd
        }
        updateUI()
    }
    
    @IBAction func clearButtonPressed(_ sender: UIButton) {
        total = 0
        totalLabel.text = "Total: "
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        generatePowers()
        counterTableView.dataSource = self
        counterTableView.delegate = self
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func updateUI() {
        totalLabel.text = "Total: \(total)"
    }

}

