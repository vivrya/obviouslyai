/* MembershipForm.jsx */
import React from "react";
import "./membershipForm.css";

const MembershipForm = () => {
  return (
    <div className="membership-form">
      <h2 className="membership-title">Membership</h2>
      <p className="membership-subtitle">
        Switch to another plan or cancel membership.
      </p>

      <div className="current-plan">
        <h3>Current plan</h3>
        <div className="plan-card current">
          <div className="plan-details">
            <h4>Premium</h4>
            <p>Supports 10M rows of data + 5 free user seats</p>
          </div>
          <div className="plan-price">
            <p>$799 /mo</p>
          </div>
        </div>
      </div>

      <div className="other-plans">
        <h3>Other plans</h3>
        <div className="plan-card">
          <div className="plan-details">
            <h4>Basic</h4>
            <p>Supports 500K rows of data + 1 free user seat</p>
          </div>
          <div className="plan-price">
            <p>$299 /mo</p>
          </div>
        </div>

        <div className="plan-card">
          <div className="plan-details">
            <h4>Standard</h4>
            <p>Supports 5M rows of data + 3 free user seats</p>
          </div>
          <div className="plan-price">
            <p>$499 /mo</p>
          </div>
        </div>
      </div>

      <p className="cancel-membership">
        To cancel membership email us at{" "}
        <a href="mailto:info@obviously.ai">info@obviously.ai</a>.
      </p>
    </div>
  );
};

export default MembershipForm;
