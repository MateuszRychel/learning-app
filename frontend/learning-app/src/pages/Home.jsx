import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Home() {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/words', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setLists(res.data);
            } catch (err) {
                console.error('Error fetching word lists', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLists();
    }, []);

    const handleSelectList = (id) => {
        navigate(`/test/${id}`);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    if (loading) return <p>Loading word lists...</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Your Word Lists</h1>

            {lists.length === 0 ? (
                <p>No lists found. Create one!</p>
            ) : (
                <ul>
                    {lists.map((list) => (
                        <li key={list._id} style={{ marginBottom: '1rem' }}>
                            <button onClick={() => handleSelectList(list._id)}>
                                {list.title} ({list.words.length} words)
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}