import ProfileCard from "./components/ProfileCard"
import Hello from "./components/Hello"


let App = ()=>{

  let student = {
    sname:"pugazh",
    sage:21,
    phno:9983748321
  }

  return(
    <div >

      <h1>hello</h1>

      <div className="con">

        <ProfileCard productName={"mobile"} price={20000}/>
        <ProfileCard productName={"tv "} price={35000}/>
        <ProfileCard productName={"laptop"} price={50000}/>
      </div>

      <Hello stu={student}/>
      
      

    </div>
  )
}

export default App