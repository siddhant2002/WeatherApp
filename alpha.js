const curDate = document.getElementById("date");
const weather = document.getElementById("weather_cond");

const tempStatus = "Clouds";

const getCurrentDay = () => {
    var weekday = [];
    weekday[0] = "Mon";
    weekday[1] = "Tue";
    weekday[2] = "Wed";
    weekday[3] = "Thru";
    weekday[4] = "Fri";
    weekday[5] = "Sat";
    weekday[6] = "Sun";

    let currentTime = new Date();
    // console.log(weekday[currentTime.getDay()]);
    return weekday[currentTime.getDay()];
};


const getCurrentTime = () => {

    var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];


    var now = new Date();
    var month = months[now.getMonth()];
    // console.log(month);
    var date = now.getDate();

    var hour = now.getHours();
    var mins = now.getMinutes();

    var period = "AM";
    if(hour >= 12)
    {
        period = "PM";
        if(hour > 12)
        {
            hour -= 12;
        }
    }
    // console.log(hour+" "+period);
    if(mins < 10)
    {
        mins = "0" + mins;
    }
    return `${month} ${date} | ${hour}:${mins}${period}`;
};

curDate.innerHTML = getCurrentDay() +" | "+ getCurrentTime();

// getCurrentDay();
// getCurrentTime();