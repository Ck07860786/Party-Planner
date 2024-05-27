import React, { useState,useEffect } from 'react'
import Header from '../../layouts/Header'
import AdminMenu from './AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import {Select} from 'antd'
import { useNavigate } from 'react-router'

const {Option} = Select

function CreateService() {
      const [categories, setCategories]= useState([])
      const [category,setCategory]= useState({})
      const [name, setName] = useState("")
      const [price, setPrice] = useState("")
      const [description, setDescription] = useState("")
      const [image, setImage] = useState("")
      const navigate = useNavigate()
     

    // get all categories
    const getAllCategory= async()=>{
        try {
          
          
          const {data} = await axios.get('http://localhost:8080/api/v1/category/get-category',)
          if(data?.success){
            setCategories(data?.category)
            console.log(data?.category)
          }
        } catch (error) {
          console.log(error)
          toast.error('something went worng in getting category')
        }
      };
      useEffect(()=>{
        getAllCategory();
      
      },[])

    

     //handle submit 
     const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const serviceData = new FormData()
        serviceData.append("name", name)
        serviceData.append("price", price)
        serviceData.append("description",description)
        serviceData.append("image", image)
        serviceData.append("category", category)
  
        const {data} = await axios.post('http://localhost:8080/api/v1/service/create-service',serviceData)
        if(data.success){
          toast.success(data.message)
       
          navigate('/dashboard/admin/services')
          Text
        }
        else{
          toast.error(data.message)
        }
        
      } catch (error) {
        console.log(error)
        toast.error('error in creating the service')
      }
    }

    
  return (
    <>
        <Header/>
      <div className='flex bg-black text-white font-Lato'>
        <AdminMenu/>
        <div className=' ml-80 mt-10'>
          <h1 className='text-center items-center text-4xl'>Create Service</h1>
          <div className=' mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8  '>
          <div>
          <select
  className='columns-md w-full h-10 bg-transparent border-[0.1px] border-purple-600 rounded-md text-white outline-none'
  onChange={(e) => { setCategory(e.target.value) }}
>
  <option value="" disabled selected>Select Category</option>
  {categories?.map(c => (
    <option
      key={c._id}
      value={c._id}
      className="bg-black font-Lato"
    >
      {c.name}
    </option>
  ))}
</select>


          </div>
          <div className=' flex max-w-md gap-x-4 mb-3 text-black'>
            <label className='focus:outline-none focus:border-purple-600 border border-purple-600 rounded-md  columns-md p-0 '>
             
              <input
                id="service-name"
                name="service-name"
                value={name}
                type="text"
                onChange={(e)=> setName(e.target.value)}
                autoComplete="off"
                required
                className=" flex-auto rounded-md  bg-transparent px-3.5 py-2 outline-none text-white shadow-sm w-full sm:text-sm sm:leading-6"
                placeholder="Service Name"
               
              />
              </label>
            </div>
            <div className=' flex max-w-md gap-x-4 mb-3 text-black'>
            <label className='focus:outline-none focus:border-purple-600 border border-purple-600 rounded-md  columns-md p-0 '>
             
              <input
                id="service-price"
                name="service-price"
                value={price}
                type="number"
                onChange={(e)=> setPrice(e.target.value)}
                autoComplete="off"
                required
                className=" flex-auto rounded-md  bg-transparent px-3.5 py-2 outline-none text-white shadow-sm w-full sm:text-sm sm:leading-6"
                placeholder="Service Price"
              />
              </label>
            </div>
            <div className=' flex max-w-md gap-x-4 mb-3 text-black'>
            <label className='focus:outline-none focus:border-purple-600 border border-purple-600 rounded-md  columns-md p-0 '>
             
              <input
                id="service-description"
                name="service-description"
                value={description}
                type="text"
                onChange={(e)=> setDescription(e.target.value)}
                autoComplete="off"
                required
                className=" flex-auto rounded-md  bg-transparent px-3.5 py-2 outline-none text-white shadow-sm w-full sm:text-sm sm:leading-6"
                placeholder="Service description"
              />
              </label>
            </div>
            <div className="mt-6 flex max-w-md gap-x-4 mb-3 text-white">
             <label className='focus:outline-none focus:border-blue-500 border border-purple-600 rounded-md columns-md p-2'>
             {image ? image.name : "Upload Product Image"}
              <input
                id="image"
                name="image"
                type="file"
                accept='image/*'
                onChange={(e)=> setImage(e.target.files[0])}
                hidden
                
                autoComplete="off"
                required
                className="min-w-0 flex-auto rounded-md  border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm outline-none sm:text-sm sm:leading-6"
                placeholder="Add new category"
              />
              </label>
            </div>
            <div className=''>
              {image && (
                <div className=' text-center'>
                  <img src={URL.createObjectURL(image)} alt='product image' width={'200px'} />
                </div>
              )}
            </div>
            <div>
            <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           onClick={handleSubmit}>
                Create Service
              </button>
            </div>

          </div>
          </div>
          </div>
    </>
    
  )
}

export default CreateService