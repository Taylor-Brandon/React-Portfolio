import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
            <div className='mb-3'>
                <label for="name" class="form-label">Name</label>
                <input type="name" class="form-control" id="name-input" aria-describedby="name-Help"></input>
                </div>
                <div className='mb-3'>
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp"></input>
                </div>
                <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password-input"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}