import React from "react";
import "./hero.css";
import ImageLandingPage from "../../assets/logoLanding.png";
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <img src={ImageLandingPage} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h1>Ruang Beasiswa</h1>
          <span>Temukan 1001 Beasiswa dalam satu ruang pintar </span>
        </div>
        <div className="search-hero">
          <input type="text" placeholder="Search..." />
          <button>
            <BsSearch />
          </button>
        </div>
        <div className="bottom">
          <BsPerson />
          <p>
            <strong>1000</strong> user dengan tingkat keberhasilan
            <strong>90%</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
