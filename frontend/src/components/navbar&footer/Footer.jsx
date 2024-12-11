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
                <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a>
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
            <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Something</h4>
            <div>
            </div>
          </div>
          <div className="col-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Something</h4>
          </div>
        </section>

        <div style={{ borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
          © 2024 RCSC Mentora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
