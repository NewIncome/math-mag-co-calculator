import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="nav">
    <div className="logo">Math Magicians</div>
    <div className="links">
      <Link to="/" className="link">Home</Link>
      <span> | </span>
      <Link to="/calculator" className="link">Calculator</Link>
      <span> | </span>
      <Link to="/dayquote" className="link">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
