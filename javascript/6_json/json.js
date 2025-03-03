

let ob = {
    ob_name:'pen',
    price:20,
    color:"red"
}

console.log(ob);

//!  JSON.stringify()

// it will convert the javascript object into json
// typeof will be string

let jsonData = JSON.stringify(ob)
console.log(jsonData);

//!   parse()

// it will convert the json into object

let concerted = JSON.parse(jsonData)

console.log(concerted);



