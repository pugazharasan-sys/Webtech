

import React from 'react'
import { myHook } from '../context/UserContext'

const User3 = () => {

    let {type} = myHook()

  return (
    <>
      <h1>user3</h1>
      <h1>type: {type}</h1>

      <hr />
    </>
  )
}

export default User3
