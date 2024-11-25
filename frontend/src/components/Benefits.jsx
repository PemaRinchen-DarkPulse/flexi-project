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
                    <Card title='Comprehensive Study Materials' subtitille='Access well-structured notes, practice questions, and mock tests tailored to the RCSC syllabus, ensuring you are fully prepared.' />
                </div>
                <div className="col-4">
                    <Card title='Expert Guidance' subtitille='Learn from experienced mentors who provide personalized tips, strategies, and insights to help you excel in your exams.' />
                </div>

                <div className="col-4">
                    <Card title='Flexible and Interactive Learning' subtitille='Enjoy interactive quizzes, video lectures, and progress tracking tools, allowing you to learn at your own pace.' />
                </div>
            </section>
        </div>
    );
};

export default Benefits;
