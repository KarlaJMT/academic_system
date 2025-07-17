import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv/config';
import connectDB from './connection/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import careerRoutes from './routes/careers.routes.js';


connectDB();
const app = express();

app.use(morgan("dev")); // va a ver cuando hagamos las peticiones 
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', careerRoutes);

export default app;