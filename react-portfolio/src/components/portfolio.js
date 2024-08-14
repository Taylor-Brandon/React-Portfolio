import React from 'react';
import Readme from '../images/readme.png';
import Notes from '../images/Notes.png';
import Commerce from '../images/commerce.png';
import Employee from '../images/emp.png';
import Planner from '../images/Planner.png';
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
                <caption id='read-caption'>Features the use of the Node.js library in order to generate a Readme.md file</caption>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Notes-App'>
                <img id='notes' src={Notes} alt='Notes app project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
                <caption id='note-caption'>Features the use of Express in order to produce a Notes App</caption>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/E-Commerce'>
                <img id='commerce' src={Commerce} alt='E-commerce project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
                <caption id='commerce-caption'>Features the use of Object-Relational Mapping in order to produce an E-commerce website</caption>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Employee-Database'>
                <img id='employee' src={Employee} alt='Employee database project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
                <caption id='emp-caption'>Features the use of SQL in order to produce an employee database</caption>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Project-Planner'>
                <img id='planner' src={Planner} alt='planner project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
                <caption id='planner-caption'>Features the use of Third Party Apis in order to produce a project planner</caption>
            </a>
        </div>
        <div style={contentStyle}>
            <a href='https://github.com/Taylor-Brandon/Blog-Website'>
                <img id='blog' src={Blog} alt='Blog project' style={{ maxHeight: '100%', maxWidth: '100%' }}/>
                <caption id='blog-caption'>Features the use of Model, View, Controller programming in order to produce an blog website</caption>
            </a>
        </div>
    </Carousel>
    </div>
    );
}
