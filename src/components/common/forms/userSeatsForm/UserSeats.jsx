/* UserSeats.jsx */
import React from "react";
import { useState } from "react";
import "./userSeats.css";

const UserSeats = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [usersList, setUserList] = useState([]);

  const handleAddUser = () => {
    setUserList([...usersList, { userName, userEmail, id: new Date() }]);
    setUserName("");
    setUserEmail("");
  };
  console.log("userList", usersList);
  const handleRemoveUser = (id) => {
    let tmp = usersList.filter((user) => user.id !== id);
    setUserList(tmp);
  };
  return (
    <div className="user-seats">
      <h2 className="user-seats-title">User seats</h2>
      <p className="user-seats-subtitle">
        Invite another user from your company to Obviously AI.
      </p>

      <div className="invite-user">
        <div className="user-input">
          <div className="input-field">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
          </div>
        </div>
        <button onClick={handleAddUser} className="add-btn">
          +
        </button>
      </div>
      <h3>Existing users</h3>
      <div className="existing-users">
        {usersList.map((user, id) => {
          return (
            <div className="user-card">
              <div className="user-info">
                <h4>{user.userName}</h4>
                <p>{user.userEmail}</p>
              </div>
              <div className="user-actions admin">
                <span className="icon">&#128104;</span>
                <span className="status admin-status">Admin</span>
                <span
                  onClick={() => handleRemoveUser(user.id)}
                  className="remove admin-remove"
                >
                  X
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="seat-status">
        You have 1 of 5 free seats left. Your card will be charged $10 /mo for
        each additional user thereon.
      </p>
    </div>
  );
};

export default UserSeats;
