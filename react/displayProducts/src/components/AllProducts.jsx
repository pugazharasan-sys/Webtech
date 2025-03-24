

import React, { useEffect,useState } from 'react'

const AllProducts = () => {

    let [data,setData] = useState([])

    let getData = async()=>{

        let res = await fetch('https://fakestoreapi.com/products')

        let products = await res.json()

        setData(products)

    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <>
      
       <div className="main">

            {
                data.map((e)=>{
                    return <div className='card' key={e.id}>

                        <img src={e.image} alt="" />

                        <h3>{e.title.slice(0,21)}</h3>

                        <h3>₹ {e.price}</h3>

                        <h3>rating: {e.rating.rate}</h3>
                    </div>
                })
            }

       </div>

    </>
  )
}

export default AllProducts
