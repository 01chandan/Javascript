// Template Literal
let sentance =
`this is my first 
name`;
console.log(sentance);

//Date in JavaScript    
let date = new Date("Nov 12 2023 08:50");
console.log(date);

//Array Concepts

let arr = [1,2,3,4];
console.log(arr);

arr.push(10);
console.log(arr);

arr.pop(2);
console.log(arr);

// we want to check if number is exist in array
if(arr.indexOf(3)!= -1)
{
    console.log("Persent");
}

console.log(arr.includes(2));
console.log(arr.includes(2,2));

// Creating Array of Objects
let arrObject = [
    {id : 1, name: "Chandan"},
    {id : 2, name: "Karan"}
]