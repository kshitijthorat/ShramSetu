import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/User/UserProfile'
import UserHome from './pages/User/UserHome'
import UserPost from './pages/User/UserPost'
import Setting from './pages/Setting'
import ViewDetails from './pages/User/ViewDetails'


const App = () => {
  return (
    <div>
     
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/register' element={<Register/>}/>
        <Route path='/userhome' element={<UserHome/>}/>

        <Route path='/userProfile' element={<UserProfile/>}/>
        <Route path='/userpost' element={<UserPost/>}/>
        <Route path='/viewdetails' element={<ViewDetails/>}/>

        <Route path='/settings' element={<Setting/>}/>




      </Routes>
    
    </div>
  )
}

export default App