const person = new Map();
person.set('firstname','pooja');
person.set('age',7);
person.set(1,'one');
console.log(person);
// console.log(person.firstname);
// maps are act like object but there are differnce in them it does not the upper line

console.log(person.get('firstname'));
console.log(person.get(1));
for(let key of person.keys()){
    console.log(key,typeof key);
}
