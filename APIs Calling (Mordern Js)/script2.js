// // Fetch APIs
// async function fA(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let result = await content.json();
//     console.log(result);
//     // console.log(content);
// }
// fA()

// // Featch Reasource creation
// async function content(){
//     let user = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Asyn await here',
//           body: 'Chandna hu me',
//           userId: 101,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };

//       let element = await fetch('https://jsonplaceholder.typicode.com/posts', user);
//       let output = element.json();
//       return output;
// }

// content();
