

import React, { useState } from 'react'

const App = () => {

  let [num,setNum] = useState(0)

  let increase = ()=>{
    setNum(num+1)
  }

  let decrease = ()=>{
    setNum(num-1)
  }


  let [sname,setName] = useState("")

  let [isval,setVal] = useState(true)
    
  let changeName = ()=>{
    setVal(!isval)
    setName(
      isval ? "pugazh" : "arasan"
    )
  }
  
/////////////////////////////////////////////////////////////

  let [ans,setAns] = useState(0)

  let increment =()=>{
    setAns(ans+1)
  }

  let incrementtt = ()=>{
    setAns((pre)=>{
      return pre+1
    })
  }
  

  return (
    <>
      <h1>{num}</h1>

      <button onClick={increase}>Increase</button>
      
      <button onClick={decrease}>Decrease</button>

      <button onClick={()=>setNum(num+1)}>Increase</button>

      <button onClick={()=>setNum(num-1)}>Decrease</button>
      
      <h1>{sname}</h1>

      <button onClick={changeName} >change name</button>

      <hr />

      <h1>{ans}</h1>

      <button onClick={increment}>Increase1</button>
      
      <button onClick={()=>setAns(ans+1)}>Increase2</button>

      <button onClick={incrementtt}>Increase3</button>

      <button onClick={()=>{setAns((pre)=>{return pre+1})}}>Increase4</button>

    </>
  )
}

export default App
