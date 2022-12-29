import React from "react";
import { Nav } from "react-bootstrap";
import "../../assets/css/Bars.css";

const LogBar = () => {
  const [auth, setAuth] = React.useState(false);
  return (
    <div className="log-container">
      <div className="log-logo">
        <img
          alt="Alpha Publishing"
          width="153"
          height="40"
          data-src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
          class=" ls-is-cached lazyloaded"
          src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        />
      </div>

      <Nav className="log-menu">
        {auth ? (
          <>
            <Nav.Link href="/">search</Nav.Link>
            <Nav.Link href="/">user name</Nav.Link>
            <Nav.Link href="/">logout</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/" onClick={() => setAuth(true)}>
              login
            </Nav.Link>
            <Nav.Link href="/">register</Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default LogBar;
