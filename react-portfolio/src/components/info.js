import React from 'react';
import img from '../images/img.png';



export default function Info() {
    return (
        <div>
            <h1>Info</h1>
            <p>this is my paragraph</p>
            <img src={img} alt='image of me' />
        </div>
    );
}