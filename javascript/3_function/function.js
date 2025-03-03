

//! Named Function

function display()
{
    console.log("I am display function");
}

display();


//! function with parameter

function msg(userName){
    console.log(userName);
}

msg("rohit")

//! function with return

function add(a,b)
{
    return a+b;
}

let sum = add(20,30)
console.log(sum);


//! anonymous function

//the function that does not have any name

//? syntax :   function(){
//?                      }

// now we have to store this function in one variable,,because we cannot call them without name

let add2 = function(a,b)
{
    console.log("I am function with expression");
    console.log(a+b);
}

add2(10,50)


//! Arrow function

let multiply = (a,b)=>
{
    console.log(a*b);
}

multiply(10,200)





//! nested function

let outer =()=>
{
    let a = 10;
    
    let inner = ()=>
    {
        let b = 20

        console.log(a+b);
    }
    inner()
}

outer()



//! Lexical Scopping ***

// when we are taking nested function , inner function can take the property of outer function but outer function can't take the property of inner function it is called lexical scopping


//! Higher order function and callback function

//any function that takes another function as parameter , that is called as Higher order Function.

//the function we are sending as parameter to the higher order function is called a callback function

let bye = ()=>{
    console.log("bye....");
}

let hello = (msg)=>{
    // console.log(msg);//it'll just print the full method
    msg()
}

hello(()=>{
    console.log("how are you");
});



//! IIFE 
//Immediate Invoke Function Expression


(function()
{
    console.log("I am IIFE");
})()














//! Task



let palin = (value)=>
{
    let i=0;
    let j=value.length-1;
    while(i<j)
    {
        if (value.charAt(i)!=value.charAt(j)) 
        {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

let str10 = "mom";
let res = palin(str10);
if (res==true) {
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}