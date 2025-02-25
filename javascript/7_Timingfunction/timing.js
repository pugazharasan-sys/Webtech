let msg = ()=>{
    console.log("good afternoon everyone");
    
}

// msg()

//! setTimeout

setTimeout(msg,5000)




let wish = ()=>{
    console.log("Happy Birthday 🎂🎂");
    
}

setTimeout(wish,3000)

let timeout = setTimeout(()=>{
    console.log("I am Settimeout");
    
},4000)


console.log("hello");

//! ClearTimeout

clearTimeout(timeout)

//! setInterval

let sorry = ()=>{
    console.log("I am very sorry 😭😭🙏🙏");
    
}

setInterval(sorry,1000)

//! clearInterval

clearInterval(sorry)


//! after 3 time we need to stop ????????

let about = setInterval(()=>{
    console.log(" I am innocent..");
    
},1000)

setTimeout(()=>{
    clearInterval(about)
},3000)

//!  