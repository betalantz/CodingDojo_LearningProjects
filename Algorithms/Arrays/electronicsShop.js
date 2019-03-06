function getMoneySpent(keyboards, drives, b) {
    let maxUnderBudget = -1;
    keyboards.forEach((keyPrice) => {
        drives.forEach((drivePrice) =>{
            let total = keyPrice + drivePrice
            if (total > maxUnderBudget && total <= b) {
                maxUnderBudget = total
            }
        })
    })
    return maxUnderBudget
}
const budget1 = 10
const keys1 = [3,1]
const usb1 = [5,2,8]
const budget2 = 5
const keys2 = [4]
const usb2 = [5]
console.log(getMoneySpent(keys1, usb1, budget1));
console.log(getMoneySpent(keys2, usb2, budget2));