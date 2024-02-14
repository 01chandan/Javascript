// // Adding 100 para
// const t1 = performance.now();
// for (let i = 0; i <100; i++) {
//     let newElement = document.createElement('p')
//     newElement.textContent = "This is Para no = " + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("Time is = " + (t2-t1) + " ms");

// // Optimizing Code here
// let t3 = performance.now();
// let newDiv = document.createElement('div')   //extra element
// for (let i = 0; i <100; i++) {
//     let newElement1 = document.createElement('p')
//     newElement1.textContent = "This is Para no = " + i;
//     newDiv.appendChild(newElement1);
// }
// document.body.appendChild(newDiv); 
// const t4 = performance.now();
// console.log("Time is "+ (t4-t3)+ " ms");


// // Code Optimizing using Document Fragment
// let fragment = document.createDocumentFragment();
// for(let i=0; i<100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = "This is para " + i;
//     fragment.appendChild(newElement)
// }
// document.body.appendChild(fragment); // 1 Reflow, 1 Reprint


