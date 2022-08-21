import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Questions from './pages/Questions/Questions'
import Tags from './pages/Tags/Tags'
import UserProfile from './pages/UserProfile/UserProfile'
import Users from './pages/Users/Users'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Users/:id' element={<UserProfile />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes