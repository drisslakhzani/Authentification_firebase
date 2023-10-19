import React from 'react'
import { useState } from 'react'
import { app } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Login() {
    //fire base auth
    const auth = getAuth();

    //input data
    const [data,setData]=useState({
        email:"",password:""
    })
    const handleChange=(event)=>{
        const{name,type,value,checked}=event.target
        setData(a=>({...a,[name]:value}))
        console.log(data)
    }
    const handleSubmit=()=>{
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((response)=>{
            console.log(response.user)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
  return (
    <div>
        <input type="text" onChange={handleChange} name='email' placeholder='email' />
        <input type="text" onChange={handleChange} name='password' placeholder='pass' />
        <button className="bg-slate-600"  type='button' onClick={handleSubmit} >click</button>
  
    </div>
    )
}

export default Login