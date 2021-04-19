import React from 'react';
import { NavLink } from "react-router-dom";
import "./Donate_rd.css";
import web from '../src/Images/Home1.png';

const Donate_rd=()  => {
    return(
        <div className="row">
        <div className="col-10 mx-auto">
        <div class="container-fluid">
                <div>
                    <h3 className="display-6" align="center">Your story</h3>
                    <div class="d-flex align-items-center justify-content-center">
                    <img src={web} class="top-img w-50 h-25" alt="..."/>
                    </div>
        
            <div class="container-share">
            <div className="text-center">
                <NavLink to="/donate_rd" class="btn btn-lg" id="Share">Share</NavLink>
                <NavLink to="/donate_rd2" class="btn btn-lg" id="Donate">Donate</NavLink>
            </div>
            </div>    
            <div class="container-fluid">
                    <div className="container-fluid col-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container"></div>
            </div>
            <br></br>
            <br></br>
      </div>
    </div>
    </div>
    </div>
    );
};
export default Donate_rd;