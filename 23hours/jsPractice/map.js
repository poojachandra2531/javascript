const person = new Map();
person.set('firstname','pooja');
person.set(1,'one')
// it is like object but in this we add 1 as number and we also add here for of loop 
// console.log(person.get(1));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key,typeof key);
// }
// for(let [key1, value]  of person){
// console.log(key1,value);
// }

// // example1

// const person2 = new Map[['firstname','pooja'],['age','18']]

function index(a1,a2){
    let a1Lower = a1.toLowerCase();
    let a2Lower= a2.toLowerCase();
    return a1Lower.indexOf(a2Lower);

    }

    