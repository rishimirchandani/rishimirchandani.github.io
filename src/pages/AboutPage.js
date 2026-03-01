import React from 'react';
import About from '../components/About';
import Wide from '../components/Wide';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Wide src="/blue.png" title="Biography" offset={40} credit="Photo: Titilayo Ayangade" />
            <About />
        </div>
    );
}

export default AboutPage;
