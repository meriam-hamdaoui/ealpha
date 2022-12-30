import React from "react";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";
import "../../assets/css/Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <TopHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
