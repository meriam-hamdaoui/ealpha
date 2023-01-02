import React from "react";

const OtherServices = () => {
  return (
    <div className="mat-list" dense>
      <h3 className="mat-subheader" mat-subheader style={{ color: "#4CAF50" }}>
        Other services
      </h3>
      {[
        "/media/frontend/build/1124/assets/images/alpha_learning_white.svg",
        "/media/frontend/build/1124/assets/images/e_alpha_inst_white.svg",
      ].map((el) => (
        <div className="mat-list-item">
          <div className="mat-list-item-content">
            <div className="mat-list-item-ripple mat-ripple" mat-ripple></div>
            <div className="mat-list-text">
              <a className="mat-line" href="/" mat-line target="_blank">
                <img className="footer__service-logo" src={el} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherServices;
