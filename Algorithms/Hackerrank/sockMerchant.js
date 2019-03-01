function sockMerchant(arr) {
    let socks = {}
    let pairs = 0
    arr.forEach(el => socks[el] = 1 + (socks[el] || 0))
    for (let color in socks) {
        pairs += Math.floor(socks[color]/2)
    }
    return pairs
}
const pile1 = [2,2,3,3,3,4,4,4,4,1]
console.log(sockMerchant(pile1));