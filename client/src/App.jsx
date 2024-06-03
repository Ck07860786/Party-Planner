import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Hero from './Pages/Hero'
import Signup from './Authentication/Signup'
import NotFound from './Pages/NotFound'
import Login from './Authentication/Login'
import  { Toaster } from 'react-hot-toast';
import Home from './Pages/Home'
import Dashboard from './Pages/user/Dashboard'
import PrivateRoute from './Pages/routes/Private'
import AdminRoute from './Pages/routes/AdminRoute'
import AdminDashboard from './Pages/admin/AdminDashboard'
import CreateCategory from './Pages/admin/CreateCategory'

import Profile from './Pages/admin/Profile'
import AllServices from './Pages/user/AllServices'
import UserProfile from './Pages/user/Profile'
import CreateService from './Pages/admin/CreateService'
import Services from './Pages/admin/Services'
import Updateservice from './Pages/admin/Updateservice'
import ServiceDetail from './Pages/ServiceDetail'
import About from './Pages/About'
import ProductCategory from './Pages/ProductCategory'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/category/:slug' element={<ProductCategory/>}/>

      <Route path='/service/:slug' element={<ServiceDetail/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>} >
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/services' element={<AllServices/>}/>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/profile' element={<UserProfile/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path='admin/create-category' element={<CreateCategory/>}/>
        <Route path='admin/create-service' element={<CreateService/>}/>
        <Route path='admin/services' element={<Services/>}/>
        <Route path='admin/services/:slug' element={<Updateservice/>}/>
        <Route path='admin/profile' element={<Profile/>}/>
      </Route>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   <Toaster/>
    </>
  )
}

export default App