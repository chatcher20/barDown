import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Header.scss";
import logo from "../images/️logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img src={logo} alt="app-logo" />{" "}
      </Link>
    </div>
  );
}
