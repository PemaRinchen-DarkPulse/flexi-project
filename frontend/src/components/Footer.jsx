import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f0c29', color: '#fff', padding: '40px 0', marginTop: '40px' }}>
      <div className="container">
        <section className="row">
          <div className="col-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="col-4 text-center">
            <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Follow Us</h4>
            <div>
              <a
                href="https://facebook.com"
                style={{
                  color: '#fff',
                  margin: '0 10px',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                style={{
                  color: '#fff',
                  margin: '0 10px',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                style={{
                  color: '#fff',
                  margin: '0 10px',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                style={{
                  color: '#fff',
                  margin: '0 10px',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Get In Touch</h4>
            <p style={{ marginBottom: '10px' }}>
              Email: <a href="mailto:info@example.com" style={{ color: '#fff', textDecoration: 'none' }}>info@example.com</a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              Phone: <a href="tel:+123456789" style={{ color: '#fff', textDecoration: 'none' }}>+1 234 567 89</a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              Address: 123 Learning Street, Knowledge City
            </p>
          </div>
        </section>

        <div style={{ borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
          © 2024 RCSC Ace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
