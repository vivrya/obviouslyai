// src/components/DatabaseForm.js
import React, { useState } from "react";
import InputCard from "../common/cards/inputCard/InputCard";
import "./style.css";

const formFields = [
  { label: "Display name", type: "text", width: "20%" },
  { label: "Description", type: "text", width: "60%" },
  { label: "Host", type: "text", width: "60%" },
  { label: "Port", type: "text", width: "20%" },
  { label: "Username", type: "text", width: "25%" },
  { label: "Password", type: "password", width: "25%" },
  { label: "Database", type: "text", width: "25%" },
];

const PostgreSql = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    description: "",
    host: "",
    port: "",
    username: "",
    password: "",
    database: "",
  });

  const handleInputChange = (label, value) => {
    setFormData({ ...formData, [label]: value });
  };

  console.log("formData", formData);
  return (
    <>
      <div className="database-form">
        {formFields.map((field) => (
          <InputCard
            key={field.label}
            label={field.label}
            type={field.type}
            width={field.width}
            value={formData[field.label.replace(" ", "").toLowerCase()]}
            onChange={(e) =>
              handleInputChange(
                field.label.replace(" ", "").toLowerCase(),
                e.target.value
              )
            }
          />
        ))}
      </div>
      <div>
        <button className="submit-button">Add this database</button>
      </div>
    </>
  );
};

export default PostgreSql;
