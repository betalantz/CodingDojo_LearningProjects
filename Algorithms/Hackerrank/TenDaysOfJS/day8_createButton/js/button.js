let count = 0
const counter = document.createElement('button')
counter.id = 'btn'
counter.innerHTML = count
document.body.appendChild(counter)

// const btn = document.getElementById('btn')
counter.onclick = () => {
    counter.innerHTML = ++count
}   