import React from "react";
import { Link } from 'react-router-dom'

import Logo from "../assets/logo.png";
import '../styles/header.css';

export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="header__img" />
      </Link>

      <div className="header__link">
        <ul>
          <li>
            <Link to="/" className="header__link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/apropos" className="header__link">
              A propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


