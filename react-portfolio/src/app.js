import React from 'react';
import Header from './components/header';
import Info from './components/info';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';

export default function App() {
    return(
    <div>
        <Header />
        <Info />
        <Portfolio />
        <Contact />
        <Resume />
    </div>
    );
}