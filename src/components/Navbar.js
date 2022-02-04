import React from "react";
import ProfilePicture from "./ProfilePicture";
import NavLink from "./NavLink";

function Navbar() {
  return (
    <ul className="flex justify-end items-center text-md font-bold text-gray-600">
      <NavLink text="TRIPS" />
      <NavLink text="RECENTLY VIEWED" />
      <NavLink text="BOOKINGS" />
      <ProfilePicture />
    </ul>
  );
}

export default Navbar;
