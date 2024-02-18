let countValue = document.querySelector('#counter');

let decrement = () =>{
    //Get count value
    let value = parseInt (countValue.innerText);
    // Value increment by 1
    value = value - 1;
    // set count value
    countValue.innerText = value;
};

let increment = ()=>{
    // Get count value
    let value = parseInt (countValue.innerText);
    // Value increment by 1
    value = value + 1;
    // Set count value
    countValue.innerText = value;
};
