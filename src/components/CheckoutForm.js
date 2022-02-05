import React from "react";
import InputGroup from "./InputGroup";

function CheckoutForm() {
  return (
    <form className="flex flex-col" action="/checkout" method="POST">
      <div className="flex justify-between">
        <InputGroup
          type="text"
          name="card-number"
          labelText="Credit Card Number"
        />
        <InputGroup
          type="text"
          name="expiration-date"
          labelText="Expiration Date"
        />
      </div>
      <div className="flex justify-between mt-8">
        <InputGroup
          type="text"
          name="security-code"
          labelText="Security Code"
        />
        <InputGroup type="text" name="postal-code" labelText="Postal Code" />
      </div>
      <label className="checkbox mt-8 ml-10">
        Use this card for next time purchase
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <button
        type="submit"
        className="bg-blue-600 submit-button ml-10 mt-8 py-4 text-white font-bold rounded-md hover:bg-blue-800 transition-colors duration-500 mb-6"
      >
        Add Card
      </button>
    </form>
  );
}

export default CheckoutForm;
