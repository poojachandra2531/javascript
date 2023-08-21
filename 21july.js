console.log("HELLO");
// const keyword
// let keyword
// rules naming variable
// intro variable
// hello world
// how to execut js
// string indexing
// useful string method(trim,to upper case,to lower case,slice, )
// primitive data type(string, number, undefined,null(error of js),bigInt,boolean,)type of ,number to string,string to number
// string concatenation
// templates strings
// opertor
// truthy and falsy("",null,undefined,0,NaN) values
// truthy is  everythng accpet falsy  false||pooja console result pooja 

// if else
// ternary operators
// and or operators
// nested if 
// while loop 
// if else 
// break  and continue keyword
// do while loop
// Array used to contain a list of items
// reference data type 
// array method (push pop shift unshift)
// primitive(copy create bnti h copied by value and also function call me aapka copy bnta h {pass by value bolte h isko}) vs reference data type(address pass krta h copy nhi bnti copied by address ) 
// clone Array, concat,spread operator
// airthmatic operator
// assignment operator 
// opeerator precedence (use bracket )
Object
// factory function
// constructor function
//  nature of object dynamic isme hum easily new add key word add kr skte simply by . or delete k use krk
// constructor property object bana kaise h ye batata h 
// function are object(2no k property /method ko access kr skte h)
// find property in Object
// object cloning(iteration ,assign let dest= object.assign ({},src),spread(let ={...src};))


// Garbage Collection 
// (find the variable and const which are not in use and it deallocate the memory ) we have no control on this ..runs on background 

// Math(inbuilt object)
// String(multple function)
// template literal 
// date and time 

array
// declear
// insertion of array 
// searching
// callback function (object )
// function arrow function 
// remove element {pop,begin,splice}
// emptying an array 
// combining and slicing array 
// spread opeator to combine and copy
// joining array 







// comparative opeartor(loose and strict equality)
// ternary operator(conditon)
// for loop in array
// use const to creat array 
// while loop in array 
// for of loop and for in loop 
// array destruction
// object (reference type data) multiple variable are linked in anyway 
// loop in Object
// computed property 
// spread opeartor in Array and object
// object destruction
// object inside array
// function declaration
// funtion expression 
// fonction inside function
// lexical scope 
// block vs function 
// default parameter
// rest parameter 
// array method (for each ,map,filter,reduce,sort,find,every)
// prompt()
// confirm()
// alert()
// iterables and array like object 
// map data structure(just like object but have different advance property)
// dynamic typing  js code m hum easily num likh k string dal skte h aisa c m nhi hota tha 
















// != vs !==
// use of == and ===
// let first="pooja js";
// console.log(first.slice(0,7));
// let age=25;
// console.log(typeof age)
// age=age+"";
// console.log(typeof(age))
// let str = "pooja";
// str =  +"pooja";
// console.log(typeof(str) );
let old = "rosh";
old=Number(old);
console.log(typeof (old));

let new1= 17;
new1= String(new1);
console.log(typeof new1)

let str1 = "pooja"
let str2 = "roshni1"
let fullname = str1  + " "+ str2;
console.log(fullname);

let str3 = "25"
let str4 = "19"
let fullname2 = str3  + " "+ str4;
console.log(fullname2);


let fullname3 = +str3  + +str4;
console.log(fullname3);

// let aboutme = "my name is  "+ str1 + " and my age is "+ str3;
// console.log(aboutme); 
let aboutme = `my name is ${str1} and my age is ${str3}` ;
console.log(aboutme);

let n1 = 12;
if(n1%2===0){
    console.log("even");

}else{
    console.log("odd");
}
let age =3;
let drink = age >=5 ? "coffee": "milk";
console.log(drink);

// and and or oprators
// let Name = "pooja";
// let Age = "26";
// if(Name[0]=== "p" && Age>25){
//     console.log("correct");

// }else{
//     console.log("wrong");
// }

// or oprator
// let Name = "Pooja";
// let Age = "24";
// if(Name[0]=== "p" || Age>25){
//     console.log("correct");

// }else{
//     console.log("wrong");
// }


// Nestest if else

let winningnum = 20;
let userGuess = +prompt("Guess a number");
console.log(userGuess);
if(userGuess === winningnum){
    console.log("Your answer is correct");

}else{
    
if(winningnum>19){
    console.log("too high");
    

    }else{
        console.log("too low");
    }
}





