//
//  AddItemTableViewControllerDelegate.swift
//  CarpeDiem
//
//  Created by Betalantz on 9/13/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import Foundation

protocol AddItemTableViewControllerDelegate: class {
    func itemSaved(by controller: AddItemTableViewController, with text: String, at indexPath: NSIndexPath?)
    func cancelButtonPressed(by controller: AddItemTableViewController)
}
