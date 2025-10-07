import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
const handelCancel=()=>{
  navigate('/');
}
  return (
    
    <div className='flex items-center justify-center py-20 inset-0 bg-black/50 backdrop-blur-sm'>
      
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
        <input className='flex border-1  border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="text" placeholder='what is your name?'/>
        <h2>Last name</h2>
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="text" placeholder='Please enter your surname?'/>
        <h2>Phone</h2>
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="number" placeholder='ex: 1234567891?'/>
        <h2>Email</h2>
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="email" placeholder='not complecery'/>
        <h2>Password</h2>
        <input className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="email" placeholder='password'/>
        <div className='flex ml-3 mt-6 p-2 gap-10 items-center justify-center'>
        <button type='submit' className='bg-blue-500 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-blue-200'>Submit</button>
        <button onClick={handelCancel} type='submit' className='bg-gray-300 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-gray-500'>Cancel</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Register