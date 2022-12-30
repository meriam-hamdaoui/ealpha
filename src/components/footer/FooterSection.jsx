import React from "react";
import "../../assets/css/Footer.css";
import Company from "./Company";

const FooterSection = () => {
  return (
    <footer>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--3-col footer-first-column">
          <a href="/">
            <img
              alt="Alpha Publishing"
              width="170"
              height="50"
              data-src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
              className="footer__logo"
              src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
            />
          </a>
          <p>
            Alpha Publishing is a world-leading educational software publisher
            and e-learning technology provider.
          </p>
        </div>
        <Company />
        <div className="mdl-cell mdl-cell--3-col footer-third-column"></div>
        <div className="mdl-cell mdl-cell--3-col footer-fourth-column"></div>
      </div>
      <div className="footer-copyright">
        <span>Copyright © 2018-2022 Alpha Publishing</span>
      </div>
    </footer>
  );
};

export default FooterSection;
