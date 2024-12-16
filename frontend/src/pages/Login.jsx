import React, { useState } from 'react';
import { AuthWithSocail, UserNavigate } from '../components/userAuth/Login';
import { AuthButton } from '../components/button/MyButton';
import BackgroundImage from '../assets/images/auth.jpg';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Login successful!');
                // Save token or user data if returned
                localStorage.setItem('token', data.token); // Assuming the backend sends a token
                // Redirect to dashboard or another page
                window.location.href = '/dashboard'; // Replace with your app's route
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                height: '100vh',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div
                style={{ minWidth: '450px' }}
                className="bg-opacity-50 shadow p-3 rounded-3 bg-white"
            >
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="john.doe@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <a href="/" className="ms-auto me-2 mt-1">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Remember me
                        </label>
                    </div>
                    <div className="text-danger">{error}</div>
                    <div className="text-success">{success}</div>
                    <AuthButton label="Log In" type="submit" />
                </form>
                <div>
                    <AuthWithSocail />
                </div>
                <div>
                    <UserNavigate
                        pLabel="Don't have an account?"
                        aLabel="Sign Up"
                        link="/signup"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
