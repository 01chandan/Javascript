function fun(){
        this.length = 2,
        this.breadth = 4,
        function fun1(){
        console.log("Hello Mini");
        }
}

let newObject = new fun();
newObject.zIndex = 25

console.log(newObject);
delete newObject.zIndex;
console.log(newObject);

//Pass by Value
// let num = 10;
// function inc(num){
//         num++;
// } 

// inc(num);
// console.log(num);

// Pass by Reference
let num = { value: 10 }

function inc(num){
        num.value++;
} 

inc(num);
console.log(num);