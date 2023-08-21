const sumThree = (num1,num2,num3) =>{
return num1 + num2 +num3;
}
console.log(sumThree(7,8,9));

const isEven = (number) => {
    return number%2===0;
}
const check = isEven(6);
console.log(check);

const string = (array,target)=>{
    for (let i=0;i<array.lenght;i++){
        if(array[i]===target){
            return i;
        }
    }
    
    return -1;

    }

    const myArray= [1,2,3,4,5,6,7]
     const find = string(myArray, 6);
     console.log(find);
