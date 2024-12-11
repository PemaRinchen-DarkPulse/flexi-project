import React from 'react';
import Footer from '../components/navbar&footer/Footer';
import Hero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';

const Contact = () => {
    return (
        <>
            <Hero/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <ContactInfo/>
                    </div>
                    <div className="col-md-6">
                        <ContactForm/>
                    </div>
                </div>
            </div>
            <Map/>
            <Footer />
        </>
    );
};

export default Contact;
