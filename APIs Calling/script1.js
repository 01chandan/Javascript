// // how to create async function
// async function create(){
//     return 101;
// }

// // Async await

// async function weather(){

//     let delhi = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Delhi Mausam is cool")
//         }, 1000);
//     });
    
//     let uP = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("UP Mausam is Warm")
//         }, 5000);
//     });
    
//     let d = await delhi;
//     let u = await uP;
    
//     return [d, u];
// }
