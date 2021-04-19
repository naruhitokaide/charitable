import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/Images/Home1.png';

const Card=()  => {
    return(<>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card" >
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/donate_rd" class="btn">Donate Now</NavLink>
  </div>
</div>
</div>
    </>
    );
};

export default Card;