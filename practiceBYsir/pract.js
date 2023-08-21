let a = ["pooja","roshni","uday"];
let b = ["shibu","sheena"];
let c = a.concat(b);
console.log(c)
let d = c.join("-")
console.log(d)
// add two array 

const str1= "pooja chandra in js"
const newstr = str1.split("");
console.log(newstr);
console.log(newstr.reverse().join(""));
// reverse array 

const str= "javascript";
function reversestr(str){
    let output= "";
    for(i=str.length-1;i>=0;i--){
      output = output+ str[i]
    }
      return output;
       
    
    }

console.log(reversestr(str));
// reverse without reverse function 


let newData = prompt("enter number");
let variable = 0;
for(i=0;i<=newData;i++){
   variable= variable+i;
   console.log(i)
}
console.log(variable)


// factorial &fabonnices only difference in multiple and addition with i=1(factorial),i=1(fabonnices)







