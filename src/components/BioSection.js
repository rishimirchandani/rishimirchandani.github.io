import React from 'react';
import { Link } from 'react-router-dom';

function BioSection({ credit }) {
    return (
        <div className="BioSection">
            <img src="/bronze.png" alt="Rishi Mirchandani" className="bio-image" />
            {credit && (
                <div className="photo-credit">{credit}</div>
            )}
            <div className="bio-overlay">
                <div className="bio-content">
                    <p className="bio-text">
                        After amassing six gold medals in major national and international competitions, 
                        Indian-American pianist Rishi Mirchandani debuted as soloist with the Grammy 
                        award-winning Pittsburgh Symphony Orchestra at the age of 18. He made his first 
                        of four appearances at Carnegie Hall in New York at age 12, and he has performed 
                        to critical acclaim in England, Germany, Italy, Portugal, Spain, and the United States.
                    </p>
                    <Link to="/bio" className="bio-link">Read full bio →</Link>
                </div>
            </div>
        </div>
    );
}

export default BioSection;
