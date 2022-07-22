import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-left">
        <h4>EXQISITE</h4>
        <div className="logo" onClick={() => navigate("/")}>
          COLƎFIT
        </div>
        <h4>DESIGNS</h4>
      </div>
      <div className="footer-right">
        <div className="footer-right-items">
          <div className="socials">
            <a href="http://facebook.com/longevity_cole" target="_blank">
              <Facebook />
            </a>
            <a href="http://instagram.com/colefit_designs" target="_blank">
              <Instagram />
            </a>
            <a href="http://twitter.com/longevity_cole" target="_blank">
              <Twitter />
            </a>
            <a href="http://wa.link/a6x33m" target="_blank">
              <WhatsApp />
            </a>
          </div>
          <div>
            <Phone /> +234 813 321 4524
          </div>
          <div>
            <MailOutline /> colefitd@gmail.com
          </div>
          <div>
            <Room /> Shop 5, Showcase Complex, Building 1, 3rd Cementery road,
            by Urubi Street, Benin City. Edo. Nigeria
          </div>
        </div>
        <div className="footer-right-title">
          <h4>©2022 COLEFIT DESIGNS</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
