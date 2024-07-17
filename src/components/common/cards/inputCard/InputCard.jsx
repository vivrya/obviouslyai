// src/components/InputCard.js
import React from "react";
import "./inputCard.css";

const InputCard = ({ label, width, type, value, onChange }) => {
  return (
    <div className="input-card" style={{ width }}>
      <div className="input-card-content">
        <label className="input-label">{label}</label>
        <input
          className="input-field"
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputCard;
