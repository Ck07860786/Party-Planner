import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import Header from '../../layouts/Header';
import AdminMenu from './AdminMenu';
import { Select } from 'antd';
const {Option} = Select


function Updateservice() {
    const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  
  const params = useParams();
  const navigate = useNavigate();

   //get single service

   const getSingleService = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/service/get-service/${params.slug}`
      );
      setId(data.service._id);
      setName(data.service.name);
      setCategory(data.service.category._id);
      setPrice(data.service.price);
      setDescription(data.service.description);
      setImage(data.service.image.url)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleService();
  }, []);


  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category/"
      );
      if (data?.success) {
        setCategories(data?.category);
        console.log(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went worng in getting category");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  // delete product
  const handleDelete = async () => {
    try {
       
      const {data} = await axios.delete(`http://localhost:8080/api/v1/service/delete-service/${id}`)
      toast.success(data.message)
      navigate('/dashboard/admin/services')

    } catch (error) {
       console.log(error)
       toast.error('something went wrong')
    }
  };

    // handle update 
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const serviceData = new FormData();
        serviceData.append("name", name);
        serviceData.append("price", price);
        serviceData.append("description", description);
        image && serviceData.append("image", image);
        serviceData.append("category", category);
    
        console.log("Service Data:", Object.fromEntries(serviceData)); // Log service data for debugging
    
        const { data } = await axios.put(
          `http://localhost:8080/api/v1/service/update-service/${id}`,
          serviceData
        );
        if (data.success) {
          toast.success(data.message);
          
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error in updating the service");
      }
    };
  return (
    <>
       
       <Header/>
      <div className='flex bg-black text-white font-Lato'>
        <AdminMenu/>
        <div className=' ml-80 mt-10'>
          <h1 className='text-center items-center text-4xl '>Update Service</h1>
          <div className=' mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8  '>
          <div>
          {categories.length > 0 && (
  <Select
    className='columns-md'
    placeholder="Select Category"
    size='large'
    showSearch
    onChange={(value)=>{setCategory(value)}}
    value={category}
  >
    {categories.map(c=>(
      <Option key={c._id} value={c._id}>{c.name}</Option>
    ))} 
  </Select>
)}
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
             <label className='focus:outline-none focus:border-blue-500 border border-purple-600 text-white rounded-md columns-md p-2'>
             {image ? image.name : "Upload service Image"}
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
            <div className=" mb-3">
            {image instanceof File ? (
  <div className="text-center">
    <img src={URL.createObjectURL(image)} alt="product image" width={"200px"} />
  </div>
) : (
  <div className="text-center text-white">
    <img src={image} alt="product image" width={"200px"} />
  </div>
)}
            </div>
            <div>
            <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           onClick={handleUpdate}>
                Update Service
              </button>
            </div>

            <div>
            <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           onClick={handleDelete}>
                Delete Service
              </button>
            </div>

          </div>
          </div>
          </div>
       
    </>
  )
}

export default Updateservice 