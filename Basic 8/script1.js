// // functions
// function sum(a,b){
//     console.log(a+b)
// }

// sum(10,20,20,10)

// // This is not an array it is an object
// function sum(){
//     let total = 0
//     for(let value of arguments){        //this is possible using argument Object, it accept multiple arguments or paramenters
//         total = total + value
//     }
//     console.log(total)
// }

// sum(10,50,10,20,40,10,20)

// (...) Rest Operator (It handled arguments and convert into array)
function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5,6,7,8,9,10);


