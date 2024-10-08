import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const emailRegularexpression = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

        if(!emailRegularexpression.test(email)) {
            alert('Please set email to valid email address!');
            return;
        }

        alert(`Thank you so much, ${name}!`);
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleCursor = () => {
        alert('Please enter your name!');
    };

    return (
        <div className='container d-flex justify-content-center'>
        <div id='form-card' className='card h-25 w-25'>
            <div className='card-body'>
            <form className='form'>
                <div className='mb-3'>
                    <label className="form-label">Name</label>
                    <input 
                        className='form-control'
                        value={name} 
                        name="name" 
                        onChange={handleInputChange} 
                        onBlur={handleCursor}
                        type="text" 
                        placeholder='Name'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Email address</label>
                    <input 
                        className='form-control'
                        value={email} 
                        name="email" 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder='Email'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <input 
                        className='form-control'
                        value={message} 
                        name="message" 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder='Message'
                    />
                </div>
                <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </div>
    );
}
