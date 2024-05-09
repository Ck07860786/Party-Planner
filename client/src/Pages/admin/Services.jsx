import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Header'
import AdminMenu from './AdminMenu'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'antd'


function Services() {

    const [services, setServices] = useState()

    const getAllServices = async()=>{
        try {
            const {data} = await axios.get('http://localhost:8080/api/v1/service/get-service')
            setServices(data.service)
            console.log(data.service)
            console.log(data.category)
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllServices();
    },[])
  return (
    <>
     <Header />
      <div className="flex bg-black">
        <AdminMenu />
        <div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl mt-3 text-white">All Services</h1>
          </div>
          <div className=" bg-black mt-1">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
              <div className="mt-6   grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-8   ">
                {services?.map((s) => (
                    
                  <div  className="flex flex-col   rounded-lg  border shadow-md shadow-purple-500 border-purple-500   p-3 mb-6">
                  
                  
                    <Link key={s._id} to={`/dashboard/admin/services/${s.slug}`}>
                      <div className="group relative ">
                        <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden  rounded-md bg-transparent lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                          
                            src={s.image.url}
                            alt={s.name}
                            className="object-cover object-center w-full "
                          />
                        </div>
                        <div className="mt-4 flex justify-between ">
                          <div>
                          <h1 className=' text-gray-600 text-sm font-Lato p-1 rounded-lg'>Provider: {s._id}</h1>
                            <h3 className="  font-Lato text-purple-400 font-bold text-xl ">
                              {s.name}
                            </h3>
                          </div>
                          
                        </div>
                        <div>
                          <p className="text-sm text-white">
                            {s.description.substring(0,120)}...
                           
                            
                          </p>
                        </div>
                      </div>
                    </Link>
                   
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Services

