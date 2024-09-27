import React from 'react';
import NavItem from './user_nav';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="app-title">{title}</h1>
      <nav className="nav-container">
      <a href="#home" className="nav-item">Home</a>
                    <a href="#payments" className="nav-item">Payments</a>
                    <a href="#budget" className="nav-item">Budget</a>
                    <a href="#card" className="nav-item">Card</a>
      </nav>
    <div className="user-container">
      <div className="notification-placeholder">Notifications</div>
      <div className="account-circle"></div>
      <span className="user-text">User</span>
    </div>
    </header>
  );
};

export default Header;