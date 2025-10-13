import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/User/UserProfile'
import UserHome from './pages/User/UserHome'


const App = () => {
  return (
    <div>
     
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/register' element={<Register/>}/>
        <Route path='/userhome' element={<UserHome/>}/>

        <Route path='/userProfile' element={<UserProfile/>}/>


      </Routes>
    
    </div>
  )
}

export default App