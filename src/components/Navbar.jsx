import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>E-Wallet</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topup">Top Up</Link></li>
        <li><Link to="/transfer">Transfer</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;