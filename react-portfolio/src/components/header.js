import React, { useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import Info from './info';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import '../styles/style.css';

const Header = () => {
  const [currentLink, setCurrentLink] = useState('info');
  const [linksDisplay, setlinksDisplay] = useState(false);

  const handleClick = (link) => {
    setCurrentLink(link);
    setlinksDisplay(false);
  };

  const toggleDisplay = () => {
    setlinksDisplay(!linksDisplay);
  };

  const getLinkStyle = (link) => ({
    color: currentLink === link ? 'red' : 'white',
  });

  return (
    <div>
      <nav>
        <h1 id='nav-name'>Taylor Brandon</h1>
        <i
          id='icon'
          className="bi bi-list"
          onClick={toggleDisplay}
        ></i>
        {linksDisplay && (
          <ul className='links-list'>
            <QueueAnim delay={300} className="demo-content">
              <li key="info" style={getLinkStyle('info')}>
                <a href='#info' style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleClick('info')}>About Me</a>
              </li>
              <li key="portfolio" style={getLinkStyle('portfolio')}>
                <a href='#portfolio' style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleClick('portfolio')}>Portfolio</a>
              </li>
              <li key="contact" style={getLinkStyle('contact')}>
                <a href='#contact' style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleClick('contact')}>Contact</a>
              </li>
              <li key="resume" style={getLinkStyle('resume')}>
                <a href='#resume' style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleClick('resume')}>Resume</a>
              </li>
            </QueueAnim>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
