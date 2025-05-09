import { useState } from 'react';
import axios from 'axios';
import React from 'react';

export default function WordListForm() {
    const [title, setTitle] = useState('');
    const [words, setWords] = useState([{ word: '', translation: '' }]);
    const [jsonInput, setJsonInput] = useState('');

    const handleChange = (index, field, value) => {
        const newWords = [...words];
        newWords[index][field] = value;
        setWords(newWords);
    };

    const addField = () => {
        setWords([...words, { word: '', translation: '' }]);
    };

    const handleJSONPaste = () => {
        try {
            const parsed = JSON.parse(jsonInput);
            setWords(parsed.words);
            setTitle(parsed.title || '');
        } catch (err) {
            alert('Invalid JSON');
        }
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('token');
        await axios.post('/api/words', { title, words }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        alert('Saved!');
    };

    return (
        <div>
            <h2>Create Word List</h2>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            {words.map((w, i) => (
                <div key={i}>
                    <input
                        placeholder="Word"
                        value={w.word}
                        onChange={(e) => handleChange(i, 'word', e.target.value)}
                    />
                    <input
                        placeholder="Translation"
                        value={w.translation}
                        onChange={(e) => handleChange(i, 'translation', e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addField}>Add More</button>

            <h3>Or paste JSON</h3>
            <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} />
            <button onClick={handleJSONPaste}>Load from JSON</button>

            <br />
            <button onClick={handleSubmit}>Save List</button>
        </div>
    );
}
