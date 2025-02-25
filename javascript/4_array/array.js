 
let arr = [10,"hello",true,30]

console.log(arr);


//! hwo to get the length of the array

console.log(arr.length);

//! Array Methods


//! 1.push()

// it is used to add element at the end of the array.

arr.push("bye")
console.log(arr);

//! 2.pop()

// it is used to remove element from the end.

let names = ['pugazh','ganesh','arun']

names.pop()

console.log(names);

//! 3.unshift()

// it is used to add element at the starting of the array.

names.unshift("dhawan")

console.log(names);

//! 4.shift()

// it is used to remove the element from the beginning of the array.

let fruits = ["mango","banana","apple"]

fruits.shift()

console.log(fruits);

//! 5.indexOf()

//it is used to get the index of the given element

let subjects = ['html','css','js','java']

console.log(subjects.indexOf('css'));

//! 6.includes()

// it is used to check whether the given element is present or not in the array.

console.log(subjects.includes("html"));

//! 7.concat()

//it is used to combine two or more than two arrays.

let arr1 = [10,20]
let arr2 = [80,90]

let combineArr = arr1.concat(arr2);
console.log(combineArr);

//! 8.join

// it is used to convert array to string.

let characters = ['h','e','l','l','o']

console.log(characters.join(""));

//! 9.reverse()

//it is used to reverse the array.

console.log(characters.reverse());


//! 10.slice()

//it is used to extract the data from the array
//it accept (startIndex,endIndex)
//it will not include the endIndex value


let data = [10,20,30,40]

console.log(data.slice(1,3)); // it will return 20,30






//! 11.splice()

//it will modify the original array.
//it will take 3 parameters (startIndex, count, replacemantValue)

//             0  1  2  3  4  5

let numbers1 = [10,20,30,40,50,60]

numbers1.splice(2,2)

console.log(numbers1);


let numbers2 = [10,20,30,40,50,60]

numbers2.splice(2,2,"how")

console.log(numbers2);

let numbers3 = [10,20,30,40,50,50]

numbers3.splice(2,0,"hi")

console.log(numbers3);



//? higherOrder array methods

//! foreach()

// it is higherorder array method and it is used to traverse the array.
// it has three parameter(element, index, array)
// foreach is the only method which doesn't return anything

let arr3 = [10,20,30,40,50,60]

arr3.forEach((ele, index, array)=>
    console.log(index,ele,array)
)


//? foreach method doesn't return anything
// let element = arr3.forEach(()=>{
//     return ele
// })

// console.log(element);







//! print elements greater than 30.(in array format)

// input: [10,20,30,40,50,60]
// output: [40,50,60]

let value = [10,20,30,40,50,60]
let res =[]

value.forEach((ele)=>{
    if(ele>30){
        res.push(ele)
    }
})

console.log(res);


//! filter()

//it will return the value but condition in return value is not working  

let greater = arr3.filter((ele)=>{
    return ele>30
})

console.log(greater);


//! add 100 to all the elements and return one array

// input: [10,20,30,40,50,60]
// output: [110,120,130,140,150,160]


//? by using forEach
let input1 = [10,20,30,40,50,60]

let resu = []

let add100 = input1.forEach((ele)=>{
    resu.push(ele + 100)
})

console.log(resu);

//! map()

let add_100 = input1.map((ele)=>{
    return ele+100
})

console.log(add_100);



//! add all the elements of the array

let sum = 0


arr3.map((ele)=>{
    sum = sum + ele
})

console.log(sum);


//! reduce()

let add = arr3.reduce((accumulator,ele)=>{
    return accumulator + ele
},0)                                 //assigning accumulator value if value is not given it will take first value as default value

console.log(add);



//! sort()


let unsortedArr = [90,4,1,5]

let asc = unsortedArr.sort((a,b)=>{
    return a - b
})

console.log(asc);

let des = unsortedArr.sort((a,b)=>{
    return b - a
})

console.log(des);