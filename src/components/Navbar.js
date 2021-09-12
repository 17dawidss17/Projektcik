import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Stolarscy
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-links" onClick={closeMobileMenu}>
                Lista Postaci
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                O mnie
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/licznik"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Licznik
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/stoper"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Stoper
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Rejestracja
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Logowanie
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"> Zaloguj się </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
