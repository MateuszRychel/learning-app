import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js'; 
import wordsRoutes from './routes/words.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: './jwt.env' }); 

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', wordsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
