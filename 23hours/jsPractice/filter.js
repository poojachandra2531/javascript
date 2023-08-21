const numbers =[2,5,8,9,14,57];
// const isEven = function(number){
//     return number%2==0;
// }
const result = numbers.filter((number)=>{
    return number%2==0;
});
console.log(result);