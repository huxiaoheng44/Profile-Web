import React from "react";
import "./Profile.css"
import InfoCard from "../components/InfoCard";

const Profile = () => {
  return (
    <div>
      {/* avatar and name part */}
      <div className="profile-avatar">
        <div className="avatar-container">
          <img className="avatar-image" src={process.env.PUBLIC_URL + '/avatar.jpg'} alt="Avatar"/>
        </div>
        <div className="avatar-name">
          Xiaoheng Hu
        </div>
      </div>

      <hr className="Profile-line" />

      {/* info part */}
      <div className="info-container">
        <InfoCard field="E-mail" value="huxiaoheng33@gmail.com"/>
        <InfoCard field="Telephone" value="+49 1623384004"/>
        <InfoCard field="Residence" value="Munich"/>
        <InfoCard field="Major" value="Informatics"/>
        <InfoCard field="School" value="Technical University of Munich"/>
        <InfoCard field="Hobby" value="Basketball/Ping-Pong"/>
      </div>
    </div>
  );
};
    

export default Profile;
