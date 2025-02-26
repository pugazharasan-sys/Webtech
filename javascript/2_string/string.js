
let str = 'hello'
let str2 = "HELLO"
let str3 = `hello`

console.log(typeof str3)

//! how to know the length of the string

console.log(str.length)

//! string methods

//!  1.toUpperCase

/* it is used to convert any string into uppercase and it will return one new string*/

let upper = str.toUpperCase();
console.log(upper);
console.log(str);

//! 2.toLowerCase

/* it is used to convert any string into lowercase and it will return one new string */

let lower = str2.toLowerCase();
console.log(lower);
console.log(str2);

//! 3.indexOf()

// it is used to return the index of the specific character.
// it will take the first occurance of the character.

console.log(str.indexOf(`l`));

//! 4.charAt()

//it is used to know the character of the specific index.

console.log(str.charAt(2));

//! 5.includes()

//it will return true if one string is present inside another string otherwise it will return false 

let str4 = "hello how are you"

console.log(str.includes('lo')) //true
console.log(str.includes('a')) //false

console.log(str4.includes("how ")); //true

//! trim()

// it is used to remove the white-spaces from both sides of the string.

let str5 = '  hi   '

console.log(str5.length)
console.log(str5.trim().length);

//! 7.split

//it will convert the string into array

let str6 = 'hello how are you'

console.log(str6.split(" "));
console.log(str.split(""));

//! 8.slice()

//it is used to extract the string from another string.
//here it will take two parameters (startIndex, endTndex).
//it will not include the endindex value. ***

console.log(str6.slice(0,4))     // hell
console.log(str6.slice(4));      // o how are you
console.log(str6.slice(-3));     // you
console.log(str6.slice(-3,-1));  // yo


console.log(str6.slice(4,1));    //it will not print any value (we should not give value from right to left)
console.log(str6.slice(-1,-3));  //it will not print any value (we should not give value from right to left)

//! 9. substring()

//it is used to extract the string from another string.
//here it will take two parameters (startIndex, endTndex).
//it will not include the endIndex value. ***

//! here if we use negative index it will be converted into 0

console.log(str6.substring(0,4));
console.log(str6.substring(4));
console.log(str6.substring(-3));

console.log(str6.substring(4,1));  //it will give (1,4)



//! 10.lastIndexOf()

//it will give the last occurance's index of the specific character.

let str7 = "hello how are you "

console.log(str7.lastIndexOf("o"));  // 15


//! 11.concat()

// it is used to combine two or more than two strings

let combinestr = str.concat(" ",str2, " how are you")

console.log(combinestr);




//!  String Interpolation

// whenever we are printing variable inside a string then we are going for string interpolation

let a = 10

let b = 20

console.log(`the value of a is ${a}`);

console.log(`the value of b is ${b}`);

console.log(`the sum of ${a} and ${b} is ${a+b}`);

