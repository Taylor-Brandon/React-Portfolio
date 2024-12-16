import React from 'react';
import Profile from '../images/profile.png';

export default function Info() {
    return (
        <div>
            <img id='profile-img' src={Profile} alt="Image of myself"></img>
            <div className='text-section'>
            <p>Welcome! Thank you for taking the time to visit my portfolio! My name is Taylor Brandon. My web development journey started over two years ago with an eagerness to learn and quickly adapt, which has led me to work on diverse projects—from personal and professional endeavors to collaborative efforts in Columbia University’s Full-Stack Development Bootcamp, where I established my programming skills.
Since then, I have become passionate about delivering seamless, high-quality applications by honing my skills in problem-solving, accessibility, and innovation. Additionally, I have further developed my ambition to connect with and learn from others, as well as my appreciation for technology and its constant evolution.
This portfolio demonstrates my proficiency in languages such as JavaScript and technologies such as progressive web applications, APIs, and much more! I invite you to explore my work and reach out with any feedback or inquiries!
            </p>
            </div>
        </div>
    );
}