import React from "react";
import Row from "../components/Row";
import visa from "../assets/visa.png";
import discover from "../assets/discover.png";
import paypal from "../assets/paypal.png";
import VirtualCard from "../components/VirtualCard";

function Landing() {
  return (
    <div className="flex flex-col mt-20 px-12">
      <hr className="border-t border-gray-400" />
      <Row>
        <div>
          <h1 className="font-bold text-2xl">Payment Information</h1>
          <p className="text-gray-500">Choose your method of payment.</p>
        </div>
        <ul className="flex">
          <li>
            <img className="h-8" src={visa} alt="Visa" />
          </li>
          <li>
            <img className="h-8 ml-8" src={discover} alt="Visa" />
          </li>
          <li>
            <img className="h-8 ml-12" src={paypal} alt="Visa" />
          </li>
        </ul>
      </Row>
      <Row>
        <VirtualCard />
        <div>
          <h1>Form</h1>
        </div>
      </Row>
    </div>
  );
}

export default Landing;
