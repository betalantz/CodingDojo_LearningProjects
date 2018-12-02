function dayOfProgrammer(year) {
    let date;
    // Julian calendar
    if (year < 1918) {
        if (year % 4 == 0) {
            date = 256 - 244
        } else {
            date = 256 - 243
        }
        return `${date}.09.${year}`;
    }
    // Transition year
    if (year == 1918) {
        date = 256 - (243 - 13)
        return `${date}.09.${year}`;
    }
    // Gregorian calendar
    if (year > 1918) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            date = 256 - 244
        } else {
            date = 256 - 243
        }
        return `${date}.09.${year}`;
    }
}
console.log(dayOfProgrammer(2017))
console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(1800))
console.log(dayOfProgrammer(1918))