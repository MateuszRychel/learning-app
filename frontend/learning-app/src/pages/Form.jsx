import { useState } from 'react';
import axios from 'axios';
import React from 'react';

export default function Form() {
    const [title, setTitle] = useState('');
    const [words, setWords] = useState([{ word: '', translation: '' }]);
    const [jsonInput, setJsonInput] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (index, field, value) => {
        const newWords = [...words];
        newWords[index][field] = value;
        setWords(newWords);
    };

    const addField = () => {
        setWords([...words, { word: '', translation: '' }]);
    };

    const removeField = (index) => {
        if (words.length === 1) return;
        setWords(words.filter((_, i) => i !== index));
    };

    const handleJSONPaste = () => {
        try {
            const parsed = JSON.parse(jsonInput);
            if (!parsed.words || !Array.isArray(parsed.words)) {
                setMessage('❌ JSON must contain a "words" array');
                return;
            }
            setWords(parsed.words);
            setTitle(parsed.title || '');
            setMessage('✅ Words loaded from JSON');
        } catch (err) {
            setMessage('❌ Invalid JSON');
        }
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!title.trim()) {
                setMessage('❌ Title is required');
                return;
            }
            if (words.length === 0 || words.some(w => !w.word.trim() || !w.translation.trim())) {
                setMessage('❌ Fill in all words and translations');
                return;
            }

            await axios.post('http://localhost:5000/api/words', { title, words }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setMessage('✅ List saved successfully!');
            setTitle('');
            setWords([{ word: '', translation: '' }]);
            setJsonInput('');
        } catch (error) {
            setMessage('❌ Error saving list');
            console.error(error);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Word List</h2>

                {message && (
                    <div className="mb-4 text-center text-sm font-medium text-blue-600">
                        {message}
                    </div>
                )}

                <input
                    type="text"
                    placeholder="List Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {words.map((w, i) => (
                    <div key={i} className="flex space-x-2 mb-3">
                        <input
                            type="text"
                            placeholder="Word"
                            value={w.word}
                            onChange={(e) => handleChange(i, 'word', e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Translation"
                            value={w.translation}
                            onChange={(e) => handleChange(i, 'translation', e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => removeField(i)}
                            className="text-red-500 font-bold hover:text-red-700"
                        >
                            ✕
                        </button>
                    </div>
                ))}

                <button
                    onClick={addField}
                    className="mb-6 text-blue-600 hover:underline text-sm"
                >
                    + Add another word
                </button>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Or paste JSON:</h3>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    rows={5}
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder='{"title": "My List", "words": [{"word": "apple", "translation": "jabłko"}]}'
                />
                <button
                    onClick={handleJSONPaste}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg mb-4 transition duration-200"
                >
                    Load from JSON
                </button>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                >
                    Save List
                </button>
            </div>
        </div>
    );
}
