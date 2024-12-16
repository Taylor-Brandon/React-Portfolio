import React, { useState } from 'react';

export default function Skills() {
    const [languages] = useState(['HTML,', 'CSS,', 'Javascript,', 'Python']);
    const [frameworks] = useState(['React,', 'Node.js,', 'Express,', 'Handelbars']);
    const [databases] = useState(['MongoDB,', 'SQL']);
    const [others] = useState(['PWA,', 'APIs (Server-Side, Third Party, Web),', 'OOP,', 'MVC,', 'ORM']);

    return (
        <div className='skills-section'>
            <h3 className='skills-headers' id='skill-header'>Skills</h3>
            <div className='central-line'></div>
            <div className='lang'>
                <h3 className='skills-headers'>-Languages | </h3>
                <ul className='lang-list'>
                    {languages.map((language, index) => (
                        <li className='lang-items' key={index}>{language}</li>
                    ))
                }
            </ul>
        </div>
        <div className='frame-area'>
        <div className='frame'>
            <h3 className='skills-headers'> | Frameworks- </h3>
            <ul className='frame-list'>
                {frameworks.map((framework, index) => (
                    <li key={index} className='frame-items'>{framework}</li>
                ))}
            </ul>
        </div>
        </div>
        <div className='data-section'>
        <div className='database'>
            <h3 className='skills-headers'>-Databases | </h3>
            <ul className='data-list'>
                    {databases.map((database, index) => (
                        <li key={index} className='data-items'>{database}</li>
                    ))}
                    </ul>
        </div>
        </div>
        <div className='other-section'>
        <div className='others'>
            <h3 className='skills-headers' id='other-header'> | Other- </h3>
            <ul className='other-list'>
            {others.map((other, index) => (
                <li key={index} className='other-items'>{other}</li>
            ))}
            </ul>
        </div>
        </div>
    </div>
    )
 }