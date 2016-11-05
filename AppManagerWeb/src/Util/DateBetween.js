
import Moment from "moment"

let DateBetween = function(startDate, endDate, returnArray=false) {

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let distance = endDate - startDate;

    // if (distance < 0) {
    //   return "count down date expired";
    // }

    var mDateStart = Moment(startDate)
    var mDateEnd = Moment(endDate)
    var duration = mDateEnd.diff(mDateStart,'minutes');

    if (duration <= 15) {
      return -1;
    }

    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    var day_description;
    var hour_description;
    var min_description;
    var sec_description;

    if(days == 1) {
      day_description = ' d ';
    } else {
      day_description = ' d ';
    }

    if(hours == 1) {
      hour_description = ' hr ';
    } else {
      hour_description = ' hr ';
    }

    if(minutes == 1) {
      min_description = ' min ';
    } else {
      min_description = ' min ';
    }

    if(seconds == 1) {
      sec_description = ' sec';
    } else {
      sec_description = ' sec';
    }

    let between = days + day_description;
    between += hours + hour_description;
    between += minutes + min_description;
    between += seconds + sec_description;

    if(returnArray)
    {
        return Array.from([days, hours, minutes, seconds])
    }else{
        
        return between;
    }

}

module.exports = DateBetween;
