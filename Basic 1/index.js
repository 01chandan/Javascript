console.log('RAM RAM Bhai Sara ne');
console.log("Hello everyone");

// object Creation
const rectangle={
    length:1,
    breath:2,

    // add behaviour means functions (Medthod)
    draw: function() {
        console.log("Draw kr le bhai");
    }
};

//factory Function
function createObject(){
    
    return rectangle = {
        length : 2, 
        breadth : 5,

        fun: function(){
            console.log("creating object function");
        }
    }
};

//Access Factory Function
let object1 = createObject();

//seconf example of Factory Fucntion
function secondFunction(length, breadth){

    return rectangle = {
        length,
        breadth,

        call() {
            console.log("Second Function Print");
        }
    }
};

let object2 = secondFunction(5,2);

//Constructor Function
function Rectangle(){
    this.length = 5;
    this.breath = 10;

    this.small = function(){
        console.log("Small Function call");
    }
}

//creating object
let newObject1 = Rectangle();