import React from 'react'
import { FaEnvelope, FaWhatsapp, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const ContactInfo = () => {
    return (
        <div className="contact-info bg-white rounded-3 shadow p-4">
            <h3 className="font-weight-bold mb-3 text-dark">Contact Information</h3>
            <p className="text-muted mb-4">Feel free to reach us through any of the methods below:</p>
            <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="fs-3 text-primary me-3" />
                <div>
                    <h6 className="mb-1 font-weight-bold text-dark">Email</h6>
                    <a href="mailto:pemarinchen675@gmail.com" className="text-muted text-decoration-none">
                        pemarinchen675@gmail.com
                    </a>
                </div>
            </div>
            <div className="d-flex align-items-center mb-4">
                <FaWhatsapp className="fs-3 text-success me-3" />
                <div>
                    <h6 className="mb-1 font-weight-bold text-dark">WhatsApp</h6>
                    <a href="https://wa.me/+919699881639" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none">
                        +91 9699881639</a>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <FaPhone className="fs-3 text-primary me-3" />
                <div>
                    <h6 className="mb-1 font-weight-bold text-dark">Phone</h6>
                    <a href="tel:+919699881639" className="text-muted text-decoration-none">(91) 9699881639</a>
                </div>
            </div>

            <div className="py-4">
                <h3 className="mt-2">Reach out to us on:</h3>
                <div className="d-flex gap-3">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary"><FaFacebook size={30} /> </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info"><FaTwitter size={30} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-danger"><FaInstagram size={30} /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary"><FaLinkedin size={30} /></a>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo
