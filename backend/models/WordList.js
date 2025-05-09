import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
    word: String,
    translation: String,
});

const wordListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: String,
    words: [wordSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const WordList = mongoose.model('WordList', wordListSchema);

export default WordList;
