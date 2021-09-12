import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import DomainIcon from "@material-ui/icons/Domain";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-subscription-heading">
        Jak się z nami skontaktować? To proste{" "}
      </p>
      <div class="grid-container">
        <div class="footer-link-items">
          <ContactMailIcon />
          <h2>e-mail: stolarscy@wp.pl</h2>
          <h2>e-mail: stolarscy@gmail.com</h2>
        </div>
        <div class="footer-link-items">
          <ContactPhoneIcon />
          <h2>tel: 07479325839</h2>
          <h2>tel: 07481897825</h2>
          <h2>tel/fax: 0818820232</h2>
        </div>
        <div class="footer-link-items">
          <DomainIcon />
          <h2> Odwiedz nas </h2>
          <h2>Dąbrówka 74</h2>
          <h2>24-120 Kazimierz Dolny</h2>
        </div>
        <div class="footer-link-items">
          <Link
            class="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>
          <h2>Facebook</h2>
        </div>
        <div class="footer-link-items">
          <Link
            class="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <h2>Instagram</h2>
        </div>
        <div class="footer-link-items">
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
          <h2>Twitter</h2>
        </div>
      </div>
    </div>
  );
}
export default Footer;
