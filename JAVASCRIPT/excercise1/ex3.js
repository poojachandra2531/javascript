

// function eventFunction(event) {
//     console.log(event);
// }


// document.addEventListener('click',eventFunction);
// // document.removeEventListener('click',eventFunction);


// const link= document.querySelectorAll('a')
// const linkThird= link[2];
// linkThird.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("maza aaya");
// })

// let myDiv= document.createElement('div');
// for(let i=1;i<=100;i++){
//     let newElement= document.createElement('p');
//     newElement.textContent="this is para"+i;

//     newElement.addEventListener('click',function(event){
//         console.log("enter paragraph");

//     })
//     myDiv.appendChild(newElement);

// }
// document.body.appendChild(myDiv)

// by this we get large memory so we have to use function outside the document


// let myDiv= document.createElement('div');
// function data(){
//     console.log('print value ');
// };
// for(i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="this is paragraph"+ i;
//     newElement.addEventListener('click',data)
// myDiv.appendChild(newElement);

// }
// document.body.appendChild(myDiv);

// by this we cannot specific about paragraph for this we have to add event listener on div and use target 

// let myDiv=document.createElement('div');
// myDiv.addEventListener('click',data,)
// function data(pooja){
//     console.log('para'+ pooja.target.textContent)
// }
// for(let i=1;i<=100;i++){
// let newElement= document.createElement('p');
// newElement.textContent= 'paragraph is '+i;
// myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv)


// let meraPromise1= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside  1');
//     },5000);
//     resolve(223);
// });
// meraPromise1.then(value=> {console.log(value)});

// console.log('pehla');

let wada1= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('first');
    },2000);
    resolve(true);
})


let output = wada1.then(() => {
    let wada2= new promise(function(resolve, reject){
        setTimeout(()=> {
            console.log('second');
        },3000);
        resolve("solved wada2");
    })
return wada2;
})

output.then((value)=>
    console.log(value));