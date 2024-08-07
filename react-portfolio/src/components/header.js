import React, { useState } from 'react';
import Info from './info';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';

const Header = () => {
    const [currentLink, setCurrentLink] = useState(<Info />);

    const handleClick = (link) => {
        setCurrentLink(link);
      };

    const renderComponent = () => {
        switch (currentLink) {
            case 'info':
            return <Info />
            case 'portfolio':
            return <Portfolio />
            case 'contact':
            return <Contact />
            case 'resume':
            return <Resume />
         }
    };
    const getLinkStyle = (link) => ({
        color: currentLink === link ? 'red' : 'black',
      });
  return (
<div>
      <nav>
        <h1>Developer Name</h1>
        <ul>
          <li style={getLinkStyle('info')}>
            <button onClick={() => handleClick('info')}>About Me</button>
          </li>
          <li style={getLinkStyle('portfolio')}>
            <button onClick={() => handleClick('portfolio')}>Portfolio</button>
          </li>
          <li style={getLinkStyle('contact')}>
            <button onClick={() => handleClick('contact')}>Contact</button>
          </li>
          <li style={getLinkStyle('resume')}>
            <button onClick={() => handleClick('resume')}>Resume</button>
          </li>
        </ul>
      </nav>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Header;
