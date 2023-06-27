import React, { useState } from 'react'
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        // <div className="container mt-5 mb-5" style={{ marginTop: "20px" }}>
        //     <div className="card">
        //         <div className="card-body">
        //             <h5 className="card-title fs-3">How Can We Help?</h5>
        //             <form onSubmit={handleSubmit}>
        //                 <div className="form-group">
        //                     <label htmlFor="name">Name</label>
        //                     <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="email">Email</label>
        //                     <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="message">Message</label>
        //                     <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        //                 </div>
        //                 <button type="submit" className="btn btn-dark mt-3">Submit</button>
        //             </form>
        //         </div>
        //     </div>
        // </div>

        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div class="card-body p-5 text-center">
                                <form onSubmit={handleSubmit}>
                                    <div class=" mt-md-0 pb-5">
                                        <h2 class="fw-bold mb-3 text-uppercase">How Can We Help?</h2>
                                        <div class="form-outline form-white mb-3">
                                            <label class="form-label" htmlForfor="Name">Name</label>
                                            <input type="text" id="name" className="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} required />
                                        </div>

                                        <div class="form-outline form-white mb-3">
                                            <label class="form-label" htmlFor="typePasswordX">Email</label>
                                            <input type="email" class="form-control form-control-lg"
                                                id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Message</label>
                                            <textarea className="form-control form-control-lg" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

                                        </div>
                                        <button class="btn btn-outline-light btn-lg px-5 mt-2" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
