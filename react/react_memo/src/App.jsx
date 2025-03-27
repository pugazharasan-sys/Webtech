

import React from 'react'
import { useState } from 'react'
import Hello from './assets/hello'

const App = () => {

  let [count, setCount] = useState(0)
  return (
    <>
       <button onClick={()=>setCount(count+1)}>count {count}</button>

       <hr />

       <Hello/>
    </>
  )
}

export default App
