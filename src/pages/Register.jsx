import React, { useState, useSyncExternalStore,useEffect, useRef } from 'react'
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useSearchParams } from 'react-router-dom';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Register = () => {
  const navigate = useNavigate();

  const [userFname, setUserFname] = useState('')
  const [userLname, setUserLname] = useState('')
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
useEffect(() => {
  if (erros.global) {
    const timer = setTimeout(() => {
      setErrors({ global: '' });
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [erros.global]);

const submitHandler = (e)=>{
    e.preventDefault()
    if(!USER_REGEX.test(userFname)){
      setErrors({global:'invalid first name'})
      return
    }
    if(!USER_REGEX.test(userLname)){
      setErrors({global:'invalid last name'})
      return
    }
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
    console.log({userFname,userLname,userPhone,userEmail,userPassword})
    console.log(userFname)
    console.log(userLname)
    console.log(userPhone)
    console.log(userEmail)
    console.log(userPassword)

    setUserFname('')
    setUserLname('')
    setUserPhone('')
    setUserEmail('')
    setUserPassword('')
    navigate('/login')
}
 
const handelCancel=()=>{
  navigate('/');
}
  return (
    
    <div className='flex items-center justify-center py-20 inset-0 bg-black/50 backdrop-blur-sm'>
      <form  onSubmit={(e)=>{submitHandler(e)}}>
      <div className='flex items-center flex-col bg-white w-[600px] h-[700px]  text-black border-1 rounded-[20px]'>
        <div className="flex justify-center mt-4">
        <img
          src="./images/pro1.png"
          alt=""
          className="h-20 w-20 rounded-full object-center border-2 border-blue-500"
        />
      </div>

          
        
        <div className='flex flex-col  gap-3 w-full p-10 text-lg'>
        <h2>First name</h2>
        <input value={userFname} onChange={(e)=>{setUserFname(e.target.value)}} className='flex border-1  border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="text" placeholder='what is your name?'/>
        <h2>Last name</h2>
        <input value={userLname} onChange={(e)=>{setUserLname(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="text" placeholder='Please enter your surname?'/>
        <h2>Phone</h2>
        <input value={userPhone} onChange={(e)=>{setUserPhone(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="number" placeholder='ex: 1234567891?'/>
        <h2>Email</h2>
        <input value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="email" placeholder='not complecery'/>
        <h2>Password</h2>
        <input value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="text" placeholder='password'/>
        <div className='flex ml-3 mt-6 p-2 gap-10 items-center justify-center'>
        <button  type='submit' className='bg-blue-500 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-blue-200'>Submit</button>
        <button onClick={handelCancel} type='button' className='bg-gray-300 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-gray-500'>Cancel</button>

        </div>
        </div>
    </div>
    </form>
     {erros.global && <div className='bg-white ml-10 mb-[500px] w-[200px] h-[50px] flex items-center justify-center rounded-2xl border-1 border-blue-500 text-black text-center'>{erros.global}</div>  }
    </div>
  )
}

export default Register