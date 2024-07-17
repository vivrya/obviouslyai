import { IoIosNotificationsOutline } from "react-icons/io";
import "./style.css";

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-actions">
      <IoIosNotificationsOutline />
      <button className="top-bar-button">Upgrade</button>
      <button className="top-bar-button">Sign Out</button>
    </div>
  </div>
);

export default TopBar;
