import React from 'react';
import Contact from '../components/Contact';
import Wide from '../components/Wide';

function ContactPage() {
    return (
        <div className="ContactPage">
            <Wide src="/rm_blue2.png" title="Contact" offset={30} credit="Photo: Titilayo Ayangade" />
            <Contact />
        </div>
    );
}

export default ContactPage;
