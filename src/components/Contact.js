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
        <div className="container mt-5 mb-5" style={{ marginTop: "20px" }}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title fs-3">How Can We Help?</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
