import React from "react";

const Footer = ({ myName }) => {
  return (
    <footer>
      <i className="far fa-copyright m-2"> {myName}</i>
    </footer>
  );
};

export default Footer;
