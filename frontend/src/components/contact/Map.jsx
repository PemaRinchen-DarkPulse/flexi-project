import React from 'react'

const Map = () => {
    return (
        <div className='text-center' style={{ padding: '40px' }}>
            <h3 style={{ marginBottom: '20px', color: '#343a40' }}>Find Us Here</h3>
            <iframe className='rounded-3 shadow-sm'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14195.6791810368!2d89.6317978!3d27.4873422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19424d5b93873%3A0x2ec330dea648ce12!2sRoyal%20Civil%20Service%20Commission%20%28%E0%BD%A2%E0%BE%92%E0%BE%B1%E0%BD%A3%E0%BC%8B%E0%BD%A1%E0%BD%BC%E0%BD%84%E0%BD%A6%E0%BC%8B%E0%BD%9E%E0%BD%B2%E0%BC%8B%E0%BD%82%E0%BD%A1%E0%BD%BC%E0%BD%82%E0%BC%8B%E0%BD%A3%E0%BE%B7%E0%BD%93%E0%BC%8B%E0%BD%9A%E0%BD%BC%E0%BD%82%E0%BD%A6%E0%BC%8D%29!5e0!3m2!1sen!2s!4v1690137239920!5m2!1sen!2s"
                style={{
                    width: '100%',
                    height: '500px',
                }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default Map
