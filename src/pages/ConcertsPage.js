import React from 'react';
import Events from '../components/Events';
import Wide from '../components/Wide';

function ConcertsPage() {
    return (
        <>
            <Wide src="/carnegie2_cool.jpg" title="Concerts 2025-2026" />
            <Events />
        </>
    );
}

export default ConcertsPage;
