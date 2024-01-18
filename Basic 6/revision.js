let name = function() {
    console.log("Chandan")
}

// let a = 5;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let a = {value:5};
// let b = a;

// a.value++;
// console.log(a);
// console.log(b);

// for(let key in rectangle){
//     console.log(key, rectangle[key])
// }

// if('length' in rectangle){
//     console.log("Present")
// }else{
//     console.log("Absent")
// }


//for in loop
let rectangle = {
    length: 5,
    breadth: 6
}
let copyClone ={}

for(let key in rectangle){
    copyClone[key] = rectangle[key]
}
console.log(copyClone);