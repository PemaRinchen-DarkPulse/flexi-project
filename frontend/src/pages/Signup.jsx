import React from 'react';
import { AuthWithSocail, UserNavigate } from '../components/userAuth/Login';
import { AuthButton } from '../components/button/MyButton';
import BackgroundImage from '../assets/images/auth.jpg';

const Signup = () => {
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
                <form>
                    <div className="mb-3 row">
                        <div className="col">
                            <label className="form-label">First Name</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="John"
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Last Name</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
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
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Confirm Password
                        </label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <AuthButton label="Sign Up" />
                </form>
                <div className='m-3'>
                    <AuthWithSocail />
                </div>
                <div className='m-3'>
                    <UserNavigate
                        pLabel="Already have an account?"
                        aLabel="Log In"
                        link="https://in.pinterest.com/pin/867083734506225998/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
