import Box from "./components/Box"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


let App = ()=>{
  return(
    <div>
      <Navbar/>

      <div className="section1">
        <h1> Welcome to my Webpage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto.</p>
      </div>

      <div className="section2">
        <Box productName={"Mobile"} price={25000} imageSrc={"https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        <Box productName={"Tv"} price={40000} imageSrc={"https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        <Box productName={"Laptop"} price={50000} imageSrc={"https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600"}/>

      </div>

      <Footer/>

    </div>
  )
}

export default App