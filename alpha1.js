const http = require("http");
const fs = require("fs");
const requests = require("requests");

// eslint-disable-line no-eval
const file = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal, orgVal) => {
    /* eslint-disable no-eval */
    let temperature = tempVal.replace("{%tempval%}",(Math.round(orgVal.main.temp - 273) *10) /10);
    temperature = temperature.replace("{%temp_minval%}",(Math.round(orgVal.main.temp_min - 273) *10) /10);
    temperature = temperature.replace("{%temp_maxval%}",(Math.round(orgVal.main.temp_max - 273) *10) /10);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%tempstas%}",orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req,res) => {
    /* eslint-disable no-eval */
    if(req.url === "/")
    {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8dd77d4bf0e53756137c50783356fa0f")
        .on("data", (chunkData) => {
            let objData = JSON.parse(chunkData);
            let arr = [objData];
            let real = arr.map(val => replaceVal(file, val)).join("");
            res.write(real);
            console.log(real);
        })
        .on("end", (err) => {
            if(err)
            {
                return console.log("connections closed due to errors", err);
            }
            res.end();
        });
    }
});

server.listen(3000,"127.0.0.1");