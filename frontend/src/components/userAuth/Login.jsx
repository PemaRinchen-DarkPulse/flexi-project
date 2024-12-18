import React from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const AuthWithSocail = () => {
    const { login } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            // Here you would implement Google OAuth login
            // For now, we'll simulate a successful login
            const mockGoogleData = {
                token: 'google-mock-token',
                name: 'Google User',
                email: 'google@example.com',
                profileImage: null
            };
            login(mockGoogleData);
        } catch (error) {
            console.error('Google login failed:', error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            // Here you would implement Facebook OAuth login
            // For now, we'll simulate a successful login
            const mockFacebookData = {
                token: 'facebook-mock-token',
                name: 'Facebook User',
                email: 'facebook@example.com',
                profileImage: null
            };
            login(mockFacebookData);
        } catch (error) {
            console.error('Facebook login failed:', error);
        }
    };

    return (
        <div className="my-4">
            <div className="text-center position-relative mb-4">
                <hr className="my-2" />
                <span className="position-absolute top-50 left-50 translate-middle bg-white px-3 text-muted">
                    OR
                </span>
            </div>
            <div className="d-flex flex-column gap-3">
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 py-2"
                >
                    <FaGoogle className="text-danger" />
                    <span>Continue with Google</span>
                </button>
                <button
                    onClick={handleFacebookLogin}
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 py-2"
                >
                    <FaFacebook className="text-primary" />
                    <span>Continue with Facebook</span>
                </button>
            </div>
        </div>
    );
};

export const UserNavigate = ({ text, linkText, link }) => {
    return (
        <div className="text-center mt-4">
            <p className="mb-0">
                {text}{' '}
                <Link to={link} className="text-primary text-decoration-none fw-bold">
                    {linkText}
                </Link>
            </p>
        </div>
    );
};