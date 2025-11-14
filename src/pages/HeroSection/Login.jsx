import React, { use, useEffect, useRef } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import GridMotion from '../../components/GridMotion';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z0-9-_]{2,23}$/;
const gradientItems = [
  <div key="grad-1" className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-300"></div>,
  <div key="grad-2" className="w-full h-full bg-gradient-to-tr from-sky-400 to-blue-500"></div>,
  <div key="grad-3" className="w-full h-full bg-gradient-to-bl from-blue-600 to-sky-500"></div>,
  <div key="grad-4" className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-400"></div>,
  <div key="grad-5" className="w-full h-full bg-gradient-to-tr from-blue-300 to-sky-200"></div>,
  <div key="grad-6" className="w-full h-full bg-gradient-to-bl from-sky-500 to-blue-600"></div>,
  <div key="grad-7" className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-500"></div>,
  <div key="grad-8" className="w-full h-full bg-gradient-to-tr from-blue-400 to-blue-200"></div>,
  <div key="grad-9" className="w-full h-full bg-gradient-to-bl from-sky-600 to-blue-500"></div>,
  <div key="grad-10" className="w-full h-full bg-gradient-to-br from-blue-700 to-indigo-600"></div>,
  <div key="grad-11" className="w-full h-full bg-gradient-to-tr from-blue-400 to-sky-300"></div>,
  <div key="grad-12" className="w-full h-full bg-gradient-to-bl from-blue-300 to-white"></div>,
  <div key="grad-13" className="w-full h-full bg-gradient-to-br from-sky-300 to-sky-100"></div>,
  <div key="grad-14" className="w-full h-full bg-gradient-to-tr from-blue-200 to-blue-100"></div>,
  <div key="grad-15" className="w-full h-full bg-gradient-to-bl from-indigo-700 to-blue-600"></div>,
  <div key="grad-16" className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>,
  <div key="grad-17" className="w-full h-full bg-gradient-to-tr from-sky-500 to-blue-500"></div>,
  <div key="grad-18" className="w-full h-full bg-gradient-to-bl from-blue-600 to-indigo-700"></div>,
  <div key="grad-19" className="w-full h-full bg-gradient-to-br from-blue-500 to-sky-400"></div>,
  <div key="grad-20" className="w-full h-full bg-gradient-to-tr from-indigo-500 to-blue-500"></div>,
  <div key="grad-21" className="w-full h-full bg-gradient-to-bl from-blue-400 to-white"></div>,
  <div key="grad-22" className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-200"></div>,
  <div key="grad-23" className="w-full h-full bg-gradient-to-tr from-indigo-600 to-blue-400"></div>,
  <div key="grad-24" className="w-full h-full bg-gradient-to-bl from-blue-300 to-blue-500"></div>,
  <div key="grad-25" className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-500"></div>,
  <div key="grad-26" className="w-full h-full bg-gradient-to-tr from-blue-400 to-indigo-400"></div>,
  <div key="grad-27" className="w-full h-full bg-gradient-to-bl from-sky-200 to-white"></div>,
  <div key="grad-28" className="w-full h-full bg-gradient-to-br from-blue-300 to-sky-300"></div>,
];

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userIdentifier, setUserIdentifier] = useState('') // Can be name, phone, or email
  const [userPassword, setUserPassword] = useState('')
  const [errors, setErrors] = useState({global:''})
  const userRef = useRef(null)
  
 
useEffect(()=>{
  if(userRef.current){
    userRef.current.focus();
  }
},[])  

  const handelLogin=(e)=>{
  e.preventDefault()

  // Validate identifier (can be name, phone, or email)
  if (!userIdentifier.trim()) {
    setErrors({global: 'Please provide your name, phone number, or email'});
    return;
  }

  if(!PWD_REGEX.test(userPassword)){
    setErrors({global: t('passwordError') || 'Password must contain 8 to 24 characters which include uppercase and lowercase letters, a number and a special character' })
    return
  }

  // Temporary login logic - check against localStorage users
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Find user by name (fname), phone, or email
  const foundUser = users.find(user => {
    const identifierLower = userIdentifier.toLowerCase().trim();
    const matchesName = user.fname && user.fname.toLowerCase() === identifierLower;
    const matchesPhone = user.phone === userIdentifier;
    const matchesEmail = user.email && user.email.toLowerCase() === identifierLower;
    const matchesPassword = user.password === userPassword;
    
    return (matchesName || matchesPhone || matchesEmail) && matchesPassword;
  });

  if (foundUser) {
    // Store current user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    
    setErrors({global: t('formSuccess') || 'Login successful!'})
    
    console.log('User logged in:', foundUser)

    setTimeout(() => {
      setUserIdentifier('')
      setUserPassword('')
      
      // Navigate based on role
      switch(foundUser.role) {
        case 'user':
          navigate('/userhome', { state: { user: foundUser } });
          break;
        case 'worker':
          navigate('/workerhome', { state: { user: foundUser } });
          break;
        case 'leader':
          navigate('/leaderhome', { state: { user: foundUser } });
          break;
        case 'ngo':
          navigate('/ngohome', { state: { user: foundUser } });
          break;
        default:
          navigate('/userhome', { state: { user: foundUser } });
      }
    }, 1000);
  } else {
    setErrors({global: 'Invalid credentials. Please check your name/phone/email and password.'});
  }
}

  
const handelCancel=()=>{
  navigate('/');
}
  return (
    <div>
          <div className="relative w-full h-screen overflow-hidden">

  {/* Background with gradient tiles */}
  <div className="absolute inset-0 -z-10 opacity-90">
    <GridMotion items={gradientItems} />
  </div>

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" />

  {/* Language Switcher */}
  <div className='absolute top-4 right-4 z-50'>
    <LanguageSwitcher />
  </div>
    <div className="flex items-center justify-center h-full p-4">
        <form onSubmit={(e)=>{handelLogin(e)}}>
      
      <div className='flex items-center flex-col bg-white w-[500px] h-[600px] text-black border-1 rounded-[20px]'>
        <div className="flex justify-center mt-4">
        <img
          src="./images/pro1.png"
          alt=""
          className="h-20 w-20 rounded-full object-cover border-2 border-blue-500"
        />
      </div>

          
        
        <div className='flex flex-col  gap-3 w-full p-10 text-lg'>
        <h2>{t('namePhoneEmail') || 'Name / Phone / Email'}</h2>
        <input 
          ref={userRef} 
          value={userIdentifier} 
          onChange={(e)=>{setUserIdentifier(e.target.value)}} 
          className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
          shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' 
          type="text" 
          placeholder={t('identifierPlaceholder') || 'Enter your name, phone, or email'}
        />
        <h2>{t('password') || 'Password'}</h2>
        <input value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} className='flex border-1 border-gray-200 rounded-[10px] w-full h-[40px] p-2
        shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300' type="password" placeholder={t('passwordPlaceholder') || 'password'}/>
        
        {errors.global && <p className="text-red-500 text-sm -mt-1">{errors.global}</p>}
        
        <div className='flex ml-3 mt-6 p-2 gap-10 items-center justify-center'>
        <button type='submit' className='bg-blue-500 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-blue-200'>{t('login') || 'Login'}</button>
        <button onClick={handelCancel} type='button' className='bg-gray-300 w-fit p-3 pr-4 pl-4 rounded-2xl active:scale-90 hover:bg-gray-500'>{t('cancel') || 'Cancel'}</button>
        </div>
        </div>
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login