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
    const [lastWrongAnswer, setLastWrongAnswer] = useState(null);
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

        const isCorrect = userAnswer.trim().toLowerCase() === currentWord.translation.trim().toLowerCase();

        if (isCorrect) {
            const updatedWords = [...words];
            updatedWords.splice(currentIndex, 1);
            setWords(updatedWords);
            setUserAnswer('');
            setShowCorrect(false);
            setLastWrongAnswer(null);

            if (updatedWords.length === 0) {
                const duration = Math.round((Date.now() - startTime) / 1000);
                navigate('/results', {
                    state: { errors: errorCount, time: duration }
                });
            }
        } else {
            setShowCorrect(true);
            setLastWrongAnswer(currentWord);
            setErrorCount(prev => prev + 1);

            const updatedWords = [...words];
            const [wrongWord] = updatedWords.splice(currentIndex, 1);
            const insertAt = Math.min(currentIndex + 5, updatedWords.length);
            updatedWords.splice(insertAt, 0, wrongWord);
            setWords(updatedWords);
            setUserAnswer('');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-xl text-gray-600">
                Loading test...
            </div>
        );
    }

    if (words.length === 0) return null;

    const currentWord = words[currentIndex];

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Translate the word</h1>

                <p className="text-xl text-center mb-4 font-semibold text-blue-700">
                    {currentWord.word}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Your translation"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Check
                    </button>
                </form>

                {showCorrect && lastWrongAnswer && (
                    <div className="mt-4 text-red-600 text-center font-medium">
                        ❌ Correct answer: <strong>{lastWrongAnswer.translation}</strong>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Test;