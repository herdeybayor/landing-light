import React from "react";

function InputGroup(props) {
  return (
    <div className="flex flex-col ml-10">
      <label className="mb-2 text-sm" htmlFor={props.name}>
        {props.labelText}
      </label>
      <input
        className="bg-zinc-300 border-2 border-gray-400 focus:ring-1 ring-blue-500 outline-none rounded-md py-4 px-4"
        type={props.type}
        name={props.name}
        id={props.name}
      />
    </div>
  );
}

export default InputGroup;
