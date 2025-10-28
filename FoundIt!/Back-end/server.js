import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import {getNotice,postNotice,getDelete,getupdate} from './controllers/noticeController.js'
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// GET route
app.get('/api/notice', getNotice);
// POST route
app.post('/api/notice',postNotice);
// delete post
app.delete('/api/notice/:id', getDelete);
//update 
app.put('/api/notice/:id', getupdate);



// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
