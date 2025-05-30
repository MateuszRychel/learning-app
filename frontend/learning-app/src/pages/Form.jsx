import { useState } from 'react';
import axios from 'axios';
import React from 'react';

function WordListForm() {
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
            if (!parsed.words || !Array.isArray(parsed.words)) {
                alert('JSON must contain a "words" array');
                return;
            }
            setWords(parsed.words);
            setTitle(parsed.title || '');
        } catch (err) {
            alert('Invalid JSON');
        }
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!title.trim()) {
                alert('Title is required');
                return;
            }
            if (words.length === 0 || words.some(w => !w.word.trim() || !w.translation.trim())) {
                alert('Fill in all words and translations');
                return;
            }

            await axios.post('http://localhost:5000/api/words', { title, words }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Saved!');
            setTitle('');
            setWords([{ word: '', translation: '' }]);
            setJsonInput('');
        } catch (error) {
            alert('Error saving list');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create Word List</h2>
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
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
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                rows={5}
                style={{ width: '100%' }}
            />
            <button onClick={handleJSONPaste}>Load from JSON</button>

            <br />
            <button onClick={handleSubmit}>Save List</button>
        </div>
    );
}

export default Form;