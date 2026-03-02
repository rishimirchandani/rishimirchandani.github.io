import React from 'react';
import Events from '../components/Events';
import Wide from '../components/Wide';

function ConcertsPage() {
    return (
        <div className="ConcertsPage">
            <Wide src="/rm_carnegie2_cool.png" title="Concerts 2025-2026" credit="Photo: Nathaniel Johnston Photography" />
            <Events />
        </div>
    );
}

export default ConcertsPage;
