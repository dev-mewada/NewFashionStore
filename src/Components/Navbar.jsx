
import React from 'react';
import './Navbar.css';

import {
  Search,
  ShoppingBag,
  Person,
  KeyboardArrowDown,
  Menu
} from '@mui/icons-material';

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <h2>Fashion<span>Store.</span></h2>
      </div>

      {/* Categories */}
      <div className="categories">
        <button className="category-btn">
          All Categories
          <KeyboardArrowDown />
        </button>

        <div className="dropdown">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Men Accessories</a>
          <a href="#">Women Accessories</a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for products..."
        />

        <button>
          <Search />
        </button>
      </div>

      {/* Right Icons */}
      <div className="nav-icons">

        <button className="icon-btn" title="Shopping Cart">
          <ShoppingBag />
          <span className="cart-count">0</span>
        </button>

        <button className="icon-btn login-btn" title="Login">
          <Person />
          <span>Login</span>
        </button>

      </div>

      {/* Mobile Menu */}
      <button className="mobile-menu">
        <Menu />
      </button>

    </nav>
  );
}

export default Navbar;
