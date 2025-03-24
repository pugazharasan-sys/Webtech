

import React from 'react'
import { myHook } from '../context/UserContext'

const User1 = () => {
    let {sim}= myHook()
  return (
    <>
        <h1>user1</h1>
        <h1>sim Card:{sim}</h1>
        <hr />
    </>
  )
}

export default User1
