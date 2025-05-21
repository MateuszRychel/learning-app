import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    translation: { type: String, required: true },
});

const wordListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: { type: String, required: true },
    words: [wordSchema],
}, { timestamps: true });

const WordList = mongoose.model('WordList', wordListSchema);

export default WordList;