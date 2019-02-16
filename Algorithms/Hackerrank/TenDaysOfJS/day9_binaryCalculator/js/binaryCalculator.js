const display = document.createElement('div')
display.id = 'res'
const buttons = document.createElement('div')
buttons.id = 'btns'
const operators = ['+', '-', '*', '-']
const row1 = ['0', '1', 'C', '=']
const content = [...row1, ...operators]
const ids = ['0', '1', 'Clr', 'Eql', 'Sum', 'Sub', 'Mul', 'Div']
