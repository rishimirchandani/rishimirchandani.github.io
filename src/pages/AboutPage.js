import React from 'react';
import About from '../components/About';
import Wide from '../components/Wide';

function AboutPage() {
    return (
        <>
            <Wide src="/blue.png" title="Biography" offset={40} />
            <About />
        </>
    );
}

export default AboutPage;
