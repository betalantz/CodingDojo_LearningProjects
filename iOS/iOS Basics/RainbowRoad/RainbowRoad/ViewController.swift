//
//  ViewController.swift
//  RainbowRoad
//
//  Created by Betalantz on 9/12/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    // set number of cells
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 6
    }
    
    var cellColors = [UIColor.cyan, UIColor.magenta, UIColor.black, UIColor.brown, UIColor.lightGray, UIColor.orange]
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "colorCell", for: indexPath)
        let randomColor = Int(arc4random_uniform(UInt32(cellColors.count)))
        cell.contentView.backgroundColor = cellColors[randomColor]
        return cell
    }
//    func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
//
////        let cell = tableView.dequeueReusableCell(withIdentifier: "colorCell", for: indexPath)
//        let randomColor = Int(arc4random_uniform(UInt32(cellColors.count)))
//        cell.contentView.backgroundColor = cellColors[randomColor]
//    }
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        let height = (self.view.frame.height)/6
        return height
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("Section: \(indexPath.section) and Row: \(indexPath.row)")
        
        tableView.reloadData()
    }
}


