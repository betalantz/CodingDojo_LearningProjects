import UIKit

struct Card {
    var value: String
    var suit: String
    var numerical_value: Int
    // This show method come in useful. Use it to make sure your other methods are working.
    func show(){
        print(value, "of", suit, ": value", numerical_value)
    }
}

class Deck {
    var cards = [Card]()
    
    init(){
        self.reset()
    }
    
    func deal() -> Card? {
        if self.cards.count > 0 {
            // This if check makes sure that there are cards in the deck to be dealt
            return self.cards.remove(at: 0)
        }
        else {
            return nil
        }
    }
    
    func reset(){
        let values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
        let suits = ["Clubs", "Spades", "Hearts", "Diamonds"]
        self.cards = [Card]()
        for suit in suits {
            // For each suit, we'll make 13 new cards and add them to our deck
            for i in 0...12 {
                let newCard = Card(value: values[i], suit: suit,  numerical_value: i+1)
                self.cards.append(newCard)
            }
        }
    }
    
    func shuffle(){
        for i in stride(from: self.cards.count-1, to: 0, by: -1) {
            // Working backwards, for each card in the deck, we'll generate a random number to target another card in the deck and have them trade places.
            let swapCardIndex = Int(arc4random_uniform(UInt32(i)))
            let temp = self.cards[i]
            self.cards[i] = self.cards[swapCardIndex]
            self.cards[swapCardIndex] = temp
        }
    }
    
    func show(){
        for card in self.cards {
            card.show()
        }
    }
}

class Player {
    var name: String
    var hand: [Card]
    
    init(name: String){
        self.name = name
        self.hand = [Card]()
    }
    
    func draw(deck:Deck) -> Card? {
        // For this method, we'll have to know which instance of the Deck class we're using
        if let drawnCard = deck.deal() {
            // We'll utilize the deck's deal method
            self.hand.append(drawnCard)
            return drawnCard
        }
        else {
            return nil
        }
    }
    
    func discard(suit: String, value: String) -> Bool {
        // For this method, we'll need to know the suit and value of the card that the user would like to discard
        for i in 0...self.hand.count-1 {
            if (self.hand[i].suit == suit && self.hand[i].value == value) {
                self.hand.remove(at: i)
                return true
            }
        }
        return false
    }
    
    func show(){
        for card in self.hand {
            card.show()
        }
    }
}

// Make a new deck called newDeck
let newDeck = Deck()

// You can check to make sure it has all 52 cards with show()
print("<<<<<<<<<<<<<<< New deck was made >>>>>>>>>>>>>>>>>")
newDeck.show()

// Shuffle the deck to make things interesting
newDeck.shuffle()

// You can check to make sure everything's been shuffled by calling show() again
print("<<<<<<<<<<<<<<< New deck was shuffled >>>>>>>>>>>>>>>>>")
newDeck.show()

// Make a new player, let's name him Joe
let joe = Player(name: "Joe")

// Have Joe draw five cards from newDeck
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)

// Take a look at Joe's hand
print("<<<<<<<<<<<<<<< Joe's hand >>>>>>>>>>>>>>>>>")
joe.show()

// Make Joe discard the Ace of Clubs if he has it
print("<<<<<<<<<<<<<<< Joe's discard >>>>>>>>>>>>>>")
print(joe.discard(suit: "Clubs", value: "Ace"))
