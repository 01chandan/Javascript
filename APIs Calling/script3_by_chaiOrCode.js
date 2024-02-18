// // Create promise
// const promise = new Promise((resolve, reject)=>{
//     // do an async task
//     // DB Calls, network calls etc.
//     setTimeout(() => {
//         console.log("First Function executed")
//         resolve()  //it is compulsory 
//     }, 2000);
// })

// // then is connecte using resolve method
// promise.then((resolve, reject)=> {
//     console.log("then Function call");
// })

// // without storing promises into another variable
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("This is Second promise")
//         resolve();
//     }, 5000);
// }).then(function(){
//     console.log("2nd Promise then method call")
// })

// // Promise with objects
// let promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Object is sending")
//     }, 5000);
//     resolve({name:"Chandan", pass: 123})
// })
// promiseThree.then(function(data){
//     console.log(data);
// })