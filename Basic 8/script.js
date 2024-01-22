//Ques: Can we call function at the top of declaration?
//Ans: Yes! using Hoisting which is already done by javascript Engine

// function call
name();

// function declaration
function name(){
    console.log("chandan Naam hai mera bhai");
}

// Function assignement
let wood = function call(){
    console.log("This is a Furniture")
}
wood();
