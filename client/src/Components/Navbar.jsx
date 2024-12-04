import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" >
                    <a className="navbar-brand" href="#">
                        <img
                            src="images/4.svg"
                            alt="Logo"
                            style={{
                                width: '150px',
                                margin: '15px',
                                paddingLeft: '10px'
                            }}
                        />
                    </a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Investment opportunities
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    How it works
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link dropdown" href="#">
                                    About us
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="btn btn-success" href="http://investmentadminpanel.s3-website.ap-south-1.amazonaws.com/">Admin panel</a>
                            </li>



                            <li className="nav-item ms-2">
                                <a className="btn btn-success" href="#">Login</a>
                            </li>



                            <li className="nav-item ms-2">
                                <a className="btn btn-outline-danger" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-10">
                <div
                    className="sticky-background d-flex justify-content-center align-items-center"
                    style={{
                        backgroundImage: 'url("/images/3.svg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: "90vh",
                        position: 'relative',

                    }}

                >


                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="/">
                                <img
                                    src="/images/5.svg"
                                    alt="Logo"
                                    className="logo"
                                    style={{
                                        width: '80vh',
                                        marginRight: '100px',
                                    }}
                                />
                                <div className="overlay-text">
                                    <h1 style={{ marginTop: '100px' }}>Meaningful investments in <br /> Main Street businesses </h1>
                                    <p>Browser vetted investment offerings in <br /> communities all over the US</p>
                                    <button className='btn btn-success'>Get Started</button>
                                </div>
                            </a>

                        </nav>

                    </div>

                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <img
                            src="/images/6.svg"
                            alt="Logo"
                            className="img-fluid"
                            style={{
                                width: '50vh'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
