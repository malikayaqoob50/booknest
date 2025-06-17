import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={require('../assets/logo.jpg')} alt="booknest logo" className="logo-image" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booklist">BookList</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" />
        <i className="fa-solid fa-magnifying-glass"></i> 
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="signup">Signup</Link>
      </div>
    </header>
  );
};

export default Header;
