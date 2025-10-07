import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
     
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/register' element={<Register/>}/>


      </Routes>
   
    </div>
  )
}

export default App