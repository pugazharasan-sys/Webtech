

import React, { useMemo, useState } from 'react'

const App = () => {

  let [count,setCount] = useState(0)

  let [num,setNum] = useState(0)

  let multiply = (num)=>{
    console.log("i am inside multiply function")

    for(let i=1;i<10000000;i++){
      
    }
    return num*2
  }

  // let res = multiply(num)

  let res = useMemo(()=>{
    return multiply(num)
  },[num])

  return (
    <div className='main'>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> count</button>
        <input type="number" placeholder='enter number' onChange={(e)=>setNum(e.target.value)}/>
        <h1>{res}</h1>
    </div>
  )
}

export default App
