

import React from 'react'
import User1 from './components/User1'
import UserContext from './context/UserContext'
import User2 from './components/User2'
import User3 from './components/User3'

const App = () => {
  return (
    <>
      
      <UserContext>

        <User1/>

        <User2/>

        <User3/>

      </UserContext>

    </>
  )
}



export default App