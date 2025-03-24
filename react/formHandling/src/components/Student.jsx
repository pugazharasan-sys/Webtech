

import React, { useState } from 'react'

const Student = () => {

    let [name,setName]= useState("")
    let [ph, setPh] = useState("")
    let [pass, setPass] = useState("")



    let handleNameChange = (e)=>{
        // console.log(e.target.value)
        setName(e.target.value)
    }


    let handlePhno =(e)=>{
        setPh(e.target.value)
    }

    // let handlePass = (e)=>{
    //     setPass(e.target.value)
    // }

    
    let handleSubmit= (e)=>{
        e.preventDefault()
        console.log({name, ph, pass})
        console.log("form submitted...")

        setName("")
        setPh("")
        setPass("")
    }

  return (
    <>
      <form action="" className='frm' onSubmit={handleSubmit}>

        <label htmlFor="s1">Student Name</label>
        
        <input type="text" placeholder='enter name'onChange={handleNameChange} id='s1' value={name}/>

        <label htmlFor="s2">Student Ph no</label>
        
        <input type="tel" placeholder='enter number' onChange={handlePhno} id='s2' value={ph}/>

        <label htmlFor="s3">password</label>
        
        <input type="password" placeholder='enter password' /*onChange={handlePass}*/ onChange={(e)=>setPass(e.target.value)} id='s3' value={pass}/>

        <button>signup</button>

      </form>
    </>
  )
}

export default Student
