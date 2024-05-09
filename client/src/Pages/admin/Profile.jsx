import React from 'react'
import Header from '../../layouts/Header'
import AdminMenu from './AdminMenu'

function Profile() {
  return (
    <>
         <Header />
      <div className='flex bg-black text-white font-Lato'>
        <AdminMenu />
        <div className=' ml-80 mt-10'>
          <h1 className='text-center items-center text-4xl'>Profile</h1>
          </div>
          </div>

    </>
  )
}

export default Profile