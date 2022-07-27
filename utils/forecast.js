const request = require('request');

const forecast = (address, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=9b3a50d0f6edeb7b93c27f544fe33ae5&query='+address+'&units=m';
    request({url: url, json: true}, (error, response, body)=>{
        if(error){
            callback("Unable to connect to forecast api", undefined)
        }else if(typeof body.error != 'undefined'){
            callback(body.error.info, undefined)
        }else{
            callback(undefined, body.current)
        }
    })
}

module.exports = forecast