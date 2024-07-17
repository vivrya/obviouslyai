import InputCard from "../common/cards/inputCard/InputCard";
import MembershipForm from "../common/forms/membershipForm/MembershipForm";
import UserSeats from "../common/forms/userSeatsForm/UserSeats";
import "./style.css";
const Settings = () => {
  const formFields = [
    { label: "Name", type: "text", width: "25%" },
    { label: "Company", type: "text", width: "25%" },
    { label: "Email", type: "text", width: "25%" },

    { label: "Current password", type: "password", width: "25%" },
    { label: "New password", type: "password", width: "25%" },
    { label: "Repeat Password", type: "password", width: "25%" },

    { label: "Card number", type: "number", width: "25%" },
    { label: "Expirtaion", type: "date", width: "25%" },
    { label: " CVV", type: "password", width: "10%" },
    { label: "Zip", type: "number", width: "10%" },
  ];
  return (
    <div className="setting-container">
      <h1 className="setting-title">
        All your
        <br />
        <strong>settings in one place.</strong>
      </h1>
      <p className="setting-sub-title">
        Manage account details, billing and users.
      </p>
      <>
        <div className="database-form">
          {formFields.map((field) => (
            <InputCard
              key={field.label}
              label={field.label}
              type={field.type}
              width={field.width}
              // value={formData[field.label.replace(" ", "").toLowerCase()]}
              // onChange={(e) =>
              //   handleInputChange(
              //     field.label.replace(" ", "").toLowerCase(),
              //     e.target.value
              //   )
              // }
            />
          ))}
          <div style={{ display: "flex" }}>
            <div style={{ width: "29%", marginLeft: "10px" }}>
              <MembershipForm />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <UserSeats />
            </div>
          </div>
        </div>
        <div>
          <button className="submit-button">Update all settings</button>
        </div>
      </>
    </div>
  );
};

export default Settings;
