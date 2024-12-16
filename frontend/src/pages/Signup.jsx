import React, { useState } from 'react';
import { AuthWithSocail, UserNavigate } from '../components/userAuth/Login';
import { AuthButton } from '../components/button/MyButton';
import BackgroundImage from '../assets/images/auth.jpg';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
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

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Signup successful! You can now log in.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                setError(data.message || 'Signup failed. Please try again.');
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
                className="bg-opacity-50 p-3 shadow p-3 rounded-3 bg-white"
            >
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <div className="col">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
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
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-danger">{error}</div>
                    <div className="text-success">{success}</div>
                    <AuthButton label="Sign Up" type="submit" />
                </form>
                <div className="m-3">
                    <AuthWithSocail />
                </div>
                <div className="m-3">
                    <UserNavigate
                        pLabel="Already have an account?"
                        aLabel="Log In"
                        link="/login"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
