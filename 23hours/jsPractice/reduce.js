const numbers = [15,17,2,7,6];
const result = numbers.reduce((accumulator, currentvalue)=>{
    return accumulator*currentvalue;

})
console.log(result) ;

// 2nd example

const usercart= [
   { productId:1, productName: "cellphone", price: 12000},
   { productId:2, productName: "laptop", price: 50000},
   { productId:3, productName: "fridge", price: 70000},
]
const result2 = usercart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;

},0)
console.log(result2);