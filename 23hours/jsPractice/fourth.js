function sumTwoNumber(number1, number2)
{
    return  number1+ number2;
}
const returnvalue = sumTwoNumber(9,5);
console.log(returnvalue);

// undefined and undefined additon is NaN
// 2nd example

function isEven(number){
    if(number%2 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(17));

// 3rd example

function isEven1(number){
    if (number%2===0);
}
console.log(isEven(7));

// 4th example
function string(array,target){
    for(i= 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
            return -1;
        

    
} 
const newArray = [2,5,8,9,15]
const find = string(newArray, 15);
console.log(find);

