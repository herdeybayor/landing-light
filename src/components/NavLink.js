import React from "react";

function NavLink(props) {
  return (
    <li className="mr-14 hover:text-gray-800 hover:border-gray-800 border-transparent border-b-4 pb-1 cursor-pointer transition-all duration-300">
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

export default NavLink;
