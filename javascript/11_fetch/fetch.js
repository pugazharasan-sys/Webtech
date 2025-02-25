

let fetchdata = fetch("https://fakestoreapi.com/products")

fetchdata
.then((data)=>{
    console.log(data);

    let jsondata = data.json()
    console.log(jsondata);

    jsondata
    .then((finaldata)=>{
        console.log(finaldata);

        finaldata.map((ele)=>{
            console.log(ele.title);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    
})
.catch((err)=>{
    console.log(err);
})






