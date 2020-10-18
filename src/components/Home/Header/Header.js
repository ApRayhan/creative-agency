import React from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <HeaderBottom />
    </header>
  );
};

export default Header;