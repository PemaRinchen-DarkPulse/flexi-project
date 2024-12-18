import React, { useState } from 'react';
import { AuthWithSocail, UserNavigate } from '../components/userAuth/Login';
import { AuthButton } from '../components/button/MyButton';
import BackgroundImage from '../assets/images/auth.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    // Get the redirect path from location state, or default to dashboard
    const from = location.state?.from || '/dashboard';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // For development, let's simulate a successful login
            // In production, replace this with your actual API call
            if (formData.email && formData.password) {
                setSuccess('Login successful!');
                // Call the login function from AuthContext
                login({
                    token: 'mock-token',
                    name: formData.email.split('@')[0],
                    email: formData.email,
                    profileImage: null,
                });
                // Redirect to the originally requested page or dashboard
                navigate(from, { replace: true });
            } else {
                setError('Please fill in all fields');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4 fw-bold">Welcome Back!</h2>
                                {error && <div className="alert alert-danger">{error}</div>}
                                {success && <div className="alert alert-success">{success}</div>}
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <label htmlFor="password" className="form-label">
                                                Password
                                            </label>
                                            <a href="/forgot-password" className="text-primary text-decoration-none small">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <AuthButton 
                                            type="submit" 
                                            label="Sign In" 
                                            className="w-100 btn-lg"
                                        />
                                    </div>
                                </form>

                                <AuthWithSocail />
                                
                                <UserNavigate
                                    text="Don't have an account?"
                                    linkText="Sign up"
                                    link="/signup"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
