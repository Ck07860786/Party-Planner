import dotnev from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import mongoConnect from './Config/mongoDb.js';
import authRoute from './Routes/authRoutes.js'
import categoryRoute from './Routes/categoryRoute.js'
import serviceRoutes from './Routes/serviceRoutes.js'
import feedbackRoutes from './Routes/feedbackRoutes.js'

import cors from 'cors'



const app = express();

//env configure
dotnev.config();

//db config
mongoConnect()

//middleware


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//api

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/service',serviceRoutes)
app.use('/api/v1/feedback',feedbackRoutes)


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})




