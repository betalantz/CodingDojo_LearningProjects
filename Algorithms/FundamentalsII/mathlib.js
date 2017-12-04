function sweatshirtPricing(num) {
    let cost
    if (Math.trunc(num) == 1) {
        cost = 20
    } else if (Math.trunc(num) == 2) {
        cost = Math.ceil((Math.trunc(num) * 20) * .91)
    } else if (Math.trunc(num) == 3) {
        cost = Math.ceil((Math.trunc(num) * 20) * .81)
    } else if (Math.trunc(num) >= 4) {
        cost = Math.ceil((Math.trunc(num) * 20) * .65)
    }
    console.log("The cost for " + num + " sweatshirts is $" + cost);
}
sweatshirtPricing(1)
sweatshirtPricing(2)
sweatshirtPricing(3)
sweatshirtPricing(4)
sweatshirtPricing(6)