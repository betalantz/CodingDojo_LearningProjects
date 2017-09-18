//
//  CounterCell.swift
//  BinaryCounter
//
//  Created by Betalantz on 9/14/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

protocol CounterCellDelegate: class {
    func addValue(controller: CounterCell, with text: String, at: IndexPath?)
    func subtractValue(controller: CounterCell, with text: String)
}

class CounterCell: UITableViewCell {
    
    weak var delegate: BinaryViewController?
    var path: IndexPath?
    
    @IBOutlet weak var cellCounter: UILabel!
    
    @IBAction func plusButtonPressed(_ sender: UIButton) {
        let text = cellCounter.text
        if let tableView = self.superview as? UITableView {
            path = tableView.indexPath(for: self)
        }
        delegate?.addValue(controller: self, with: text!, at: path)
    }
    
    @IBAction func minusButtonPressed(_ sender: UIButton) {
        let text = cellCounter.text
        delegate?.subtractValue(controller: self, with: text!)
    }
}
