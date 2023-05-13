import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="https://www.xivtech.io./logo.svg" alt=""></img>
        <img src="https://www.xivtech.io./Text.svg" alt=""></img>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-item">Services</div>
        <div className="nav-menu-item">Career</div>
        <div className="nav-menu-item">About</div>
        <div className="nav-menu-item">Contact</div>
        <div className="nav-menu-item nav-btn">Let's Talk</div>
      </div>
    </div>
  );
}