import React from "react";
import Cards from "./Cards";
import "./choose.css";
import Laptop from "../images/laptop.png";
function Choose() {
  return (
    <div>
      <div className="text-center find">
        <h5>Find more creative ideas for your projects</h5>
        <h2>
          Beautiful and easy to understand UI, professional animations and drag
          & drop
        </h2>
      </div>
      <div>
        <Cards />
      </div>
      <div className="container values px-5">
        <div className="row mx-5   ">
          <div className="col-md-6 left-col">
            <h5>Values & Features</h5>
            <h2>Why you choose us?</h2>
            <p>
              1. Beautiful and easy to understand UI, professional animations
              <br></br>
              2. Perfect design & clear code delivered<br></br>
              3. Present your services with flexibleu a massa<br></br>
              4. Find more creative ideas for your projects<br></br>
              5. Unlimited power and customization possibilities
            </p>
          </div>
          <div className="col-md-6">
            <img className="laptop" src={Laptop} alt="/missing" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
