import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import UserCard from "../common/cards/userCard/UserCard";
import { IoIosAddCircleOutline } from "react-icons/io";
import profilePic from "../../assets/profile.png";
import logo from "../../assets/logo.png";

const Sidebar = ({ sideBarData }) => {
  const [sidebarContent, setSideBarContent] = useState(sideBarData);
  const user = {
    name: "Monica Greenleaf",
    profilePic: profilePic,
    organization: "Microsoft Inc.",
    isPremium: true,
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <img className="main-logo" src={logo} />
        </div>
        <UserCard user={user} />
        <div className="sidebar-content">
          {sidebarContent.map((item, index) => (
            <Link to={item.link} className="sidebar-item">
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "30px" }}>
          <div className="sidebar-item-wrapper sidebar-item title">
            <Link className="sidebar-item" to={"/predictions"}>
              My Predictions
            </Link>

            <button className="plus-button">
              <IoIosAddCircleOutline />
            </button>
          </div>
          <div className="sidebar-item-wrapper sidebar-item title">
            <div className="sidebar-item">My Datasets</div>

            <Link to={"/datasets"}>
              <button className="plus-button">
                <IoIosAddCircleOutline />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
