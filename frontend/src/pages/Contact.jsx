import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <div style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
                <div>
                    <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Why Choose Us</h3>
                    <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
                        We are committed to helping you ace your RCSC exams with our carefully curated resources, expert guidance, and interactive learning tools. Here’s why thousands of students trust us for their preparation:
                    </p>
                </div>
                <section className="row">
                    <div className="col-6 text-center">
                        <div className='m-5'>
                            <h5>Get In Touch</h5>
                            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
                                We are committed to helping you ace your RCSC exams with our carefully curated resources, expert guidance, and interactive learning tools. Here’s why thousands of students trust us for their preparation:
                            </p>

                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="col-6" >
                        <div className='m-5 shadow-sm rounded-3 p-3' style={{backgroundColor:"white"}}>
                            <h5>Send a Message</h5>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='John Doe'/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder='johndoe@example.com'/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Message'/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact
