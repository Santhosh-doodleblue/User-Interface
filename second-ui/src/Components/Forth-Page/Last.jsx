import React from "react";
import Laptop from "./laptop";
import "./last.css";

function Last() {
  return (
    <>
      <div className="last">
        <div className="last-container">
          <h5 className="ps-2">We design brand & digital experience</h5>
          <h2 className="ps-2 mt-3">
            Awesome & skilled <br></br> Designers.
          </h2>
          <div className="container  best d-flex flex-wrap ">
            <div className="col-md-4 best-col mb-4">
              <h6>Best Quality</h6>
              <p>
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
            <div className="col-md-4 best-col">
              <h6>Responsibility</h6>
              <p>
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
            <div className="col-md-4 best-col1">
              <h6>Processing Speed</h6>
              <p>
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
            <div className="col-md-4 best-col1">
              <h6>Lowest Prices</h6>
              <p>
                Lorem Ipsum is simply text the printing and typesetting standard
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Last;
