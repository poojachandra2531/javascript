const number1 = [3,5,7,9,11];
// function result(num1){
//     return num1%2 !==0
// }
const ans = number1.every((num1)=>num1%2 !==0);
console.log(ans)

// example 2

const usercart= [
    { productId:1, productName: "cellphone", price: 12000},
    { productId:2, productName: "laptop", price: 50000},
    { productId:3, productName: "fridge", price: 70000},
    { productId:2, productName: "shirt", price: 500},
    { productId:3, productName: "chocolate", price: 70},

 ]

 const ans1= usercart.every((price2)=>{
    return price2.price<1000000;

 })
 console.log(ans1);