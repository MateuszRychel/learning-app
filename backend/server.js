import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));