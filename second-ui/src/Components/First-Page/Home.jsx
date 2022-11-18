import React from "react";
import Smart from "../Second-Page/Smart";
import Card from "./Card";
import "./home.css";

function Home() {
  return (
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
          <Card />
        </div>
      </div>

      {/* <div className="lower container">
        <Card />
      </div> */}
    </>
  );
}

export default Home;
