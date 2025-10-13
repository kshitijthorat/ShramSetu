import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-auto flex justify-center items-center h-13 gap-10 bg-white rounded-lg text-center '>
       <h1 className='text-3xl text-[#0a66c2] font-bold p-10 font-serif' >ShramSetu</h1>
       <div className='flex gap-10 p-10 text-xl items-center justify-center '>
        <Link to='/'>Home</Link>
       <Link to='/services'>Services</Link>
       <Link to='/login' className=' bg-white text-blue-500 w-fit text-center p-2 rounded-4xl border-blue-500 border-1 active:scale-90 hover:bg-blue-800 hover:text-white'>Login</Link>
       <Link to='/register' className='bg-blue-500 text-amber-50 w-fit text-center p-2 rounded-4xl active:scale-90'>Register</Link>


    </div>
       

    </div>
  )
}

export default Navbar