import React from 'react';
import Readme from '../images/readme.png';
import Notes from '../images/Notes.png';
import Commerce from '../images/commerce.png';
import Employee from '../images/emp.png';
import Planner from '../images/planner.png';
import Blog from '../images/blog.png';
import { Carousel } from 'antd';

const contentStyle = {
    height: '50px',
    lineHeight: '160px',
    textAlign: 'center',
  };

export default function Portfolio() {
    return (
        <div className='projects'>
    <Carousel autoplay>
       
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/ReadmeFile-Generator'>
                <img id='readme' src={Readme} alt='Readme project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Notes-App'>
                <img id='notes' src={Notes} alt='Notes app project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/E-Commerce'>
                <img id='commerce' src={Commerce} alt='E-commerce project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Employee-Database'>
                <img id='employee' src={Employee} alt='Employee database project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Blog-Website'>
                <img id='blog' src={Blog} alt='Blog project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
            </a>
        </div>
    </Carousel>
    </div>
    );
}
