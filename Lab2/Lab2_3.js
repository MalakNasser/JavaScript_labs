function convertTo12HourClock(hour) {
  if (hour >= 0 && hour <= 23) {
    let amPm;
    if (hour < 12) {
      amPm = "AM";
    } else {
      amPm = "PM";
    }
    let convertedHour;
    if (hour % 12 === 0) 
      convertedHour = 12;
    else {
      convertedHour = hour % 12;
    }

    return `${convertedHour} ${amPm}`;
  } else {
    return "Invalid hour input";
  }
}

var hour = prompt("Enter the hour:");
alert(convertTo12HourClock(hour));
