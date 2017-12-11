function weekdayName(weekdayNum){
    let day
    switch (weekdayNum) {
        case 1:
            day = "Sunday"
            break
        case 2:
            day = "Monday"
            break
        case 3:
            day = "Tuesday"
            break
        case 4:
            day = "Wednesday"
            break
        case 5:
            day = "Thursday"
            break
        case 6:
            day = "Friday"
            break
        case 7:
            day = "Saturday"
    }
     console.log("Today is", day);
     return day
}
function weekdayName2(dayNum){
    let day
    let weekdayNum = dayNum%7
    switch (weekdayNum) {
        case 1:
            day = "Sunday"
            break
        case 2:
            day = "Monday"
            break
        case 3:
            day = "Tuesday"
            break
        case 4:
            day = "Wednesday"
            break
        case 5:
            day = "Thursday"
            break
        case 6:
            day = "Friday"
            break
        case 7:
        case 0:
            day = "Saturday"
    }
    console.log("Today is", day);     
    return day
}
weekdayName(3)
weekdayName2(13); 
weekdayName2(21); 

function someDays(){
    for(let i=0; i<17; i++){
        let dayNum = Math.trunc(Math.random()*365)+1
        let weekdayNum = weekdayName2(dayNum)
        if (weekdayNum == 1 || weekdayNum == 7 || weekdayNum == 0){
            console.log("Enjoy your day off!");
        } else {
            console.log("Work hard!");
        }
    }
}
someDays()

function monthName(monthNum){
    let monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    return monthNames[monthNum-1]
}
console.log("The month is", monthName(4));

function monthToDays(monthNum){
    let days;
    switch (monthNum) {
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30
            break
        case 2:
            days = 28
            break
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31
    }
    console.log("There are " + days + " days in " + monthName(monthNum));
    return days
}
monthToDays(11)

function dayToMonth(dayNum){
    let month = 1
    while (dayNum > 28){
        let days = monthToDays(month)
        dayNum -= days
        month++
    }
    console.log(monthName(month), dayNum);
    return month
}
dayToMonth(75)
dayToMonth(63)

function fullDate(dayNum){
    let dayName = weekdayName2(dayNum)
    let month = 1
    while (dayNum > 28){
        let days = monthToDays(month)
        dayNum -= days
        month++
    }
    console.log(dayName, monthName(month), dayNum);
}
fullDate(142)

function fullDate2(dayNum){
    let dayName = weekdayName2(dayNum)
    let year = 2017
    while (dayNum > 365){
        if ((year%4==0 && year%100!=0) || year%400==0){
            dayNum -= 366
        } else {
            dayNum -= 365
        }
        year++
    }
    let month = 1
    let days
    while (dayNum > 29){
        if (((year%4==0 && year%100!=0) || year%400==0) && month==2){
            days = monthToDays(month)+1
        } else {
            days = monthToDays(month)
        }
        dayNum -= days
        month++
    }
    console.log(dayName, monthName(month), dayNum, year);    
}
fullDate2(8475)
fullDate2(139947)