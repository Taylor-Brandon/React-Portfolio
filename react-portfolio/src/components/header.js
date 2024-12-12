import React, { useState } from 'react';

const Header = () => {
  return (
    <div className='navbar-content'>
      <nav>
          <ul className='navbar-list'>
            <li className='nav-item'><a href="#info">Info</a></li>
            <li className='nav-item'><a href="#projects">Projects</a></li>
            <li className='nav-item'><a href="#resume">Resume</a></li>
            <li className='nav-item'><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    </div>
  );
};

export default Header;
