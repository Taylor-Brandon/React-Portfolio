import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Info from './components/info';
import Skills from './components/skills';
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
            <div id='info'>
            <Info />
            </div>
            <div className='skill-area'>
                <Skills />
            </div>
            <div id='projects'>
            <Portfolio />
            </div>
                <div id='contact'>
            <Contact />
            </div>
            <div id='resume'>
            <Resume />
            </div>
            <Footer />
        </div>
    );
}
