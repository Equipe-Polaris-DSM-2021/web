import React from	 'react';

import '../styles/components/logo.css';

import LogoImage from "../assets/images/logo_polaris.svg"
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="container">
      <img src={LogoImage} className="image" alt="logo-polaris" />
      <h1>Polaris</h1>
    </Link>
  );
}