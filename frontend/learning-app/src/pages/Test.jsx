import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Test() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showCorrect, setShowCorrect] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorCount, setErrorCount] = useState(0);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`http://localhost:5000/api/words`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const foundList = res.data.find(list => list._id === id);
                if (foundList) {
                    setWords(foundList.words);
                    setStartTime(Date.now());
                } else {
                    console.error('List not found');
                }
            } catch (err) {
                console.error('Error fetching list', err);
            } finally {
                setLoading(false);
            }
        };

        fetchList();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentWord = words[currentIndex];
        if (!currentWord) return;

        if (userAnswer.trim().toLowerCase() === currentWord.translation.trim().toLowerCase()) {
            const updatedWords = [...words];
            updatedWords.splice(currentIndex, 1);
            setWords(updatedWords);
            setUserAnswer('');
            setShowCorrect(false);

            if (updatedWords.length === 0) {
                const duration = Math.round((Date.now() - startTime) / 1000);
                navigate('/results', {
                    state: { errors: errorCount, time: duration }
                });
            }
        } else {
            setShowCorrect(true);
            setErrorCount(prev => prev + 1);
            const updatedWords = [...words];
            const [wrongWord] = updatedWords.splice(currentIndex, 1);
            const insertAt = Math.min(currentIndex + 5, updatedWords.length);
            updatedWords.splice(insertAt, 0, wrongWord);
            setWords(updatedWords);
            setUserAnswer('');
        }
    };

    if (loading) return <p>Loading test...</p>;
    if (words.length === 0) return null;

    const currentWord = words[currentIndex];

    return (
        <div>
            <h1>Translate the word:</h1>
            <p><strong>{currentWord.word}</strong></p>

            <form onSubmit={handleSubmit}>
                <input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Your translation"
                    autoFocus
                />
                <button type="submit">Check</button>
            </form>

            {showCorrect && (
                <p style={{ color: 'red' }}>
                    ❌ Correct answer: <strong>{currentWord.translation}</strong>
                </p>
            )}
        </div>
    );
}

export default Test;