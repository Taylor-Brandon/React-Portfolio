import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Info from './components/info';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import '../src/styles/style.css';


export default function App() {
    return (
        <div>
            <Header />
            <Intro />
            <Info />
            <Portfolio />
            <div className='later-section'>
            <Contact />
            <Resume />
            </div>
            <Footer />
        </div>
    );
}
