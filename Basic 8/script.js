// // Slice does not affect original array
// let arr = [1,5,3,2,6,4,4]
// console.log(arr);
// console.log(arr.slice(1, 5));

// // Splice affect original array
// let myarr = arr
// console.log(myarr);
// console.log(myarr.splice(1,2));
// console.log(myarr);

// -----------------------------------------------------

// // Try and catch 
// let arr = [1,5,6,5,2]
// try {
//     console.log(arr);
// } catch (error) {
//     alert("Please enter correct options")
// }

// ------------------------------------------

// Getter & Setter
class user {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}chandan`
    }
    set password(value){
        this._password = value
    }
}

let obj = new user("chandan.ai", 132)
console.log(obj.email);
console.log(obj.password);