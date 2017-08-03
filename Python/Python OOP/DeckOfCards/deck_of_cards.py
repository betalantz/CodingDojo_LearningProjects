class Deck(object):
    def __init__(self, name='deck_1'):
        self.name = name
        self.cards = []
        self.gen()
    def gen(self):
        for shape in range(0, 3):
            card = {}
            if shape == 0:
                card['shape'] = 'diamond'
            elif shape == 1:
                card['shape'] = 'oval'
            elif shape == 2:
                card['shape'] = 'square'
            for color in range(0, 3):
                if color == 0:
                    card['color'] = 'red'
                elif shape == 1:
                    card['color'] = 'green'
                elif shape == 2:
                    card['color'] = 'blue'
                for number in range(0, 3):
                    if number == 0:
                        card['number'] = 'one'
                    elif shape == 1:
                        card['number'] = 'two'
                    elif shape == 2:
                        card['number'] = 'three'
                    for fill in range(0, 3):
                        if fill == 0:
                            card['fill'] = 'open'
                        elif shape == 1:
                            card['fill'] = 'dashed'
                        elif shape == 2:
                            card['fill'] = 'solid'
                    self.cards.append(card)
# print Deck().cards
    def showCards(self):
        