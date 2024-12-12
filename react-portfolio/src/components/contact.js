import React from 'react';

export default function Contact() {
    return (
        <div>
        <div className='contact-area'>
        <div className='contact-form'>
            <form className='card border-black' action="https://formspree.io/f/mqakojqz" method="POST">
                <div className='card-header bg-black text-white'>
                <h3 id='contact-header'>Contact</h3>
                </div>
                <div className='card-body'>
                <div className='form-floating'>
                <input className='form-control border-black mb-3' type='email' name='email' placeholder='Email' />
                <label for="floatingInput">Your Email</label>
                </div>
                <div className='form-floating'>
                <input className='form-control border-black' type='text' name='message' placeholder='Message'/>
                <label for="floatingInput">Your Message</label>
                </div>
                <button id='contact-btn' className='btn mt-4 border border-black' type="submit">Send</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
}
