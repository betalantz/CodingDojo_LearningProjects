//
//  ViewController.swift
//  HelloCoreData2
//
//  Created by Betalantz on 9/18/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit
import CoreData

class ViewController: UIViewController {

    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let users = [
            ["firstName": "Marsha", "email": "marsha@brady.co.uk"]
            
        ]
//        users.forEach {
//            user in
//            let newUser = User(context: self.managedObjectContext) // Should have been declared as a constant within the ViewController's scope
//            newUser.firstName = user["firstName"]
//            newUser.email = user["email"]
//            do {
//                try managedObjectContext.save()
//                print("Success")
//            } catch {
//                let nserror = error as NSError
//                print("Unresolved error \(nserror), \(nserror.userInfo)")
//                abort()
//            }
//        }
    }
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        do {
            let userRequest = try managedObjectContext.fetch(User.fetchRequest())
//            print(userRequest)
            userRequest.forEach {
                user in
                let x = user as! User
                print(type(of:user))
                print(x.firstName!, x.email!)
            }
        } catch {
            print("Error: \(error)")
        }
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func saveUser(_ sender: UIButton) {
        let user = User(context: managedObjectContext)
        user.firstName = "billy"
        user.email = "bill@bobmail.com"
        
        if managedObjectContext.hasChanges {
            do {
                try managedObjectContext.save()
                print("Success!")
            } catch {
                let nserror = error as NSError
                print("Unresolved error \(nserror), \(nserror.userInfo)")
                abort()
            }
        }
    }
    
}

