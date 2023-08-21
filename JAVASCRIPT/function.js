function func (){
    console.log('running')
}
func();

// assign of function
  
// let stand = function walk(){
//     console.log('walking');
// };
// stand();

// // argument in function 
//  function sum(a,b){
//     let total= 0;
//     for(let value of arguments)
//     total= total+value;
//     return total;
//  }
// let ans= sum(1,2,3,45,53);
// console.log(ans);

let person = {
    firstName : 'pooja',
    lastname: 'chandra',
    get fullname (){
        return  `${person.firstName} ${person.lastname}`

    },
    set fullname(value){
        let parts= value.split(' ');
        this.firstName= parts[0];
        this.lastname= parts[1];
    }
};
// function fullname(){
    person.fullname='roshni chandra';

console.log(person.fullname);
let x=0;

for(let i=0;i<5;i++){
    x+=i;
}
console.log(x);


