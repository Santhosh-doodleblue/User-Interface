import React from "react";
import "./smart.css";
import Three from "../images/third.jpeg";
import Four from "../images/four.jpeg";

function Smart() {
  return (
    <div>
      <div className="smart-img">
        <div className="smart-container">
          <div className="rows">
            <h5>Easy way to build perfect websites</h5>
            <h2>Smart, Curious, Hands On.</h2>
            <p>
              Lelit, sed do eiusmod tempor incididunt ut labore et dolore magna
              <br></br>
              aliqua. Ut enim minim veniam, quis nostru exercitation ullamco
              <br></br>
              laboris, etsed do eiusmod tempor incididunt ut labore et dolore
              <br></br>
              magna aliqua. Ut enim minim veniam, etaquis nostru
            </p>
          </div>
          <div className="d-flex main-row">
            <div className="row1">
              <h6>Creative Solutions</h6>
              <p>
                Lorem Ipsum is simply text the<br></br> printing and typesetting
                standard <br></br>industry.
              </p>
            </div>
            <div className="row2">
              <h6> Clean Code</h6>
              <p>
                Lorem Ipsum is simply text the<br></br> printing and typesetting
                standard<br></br>
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  dark-container">
        <div className="image-row">
          <img className="dark-image" src={Three} alt="Image-Missing" />
        </div>
        <div className="image-row2 ">
          <h5>Unique digital experiences</h5>
          <h4 className="text-white  ">
            We are a young and<br></br> promising team
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since.
          </p>
          <a href="#">more</a>
        </div>
        <div className="image-row">
          <img className="dark-image" src={Four} alt="./Missing" />
        </div>
        <div className="image-row2 ">
          <h5>Build perfect websites</h5>
          <h4 className="text-white">
            Our products simply provide the<br></br> quality
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since.
          </p>
          <a href="#">more</a>
        </div>
      </div>
    </div>
  );
}

export default Smart;
