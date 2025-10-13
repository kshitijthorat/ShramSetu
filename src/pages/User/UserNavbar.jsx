import React from 'react'
import { HiSearch, HiUserCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
     <div className='sticky top-0 z-50 w-auto flex justify-center items-center h-13 gap-10 bg-white text-center '>
       <h1 className='text-3xl text-[#0a66c2] font-bold p-10 font-serif' >ShramSetu</h1>
       <div className='flex gap-10 p-10 text-xl items-center justify-center '>
        <Link to='/userhome'>Home</Link>
        <div className='flex items-center justify-center flex-row'>
            <input className='border-1 border-gray-300 border-r-0 rounded-l-2xl h-[2rem] pl-2  shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-gray-300 transition duration-300' placeholder='search' type="search" />
           <button className='flex h-[2rem] items-center justify-center border-1 border-gray-300 border-l-0 rounded-r-2xl bg-blue-400 hover:bg-blue-600 '>
               <Link to='/userprofile'><HiSearch className='text-white text-xl' /></Link> 
            </button>
            </div>
       <Link to='/userprofile' className='bg-blue-500 text-amber-50 w-fit text-center rounded-2xl active:scale-90'>
        <HiUserCircle className='text-white text-4xl'/>
       </Link>


    </div>
       

    </div>
  )
}

export default UserNavbar