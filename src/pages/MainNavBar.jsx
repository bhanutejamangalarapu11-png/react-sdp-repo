import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MainNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
           KL Event Management System -2500090202
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">
              Registration
            </Link>
          </li>
          <li className="nav-item nav-item-dropdown">
            <button className="nav-link dropdown-btn">
              Login ▼
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/admin-login" className="dropdown-link">
                  Admin Login
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/manager-login" className="dropdown-link">
                  Manager Login
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/customer-login" className="dropdown-link">
                  Customer Login
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavBar;