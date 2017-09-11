//
//  ViewController.swift
//  TicTacToe
//
//  Created by Betalantz on 9/7/17.
//  Copyright © 2017 Betalantz. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var winnerLabel: UILabel!
    
    var turnNumber = 0
    var player = 0
    var winner = 0
    var gameboard = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    
    @IBOutlet var gameButtonCollection: [UIButton]!
    
    @IBAction func resetPressed(_ sender: UIButton) {
        print("Reset")
        winnerLabel.isHidden = true
        turnNumber = 0
        player = 0
        winner = 0
        gameboard = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        for i in 0..<gameButtonCollection.count {
            gameButtonCollection[i].backgroundColor = UIColor.lightGray
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        gameButtonCollection.sort { $0.tag < $1.tag }
        winnerLabel.isHidden = true
    }
    @IBAction func gameButtonPressed(_ sender: UIButton) {
        print("Button \(sender.tag) pressed")

//      toggle current player
        turnNumber += 1
        if turnNumber % 2 == 0 {
            player = 2
        } else {
            player = 1
        }
        
//        set value in gameboard matrix according to button tag
        let marker = sender.tag
        let posY = marker / 3
        let posX = marker % 3
        if gameboard[posY][posX] == 0 && winner == 0 && turnNumber < 10 {
            gameboard[posY][posX] = player
//            print(gameboard)
//            print(player)
            changeColor()
        }
        print(gameboard)
        print(player)
        if turnNumber >= 5 && winner == 0 {
            isWinner()
        }
        if turnNumber >= 9 && winner == 0 {
            winnerLabel.textColor = UIColor.red
            winnerLabel.text = ("It's a tie!")
            winnerLabel.isHidden = false
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func changeColor() {
        for y in 0..<gameboard.count {
            var x = 0
            for val in gameboard[y] {
                if y == 0 && val == 1 {
                    gameButtonCollection[x].backgroundColor = UIColor.green
                } else if y == 1 && val == 1 {
                    self.gameButtonCollection[x+3].backgroundColor = UIColor.green
                } else if y == 2 && val == 1 {
                    self.gameButtonCollection[x+6].backgroundColor = UIColor.green
                }
                if y == 0 && val == 2 {
                    gameButtonCollection[x].backgroundColor = UIColor.magenta
                } else if y == 1 && val == 2 {
                    self.gameButtonCollection[x+3].backgroundColor = UIColor.magenta
                } else if y == 2 && val == 2 {
                    self.gameButtonCollection[x+6].backgroundColor = UIColor.magenta
                }
//                print ("At pos \(x),\(y) with val of \(val)")
                x += 1
            }
        }
    }
    func isWinner() {
        //  check rows
        for row in gameboard {
            if row == [player, player, player] {
                winner = 1
            }
        }
        // check columns
        for col in 0..<gameboard.count {
            let rw = 0
            if gameboard[rw][col] == player &&
                gameboard[rw+1][col] == player &&
                gameboard[rw+2][col] == player {
                    winner = 1
            }
        }
        // check diagonals
        let yy = 0
        let xx = 0
        if gameboard[yy][xx] == player &&
            gameboard[yy+1][xx+1] == player &&
            gameboard[yy+2][xx+2] == player {
                winner = 1
        } else if
            gameboard[yy][xx+2] == player &&
            gameboard[yy+1][xx+1] == player &&
            gameboard[yy+2][xx] == player {
                winner = 1
        }
        if winner == 1 && player == 1 {
            print("winner")
            winnerLabel.textColor = UIColor.green
            winnerLabel.text = ("Green is the winner!")
            winnerLabel.isHidden = false
        } else if
            winner == 1 && player == 2 {
            print("winner")
            winnerLabel.textColor = UIColor.magenta
            winnerLabel.text = ("Magenta is the winner!")
            winnerLabel.isHidden = false
        }
    }
}


