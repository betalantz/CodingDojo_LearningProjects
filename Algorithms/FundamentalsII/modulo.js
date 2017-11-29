function threesFives(){
    let sum = 0
    for (let i = 100; i <= 4000000; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    console.log(sum);
}
threesFives()

function betterThreesFives(start,end){
    let sum = 0
    for (let i = start; i <= end; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    console.log(sum);
}
betterThreesFives(100,4000000)

function generateCoinChange(cents){
    let total = cents
    let remainder = 0
    function calcCoins(coin){
        remainder = total % coin
        result = (total - remainder)/coin
        total = remainder
        return result
    }
    console.log("dollars: " + calcCoins(100));
    console.log("half-dollars: " + calcCoins(50));
    console.log("quarters: " + calcCoins(25));
    console.log("dimes: " + calcCoins(10));
    console.log("nickels: " + calcCoins(5));
    console.log("pennies: " + calcCoins(1));   
}
generateCoinChange(263)

function messyMath(num){
    let sum = 0
    for (let count = 1; count <= num; count++){
        if (num/count==3){
            return -1
        }
        if (count%7==0){
            sum += (count*2)
            // continue
        } else if (count%3!==0){
            sum += count
        }
    }
    return sum
}
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));

function twelveBarBlues(){
    for (let i=1; i<13; i++){
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}
twelveBarBlues()

function fibonacci(num){
    let fib = [0,1]
    for (let i=1; i<num; i++){
        let curr=(fib[i]+fib[i-1])
        fib.push(curr)
    }
    return fib[num]
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));

function sumToOne(num){
    while (num >= 10){
        let value = num
        let sum = 0
        while (Math.floor(value/10)) {
            sum += value % 10
            value = Math.floor(value / 10)
        }
        num = Math.floor(value%10) + sum
    }
    return num;
}
console.log(sumToOne(928))
console.log(sumToOne(1138))

function clockHandAngles(seconds){
    let secDg = (seconds % 60)*6
    let minDg = (seconds % 3600)/10
    let hrDg = ((Math.floor((seconds % 43200)/3600))*30)+((seconds % 3600)*0.00833)
    console.log("Hour hand: " + hrDg + " degrees");
    console.log("Minute hand: " + minDg + " degrees");
    console.log("Second hand: " + secDg + " degrees");
}
clockHandAngles(3600)
clockHandAngles(119730)