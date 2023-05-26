const curDate = document.getElementById("date");
const weather = document.getElementById("weather_cond");

const tempStatus = "{%tempstas%}";

if(tempStatus === "Sunny")
{
    weather_cond.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
}
else if(tempStatus === "Clouds")
{
    weather_cond.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea'></i>";
}
else if(tempStatus === "Rainy")
{
    weather_cond.innerHTML = "<i class='fas fa-rain' style='color: #44c3de'></i>";
}


const getCurrentDay = () => {
    let weekday = [];
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

    const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];


    let now = new Date();
    let month = months[now.getMonth()];
    // console.log(month);
    let date = now.getDate();

    let hour = now.getHours();
    let mins = now.getMinutes();

    let period = "AM";
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