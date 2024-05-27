import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import { useParams } from 'react-router'
import axios from 'axios'
import { useAuth } from '../context/auth'
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";


function ServiceDetail() {
    const [service, setService] = useState({})
    const [auth] = useAuth()
    const params = useParams()
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const getService = async () => {
        const { data } = await axios.get(`http://localhost:8080/api/v1/service/get-service/${params.slug}`)
        setService(data?.service)
    }

    const getReviews = async () => {
        const { data } = await axios.get(`http://localhost:8080/api/v1/review/get-reviews/${service._id}`)
        setReviews(data?.reviews)
    }

    const submitReview = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                `http://localhost:8080/api/v1/review/create-review`,
                { serviceId: service._id, rating, comment },
                {
                    headers: {
                        Authorization: ` ${auth.token}`
                    }
                }
            )
            setComment('')
            setRating(0)
            getReviews()
        } catch (error) {
            console.error("Error submitting review", error)
        }
    }

    useEffect(() => {
        if (params?.slug) getService()
    }, [params?.slug])

    useEffect(() => {
        if (service._id) getReviews()
    }, [service._id])

    return (
        <>
            <div className="bg-black text-white h-full">
                <Header />
                <div className='flex bg-black h-svh'>
                    <div className=' w-1/2 h-full p-10'>
                        <div className=' w-[500px] h-[500px] border  border-purple-700 mt-28 ml-44 rounded-xl shadow-md shadow-purple-700'>
                            <img className=' w-full h-full object-cover rounded-lg p-4' src={service.image?.url} alt={service.name} />
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

                <div className='p-10 ml-40'>
                    {auth?.user && (
                        <form onSubmit={submitReview} className='mb-8'>
                            <h2 className='text-2xl font-font flex items-center mb-4'>Add a Review <FaStar color='yellow' className=' ml-2' /></h2>
                            <div className='mb-4'>
                                <label htmlFor='rating' className='block mb-2'>Rating</label>
                                <input
                                    type='number'
                                    id='rating'
                                    min='1'
                                    max='5'
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    className='w-[525px] p-2 border bg-black outline-none  border-purple-600 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='comment' className='block mb-2 font-Lato'>Comment</label>
                                <textarea
                                    id='comment'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className='w-[525px] p-2 border border-purple-600 outline-none rounded bg-black'
                                />
                            </div>
                            <button type='submit' className='bg-blue-500 w-[525px] h-10 rounded-md mt-4 text-center hover:bg-blue-400'>Submit Review</button>
                        </form>
                    )}

                    <h2 className='text-2xl font-lato mb-4'>Reviews ({reviews.length})</h2>
                    {reviews.map(review => (
                        <div key={review._id} className='mb-4 w-[525px] p-2  outline-none border-purple-600 rounded'>
                            <h3 className='text-xl flex text-blue-300 items-center'><LuUserCircle strokeWidth={1} size={38} color='white' className=' mr-4' />{review.user.name}</h3>
                            <p className=' text-yellow-300 font-Lato mt-2'>Rating: {review.rating}/5</p>
                            <p className=' font-Lato'>{review.comment}</p>
                            <hr className='mt-5 border-t-2 h-0.5 border-blue-600 shadow-lg'  />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServiceDetail
