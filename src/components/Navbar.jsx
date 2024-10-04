import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav-container'>
      <nav className="navbar">
      <h1 className="navbar-title"> The Cozy Oven</h1>
      <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      </ul>
      </nav>
      <div className='nav2'>
      <ul className='home-nav'>
      <li><a href='#feature'>Specials</a></li>
      <li><a href='#about'>About Dorcas</a></li>
      <li><a href='#contacts'>Contacts</a></li>
      <li><a href='#services'>Services</a></li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
