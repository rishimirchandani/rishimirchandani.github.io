import React from 'react';
import Contact from '../components/Contact';
import Wide from '../components/Wide';

function ContactPage() {
    return (
        <>
            <Wide src="/blue2.jpg" title="Contact" offset={30} />
            <Contact />
        </>
    );
}

export default ContactPage;
