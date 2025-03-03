


//! 1.How to access any element

//? document.getElementById()

let p1 = document.getElementById("p1")

console.log(p1);

let con1 = document.getElementById("con1")

console.log(con1);


//! 2. how to know what is present inside the element

let con2 = document.getElementById("con2")

console.log(con2);

//! i>   innertext

console.log(con2.innerText);

//! ii>  innerHTML

console.log(con2.innerHTML);



let p2 = document.getElementById("p2")

p2.innerText = 'hi'

// con2.innerText = `hello how are you`

con2.innerHTML = '<h2> I am from js file </h2>'




//! 3. how to apply css

let heading3 = document.getElementById("heading3")

heading3.style.color= "gold"
heading3.style.backgroundColor = "black"

//! 4. how to add/remove class

let con4 = document.getElementById("con4")

con4.classList.add("dark")
con4.classList.remove("hello")

console.log(con4.classList);


//! 5. how to create element

let para = document.createElement("h1")

para.innerText = "I am paragraph from js file"

para.style.color = "green"

// con4.append(para)
// con4.prepend(para)
// con4.after(para)
con4.before(para)





let subjects = ["html","css","js","java"]

subjects.map((ele)=>{
    
    let li = document.createElement("li")
    li.innerText = ele

    let ol = document.getElementById("ol")

    ol.append(li)
})