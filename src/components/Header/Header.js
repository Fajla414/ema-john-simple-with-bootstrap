import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} className='img-fluid' alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link active  text-light fw-bold" aria-current="page" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  text-light fw-bold" aria-current="page" href="/review">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  text-light fw-bold" aria-current="page" href="/manage">Manage Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;