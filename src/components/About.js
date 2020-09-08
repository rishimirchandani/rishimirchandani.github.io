import React from 'react';
import data from '../data.json'

class About extends React.Component {
    render() {
        return (
            <div className="Section About">
                <h2 id="about">About</h2>
                <img alt="" src="/front.png"></img>
                {data.about.bio.split("\n").map((i, key) => {
                    return <p key={key}>{i}</p>;
                })}
            </div>
        )
    }
}

export default About;