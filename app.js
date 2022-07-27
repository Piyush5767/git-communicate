const forecast = require('./utils/forecast')
const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=9b3a50d0f6edeb7b93c27f544fe33ae5&query=brampton&units=m';
request({url: url, json: true}, (error, response, body)=>{
console.log("error", error);
console.log("response", response.body.current);
console.log("body", body);
})

// // // const geoCode = (name, callback)=>{
// // //     const data = {
// // //         lat: 0,
// // //         long: 0
// // //     }

// // //     setTimeout(()=>{
// // //         callback(data);
// // //     }, 2000)
// // // }

// // // geoCode("testing", (data)=>{
// // //     console.log("data", data);
// // // })


// // const add = (a, b, callback)=>{
// //     setTimeout(()=>{
// //         callback(a+b)
// //     }, 2000)
// // }

// // add(3, 5, (sum)=>{
// //     console.log("sum", sum);
// // })

// // forecast("brampton", (error, response)=>{
// //     if(error){
// //         console.log("error", error);
// //     }else{
// //         console.log("response", response);
// //     }
// // })

// const product = {
//     label: 'twillo',
//     price: 55,
//     location: 'india',
//     currency: 'rupees'
// }

// const {label, currency} = product
// console.log(label, currency);

// //changing the const name

// const {label: productLabel, price} = product
// console.log("product label", productLabel, price)

// const dataExtract = ({label, location})=>{
//     console.log("label", label);
//     console.log("location", location);
// }

// dataExtract(product);
