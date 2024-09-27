import React from 'react';

interface NavItemProps {
  icon: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
  return (
    <div className="nav-item">
      <img src={`${icon}-icon.png`} alt={text} className="nav-icon" />
      <span className="nav-text">{text}</span>
    </div>
  );
};

export default NavItem;