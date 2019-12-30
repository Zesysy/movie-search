import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="appHeader">{title}</h1>
    </header>
  );
};

export default Header;
