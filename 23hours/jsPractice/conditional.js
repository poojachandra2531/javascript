var a =10;
var b = 2;
var c = 7;
if(a>b&&a>c){
    console.log("a is gretest number");
}else if(b>a&&b>c){
    console.log("b is greatest number");
}else if(c>a&&c>b){
    console.log("c is greatest number");
}


let n = 5;
function fact(n){
    var ans= 1;
    if(n==0)
        return 1;
    
    for(let i=2;i<=n;i++)

        ans= ans * i;

    
    return ans;
    
}
console.log(fact(n));

