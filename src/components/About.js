import React from 'react';
import data from '../data.json'

class About extends React.Component {
    render() {
        return (
            <div className="Section About">
                <h2>About</h2>
                <img alt="" src="/front.png"></img>

                <p> Rishi Mirchandani is an Indian-American pianist based in New York City. At 18, he <a href="#ravel">debuted</a> with the Pittsburgh Symphony Orchestra after amassing six first-prize awards in major national and international competitions for young artists.</p>
            
                <p> Mirchandani made his first of three appearances at Weill Recital Hall of Carnegie Hall at the age of 12. Outside New York, Mirchandani has performed at Heinz Hall in Pittsburgh, the Aronoff Center in Cincinnati, Centro Cultural de Belém in Portugal, and Real Collegio di Lucca in Italy, among others.</p>

                <p> He has participated in masterclasses with a number of renowned pianists including Richard Goode, Boris Berman, <a href="#langlang">Lang Lang</a>, Eldar Nebolsin, and Ian Jones. Mirchandani's <a href="#preludes">2014 recording</a> of Nancy Galbraith's Three Preludes for Piano was featured on the acclaimed Centaur Records album <i>Strange Travels</i>, which garnered a spot on the "Want List" in <i>Fanfare Magazine</i>.</p>
                
                <p> Born in 1996, Mirchandani is a native of Pittsburgh, where he studied with Luz Manríquez. He holds a bachelor's degree in mathematics from Yale University, from which he graduated <i>summa cum laude</i> in 2019. He earned Distinction in Mathematics and was one of twelve students from his class (top 1%) elected to Phi Beta Kappa as a junior. While pursuing his mathematics studies, he also studied piano with Elizabeth Parisot and founded the <a href="http://yalepiano.org/"  target="_blank" rel="noopener noreferrer">Yale Undergraduate Piano Collective</a>. At commencement, he received the Stanton Wheeler and Marcia Chambers Award for outstanding artistic contributions to campus life. </p>
                
                <p> Mirchandani is now pursuing a master's degree at the Manhattan School of Music as a winner of the President's Award scholarship. He is a former student of Solomon Mikowsky and currently studies with Jeffrey Cohen.</p>
            </div>
        )
    }
}

export default About;