import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer">
        {/* Footer content */}
        <div className="footer-nav">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">WHO WE ARE</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/events">GIFTING & EVENTS</NavLink>
          <NavLink to="/club">PUDDING CLUB</NavLink>
        </div>
        <div className="footer-bar">
          Copyright © 2024 Petite Palate. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
