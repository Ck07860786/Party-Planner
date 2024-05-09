import Header from '../../layouts/Header'
import React from 'react'
import UserMenu from './UserMenu'
import { useAuth } from '../../context/auth'

function Dashboard() {
  const [auth,setAuth] = useAuth()
  return (
   <>
    <Header/>
      <div className="flex bg-black text-white font-Lato">
            <UserMenu/>
            <main className="ml-64 p-6">
                <h1 className="text-2xl font-semibold mb-4">Dashboard Content</h1>
                <h2>Admin Name: { auth?.user?.name}</h2>
                <h2>Admin Email: { auth?.user?.email}</h2>
                <h2>Admin Phone No:{ auth?.user?.phone}</h2>
            </main>
        </div>
   </>
  )
}

export default Dashboard