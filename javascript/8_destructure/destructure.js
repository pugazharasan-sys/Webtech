

// let ob = {
//     sname : 'pugazharasan',
//     age : 21 ,
//     isStudent : true
// }

// console.log(ob.sname);

// //! object destructure

// let {sname,age,isStudent}=ob

// console.log(sname);

// //! array destructure

// let arr =[10,20,30,40,50,60]

// let [a,b,c,d]= arr

// console.log(a);

// console.log(b);



// //! 

// let hello=()=>{
//     console.log(a);


// }

// hello(10)





//!


let ob = {
    sname:"rahul",
    age:10,
    phNo:9090909090
    }
    console.log(ob.sname)
    console.log(ob.age)
    console.log(ob.phNo)


    // ! Object Destructure
    let {sname,phNo,age} = ob
    console.log(sname)
    console.log(age)
    console.log(phNo)


    // ! array destructure
    let arr = [ 100,200,300,500,600,700,800,900]
    let [a,b,c] = arr
    console.log(a) // 100
    console.log(b) // 200
    console.log(c) // 300


    // ! rest parameter
    // The rest parameter is used to group the remaining
    // elements into an array.
    // It collects "the rest" of the arguments that were not
    // explicitly specified.
    // The rest parameter is represented by three dots (...)
    let display = (a , b, ...c)=>{
    console.log("I am display function")
    console.log(a)
    console.log(b)
    console.log(c)
    }
    display(10 , 20, 30,40,50,60,70)


    // ! spread operator
    // The spread operator in JavaScript allows to expand an
    // array, object, or iterable into individual elements.
    // It is often used to copy, merge, or pass elements.
    // The spread operator is represented by three dots (...)
    let arr2 = [10,20,30]
    let copy = arr2 //! shallow copy
    console.log(copy)
    copy.push(300)
    console.log(copy) // [10,20,30,300]
    console.log(arr2) // [10,20,30,300]


    // ! shallow copy
    // A shallow copy of an object is a new object that is a
    // copy of the original, but it only copies the references of
    // nested objects instead of creating new instances.
    // This means that if the original object contains another
    // object as a property, changes to the nested object in the
    // copy will affect the original and vice versa.

    
    //! deep copy
    // A deep copy creates a completely independent clone of
    // the original object, including all nested objects. Changes
    // to the copied object do not affect the original.
    // Deep copy we can perform by using spread operator or by
    // using JSON method.
    let arr3 = [10,20,50]
    let copy2 = [...arr3]
    let copy3 = JSON.parse( JSON.stringify(arr3))
    copy3.push("hello")
    copy2.push(500)
    console.log(copy2)
    console.log(arr3)
    console.log(copy3)
