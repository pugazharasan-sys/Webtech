  // //!   async await

let getData = async ()=>{

    try{

        let fetcheddata = await fetch("https://fakestoreapi.com/products")

        let data = await fetcheddata.json()

        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}


getData()