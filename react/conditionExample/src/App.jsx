

//rafce
// import React from 'react'
// import Signup from './components/Signup'
// import Login from './components/Login';


//! conditional rendering using if else statements
// const App = () => {

//   let accountexist = false;

//   if(accountexist){
//     return(
//       <Login/>
//     )
//   }
//   else{
//     return(
//       <Signup/>
//     )
//   }
      //  inside jsx we cannot write if else so that we can use ternary operator
//   return (
//     <>
//     </>
//   )
// }

// export default App


//! conditional rendering using ternary operator

import React from 'react'
import Home from './components/Home'
import Login from './components/Login';

const App = () => {

  let isLoggedin = true;

  let a = 10;
  return (
    <>
      {
        isLoggedin ? <Home/> : <Login/>
      }

      {
        a>5 ? <h1>{a} is greater than 5</h1> : <h1>{a} is less than 5</h1>
      }
    </>
  )
}

export default App
