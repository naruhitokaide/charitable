import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()  => {
    return(

    <>
    <div className="container-fluid nav_bg">
    <div className='row'>
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            CharitAble
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav"> 

                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link" to="/donate">Donate</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    </div>
    </>

    );
};

export default Navbar;