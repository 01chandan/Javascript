let num = 3
let newNum = -num

console.log(newNum);

// Memory store in Stack section (Primitve data Type)
let pdata = "karan@gmail.com"
let pdata1 = pdata

// Memory store in Heap Section (Non-Primitive data type)
let myNum = {
    email : "chandan@Gmail.com",
    pass : 1234,
};

myNum.email = "kumar@gmail.com"
let chandan = myNum.email

console.log(myNum.email);
console.log(chandan);