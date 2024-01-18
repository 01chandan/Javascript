let arr = [1,5,2,3,4]

console.log(arr)
console.log(arr.indexOf(2))

var data = [
    {id: 1, name: 'chandan'},
    {id: 2, name: 'Karan'},
]

// Call back function
let fun = data.find(data=> data.name === 'chandan');

console.log(fun);

//Removing Element
let arr1 = [1,6,5,4,2,3]
//pop, splice, shift

//Combining Array
let first = [1,2,3]
let second = [4,5,6]

let combine = first.concat(second)
console.log(combine)

// filter Array
let number = [1,2,-1,-2]

let filter = number.filter(value=> value>=0)
console.log(filter)
console.log(filter.reverse())

// Mapping in Array
let map = filter.map(value=> "Name " + value)
console.log(map)

// Mapping in objects
let some = [10,20,-50,-20]

let objmap = some
            .filter(value => value>=0)
            .map(num=>{num1 : num});
console.log(objmap)