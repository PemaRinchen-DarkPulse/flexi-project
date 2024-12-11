import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact-form bg-white rounded-3 shadow p-4">
            <h3 className="font-weight-bold mb-3 text-dark">Send Us a Message</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="font-weight-bold text-dark">Name</label>
                    <input type="text" className="form-control rounded-3 border-muted" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="font-weight-bold text-dark">Email</label>
                    <input type="email" className="form-control rounded-3 border-muted" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="font-weight-bold text-dark">Message</label>
                    <textarea className="form-control rounded-3 border-muted" id="message" rows="5" placeholder="Type your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-3">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
