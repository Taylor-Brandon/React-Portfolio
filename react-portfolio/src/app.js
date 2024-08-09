import React from 'react';
import Header from './components/header';
import Info from './components/info';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import background from './images/page.png';
import './styles/style.css';

export default function App() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            fontFamily: "Georgia"
        }}>
            <Header />
            <div id='info'>
            <Info />
            </div>
            <div id='portfolio'>
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
