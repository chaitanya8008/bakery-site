import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <nav>
      <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="nav-content">
          <NavLink to="/" className="home">HOME</NavLink>
          <NavLink to="/about">WHO WE ARE</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/events">GIFTING & EVENTS</NavLink>
          <NavLink to="/club">PUDDING CLUB</NavLink>
          <NavLink to="/contactus">CONTACT US</NavLink>
          <div className="icons">
            <NavLink to="/signin">
              <div className="user">
              <i class="fa-solid fa-user"></i>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
