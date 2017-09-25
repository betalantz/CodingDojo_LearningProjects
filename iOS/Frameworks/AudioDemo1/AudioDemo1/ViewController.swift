//
//  ViewController.swift
//  AudioDemo1
//
//  Created by Betalantz on 9/22/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit
import AudioToolbox
import AVFoundation

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

   
    @IBAction func playAudioButtonPressed(_ sender: UIButton) {
//        let filename = "mySoundFile"
//        let ext = "wav"
        print("tweet!")
//        if let soundUrl = Bundle.main.url(forResource: filename, withExtension: ext) {
            var soundId: SystemSoundID = 1022
//            AudioServicesCreateSystemSoundID(soundUrl as CFURL, &soundId)
//            AudioServicesAddSystemSoundCompletion(soundId, nil, nil, {(soundId, clientData) -> Void in AudioServicesDisposeSystemSoundID(soundId)}, nil)
        
            AudioServicesPlaySystemSound(soundId)
            
//        }
    }
}


