// async function abc(){
//    return 7;
// }

// async function utility(){

// let delhimausam = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("delhi mai bahut garmi hai");
//     },5000);
// });
// let hydramausam = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hydrabad is cool");
//     },6000);
// });

// let dm =  await delhimausam;
// let hm =  await hydramausam;

// return[dm,hm]


// }

// async function utility(){
// let content =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
// let output = await content.json();
// console.log(output)
// }
// utility();

// async function helper(){

// let option= {
//     method: 'POST',
// body: JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1998,
// }),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
// };


// let content=  await fetch('https://jsonplaceholder.typicode.com/posts', option);
// let response = content.json();
// return response;
// }


// async function utility(){
//     let ans=  helper();
   
//     console.log(ans);
// }
// utility();


function outer(){
  let a = 5;
  function inner1(){
    let a= 7;
    console.log(a);

    function inner2(){
      console.log(a);
      inner1()
    }
  }
}
let ans= outer();
console.log(ans)