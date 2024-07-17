// src/components/UserCard.js
import React from "react";
import "./userCard.css";
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.profilePic}
        alt={`${user.name}'s profile`}
        className="profile-pic"
      />
      <div className="user-details">
        <h3>{user.name}</h3>
        <p>{user.organization}</p>
      </div>
    </div>
  );
};

export default UserCard;
