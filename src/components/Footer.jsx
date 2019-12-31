import React from "react";
import PropTypes from "prop-types";

const Footer = ({ myName }) => {
  return (
    <footer>
      <i className="far fa-copyright m-2"> {myName}</i>
    </footer>
  );
};

Footer.propTypes = {
  myName: PropTypes.string.isRequired
};

export default Footer;
