import React from "react";
import "../components/VirtualCard.css";
import chip_wifi from "../assets/chip_wifi.png";
import mastercard from "../assets/mastercard.png";

function VirtualCard() {
  return (
    <div className="wrapper shadow-lg">
      <div className="card">
        <div className="front">
          <p className="upper-text">CARD NUMBER</p>
          <h1 className="lower-text card-no">4324 5433 9382 1030</h1>
          <img className="w-24 chip" src={chip_wifi} alt="Chip" />
          <p className="upper-text">EXPIRATION DATE</p>
          <p>03/24</p>
          <div className="mastercard">
            <p className="lower-text">John Doe</p>
            <img className="w-24" src={mastercard} alt="Chip" />
          </div>
        </div>
        <div className="back">
          <div className="bar"></div>
          <div className="pattern">
            <div className="big-pattern">
              <p>123</p>
            </div>
            <div className="small-pattern"></div>
          </div>
          <div className="words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias
            quisquam harum fuga culpa eveniet.
          </div>
          <div className="words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias
            quisquam harum fuga culpa eveniet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualCard;
