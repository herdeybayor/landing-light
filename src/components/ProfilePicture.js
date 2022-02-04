import React from "react";
import profile_pic from "../assets/profile_pic.png";

function ProfilePicture() {
  return (
    <img className="w-16 h-16 cursor-pointer" src={profile_pic} alt="Avatar" />
  );
}

export default ProfilePicture;
