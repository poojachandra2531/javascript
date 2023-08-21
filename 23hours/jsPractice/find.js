const array1 =["dog" , "cat", "fish"];
const array2 = ["rabbit","monster"];
function isLength(string){
    return string.length===6;
}
 const ans = array2.find(isLength);
 console.log(ans);

//  example 2
const users = [
    {userid:  1,  customerName:"pooja" },
    {userid:  2,   customerName:"roshni"},
    {userid: 3, customerName:"uday" },
    {userid:  4,  customerName:"shinchan" },
    {userid: 5,  customerName:"phines" }

]
const answer = users.find((user)=>{
    return user.userid===5;
})
console.log(answer);

// function custname(name){
//     return name.customerName.length==5;
// }
const answer2 = users.find((name)=>{
    return name.customerName.length==5;
}

);
console.log(answer2);






