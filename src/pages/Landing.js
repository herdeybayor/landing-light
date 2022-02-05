import React from "react";
import Row from "../components/Row";
import visa from "../assets/visa.png";
import discover from "../assets/discover.png";
import paypal from "../assets/paypal.png";
import VirtualCard from "../components/VirtualCard";
import CheckoutForm from "../components/CheckoutForm";
import Hr from "../components/Hr";

function Landing() {
  return (
    <div className="flex flex-col mt-20 px-12">
      <Hr />
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
        <CheckoutForm />
      </Row>
      <Hr />
      <Row>
        <div className="font-bold text-xl">
          <h1>Subtotal</h1>
          <h1>Estimated TAX</h1>
          <h1>
            Promotional Code: <span className="text-gray-400">Z4KXLM9A</span>
          </h1>
        </div>
        <div className="font-bold text-right text-xl mb-10">
          <h1>&#8358;2,497.00</h1>
          <h1>&#8358;119.64</h1>
          <h1>&#8358;-60.00</h1>
        </div>
      </Row>
      <Hr />
      <div className="flex justify-between items-center mt-8">
        <button className="bg-blue-600 submit-button py-4 text-white px-16 font-bold rounded-sm hover:bg-blue-800 transition-colors duration-500">
          Complete Payment
        </button>
        <h1 className="font-extrabold text-2xl">TOTAL: &#8358;2556.64</h1>
      </div>
    </div>
  );
}

export default Landing;
