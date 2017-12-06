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

function extractDigit(num, digit){
    let div = 1
    if (num < 0) {
        num *= -1
    }
    if (digit < 0){
        digit *= -1
        for (let i = 1; i<=digit; i++){
            div *= 10
        }
        return (Math.floor(num*div)%10)
    } else if (digit >= 0) {
        for (let i = 1; i<=digit; i++){
            div *= 10
        }
        return (Math.floor(num/div)%10)
    }      
}
console.log(extractDigit(654,2));
console.log(extractDigit(85,0))
console.log(extractDigit(-654,1));
console.log(extractDigit(65.43,-1));
console.log(extractDigit(-65.43,-2));

function mostSignificantDigit (num) {
    var rem;
    if (num < 1) {
        while (num < 10) {
            rem = num % 10
            num = num * 10
        }
    } else if (num >= 0) {
        while (num > 0) {
            rem = num % 10;
            num = Math.floor( num / 10 );
        }
    }
  return Math.trunc(rem);
}

console.log('254 : ', mostSignificantDigit(254));
console.log('9543 : ', mostSignificantDigit(9543));
console.log('4 : ', mostSignificantDigit(4));
console.log('67.89 : ', mostSignificantDigit(67.89));
console.log('0.089 : ', mostSignificantDigit(0.089));