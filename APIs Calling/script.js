// // Promises
// let admin = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Print After 5 sec")
//     },5000)
//     // resolve(101)
//     reject(new Error("Reject hi gya bro"));        //Explicitly we occur error
// })

// console.log("function ke bhar hu bhai me")

// // then & catch method
// admin.then((value) => console.log(value))
// admin.catch((value) => console.log("Error Occur"))

// // In one line then & Catch
// admin.then((value) => console.log(value), (value)=> console.log("Error aa gya bro"))

// Important Concept using Promises & then() Method

// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Promise no 1")
//     },2000);
//     resolve(true);
// })
// let output = promise1.then(()=>{
//     let promise2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Promise no 2")
//         },4000);
//         resolve("Resolve Done");
//     })
//     return promise2;
// })

// output.then((value)=>{
//     console.log(value);
// })