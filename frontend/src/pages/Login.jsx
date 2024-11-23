import React from 'react';
import { AuthWithSocail, UserNavigate } from '../components/userAuth/Login';
import { AuthButton } from '../components/button/MyButton';
import BackgroundImage from '../assets/images/auth.jpg';

const Login = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{height: '100vh',
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
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="john.doe@example.com"
                        />
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" placeholder="Password" />
                        <a href="/" className="ms-auto me-2 mt-1">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <AuthButton label="Log In" />
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
