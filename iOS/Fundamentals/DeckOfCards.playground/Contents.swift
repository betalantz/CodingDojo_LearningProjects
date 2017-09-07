import UIKit

enum Color: String {
    case Red, Blue, Green
}

struct Card {
    var cardColor: Color
    var Roll: Int
    init(cardColor: Color) {
        self.cardColor = cardColor
        switch cardColor {
        case .Red:
            Roll = 1 + Int(arc4random_uniform(2))
        case .Blue:
            Roll = 3 + Int(arc4random_uniform(2))
        case .Green:
            Roll = 5 + Int(arc4random_uniform(2))
        }
    }
}
class Deck {
    var cards: [Card] = []
    init() {
        for _ in 1...10 {
            let newCard = Card(cardColor: Color.Red)
            self.cards.append(newCard)
        }
        for _ in 1...10 {
            let newCard = Card(cardColor: Color.Blue)
            self.cards.append(newCard)
        }
        for _ in 1...10 {
            let newCard = Card(cardColor: Color.Green)
            self.cards.append(newCard)
        }
//        print ("The deck now contains \(self.cards) and there are \(self.cards.count) in the deck.")
    }
    func isEmpty() -> Bool {
        if self.cards.count == 0 {
            return true
        }
        return false
    }
    func deal() -> Card? {
        if !self.isEmpty() {
            return self.cards.remove(at: self.cards.count - 1)
        }
        return nil
    }
    func shuffle() {
        for _ in 1...30 {
            let position1 = Int(arc4random_uniform(30))
            let position2 = Int(arc4random_uniform(30))
            let temp = self.cards[position1]
            self.cards[position1] = self.cards[position2]
            self.cards[position2] = temp
        }
//        print(self.cards)
    }
    func showDeck() {
        print ("The deck contains...")
        var displayDeck = ""
        var deckCount = 0
        for card in self.cards {
            displayDeck += "[\(card.cardColor): \(card.Roll)]"
            deckCount += 1
        }
        print (displayDeck)
        print ("and a count of \(deckCount) cards.")
    }
}

class Player {
    var hand: [Card]
    var name: String
    init(playerName: String) {
        self.name = playerName
        self.hand = []
        print ("\(self.name) has joined the game.")
    }
    func drawCard(gameDeck: Deck) -> Card? {
        if let draw = gameDeck.deal(){
            self.hand.append(draw)
            return draw
        }
        return nil
    }
    func showHand() {
        print ("\(self.name)'s hand contains...")
        var displayHand = ""
        for card in self.hand {
            displayHand += "[\(card.cardColor): \(card.Roll)]"
        }
        print (displayHand)
    }
    func rollDice() -> Int {
        let demBones = Int(arc4random_uniform(5) + 1)
        print("It's a \(demBones)! May the odds be ever in your favor!")
        return demBones
    }
    func matchingCards(matchColor: Color, matchRoll: Int) -> Int {
        var matchCount = 0
        for card in hand {
            if card.cardColor == matchColor && card.Roll == matchRoll {
                matchCount += 1
            }
        }
        print ("\(self.name) has \(matchCount) matches this round!")
        return matchCount
    }
}

func test(){
    let myDeck = Deck()
    myDeck.shuffle()
    myDeck.showDeck()
    let newPlayer = Player(playerName: "Bonnie")
    for _ in 1...7 {
        newPlayer.drawCard(gameDeck: myDeck)
    }
    newPlayer.showHand()
    myDeck.showDeck()
    newPlayer.rollDice()
    if let tableCard = myDeck.deal() {
        print ("Card color to match is \(tableCard.cardColor)")
        let round = newPlayer.matchingCards(matchColor: tableCard.cardColor, matchRoll: newPlayer.rollDice())
    }
}
test()
