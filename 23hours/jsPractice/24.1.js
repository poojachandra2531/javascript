
// if else statement example 
// temp = 5;

// if(temp <0){
//     console.log("extremly cold");
// } else if(temp<15){
//     console.log("it is cold outside");
// }else if(temp<25){
//     console.log("wheather is okk!");
// }else if(temp<35){
//     console.log("it is hot today");
// }else if(temp<45){
//     console.log("too hot");
// }else{
//     console.log("turn on AC");
// }

// switch statement

// let day = 10;
// switch(day){
//     case 0:
//         console.log("today is sunday");
//         break;
//     case 1:
//         console.log("today is monday");
//         break;
//     case 2:
//          console.log("today is tuesday");
//             break;
//    case 3:
//         console.log("today is wednesday");
//         break;
//    case 4:
//         console.log("today is thursday");
//         break;
//     case 5:
//         console.log("today is friday");
//         break; 
//     case 6:
//         console.log("today is saturday");
//         break;
//   default:
//         console.log("invaild");
//         break;            
// }

// while loop

// let i= 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);

// for loop
// for(let i = 0; i<=9; i++){
//     console.log(i);
// }

// let total =0;
// let num= 100;
// for(let i=0; i<=num;i++){
//     total= total + i;
// }
// console.log(total);

// break and continue

// for(i=0;i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }
// for(i=0;i<=10; i++){
//     if(i==6){
//         break;
//     }
//     console.log(i);
// }

// let i =10;
// do{
//     console.log(i);
//     i++
// }while(i<=9)

// Array(object)(ordered list )any type of datatype can be stored in array
// , "banan"];let i = ["apple","grapes"
// console.log(i[2])
// i[1]= "mango";
// console.log(i);

// array method push
// let fruit = ["apple","banana","grapes"];
// console.log(fruit);
// // fruit.push("mango", "kiwi")
// // console.lo(fruit);

// // pop is used to remove in array list from right end 
// let poppedfruit =fruit.pop();(for all pop shift unshift )
// // fruit.pop();
// console.log("popped fruit is ", poppedfruit);

//push and pop are fast. use fruit.unshift to add any element in starting of array and fruit.unshifft to remove element from starting

let array1 = ["i1","i2"];
// let array2 = [].concat(array1);
// console.log(array1===array2);
// array2.push("item3")
// console.log(array2)
// let array2= array1.slice(0).concat(["i3"]);
// console.log(array2)

// add item through spread 

// let array2 =[...array1, "i3","i4","i5"];
// console.log(array2)

let fruit = ["apple", "banana", "grapes"]
console.log(fruit);
let fruit1 = [];
 
for(i=0; i<fruit.length; i++){
   fruit1.push(fruit[i].toUpperCase());
}
console.log(fruit1)











