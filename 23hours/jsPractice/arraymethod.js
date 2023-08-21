// example 1.
const numbers = [5,6,7,8,9];
function multiply(number, index){
    console.log(`${number}*2=${number*2}`);
    // console.log("index number is" ,index );
}
// for(i=0;i<numbers.length;i++){
//     // console.log();
//     multiply(numbers[i],i);
// } for each k help se hume for loop use nhi krna pdega


numbers.forEach(multiply);

// const num= [1,2,3,4,5,6,7,8,9,10];
// function fact(number){
//     console.log(` ${num[i]*num[i+1]}`);
// }
// for(i=0;i<num.length;i++){
// fact(num[i],num[i+1]);
// }
const new2 = [1,2,3,4,5];
new2.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`)
});


const new3 = [5,8,0,7,3];
new3.forEach(function(number){
    console.log(number*3);

}
)


const users =[
{firstname: "pooja",lastname: "chandra", age:"25"},
{firstname: "roshni",lastname: "chandra", age:"23"},
{firstname: "uday",lastname: "yadav", age:"25"}

]
for(let user of users){
    console.log(user.lastname);
}
users.forEach(function(user){
    console.log(user.firstname)
}
)

// map method 






