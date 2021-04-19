import React from 'react';
import { NavLink } from "react-router-dom";
import Donate from './Donate';
import img from '../src/Images/Home1.png';
import img1 from '../src/Images/Home2.jpg';
import "./Home.css";

const Home=()  => {
    return(
    <section id="body" className="">

    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-10 mx-auto">
      <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h1 className="display-1">
                Charit<strong>Able</strong>
            </h1>
            <h2 className="my-3">
                Every life is worth saving, every cause is worth donating!
            </h2>
            <div>
                <NavLink to="/fundraiser" class="btn">
                    Start a fundraiser for <strong>FREE</strong>
                </NavLink>
            </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={img} className="img-fluid animated" alt="home img" />
        </div>
        <div className="col-lg-6 order-3 order-lg-3 header-img">
            <img src={img1} className="img-fluid animated" alt="home img" />
        </div>
        <div className="col-md-6 order-4 order-lg-4">
          <div className="blood-search">
            <h2 className="my-4">
                Need blood urgently?
            </h2>
            <div>
                <NavLink to="/app1" className="btn">
                    Search for Donors
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cards">
        <Donate/> 
    </div>
    <br></br>
    <br></br>
    <h3 className="display-6" align="center">Donate Now</h3>
    <div className="container-fluid col-8">
    <div className="card text-center">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="a">Donate</a>
                </li>
            </ul>
        </div>
    <div className="card-body">
        <h5 className="card-title">Help our patients!</h5>
        <p className="card-text">Your blood donation can help our patients recover, your little contribution can save lives!</p>
        <a href="a" className="btn">Donate Now</a>
    </div>
    <div className="card-body">
        <h5 className="card-title">Recovered from Covid-19?</h5>
        <p className="card-text">If you are recovered from a verified Covid-19 diagnosis, the plasma in your blood may contain anti-bodies which will help Covid-19 patients.</p>
        <a href="a" className="btn">Donate Now</a>
    </div>
    </div>
    </div>
    <div className="container"></div>
    <br></br>
    <br></br>
    </div>
    </div>
    </section>
    );
};

export default Home;