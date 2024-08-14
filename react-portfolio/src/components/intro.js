import React, { useState } from 'react';

export default function Intro() {
    const [currentLink, setCurrentLink] = useState('info');
    const [linksDisplay, setlinksDisplay] = useState(false);

  const handleClick = (link) => {
    setCurrentLink(link);
    setlinksDisplay(false);
  };

    return (
        <div>
            <h1 id='name'>HI, I'M TAYLOR</h1>
            <a id='intro-btn' href='#info' onClick={handleClick}>Get to know me</a>
        </div>
    );
}