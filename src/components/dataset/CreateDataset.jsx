import { useState } from "react";
import { GoDatabase } from "react-icons/go";
import PostgreSql from "../datasetForms/PostgreSql";
import "./style.css";

const CreateDataset = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [databaseSelection, setDatabaseSelection] = useState();

  const handleButtonClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="container">
      <h1 className="dataset-title">
        Add datasets
        <br />
        <strong>to your Obviously account.</strong>
      </h1>
      <p className="dataset-subtitle">
        Add dataset for making predictions. We don’t and will never store your
        data.
      </p>

      <input
        type="file"
        id="file-input"
        accept=".csv"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        className="dataset-upload-button-test"
        onClick={handleButtonClick}
      >
        Upload a CSV
      </button>
      {selectedFile && <p className="file-name">{selectedFile.name}</p>}

      <div className="or-separator">OR</div>

      <div className="database-section">
        <h3>Connect a database</h3>
        <p>
          In order to ensure ObviouslyAI has access to your database, please
          whitelist our IP address
          <span className="ip-address">104.198.187.43</span> on your database
          firewall.
        </p>

        <div className="database-options">
          <div onClick={() => setDatabaseSelection("mysql")}>
            <GoDatabase size={50} />
            <span>MySQL</span>
          </div>

          <div
            onClick={() => setDatabaseSelection("postgre")}
            style={{
              marginLeft: "15px",
              background: databaseSelection === "postgre" ? "#49d373" : "white",
            }}
          >
            <GoDatabase size={50} />
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      {databaseSelection === "postgre" && <PostgreSql />}
    </div>
  );
};

export default CreateDataset;
