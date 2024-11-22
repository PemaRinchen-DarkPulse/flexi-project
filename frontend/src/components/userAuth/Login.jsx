import React from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';
export const AuthWithSocail = () => {
    return (
        <div>
            <h6 className='text-center'>OR</h6>
            <div className="row">
                <div className='col border rounded-2' >
                   <FaGoogle/> Log In with Google
                </div>
                <div className='col border rounded-2'>
                   <FaFacebook/> Log In with Facebook
                </div>
            </div>
        </div>
    )
}

export const UserNavigate = (props) => {
    return (
        <>
            <div className='text-center'>
                <p> {props.pLabel} <a href={props.link}>{props.aLabel}</a></p>
            </div>

        </>
    )
}