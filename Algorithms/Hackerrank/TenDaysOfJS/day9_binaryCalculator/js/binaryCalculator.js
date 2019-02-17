const display = document.createElement('div')
display.id = 'res'
const buttonsContainer = document.createElement('div')
buttonsContainer.id = 'btns'
const operators = ['+', '-', '*', '-']
const row1 = ['0', '1', 'C', '=']
const buttons = [...row1, ...operators]
const ids = ['0', '1', 'Clr', 'Eql', 'Sum', 'Sub', 'Mul', 'Div']
for (let i = 0; i < 8; i++){
    buttons[i] = document.createElement('button')
    buttons[i].id = 'btn' + ids[i]
    buttons[i].innerHTML = buttons[i]
    switch(i) {
        case 0:
        case 1:
            buttons[i].className = 'digits'
            break
        case 2:
        case 3:
            buttons[i].className = 'clr-eql'
            break
        default:
            buttons[i].className = 'operators'
    }
    buttonsContainer.appendChild(buttons[i])
}
document.body.appendChild(display)
document.body.appendChild(buttonsContainer)
