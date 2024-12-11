import React from 'react';
import Card from './Card'

const Benefits = () => {
    return (
        <div style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Why Choose Us</h3>
            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
                We are committed to helping you ace your RCSC exams with our carefully curated resources, expert guidance, and interactive learning tools. Here’s why thousands of students trust us for their preparation:
            </p>
            <section className="row text-center">
                <div className="col-4">
                    <Card title='Affordable and Accessible' subtitille='Quality education at a price point designed for students.' />
                </div>
                <div className="col-4">
                    <Card title='Flexible Learning' subtitille=' Study on your schedule with recorded sessions and live classes.' />
                </div>

                <div className="col-4">
                    <Card title='Personalized Feedback' subtitille='Get insights on your progress and areas of improvement.' />
                </div>
            </section>
        </div>
    );
};

export default Benefits;
