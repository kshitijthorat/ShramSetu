import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const handelLogin=(e)=>{
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

    
  }
  const navigate = useNavigate();
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
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="number" placeholder='ex: 1234567891?' required/>
        <h2>or</h2>
        <h2>Email</h2>
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="email" placeholder='not complecery'/>
        <h2>Password</h2>
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="password" placeholder='password'/>
        <div className='flex ml-3 mt-6 p-2 gap-10 items-center justify-center'>
        <button type='submit' className='bg-blue-500 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-blue-200'>Login</button>
        <button onClick={handelCancel} type='submit' className='bg-gray-300 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-gray-500'>Cancel</button>
        </div>
        </div>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Login