const http = require("http");
const fs = require("fs");
const requests = require("requests");


const file = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal, OrgVal) => {
    const temperature = tempVal.replace("{tempval}",orgVal.main.temp);
    temperature = temperature.replace("{temp_minval}",orgVal.main.temp_min);
    temperature = temperature.replace("{temp_maxval}",orgVal.main.temp_max);
    temperature = temperature.replace("{country}",orgVal.sys.country);
    temperature = temperature.replace("{location}",orgVal.name);
    return temperature;
}


const server = http.createServer((res,req) => {
    if(req.url === "/")
    {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e629cfc4509cc1281896984be6fe4340")
        .on("data", (chunkData) => {
            const objData = JSON.parse(chunkData);
            const arr = [objData];
            // console.l1og(arr[0].main.temp);
            const real = arr.map((val) => replaceVal(file, val)).join("");
            res.write(real);
        })
        .on("end", (err) => {
            if(err)
            {
                return console.log("connections closed due to errors");
            }
            res.end();
            // console.log("end");
        });
    }
});

server.listen(3000,"127.0.0.1");