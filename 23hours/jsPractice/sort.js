const numbers = [5,9,14,35,87];
const result = numbers.sort((a,b)=>{
    return a+b;
})
console.log(result);

const number = [5,9,14,35,87];
const results = numbers.sort((a,b)=>{
    return b-a;
})
console.log(results);


const usercart= [
    { productId:1, productName: "cellphone", price: 12000},
    { productId:2, productName: "laptop", price: 50000},
    { productId:3, productName: "fridge", price: 70000},
    { productId:2, productName: "shirt", price: 500},
    { productId:3, productName: "chocolate", price: 70},

 ]
  const lowToHigh = usercart.slice(0).sort((a,b)=>{
    return a.price-b.price

 })

 console.log(usercart);
 console.log(lowToHigh);


