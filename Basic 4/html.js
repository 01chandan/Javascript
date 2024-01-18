// For in loop refers key of object value but for of loop give us values of object value

let newObject = {
    name : "Chandan",
    age : 22,
    branch : 'BCA'
}

for(let stdData in newObject){
    // console.log(stdData);
    console.log(`${stdData} = ${newObject[stdData]}`);  //concatenation
}

let rectangle = {
    length : 5,
    breath : 10
}

// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

for(let key of Object.entries(rectangle)){
    console.log(key);
}
if('agee' in newObject){
    console.log('Present');
}else{
    console.log('Absent');
}
