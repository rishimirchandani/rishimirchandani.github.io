import React from 'react';
import Hero from '../components/Hero';
import BioSection from '../components/BioSection';

function HomePage() {
    return (
        <>
            <Hero src="/swirl.jpg" credit="Photo: Titilayo Ayangade" />
            <BioSection />
        </>
    );
}

export default HomePage;
