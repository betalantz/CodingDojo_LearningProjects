var HOUR = 12;
var MINUTE = 45;
var PERIOD = "AM";
if(MINUTE<=30){
    var approx="just after";
    var newHour=HOUR;
}
else{
    approx="nearly";
    newHour=HOUR+1;
}
if(MINUTE=15){
    approx="quarter past";
}
if(MINUTE=30){
    approx="half past";
}
if(MINUTE=45){
    approx="quarter 'til";
    newHour=HOUR+1;
}
if(newHour=13){
    newHour=1
}
if(PERIOD=="AM"){
    var meridian="in the morning";
}
else{
    meridian="in the evening";
}
console.log("It's", approx, newHour, meridian,".");