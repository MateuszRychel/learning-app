import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: '',
        hash: '',
        salt: ''
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

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const resData = await response.json();
                throw new Error(resData.message || 'Registration failed');
            }

            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Register form</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
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

                <div>
                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={formData.confirmPassword} 
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