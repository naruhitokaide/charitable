import React from 'react';
import Feedback from './Feedback';
import img3 from '../src/Images/Contact.jpg';

const Contact=()  => {
    return(
    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="d-flex align-items-center justify-content-center">
        <img src={img3} className="img-fluid animated w-25" alt="Contact img"/>
    </div>
    </div>
    <Feedback/>
    </div>
    </div>
    );
};

export default Contact;