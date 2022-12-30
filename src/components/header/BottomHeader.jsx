import React from "react";

const BottomHeader = () => {
  return (
    <div className="header__second-row large-screen-only mat-toolbar mat-toolbar-single-row">
      {["Home", "Dashboard", "My Lessons", "Projects", "Support", "Help"].map(
        (el, index) => (
          <a
            key={index}
            className="header__main-menu-item mat-button ng-star-inserted"
            href={
              el === "Dashboard"
                ? "/dashboard"
                : el === "My Lessons"
                ? "/lessons"
                : "/"
            }
            mat-button
            tabIndex="0"
            aria-disabled="false"
          >
            <span className="mat-button-wrapper">{el}</span>
            <div className="mat-button-ripple mat-ripple" matripple=""></div>
            <div className="mat-button-focus-overlay"></div>
          </a>
        )
      )}
      <span className="toolbar-spacer"></span>
      <a className="company-logo ng-star-inserted" href="/" title="Dashboard">
        <img
          alt="Dashboard"
          width="280"
          height="80"
          className="logo-img"
          src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        />
      </a>
    </div>
  );
};

export default BottomHeader;
