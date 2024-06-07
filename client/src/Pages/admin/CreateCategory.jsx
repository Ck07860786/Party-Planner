import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Header'
import AdminMenu from './AdminMenu'
import axios from 'axios';
import AddCategoryform from '../../inputForms/AddCategoryform';
import toast from 'react-hot-toast';
import {Modal} from 'antd'
import { BASE_URL } from '../../Helper/PortUrl';

function CreateCategory() {
  const [categories, setCategories]= useState([])
  const [name , setName] = useState("")
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null)
  const [updatedName , setUpdatedName] = useState("")
  //craete category
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const {data}= await axios.post(`${BASE_URL}/api/v1/category/create-category`,{name})
      if(data.success){
        toast.success(`${name} category is created`)
        getAllCategory();
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
    }
}

  //get category
  const getAllCategory= async()=>{
    try {
      const {data} = await axios.get(`${BASE_URL}/api/v1/category/get-category`)
      if(data.success){
        setCategories(data.category)
        console.log(data.category)
      }
    } catch (error) {
      console.log(error)
      toast.error('something went worng in getting category')
    }
  };
  useEffect(()=>{
    getAllCategory();
  
  },[])

  //for updating category
  const handleUpdate = async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.put(`${BASE_URL}/api/v1/category/update-category/${selected._id}`,{name:updatedName})
      if(data.success){
        toast.success(data.message)
        getAllCategory();
        setSelected(null)
        setUpdatedName("")
        setVisible(false)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('error in updating category')
      
    }
  }

  //delete category
  const handleDelete = async(id)=>{
    
    try {
      const {data} = await axios.delete(`${BASE_URL}/api/v1/category/delete-category/${id}`)
      if(data.success){
        toast.success(data.message)
        getAllCategory();
       
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('error in deleting category')
      
    }
  }

  return (
    <>
        <Header />
      <div className='flex bg-black text-white font-Lato'>
        <AdminMenu />
        <div className=' px-32 mt-10'>
          <h1 className='text-center items-center text-4xl'>Manage category</h1>
          <div>
          <AddCategoryform handleSubmit={handleSubmit} value={name} setValue={setName}/>
          </div>
          
          <Modal className=' modal-bg-black'  onCancel={()=>setVisible(false)} footer={null} visible={visible}>
            <AddCategoryform value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
          </Modal>
          <div className=' w-[800px]'>
          {categories.length > 0 ? (
            <ul role="list" className="divide-y divide-purple-600   ">
              {categories?.map((c) => (
                <li key={c._id} className="flex justify-between gap-x-6 py-5 mt-5  ">
                  <div className="flex min-w-0  gap-x-4 ">
                    <div className="min-w-0 flex-auto">
                      <p className=" text-sm font-Lato font-semibold leading-6 text-white">{c.name}</p>
                    </div>
                  </div>
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <button className=' h-3 w-20 text-blue-600' onClick={()=>{setVisible(true) ; setUpdatedName(c.name) ;setSelected(c)}}>Edit</button>
                    </div>
                    <div className="min-w-0 flex-auto">
                      <button className=' h-3 w-20 text-red-600' onClick={()=>{handleDelete(c._id)}}>Delete</button>
                    </div>
                  </div>
                  
                </li>
              ))}
            </ul>
          ) : (
            <p className=' text-center text-white mt-52'>Loading Categories.....</p>
          )}
        </div>
          </div>
          </div>
          
          
          
    </>
  )
}

export default CreateCategory