import React from 'react';
import { useSpring, useScroll, animated } from '@react-spring/web';
import Header from './components/header';
import Intro from './components/intro';
import Info from './components/info';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import background from './images/page.png';
import './styles/style.css';

export default function App() {
    const { scrollYProgress } = useScroll();

    const headerOpacity = useSpring({
        opacity: scrollYProgress.to([0, 0.2], [1, 0]),
    });

    const infoOpacity = useSpring({
        opacity: scrollYProgress.to([0.2, 0.9], [1, 0]),
    });

    const portfolioOpacity = useSpring({
        opacity: scrollYProgress.to([0.9, 1.0], [1, 0]),
    });

    const contactOpacity = useSpring({
        opacity: scrollYProgress.to([1.0, 1.2], [1, 0]),
    });

    const resumeOpacity = useSpring({
        opacity: scrollYProgress.to([1.0, 1.2], [1, 0]),
    });

    return (
        <div style={{ 
            backgroundImage: `url(${background})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            fontFamily: "Georgia"
        }}>
            <animated.div style={headerOpacity}>
                <Header />
            </animated.div>
            <animated.div id='intro' style={headerOpacity}>
                <Intro />
            </animated.div>
            <animated.div id='info' style={infoOpacity}>
                <Info />
            </animated.div>
            <animated.div id='portfolio' style={portfolioOpacity}>
                <Portfolio />
            </animated.div>
            <div id='res-card' className='card'>
                <div className='card-body'>
                    <animated.div id='contact' style={contactOpacity}>
                        <Contact />
                    </animated.div>
                    <animated.div id='resume' style={resumeOpacity}>
                        <Resume />
                    </animated.div>
                </div>
            </div>
            <div id='footer'>
                <Footer />
            </div>
        </div>
    );
}
