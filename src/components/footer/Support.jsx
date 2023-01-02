import React from "react";

const Support = () => {
  return (
    <div className="mat-list" dense>
      <h3 className="mat-subheader" mat-subheader style={{ color: "#E91E63" }}>
        Support
      </h3>
      {["Terms of use", "Privacy policy", "Player versions"].map((el) => (
        <div className="mat-list-item">
          <div className="mat-list-item-content">
            <div className="mat-list-item-ripple mat-ripple" mat-ripple></div>
            <div className="mat-list-text">
              <a className="mat-line" href="/" mat-line>
                {el}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
