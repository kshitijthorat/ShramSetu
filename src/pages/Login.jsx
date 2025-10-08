import React, { use, useEffect, useRef } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const navigate = useNavigate();

  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [erros, setErrors] = useState({global:''})
  const userRef = useRef(null)
  
 
useEffect(()=>{
  if(userRef.current){
    userRef.current.focus();
  }
},[])  

  const handelLogin=(e)=>{
  e.preventDefault()

  if(!PHONE_REGEX.test(userPhone)){
      setErrors({global:'invalid phone number'})
      return
    }
    if(!EMAIL_REGEX.test(userEmail)){
     setErrors({global:'invalid email'})
      return
    }
    if(!PWD_REGEX.test(userPassword)){
      setErrors({global:'password must contain 8 to 24 characters which include uppercase and lowercase letters, a number and a special character' })
      return
    }

    setErrors({global:'form submitted successfully'})
    
    console.log(userPhone)
    console.log(userEmail)
    console.log(userPassword)


    setUserPhone('')
    setUserEmail('')
    setUserPassword('')
    navigate('/userHome')
}

  
const handelCancel=()=>{
  navigate('/');
}
  return (
    <div>
         <div className='flex items-center justify-center py-30 inset-0 bg-black/50 backdrop-blur-md'>
        <form onSubmit={(e)=>{handelLogin(e)}}>
      
      <div className='flex items-center flex-col bg-white w-[500px] h-[600px]  text-black border-1 rounded-[20px]'>
        <div className="flex justify-center mt-4">
        <img
          src="./images/pro1.png"
          alt=""
          className="h-20 w-20 rounded-full object-cover border-2 border-blue-500"
        />
      </div>

          
        
        <div className='flex flex-col  gap-3 w-full p-10 text-lg'>
        <h2>Phone</h2>
        <input value={userPhone} onChange={(e)=>{setUserPhone(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="number" placeholder='ex: 1234567891?' required/>
        <h2>or</h2>
        <h2>Email</h2>
        <input value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="email" placeholder='not complecery'/>
        <h2>Password</h2>
        <input value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="password" placeholder='password'/>
        <div className='flex ml-3 mt-6 p-2 gap-10 items-center justify-center'>
        <button type='submit' className='bg-blue-500 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-blue-200'>Login</button>
        <button onClick={handelCancel} type='button' className='bg-gray-300 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-gray-500'>Cancel</button>
        </div>
        </div>
    </div>
    </form>
    </div>
    {erros.global && <div className='bg-white ml-10 mb-[500px] w-[200px] h-[50px] flex items-center justify-center rounded-2xl border-1 border-blue-500 text-black text-center'>{erros.global}</div>  }
    </div>
  )
}

export default Login