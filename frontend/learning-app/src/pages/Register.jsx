import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function Register() {
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const resData = await response.json();
                console.error('Błąd rejestracji:', resData);
                return;
            }

            navigate('/');
        } catch (error) {
            console.error('Błąd sieci:', error);
        }
    };

    return (
        <div>
            <h1>Register form</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="user_name" 
                        value={formData.user_name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}  
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password}  
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;