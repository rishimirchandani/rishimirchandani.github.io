import React from 'react';
import Hero from '../components/Hero';
import BioSection from '../components/BioSection';

function HomePage() {
    return (
        <>
            <Hero src="/rm_swirl.png" credit="Photo: Titilayo Ayangade" />
            <BioSection credit="Photo: Titilayo Ayangade" />
        </>
    );
}

export default HomePage;
