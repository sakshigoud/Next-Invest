import React from "react";
import { useState } from "react";
const Footer = () => {
    const [email, setEmail] = useState('');
    const url = import.meta.env.VITE_BASE_URL
    async function sendEmail() {
        try {
            if (!email) {
                alert('Please enter your email');
                return;
            }
            const response = await fetch(`${url}/api/newsletter/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
            if (!response.ok) {
                alert('Failed to subscribe newsletter');
            }
            alert('Newsletter subscribed successfully');
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <footer className="bg-light py-5 " >
            <div className="container my-5 " style={{ height: "650px", backgroundColor: "#E7DDFF" }}>
                <div className="row">
                    <div className="col-md-3">
                        <h5 style={{ fontSize: '1.8rem', marginTop: "12%" }}>Next Invest</h5>
                        <p className="text-muted" style={{ fontSize: '1rem' }}>
                            Copyright © 2020. Logipsum. All rights reserved.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5 style={{ fontSize: '1.8rem', marginTop: "9%" }}>Services</h5>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '1.1rem' }}>Email Marketing</li>
                            <li style={{ fontSize: '1.1rem' }}>Campaigns</li>
                            <li style={{ fontSize: '1.1rem' }}>Branding</li>
                            <li style={{ fontSize: '1.1rem' }}>Offline</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5 style={{ fontSize: '1.8rem', marginTop: "9%" }}>About</h5>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '1.1rem' }}>Our Story</li>
                            <li style={{ fontSize: '1.1rem' }}>Benefits</li>
                            <li style={{ fontSize: '1.1rem' }}>Team</li>
                            <li style={{ fontSize: '1.1rem' }}>Careers</li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-8">
                        <h6 style={{ fontSize: '1.4rem' }}>Subscribe to our newsletter</h6>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Email address"
                                style={{ fontSize: '1.2rem', padding: '1rem' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <button className="btn btn-danger" type="submit" onClick={sendEmail} style={{ fontSize: '1.2rem', padding: '1rem' }}>
                                <span>&#10140;</span>
                            </button>
                        </form>
                    </div>


                    <div className="col-md-4 text-end">

                        <a href="#" className="text mx-3" style={{ fontSize: '1.8rem' }}>
                            <i className="bi bi-facebook" ></i>
                        </a>
                        <a href="#" className="text mx-3" style={{ fontSize: '1.8rem' }}>
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text mx-3" style={{ fontSize: '1.8rem' }}>
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


