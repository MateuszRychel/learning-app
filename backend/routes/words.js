import express from 'express';
import WordList from '../models/WordList.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'No token' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Invalid token' });
    }
};

router.post('/words', authMiddleware, async (req, res) => {
    const { title, words } = req.body;

    try {
        const wordList = new WordList({
            userId: req.user.id,
            title,
            words
        });

        await wordList.save();
        res.status(201).json(wordList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/words', authMiddleware, async (req, res) => {
    try {
        const lists = await WordList.find({ userId: req.user.id });
        res.json(lists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;