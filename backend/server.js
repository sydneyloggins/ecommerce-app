import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 4000;

connectDB(); // connect to database

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
    });

app.use('/api/products', productRoutes);

app.use(notFound); // middleware for 404 errors
app.use(errorHandler); // middleware for error handling


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);