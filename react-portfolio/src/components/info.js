import React from 'react';
import img from '../images/img.png';



export default function Info() {
    return (
        <div>
            <img id='avatar' src={img} alt='me' />
            <p id='intro-par'>Hello! My name is Taylor Brandon, an ardent and dedicated full-stack web developer. For almost two years, I have been mastering my skills in HTML, CSS, JavaScript, web APIs, third-party APIs, server-side APIs, Node.js, object-oriented programming, Express, SQL, object-relational mapping, model-view-controller programming, regular expressions, Mongoose, progressive web applications, React, and MERN applications.

My journey in web development has been driven by a passion for learning and a commitment to producing innovative and user-friendly applications.
Throughout this journey, I have had the privilege of working on diverse projects, ranging from personal endeavors and team activities in a boot camp course through Columbia University to developing a professional database for a business in which I am immeasurably passionate.

I am eager to continue learning, innovating, and exploring the power of technology. This portfolio demonstrates my skills and projects, exemplifying my dedication and proficiency in delivering high-quality work.
Thank you so much for visiting, and please feel free to contact me with any inquiries!</p>
        </div>
    );
}