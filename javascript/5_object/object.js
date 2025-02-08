
let pen={
    brand:'camlin',
    price:100,
    color:["red","black","green"],
    work:function(){
        console.log("i can write");
    }
}

//! how to access

console.log(pen.brand.toUpperCase());
console.log(pen.price);

pen.work()

//! how to modify

pen.price = 50

console.log(pen.price);

//! how to add new value

pen.type = "dot"

console.log(pen);


//! how to delete

delete pen.type

console.log(pen);





//! methods

//! 1.object.keys()

// it will return one array where it will store all the keys.


let keys = Object.keys(pen)

console.log(keys);


//! 2.Object.values()

// it will return one array where it will store all the values.

let values = Object.values(pen)

console.log(values);


//! 3.Object.entries()

//it will return one nested array , where all the key and value pairs are also will be stored in array

let key_value=Object.entries(pen)

console.log(key_value);



//! 4.Object .freeze()

//it will make the object frozen
//here we can't add/modify/delete element

let ob={
    ob_name:'mobile',
    ob_price:6000
}

console.log(ob.ob_name);
console.log(ob.ob_price);
Object.freeze(ob) //here it is frozen

ob.color='black' //cannot add any element
ob.ob_price=9000 //cannot modify the element
delete ob.ob_price //cannot delete the element

console.log(ob);



//! 5.isFrozen()

//it will check whether the object is frozen or not

console.log(Object.isFrozen(ob));

console.log(Object.isFrozen(pen));


//! 6.seal()

//it will make the object sealed
//we cannot add and delete object
//but we can modify the object in seal 

let ob2 ={
    ob_name:'laptop',
    ob_price:200000
}
console.log(ob2);

Object.seal(ob2)

ob2.ob_price=300000

console.log(ob2);



//! 7.isSealed()

//it will check whether the object is sealed or not

console.log(Object.isSealed(ob2));


//! 8.hasOwnProperty()

//it is used to check whether the property/key is present or not.

console.log(ob2.hasOwnProperty("ob_price"));

console.log(ob2.hasOwnProperty("color"));







let person ={
    pname:"abc",
    age:10,
    address:{
        city:'chennai',
        pin:12344
    },
    work:function() {
        console.log("i am function");
    }

}

console.log(person.address.city);
person.work()