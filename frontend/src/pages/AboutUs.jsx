import React, { useState } from 'react';
import Footer from '../components/navbar&footer/Footer';

const AboutUs = () => {
  const [collapsed, setCollapsed] = useState({
    mission: true,
    vision: true,
    features: true,
    story: true,
    team: true,
  });

  const toggleCollapse = (section) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="min-vh-100 bg-gradient-to-b from-sky-100 to-white">
      <div className="container py-5">
        <header className="text-center mb-5">
          <div className="relative w-24 h-24 mx-auto">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="BhutanRCSCPrep Logo"
              className="rounded-circle border-4 border-yellow-400 shadow-lg"
            />
          </div>
          <h1 className="display-4 font-weight-bold text-primary mt-4">About RCSC Mentora</h1>
          <p className="lead text-secondary mb-5">
            Empowering Bhutanese students for civil service excellence
          </p>
        </header>

        {/* Mission Card */}
        <div className="card shadow-lg mb-4 border-0">
          <div
            className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3"
            onClick={() => toggleCollapse('mission')}
            style={{ cursor: 'pointer', borderRadius: '10px' }}
          >
            <h5 className="card-title mb-0">Our Mission</h5>
          </div>
          <div
            className={`card-body ${collapsed.mission ? 'collapse' : ''}`}
            style={{
              height: collapsed.mission ? '0' : 'auto',
              overflow: 'hidden',
              transition: 'height 0.3s ease',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <p className="text-muted">
              At BhutanRCSCPrep, our mission is to provide accessible, reliable, and comprehensive resources for Bhutanese
              students aspiring to excel in the Royal Civil Service Commission (RCSC) exam. We are committed to empowering
              the next generation of civil servants with the knowledge, skills, and confidence they need to succeed and
              contribute to the prosperity of our beloved nation.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card shadow-lg mb-4 border-0">
          <div
            className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3"
            onClick={() => toggleCollapse('vision')}
            style={{ cursor: 'pointer', borderRadius: '10px' }}
          >
            <h5 className="card-title mb-0">Our Vision</h5>
          </div>
          <div
            className={`card-body ${collapsed.vision ? 'collapse' : ''}`}
            style={{
              height: collapsed.vision ? '0' : 'auto',
              overflow: 'hidden',
              transition: 'height 0.3s ease',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <p className="text-muted">
              We envision a future where every Bhutanese student has the tools and support they need to confidently
              approach the RCSC exam. By providing high-quality preparation resources, we aim to contribute to the
              development of a strong, capable, and dedicated civil service that will drive Bhutan's progress while
              preserving its unique cultural heritage and upholding the principles of Gross National Happiness.
            </p>
          </div>
        </div>

        {/* Key Features Card */}
        <div className="card shadow-lg mb-4 border-0">
          <div
            className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3"
            onClick={() => toggleCollapse('features')}
            style={{ cursor: 'pointer', borderRadius: '10px' }}
          >
            <h5 className="card-title mb-0">Key Features</h5>
          </div>
          <div
            className={`card-body ${collapsed.features ? 'collapse' : ''}`}
            style={{
              height: collapsed.features ? '0' : 'auto',
              overflow: 'hidden',
              transition: 'height 0.3s ease',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <ul className="list-unstyled">
              {[
                'Comprehensive study materials covering all RCSC exam topics',
                'Practice tests that simulate the actual exam experience',
                'Expert-curated tips and strategies for exam success',
                'Regular updates to align with the latest RCSC exam patterns',
                'Community forum for peer support and knowledge sharing',
                'Personalized study plans to optimize preparation',
              ].map((feature, index) => (
                <li key={index} className="d-flex align-items-start mb-2">
                  <svg
                    className="bi bi-check-circle-fill text-success me-2"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M2.928 5.93a1 1 0 0 1 1.414 0L8 9.586l3.657-3.656a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Story Card */}
        <div className="card shadow-lg mb-4 border-0">
          <div
            className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3"
            onClick={() => toggleCollapse('story')}
            style={{ cursor: 'pointer', borderRadius: '10px' }}
          >
            <h5 className="card-title mb-0">Our Story</h5>
          </div>
          <div
            className={`card-body ${collapsed.story ? 'collapse' : ''}`}
            style={{
              height: collapsed.story ? '0' : 'auto',
              overflow: 'hidden',
              transition: 'height 0.3s ease',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <p className="text-muted">
              BhutanRCSCPrep was born from a shared vision of a group of former civil servants and educators who
              recognized the challenges faced by students preparing for the RCSC exam. Inspired by the dedication and
              aspirations of Bhutanese youth, we set out to create a platform that would level the playing field and
              provide equal opportunities for all students, regardless of their background or resources.
            </p>
            <p className="text-muted">
              Our journey began in 2020, and since then, we've been continuously refining our offerings based on student
              feedback and the evolving needs of the civil service. Today, we're proud to be a trusted companion for
              thousands of Bhutanese students on their path to civil service.
            </p>
          </div>
        </div>

        {/* Our Team Card */}
        <div className="card shadow-lg mb-4 border-0">
          <div
            className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3"
            onClick={() => toggleCollapse('team')}
            style={{ cursor: 'pointer', borderRadius: '10px' }}
          >
            <h5 className="card-title mb-0">Our Team</h5>
          </div>
          <div
            className={`card-body ${collapsed.team ? 'collapse' : ''}`}
            style={{
              height: collapsed.team ? '0' : 'auto',
              overflow: 'hidden',
              transition: 'height 0.3s ease',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {[
                { name: 'Tshering Dorji', role: 'Founder & Content Director', avatar: 'TD' },
                { name: 'Deki Wangmo', role: 'Chief Academic Officer', avatar: 'DW' },
                { name: 'Jigme Thinley', role: 'Technology Lead', avatar: 'JT' },
                { name: 'Pema Choden', role: 'Student Success Coordinator', avatar: 'PC' },
                { name: 'Karma Yeshi', role: 'RCSC Exam Expert', avatar: 'KY' },
                { name: 'Sonam Zangpo', role: 'Community Manager', avatar: 'SZ' },
              ].map((member) => (
                <div key={member.name} className="col">
                  <div className="d-flex align-items-center bg-light p-3 rounded shadow-sm">
                    <div
                      className="avatar bg-dark text-white rounded-circle d-flex justify-content-center align-items-center"
                      style={{ width: '60px', height: '60px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                    >
                      {member.avatar}
                    </div>
                    <div className="ms-3">
                      <p className="font-weight-bold text-primary">{member.name}</p>
                      <p className="text-muted">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center my-5">
          <h2 className="h4 font-weight-bold text-primary">Join Us on Your Journey to Civil Service Excellence</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            Together, we can build a brighter future for Bhutan. Start your RCSC exam preparation with confidence today!
          </p>
          <button
            className="btn btn-warning text-primary font-weight-bold px-4 py-2 rounded-pill shadow-lg"
            style={{ transition: 'background-color 0.3s ease' }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#f5c200')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffc107')}
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
