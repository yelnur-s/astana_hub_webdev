
// Promise


// function getData() {
//    return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//            resolve(10)
//         }, 2000)
//    }) 
// }


// async function testPromise() {
//     const a = await getData();
//     console.log(a)
// }


// function getData(cb) {

//     setTimeout(() => {
//         cb(10)
//     }, 2000)
    // return new Promise((resolve, reject) =>{
    //      setTimeout(() => {
    //         resolve(10)
    //      }, 2000)
    // }) 
// }
 
// function testPromise() {
//     getData(function(data){
//         console.log(data)
//     });
    // console.log(a)
// }


// testPromise();


// class Arr {
//     private asd;


//     int forEach() {
//         return 200;
//     }

// }



// Array.prototype.customForEach = function(cb) { 
//     for(let i = 0; i < this.length; i++) {
//         cb(this[i])
//     }
// }



// const arr = [1, 2, 3, 4, 5];



// arr.customForEach(function(item) {
//     console.log(item)
// })

(async function() {
    
    // const data = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=70e82c944c434a2e86193406210712&q=Almaty&days=7&aqi=no&alerts=no');
       
    console.log()


    // await axios.get('http://api.weatherapi.com/v1/forecast.json?key=70e82c944c434a2e86193406210712&q=Almaty&days=7&aqi=no&alerts=no')

    // function showAlert(text) {
    //     alert(text)
    // }

    // let a = 0;
    // const inter = setInterval(() => {
    //     document.write(a)
    //     a++;
    // }, 2000);



    // setTimeout(() => {
    //     clearInterval(inter)
    // }, 10000);


    const cities = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: "Kazakhstan"
    })

    console.log(cities)

})()




// document.getElementById("div").style.height = "200px"
// document.getElementById("div").style.width = "200px"
// document.getElementById("div").style.backgroundColor = "#000"

