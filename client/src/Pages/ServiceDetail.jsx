import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import { useParams } from 'react-router'
import axios from 'axios'
import { useAuth } from '../context/auth'
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";


function ServiceDetail() {
    const [service,setService ] = useState({})
    const [auth, setAuth] = useAuth()
    const params = useParams()
    

    const getService = async()=>{
       const {data} =  await axios.get(`http://localhost:8080/api/v1/service/get-service/${params.slug}`)
       setService(data?.service)
       console.log(data.service)
    }

    useEffect(()=>{
        if(params?.slug) getService()
    },[params?.slug])
  return (
    <>
         <div className="bg-black text-white h-full">
            <Header/>
            <div className='flex bg-black h-svh'>
                <div className=' w-1/2 h-full p-10'>
                
                    <div className=' w-[500px] h-[500px] border  border-purple-700 mt-28 ml-44 rounded-xl shadow-md shadow-purple-700'>
                    <img className=' w-full h-full object-cover rounded-lg p-4' src={service.image?.url} alt={service.name}/>

                    </div>
                </div>
                <div className=' w-1/2 h-full p-5'> 
                  <div className=' mt-40 w-[500px] h-[500px] font-Lato'>
                  <h1 className=' text-2xl font-bold font-Lato mt-10 text-purple-400'>{service.name}</h1>
                  <p className=' mt-10'>{service.description}</p>
                   
                  <h1 className=' mt-16 text-2xl font-Lato font-bold  '>Rs. {service.price}/-</h1>
                  
                  <h1 className=' mt-8 font-Lato text-xl flex items-center '><IoCallOutline className=' mr-2  text-blue-500' size={29} />{auth?.user.phone}</h1>
                  <h1 className=' mt-8 font-Lato text-xl flex items-center '><MdMailOutline className=' mr-2  text-yellow-300' size={29} />{auth?.user.email}</h1>
                  <button className=' bg-blue-500 w-[500px] h-10 rounded-md mt-10 text-center hover:bg-blue-400' >Book Service</button>

                  </div>
                 </div>
            </div>
         </div>
    </>
  )
}

export default ServiceDetail