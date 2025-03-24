

import React from 'react'
import { myHook } from '../context/UserContext'

const User2 = () => {

    let {price}=myHook()
  return (
    <>
      <h1>user2</h1>
      <h1>price: {price}</h1>

      <hr />
    </>
  )
}

export default User2
