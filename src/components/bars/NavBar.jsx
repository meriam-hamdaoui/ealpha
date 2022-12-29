import React from "react";
import "../../assets/css/Bars.css";

const NavBar = () => {
  return (
    <div className="nvBar">
      <div className="navBar-menu"></div>
      <div className="log-logo">
        <img
          alt="Alpha Publishing"
          width="220"
          height="70"
          data-src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
          class="ls-is-cached lazyloaded"
          src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        />
      </div>
    </div>
  );
};

export default NavBar;
