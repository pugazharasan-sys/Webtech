

let fetchdata = fetch("https://fakestoreapi.com/products")

fetchedata
.then((data)=>{
    // console.log(data);

    let jsondata = data.json()
    // console.log(jsondata);

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




// //!   async await

// let getData = async ()=>{

//     try{

//         let fetcheddata = await fetch("https://fakestoreapi.com/products")

//         let data = await fetcheddata.json()

//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }


// getData()

