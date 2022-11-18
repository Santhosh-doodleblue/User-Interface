import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiPriceTag, GiPencilBrush } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";
import "./card.css";

const Pixel = () => {
  const data = [
    {
      icon: <GiPencilBrush />,
      title: "Pixel Perfect Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    },
    {
      icon: <HiOutlineClipboardDocumentList />,
      title: "Full Documentation",
      text: "0Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    },
    {
      icon: <GiPriceTag />,
      title: "Reasonable Pricing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    },
    {
      icon: <BiHappy />,
      title: "Happy clients",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    },
  ];
  return (
    <div className="container px-5 d-flex up">
      {data.map(({ icon, title, text }) => {
        return (
          <div className="design text-center ">
            <span>
              <h5>{icon}</h5>
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pixel;
