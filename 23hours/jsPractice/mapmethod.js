const numbers= [5,7,9,11,13];
const squre = function(number){
    return number*number;
}
const result= numbers.map(squre);
console.log(result);

// 2nd example

const number2 = [3,5,7,9,11];
 const cube =function(number,index){
    return ` index= ${index}, ${number*number*number}`;
}
const result1 = number2.map(cube);
console.log(result1);

// 3rd example


const users =[
    {firstname: "pooja",lastname: "chandra", age:"25"},
    {firstname: "roshni",lastname: "chandra", age:"23"},
    {firstname: "uday",lastname: "yadav", age:"25"}
    
]

const firstnameOne = users.map((emp)=>{
    return emp.firstname;
});
console.log(firstnameOne);
