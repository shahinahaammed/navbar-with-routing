import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
