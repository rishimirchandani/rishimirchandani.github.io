import React from 'react';
import { useLocation } from 'react-router-dom';
import Media from '../components/Media';
import Wide from '../components/Wide';

function MediaPage() {
    const location = useLocation();
    
    React.useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location.hash]);
    
    return (
        <>
            <Media />
            <Wide src="/pan.png" />
        </>
    );
}

export default MediaPage;
