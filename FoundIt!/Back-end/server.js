import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// basic route
app.get('/', (req, res) => {
  res.send('Server and MongoDB are working!');
});

// start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));