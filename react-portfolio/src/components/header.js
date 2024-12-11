import React, { useState } from 'react';

const Header = () => {
  return (
    <div className='navbar-content'>
      <nav>
          <ul className='navbar-list'>
            <li href="info" className='nav-item'>Info</li>
            <li href="projects" className='nav-item'>Projects</li>
            <li href="resume" className='nav-item'>Resume</li>
            <li href="contact" className='nav-item'>Contact</li>
          </ul>
      </nav>
    </div>
  );
};

export default Header;
