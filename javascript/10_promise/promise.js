


let p = new Promise((resolve, reject)=>{

    // resolve("I am resolve")
    reject("I am reject")
})

// console.log(p);

p.then((a)=>{
    
})




let p1 = new Promise((resolve,revoke)=>{

    // resolve("I am resolve1")
    revoke("I am revoke1")
})


let p2 = new Promise((resolve,revoke)=>{

    // resolve("I am resolve2")
    revoke("I am revoke2")
})


let p3 = new Promise((resolve,revoke)=>{

    resolve("I am resolve3")
    // revoke("I am revoke3")
})


let p4 = new Promise((resolve,revoke)=>{

    resolve("I am resolve4")
    // revoke("I am revoke4")
})


//!promise.any()
Promise.any([p1,p2,p3,p4])
.then((a)=>{
    console.log(a);
})
.catch((e)=>{
    console.log(e);
})

//!promise.all()

Promise.all([p1,p2,p3,p4])
.then((a)=>{
    console.log(a);
})
.catch((e)=>{
    console.log(e);
})

//! promise.allSettled()

Promise.allSettled([p1,p2,p3,p4])
.then((a)=>{
    console.log(a);
})
.catch((e)=>{
    console.log(e);
})

//! promise.race()

Promise.race([p1,p2,p3,p4])
.then((a)=>{
    console.log(a);
})
.catch((e)=>{
    console.log(e);
})