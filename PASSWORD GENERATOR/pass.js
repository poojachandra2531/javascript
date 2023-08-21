const inputSlider= document.querySelector("[data-len-slider]");
const displaynum= document.querySelector("[data-length]"); 
const displayPassword= document.querySelector("[dataPassword-Display]"); 
const datacopied= document.querySelector("[data-copy]");
const copiedmsg= document.querySelector("[data-copiedMsg]");
const upperone = document.querySelector("#upper-case");
const lowerone= document.querySelector("#lower-case");
const numbers= document.querySelector("#number-case");
const symbolic= document.querySelector("#symbol-case");
const generatorone= document.querySelector(".generator");
const allCheckedd= document.querySelectorAll("input[type=checkbox]");
const indicator= document.querySelector("[data-indicator]");

let password = "";
let passLength = 7;
let checkcount  = 1;
handleSlider();
// set the color of strength circle 
function handleSlider(){
    inputSlider.value= passLength;
    displaynum.innerText =passLength;
}

function setIndigator(){
    indicator.style.backgroundcolor = color;
    // shadow 
}




