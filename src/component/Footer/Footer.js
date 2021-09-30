import React from "react";
import PaymentLogo from "../../Asset/SSL-Commerz-Pay-With-logo.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="payment-logo">
        <img src={PaymentLogo} alt="PaymentLogo" />
      </div>
      <div className="footer-info">
        <div className="page-info">
          <span>Pages</span>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
        </div>
        <div className="help-info">
          <span>Help</span>
          <span>Privacy Policy</span>
          <span>Trail & Exchange Policy</span>
          <span>Contact Us</span>
        </div>
        <div className="contact-info">
          <span>Contact Information</span>
          <span><b>Main Office:</b> Rampura Main road Kacha Bazar, Dhaka 1230</span>
          <span>
            <b>Uttara Branch:</b> House **, Road *, Sector *, Uttara, Dhaka 1230
          </span>
          <span><b>Phone:</b> 01621753***</span>
        </div>
      </div>
        <div className="copyright">
            <div>copyright © 2021 CRWN Cloth</div>
            <div>Powered by CRWN Cloth</div>
        </div>
    </div>
  );
};

export default Footer;
