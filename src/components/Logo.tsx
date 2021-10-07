import { Component } from "react";

import { Link } from "react-router-dom";

import LogoImage from "../assets/images/logo_polaris.svg";

import "../styles/components/logo.css";

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" className="container">
        <img src={LogoImage} className="logoSVG" alt="logo-polaris" />
        <h1>Polaris</h1>
      </Link>
    );
  }
}
