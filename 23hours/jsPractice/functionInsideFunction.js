function app(){
   const myfunction= () =>{
    console.log("hello");
   }
   const add= (num1,num2) =>{
    return num1+num2;
   }
   const mul = (num1,num2) =>{
    return num1*num2;
   }
   console.log( "inside app");
   myfunction();
   console.log(add(2,3));
  console.log(mul(70,90));
}
app();

// lexical scope = defination and example
// block scope vs function block (let and const vs var)
// default parameter 
const add = (a,b=5) =>{
    return a+b;

}
const value= add(4);
console.log(value);

// rest parameter







