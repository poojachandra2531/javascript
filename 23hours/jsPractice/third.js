const users= [
    {userid:1,firstname:"pooja",gender:"female"},
    {userid:2,firstname:"roshni",gender:"female"},
    {userid:3,firstname:"uday",gender:"male"},
] 
for(let user of users){
    console.log(user.userid);
    console.log(user);
}

// nested destructing
const [user1,user2, user3]= users;
console.log(user1)
console.log(user2);
const[ {firstname},{gender},{userid}]= users;
console.log(firstname);
console.log(gender); 
console.log(userid);