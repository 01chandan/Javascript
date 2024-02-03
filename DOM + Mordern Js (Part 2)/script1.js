// // Prevent Event Actions
// const links = document.querySelectorAll('a');
// const thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     alert("Chala ja Bhai")
// })


// // Avoid to many Events
// let myDiv = document.createElement('div');
// function paraStatus(event){
//     console.log('Para' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus)

// for(let i = 0; i <=100; i++) {
//         let newElement = document.createElement('p');
//         newElement.textContent = 'This is Para ' + i;

//         myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#art');
// element.addEventListener('click', function(event){
//     console.log('Print = '+ event.target.textContent);
// })

// Handle Perfectly using if Condition (Best Practice)
let element = document.querySelector('#art');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('Print = '+ event.target.textContent);
    }
})