import React from "react";

import Pixel from "./Card";

import "./home.css";

const Home = () => (
  <>
    <div className="wrap">
      <div className="container text-white">
        <div className="py-4">
          <h3 className="studio">
            <a href="/">STUDIO </a>
          </h3>
        </div>
      </div>
      <div className="container center px-5   text-white ">
        <div className="row mx-5 d-flex align-items-center h-75 ">
          <div className="ps-4 col-md-6 ">
            <h5 className="work">WE WORK HARD, WE PLAY HARD</h5>
            <h1 className="create">
              We Create <br></br> Elegant Solutions
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Pixel />
      </div>
    </div>
  </>
);

export default Home;
