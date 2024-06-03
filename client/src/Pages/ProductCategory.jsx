import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link,useNavigate } from 'react-router-dom';
import Contribution from './Contribution';


function ProductCategory() {
    const [service, setServices] = useState([]);
    const [category , setcategory] = useState([])
    const navigate = useNavigate();
    const params = useParams()

    const getCategoryService =async()=>{
        try {
           const {data} = await axios.get(`http://localhost:8080/api/v1/service/category-service/${params.slug}`)
           setcategory(data?.category)
           setServices(data?.service)
           console.log(data?.services)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(params?.slug) getCategoryService();
    },[params?.slug])
  return (
    <>
    <div className=' bg-black'>
        <Header/>
        <div className=' text-center mt-2 bg-black' >
            <h1 className=' text-3xl'>{category?.name}</h1>
            <h4 className=' text-white'>{service.length} result found</h4>
        </div>
        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {service.length > 0 ? (
                  service.map((s) => (
                    <div
                      key={s._id}
                      className="flex flex-col rounded-lg border shadow-md shadow-purple-500 border-purple-500 p-3 mb-6"
                    >
                      <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={s.image.url}
                            alt={s.name}
                            className="object-cover object-center w-full"
                          />
                        </div>
                        <h1 className=" text-gray-500 font-Lato text-[15px] py-2">Provider : {s.category._id}</h1>
                        <div className=" flex items-center">
                        <h1 className=" text-yellow-300">User Reviews</h1>
                         <Contribution/>
                        </div>
                        
                        <div className="mt-4 flex justify-between">
                       
                          <div>
                            
                            <h3 className="font-Lato text-purple-400 font-bold text-xl">
                              {s.name}
                            </h3>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-white">
                            {s.description.substring(0, 50)}...
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-x-36">
                        <div>
                          <h1 className="text-2xl font-Lato text-white">{s.price}/-</h1>
                        </div>
                        <Link to={`/service/${s.slug}`}>
                          <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 flex text-sm font-semibold text-white shadow-sm hover:bg-black hover:border-purple-600 border outline-none border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          >
                            More Detail
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-white items-center  h-svh mt-10">
                    <h1 className=" font-Lato text-center  text-xl">
                      No services found.
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
            </div>
    </>
  )
}

export default ProductCategory