import React from "react";

const TopHeader = () => {
  return (
    <div className="header__first-row mat-toolbar mat-toolbar-single-row">
      <a routerlink="/" href="/">
        <img
          alt="Alpha Publishing"
          width="170"
          height="50"
          data-src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
          className="header-top-bar__logo"
          src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        />
      </a>
      <span className="toolbar-spacer"></span>
      <form
        className="header-top-bar__search large-screen-only ng-untouched ng-pristine ng-valid"
        noValidate=""
      >
        <div
          className="mdl-textfield mdl-js-textfield mdl-textfield--expandable is-upgraded"
          data-upgraded=",MaterialTextfield"
        >
          <label
            className="mdl-button mdl-js-button mdl-button--icon"
            htmlFor="header-top-bar__search-field"
            data-upgraded=",MaterialButton"
          >
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input
              className="mdl-textfield__input ng-untouched ng-pristine ng-valid"
              id="header-top-bar__search-field"
              name="text"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </form>
      {["username", "logout"].map((el, index) => (
        <a
          key={index}
          className="large-screen-only mat-button ng-star-inserted"
          href="/"
          mat-button=""
          tabIndex="0"
          aria-disabled="false"
        >
          <span className="mat-button-wrapper">{el}</span>
          <div className="mat-button-ripple mat-ripple" matripple=""></div>
          <div className="mat-button-focus-overlay"></div>
        </a>
      ))}
    </div>
  );
};

export default TopHeader;
