import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Home() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLists();
  }, []);

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

  const handleSelectList = (id) => {
    navigate(`/test/${id}`);
  };

  const handleDeleteList = async (id) => {
    if (!window.confirm('Are you sure you want to delete this list?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/words/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLists(lists.filter(list => list._id !== id));
    } catch (err) {
      console.error('Failed to delete list', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="w-screen h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800"><br></br>Your Word Lists</h1>
          
        </div>

        {loading ? (
          <p className="text-gray-600 text-center">Loading word lists...</p>
        ) : lists.length === 0 ? (
          <p className="text-gray-600 text-center">No lists found. Create one!</p>
        ) : (
          <ul className="space-y-4">
            {lists.map((list) => (
              <li
                key={list._id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleSelectList(list._id)}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {list.title} ({list.words.length} words)
                  </button>
                </div>
                <button
                  onClick={() => handleDeleteList(list._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}