import React from 'react';
import Readme from '../images/Readme.png';
import Notes from '../images/Notes.png';
import Commerce from '../images/commerce.png';
import Employee from '../images/emp.png';
import Planner from '../images/planner.png';
import Blog from '../images/blog.png';

export default function Portfolio() {
    return (
        <div>
            <div className='projects'>
                <a href='https://github.com/Taylor-Brandon/ReadmeFile-Generator'><img id='readme' src={Readme} alt='reademe project'/></a>
                <a href='https://github.com/Taylor-Brandon/Notes-App'><img id='notes' src={Notes} alt='notes app project'/></a>
                <a href='https://github.com/Taylor-Brandon/E-Commerce'><img id='commerce' src={Commerce} alt='E-commerce project'/></a>
               <a href='https://github.com/Taylor-Brandon/Employee-Database'><img id='employee' src={Employee} alt='Employee database project'/></a>
               <a href='https://github.com/Taylor-Brandon/Project-Planner'><img id='planner' src={Planner} alt='workday planner project'/></a>
                <a href='https://github.com/Taylor-Brandon/Blog-Website'><img id='blog' src={Blog} alt='Blog project'/></a>
                </div>
        </div>
    );
}