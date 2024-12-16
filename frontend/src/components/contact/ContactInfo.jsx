import React from 'react';
import {FaEnvelope,FaWhatsapp,FaPhone,FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa';

const ContactMethod = ({ icon: Icon, title, info, link, color, isExternal }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <Icon className={`fs-3 me-3`} style={{ color }} />
      <div>
        <h6 className="mb-1 font-weight-bold text-dark">{title}</h6>
        <a
          href={link}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : ""}
          className="text-muted text-decoration-none"
        >
          {info}
        </a>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info bg-white rounded-3 shadow p-4">
      <h3 className="font-weight-bold mb-3 text-dark">Contact Information</h3>
      <p className="text-muted mb-4">Feel free to reach us through any of the methods below:</p>

      {/* Email */}
      <ContactMethod icon={FaEnvelope} title="Email" info="pemarinchen675@gmail.com" link="mailto:pemarinchen675@gmail.com" color="blue"/>

      {/* WhatsApp */}
      <ContactMethod icon={FaWhatsapp} title="WhatsApp" info="+91 9699881639" link="https://wa.me/+919699881639" color="green" isExternal />

      {/* Phone */}
      <ContactMethod icon={FaPhone} title="Phone" info="(91) 9699881639" link="tel:+919699881639" color="blue"/>

      <div className="py-4">
        <h3 className="mt-2">Reach out to us on:</h3>
        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/BlazePknight" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/blazepknight/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-danger">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
