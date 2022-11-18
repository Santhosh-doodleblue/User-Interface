import React from "react";
import "./cards.css";

function Cards() {
  const images = [
    {
      img: "./card-images/five.jpeg",
    },
    {
      img: "./card-images/six.jpeg",
    },
    {
      img: "./card-images/seven.jpeg",
    },
    {
      img: "./card-images/eight.jpeg",
    },
    {
      img: "./card-images/nine.jpeg",
    },
    {
      img: "./card-images/ten.jpeg",
    },
    {
      img: "./card-images/eleven.jpeg",
    },
    {
      img: "./card-images/twelve.jpeg",
    },
  ];
  return (
    <div>
      <div className="container mb-5  px-5">
        <div className="row  mx-3">
          {images.map((image) => {
            return (
              <div className="col-lg-3 col-md-6  col-sm-12 image-col">
                <img className="image-map " src={image.img} alt="missing" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
