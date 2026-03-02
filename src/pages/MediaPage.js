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
        <div className="MediaPage">
            <Wide src="/rm_log.png" title="Media" offset={40} credit="Photo: Sisi Burn" />
            <Media />
        </div>
    );
}

export default MediaPage;
