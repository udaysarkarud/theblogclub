import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white fw-bolder fs-2" to='/'>
                            the<span className='text-primary'>Blog</span>Club                            
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>

                                </li>


                                <li className="nav-item">
                                    <Link to="/addnewpost" className="nav-link">Add New Post</Link>
                                </li>
                            </ul>

                            <div>
                               

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;