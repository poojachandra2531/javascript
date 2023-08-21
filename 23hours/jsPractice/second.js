console.log("hello");
const fruit = ["apple","mango"];
const fruit2 =[];
// // console.log(fruit);
// let i =0;
// while(i<fruit.length){
// fruit2.push(fruit[i]);
// i++;
    
// }
// console.log(fruit2);
// for(let fruits of fruit)
// {
//     fruit2.push(fruits.toUpperCase());
// }
// console.log(fruit2)


// for(let index in fruit){

// fruit2.push(fruit[index]);
// }
// console.log(fruit2)

// const value = ["val1","val2"];
// let v1= value[0];
// let v2 = value[1];
// console.log("v1");
// console.log("v2");
// let[myvar1,myvar2] = value;

// console.log("v1");
// console.log("v2");
// const value = ["val1"];
// let[myvar1,myvar2] = value;

// console.log(myvar1);
// console.log(myvar2);

// const value =["v1","v2","v3","v4","v5"];
// let [ val1,val2,...NewArray]=  value;
// console.log("value of val2", val2);
// console.log("value of val1", val1);
// console.log("value of NewArray", NewArray);

// object 


// key value pair 
const person = {name:"pooja",age:22};
console.log(person);
// here name is key and : is value and pooja is a String and object do not have index
console.log(person.name);
// method to add new key pair in existing object by 
person.gender = "female";
console.log(person["age"]);
// another way to write in console in Object is type se likhte jab hamre pass key 2 word k ho suppose "date of birth" qki . use krk ager hum likhte h aise keys ko to error aata h 

// loop in Array

// for in loop
// example of for in loop

const person1 = {
    name: "roshni",
       age: "23",
       "person hobbies":["music","singing","dancing"]
}
for(let key in person1){
    console.log(person1[key]);}
// for(let key in person1){
//     console.log(`${key}: ${person1[key]}`);
// }    
for(let key in person1){
    console.log(key," : ", person1[key]);
}

// object.keys method  return m array deta hai check krne k liye (Array.isArray m is value ko pass kea skte h ek let ya const m value pass karake jisse true aayega)
// example of this case

// for of Object v hota h isme

// computed properties

const key1 = "obj1";
const key2 = "obj2";
const value1 = "value3";
const value2 = "value4";
const obj = {
    [key1]: value1,
    [key2]: value2
}
console.log(obj);

// SPREAD OPRATOR
// ...array likh k spread krte h array ko for example
const array1 = [1,2,3];
const array2 = [4,5,6];
const Newarray = [...array1,...array2];
console.log(Newarray);

// spread in Object
const obj1={
    key1: "value1",
    key2: "value2"

};
const obj2= {
    key3: "val",
    key4: "val4"

};
const Newobj= {
    ...obj1,...obj2
};
console.log(Newobj);

// if ager 2no mai hai ek hi key word like key1 2no object m hai to console m second ki value jati h



// object destructure
const band ={
    bandname: "BTS",
    famousSong: "dynamite",
    year: 2020,

};
const{bandname,famousSong, ...restprops}= band;

console.log(bandname);
console.log(famousSong);
console.log(restprops);








 








