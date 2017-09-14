//
//  SubmitViewControllerDelegate.swift
//  MadLibs
//
//  Created by Betalantz on 9/13/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

protocol SubmitViewControllerDelegate: class {
    func submitButtonPressed(by controller: SubmitViewController, with array: Array<Any>)
}
