import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="header">
      <h1>
        <span>GO</span>DELIVER
      </h1>
      <div className="nav">
        <ul>
          <li>
            <Link to="/Howit">HOW IT WORKS</Link>
          </li>
          <li>
            <Link to="/customer">CUSTOMER EXPERIENCE</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
