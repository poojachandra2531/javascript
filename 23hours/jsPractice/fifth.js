// callback function
function myfunct(){
    console.log("hello")

}
function myfunct2(callback){
    console.log("inside func 2");
    callback();


}
myfunct2(myfunct);

// function one(){
//     console.log("hello world");
// }
function two(name){
    console.log("Hii there");
    console.log(`${name}`);
    

}
function three(f1){
     console.log("whattsup")
     f1("pooja");

}
three(two);

// function returning function

function num1(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const ans= num1();
ans();

