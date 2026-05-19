import React from 'react';
import { Link } from 'react-router-dom';

function BioSection({ credit }) {
    return (
        <div className="BioSection">
            <img src="/rm_bronze.png" alt="Rishi Mirchandani" className="bio-image" />
            {credit && (
                <div className="photo-credit">{credit}</div>
            )}
            <div className="bio-overlay">
                <div className="bio-content">
                    <p className="bio-text">
                        After amassing six gold medals in major national and international competitions, 
                        Indian-American pianist Rishi Mirchandani debuted as soloist with the Grammy 
                        award-winning Pittsburgh Symphony Orchestra at the age of 18. He has performed to critical acclaim in France, Germany, Italy, Portugal, Spain, the UK, and the USA. He teaches piano at England's renowned Charterhouse School and concertises  as a soloist, chamber musician, and song pianist.
                    </p>
                    <Link to="/bio" className="bio-link">Read full bio →</Link>
                </div>
            </div>
        </div>
    );
}

export default BioSection;
