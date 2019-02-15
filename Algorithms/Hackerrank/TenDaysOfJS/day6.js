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

function getMaxLessThanK(n, k) {
    let max = 0
    for (let a = 1; a < n; a++) {
        for (let b=a+1; b<=n; b++) {
            let r = a & b
            if (r < k && r > max){
                max = r
            }
        }
    }
    return max
}