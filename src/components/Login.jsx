import React from 'react'
import { useState } from 'react'

function Login() {
    const [data,setData]=useState({
        email:"",password:""
    })
    function handleChange(event){
        const{name,type,value,checked}=event.target
        setData(a=>({...a,[name]:value}))
        console.log(data)

    }
  return (
    <div>
        <input type="text" onChange={handleChange} name='email' placeholder='email' />
        <input type="text" onChange={handleChange} name='password' placeholder='pass' />
  
    </div>
    )
}

export default Login