import { Fragment } from "react"


const App = ()=>{

  let hello = (e)=>{
    console.log(e.target)
    alert("hello, this is event")
  }


  let msg = (userName)=>{
    alert(`welcome ${userName}`)
  }


  return(
    //we can use <> or <fragment>
  <>
    <h1> Event Example</h1>

    <p>Lorem ipsum dolor sit amet.</p>
  
    <button onClick={hello}> Click me</button>

    <button onClick={()=>hello()}> Click me2</button>

    <button onClick={()=>msg("pugazh")}> Click me3</button>
  </>
  )
}

export default App