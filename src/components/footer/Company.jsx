import React from "react";

const Company = () => {
  return (
    <div className="mat-list" dense>
      <h3 className="mat-subheader" mat-subheader style={{ color: "#2196F3" }}>
        Company
      </h3>

      {["About us", "Contact us"].map((el) => (
        <div className="mat-list-item">
          <div className="mat-list-item-content">
            <div
              className="mat-list-item-ripple mat-ripple"
              mat-ripple=""
            ></div>
            <div className="mat-list-text">
              <a className="mat-line" href="/" mat-line="">
                {el}
              </a>
            </div>
          </div>
        </div>
      ))}
      <hr style={{ border: "1px transparent" }} />
      <div className="mat-list-item">
        <div className="mat-list-item-content">
          <div className="mat-list-item-ripple mat-ripple" mat-ripple=""></div>
          <div className="mat-list-text">
            <a className="mat-line" href="/" mat-line="">
              Find us on:
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className="footer-social__wrapper mat-list-item">
          <div className="mat-list-item-content">
            <div
              className="mat-list-item-ripple mat-ripple"
              mat-ripple=""
            ></div>
            <div className="mat-list-text">
              <span className="mat-line" mat-line="">
                <a
                  className="footer-social footer-social__facebook mat-button"
                  href="/"
                  mat-button=""
                  target="_blank"
                  tabindex="0"
                  aria-disabled="false"
                >
                  <span className="mat-button-wrapper">
                    <img className="normal" src="" alt="icon" />
                    <img className="over" src="" alt="icon" />
                  </span>
                  <div
                    className="mat-button-ripple mat-ripple"
                    matripple=""
                  ></div>
                  <div className="mat-button-focus-overlay"></div>
                </a>
                <a
                  className="footer-social footer-social__twitter mat-button"
                  href="/"
                  mat-button=""
                  target="_blank"
                  tabindex="0"
                  aria-disabled="false"
                >
                  <span className="mat-button-wrapper">
                    <img className="normal" src="" alt="icon" />
                    <img className="over" src="" alt="icon" />
                  </span>
                  <div
                    className="mat-button-ripple mat-ripple"
                    matripple=""
                  ></div>
                  <div className="mat-button-focus-overlay"></div>
                </a>
                <a
                  className="footer-social footer-social__linkedin mat-button"
                  href="/"
                  mat-button=""
                  target="_blank"
                  tabindex="0"
                  aria-disabled="false"
                >
                  <span className="mat-button-wrapper">
                    <img className="normal" src="" alt="icon" />
                    <img className="over" src="" alt="icon" />
                  </span>
                  <div
                    className="mat-button-ripple mat-ripple"
                    matripple=""
                  ></div>
                  <div className="mat-button-focus-overlay"></div>
                </a>
                <a
                  className="footer-social footer-social__rss mat-button"
                  href="/"
                  mat-button=""
                  target="_blank"
                  tabindex="0"
                  aria-disabled="false"
                >
                  <span className="mat-button-wrapper">
                    <img className="normal" src="" alt="icon" />
                    <img className="over" src="" alt="icon" />
                  </span>
                  <div
                    className="mat-button-ripple mat-ripple"
                    matripple=""
                  ></div>
                  <div className="mat-button-focus-overlay"></div>
                </a>
                <a
                  className="footer-social footer-social__youtube mat-button"
                  href="/"
                  mat-button=""
                  target="_blank"
                  tabindex="0"
                  aria-disabled="false"
                >
                  <span className="mat-button-wrapper">
                    <img className="normal" src="" alt="icon" />
                    <img className="over" src="" alt="icon" />
                  </span>
                  <div
                    className="mat-button-ripple mat-ripple"
                    matripple=""
                  ></div>
                  <div className="mat-button-focus-overlay"></div>
                </a>
              </span>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Company;
