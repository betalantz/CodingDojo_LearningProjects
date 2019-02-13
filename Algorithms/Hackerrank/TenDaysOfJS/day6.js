function getDayName(dateString) {
    let dayName;
    dayName = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date(dateString))
    return dayName;
}
function getDayName2(dateString) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date(dateString).getDay()]
}
const dates = ['10/11/2009', '11/10/2010']
console.log(getDayName(dates[0]));
console.log(getDayName(dates[1]));
console.log(getDayName2(dates[0]));
console.log(getDayName2(dates[1]));