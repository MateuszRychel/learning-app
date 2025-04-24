import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            localStorage.setItem('token', data.token);

            navigate('/');
            window.location.reload();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        required 
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        required 
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;