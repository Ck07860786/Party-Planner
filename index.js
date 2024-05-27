// index.js
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoConnect from './Config/mongoDb.js';
import authRoute from './Routes/authRoutes.js';
import categoryRoute from './Routes/categoryRoute.js';
import serviceRoutes from './Routes/serviceRoutes.js';
import reviewRoutes from './Routes/reviewRoutes.js';
import cors from 'cors';

const app = express();

//env configure
dotenv.config();

//db config
mongoConnect();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//api
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/service', serviceRoutes);
app.use('/api/v1/review', reviewRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
