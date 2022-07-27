const http = require('http');

const forecast = (address)=>{
    const url = 'http://api.weatherstack.com/current?access_key=9b3a50d0f6edeb7b93c27f544fe33ae5&query='+address+'&units=m';
    const req = http.request(url, (res) =>{
       // res.setEncoding('utf8');
       let data = '';

        res.on('data', (d) => {
            //console.log("data", JSON.parse(d));
            data = data + d.toString();
        });

        res.on('end', () => {
            console.log("data", JSON.parse(data));
        });
    }).on('error', (e)=>{
        console.error(e);
    });

    req.end();
}

forecast("brampton");

