for (let i = 1; i < 10; i++){
    const button = document.getElementById(`btn${i}`)
    button.innerHTML = i
}
const activator = document.getElementById('btn5')
let pivot = 0
let sequence = [1,2,3,6,9,8,7,4]
activator.onclick = () =>  {
    if (pivot > 7) { pivot = 1 }
    document.getElementById('btn1').innerHTML = sequence[pivot <= 7 ? 7-pivot : sequence.length - pivot + 7]
    document.getElementById('btn2').innerHTML = sequence[pivot <= 0 ? 0-pivot : sequence.length - pivot + 0]
    document.getElementById('btn3').innerHTML = sequence[pivot <= 1 ? 1-pivot : sequence.length - pivot + 1]
    document.getElementById('btn6').innerHTML = sequence[pivot <= 2 ? 2-pivot : sequence.length - pivot + 2]
    document.getElementById('btn9').innerHTML = sequence[pivot <= 3 ? 3-pivot : sequence.length - pivot + 3]
    document.getElementById('btn8').innerHTML = sequence[pivot <= 4 ? 4-pivot : sequence.length - pivot + 4]
    document.getElementById('btn7').innerHTML = sequence[pivot <= 5 ? 5-pivot : sequence.length - pivot + 5]
    document.getElementById('btn4').innerHTML = sequence[pivot <= 6 ? 6-pivot : sequence.length - pivot + 6]
    ++pivot
}