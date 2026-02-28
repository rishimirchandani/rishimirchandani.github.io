import React from 'react';
import Events from '../components/Events';
import Wide from '../components/Wide';

function ConcertsPage() {
    return (
        <>
            <Wide src="/carnegie2_cool.jpg" title="Concerts" />
            <Events />
        </>
    );
}

export default ConcertsPage;
