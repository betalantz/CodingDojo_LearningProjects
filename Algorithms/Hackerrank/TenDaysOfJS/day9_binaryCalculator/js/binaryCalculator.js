const display = document.createElement('div')
display.id = 'res'
const buttonsContainer = document.createElement('div')
buttonsContainer.id = 'btns'
const operators = ['+', '-', '*', '/']
const row1 = ['0', '1', 'C', '=']
const labels = [...row1, ...operators]
const ids = ['0', '1', 'Clr', 'Eql', 'Sum', 'Sub', 'Mul', 'Div']
const buttons = []
for (let i = 0; i < 8; i++){
    buttons[i] = document.createElement('button')
    buttons[i].id = 'btn' + ids[i]
    buttons[i].innerHTML = labels[i]
    switch(i) {
        case 0:
        case 1:
            buttons[i].className = 'digits'
            buttons[i].addEventListener('click', () => updateDisplay(buttons[i].innerHTML))
            break
        case 2:
            buttons[i].className = 'clr-eql'
            buttons[i].addEventListener('click', () => display.innerHTML = '')
            break
        case 3:
            buttons[i].className = 'clr-eql'
            buttons[i].addEventListener('click', () => evaluate(display.innerHTML))
            break
        default:
            buttons[i].className = 'operators'
            buttons[i].addEventListener('click', () => updateDisplay(buttons[i].innerHTML))
    }
    buttonsContainer.appendChild(buttons[i])
}
document.body.appendChild(display)
document.body.appendChild(buttonsContainer)

function updateDisplay(content) {
    display.innerHTML = display.innerHTML + content
}
function evaluate(str) {
    const re = /(\d+)([\+\-\*\/])(\d+)/
    const expr = re.exec(str)
    let res;
    const operand1 = parseInt(expr[1], 2)
    const operand2 = parseInt(expr[3], 2)
    switch(expr[2]) {
        case '+':
            res = operand1 + operand2
            break
        case '-':
            res = operand1 - operand2
            break
        case '*':
            res = operand1 * operand2
            break
        case '/':
            res = operand1 / operand2
            break
    }
    display.innerHTML = (res >>> 0).toString(2)
}