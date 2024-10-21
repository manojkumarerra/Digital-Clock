// Digital Clock

function showTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var session ="pm";
    if (hours==0) {
        hours = 12;
    }
    if(hours>12) {
        hours = hours - 12;
         session = "am"; 
    }

    hours = (hours < 10)?"0"+hours:hours;
    minutes = (minutes < 10)?"0"+minutes:minutes;
    seconds = (seconds < 10)?"0"+seconds:seconds;

    document.getElementById("DigitalClock").innerHTML = hours +":"+minutes+":"+seconds+" "+ session;
    setTimeout(showTime, 1000)
}
showTime();