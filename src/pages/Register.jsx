import React, { useState, useSyncExternalStore,useEffect, useRef } from 'react'
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useSearchParams } from 'react-router-dom';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/



const Register = () => {
   {/*focus on user input*/}
  const userRef = useRef()
    {/*focus on error*/}
  const errRef = useRef()

{/*setting username */}
  const [username, setUsername] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)
  {/*setting password */}
  const [pwd, setPwd] = useState('')
  const [validPwd, setvalidPwd] = useState(false)
  const [PwdFocus, setPwdFocus] = useState(false)
   {/*setting matched password */}
  const [matchPwd, setMatchPwd] = useState('')
  const [validMatchPwd, setValidMatchPwd] = useState(false)
  const [MatchPwdFocus, setMatchPwdFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

{/*setting fouce on user*/ }
  useEffect(()=>{
    userRef.current.focus()
  },[])
  {/*username check*/ }
  useEffect(()=>{
    const result = USER_REGEX.test(username)
    console.log(result)
    console.log(username)
    setValidName(result)
  },[username])
{/*Password check*/ }
  useEffect(()=>{
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    console.log(pwd)
    setvalidPwd(result)
    const match = matchPwd===pwd
    setValidMatchPwd(match)
  },[pwd,matchPwd])

 useEffect(()=>{
    setErrMsg('')
  },[username,pwd,matchPwd])


  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    setUsername('')
  }
  const navigate = useNavigate();
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
        <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className='flex border-1  border-gray-200 rounded-[10px] w-full h-[40px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-grey-300 transition duration-300' type="text" placeholder='what is your name?'/>
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
    </form>
    </div>
  )
}

export default Register