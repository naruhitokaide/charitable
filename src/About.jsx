import React from 'react';
import { NavLink } from "react-router-dom";
import img2 from '../src/Images/About.jpg';

const About=()  => {
    return(
    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-10 mx-auto">
      <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h1 className="display-1">
                Charit<strong>Able</strong>
            </h1>
            <br></br>
            <h5 className="my-3">
                We are a small group of students trying to help the people in need. In this pandemic, to help and support your community and show empathy towards others became more important. We want people to have a medium to help our community.
            </h5>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={img2} className="img-fluid animated" alt="About img" />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container-fluid">
      <div class="card">
        <h5 class="card-header">Donate for our team</h5>
        <div class="card-body">
        <h5 class="card-title">Why?</h5>
        <p class="card-text">All the money donated by you are used for the specific causes. We do not take even a single penny from that fund which you whole-heartedly donate for our patients. But, you can donate a small amount for our team, which will be used for this project and encourage our developers.</p>
        <NavLink to="/donate_rd2" class="btn">Donate</NavLink>
      </div>
      </div>
      <br></br>
      <br></br>
      <div className="container-fluid"></div>
    </div>
    </div>
    </div>
    </div>
    );
};

export default About;