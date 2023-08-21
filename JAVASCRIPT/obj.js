// factory function

     
// function createRectangle(len,bre){

//     return  rectangle ={
//         length: len,
//         breadth: bre, 
//         draw: function(){
//             console.log('drawing ractangle');
//         }
// };
// }
// let rectobj1= createRectangle(5,6);

// constructor function==> pascal notation -> first letter of every word is capital
// this ek object ko present krta h & new se emty function deta h
// function NewOne() {
// this.length=1;
// this.breadth=2;
// this.draw= function(){
//     console.log('draw');
// }
// }

// let rectangleobj= new NewOne();

// rectangleobj.color="yellow";
// console.log(rectangleobj);
// delete rectangleobj.color;
// console.log(rectangleobj);

const src={
    value1:10,
    value2:20
};
// method1
const src2={value3:60} 
let dest1 = Object.assign({},src,src2); 
// by assign
console.log(dest1);

// method3
//  let src2= {...src};
// console.log(src2);



// method2
// let src3={
//     value1:50,
//     value2:60,
//     value3:70
// };
// let dest = {};
// for (let key in src3){
//     dest[key]=src3[key];
// }
// console.log(dest);











