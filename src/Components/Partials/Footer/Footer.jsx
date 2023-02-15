import React from "react";
import { MainFooter } from "./FooterStyled";
import { RiFacebookBoxLine, RiTwitterLine } from "react-icons/ri";

const Footer = () => {
  return (
    <MainFooter>
      <div className="info">
        <h2>HomeLands</h2>

        <div className="address">
          <p>Øster Uttrupvej 5</p>
          <p>9000 Aalborg</p>
        </div>

        <div className="contact">
          <p>Email: info@homelands.dk</p>
          <p>Telefon: +45 1122 3344</p>
        </div>
      </div>

      <div className="some">
        <RiTwitterLine size={30} />
        <RiFacebookBoxLine size={30} />
      </div>
    </MainFooter>
  );
};

export default Footer;
