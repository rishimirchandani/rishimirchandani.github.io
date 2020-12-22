import React from 'react';
import data from '../data.json'

class Quotes extends React.Component {
    render() {
        return (
            <div className="Section Quotes">
                <a className="Anchor" id="about"></a>
                <p className="quote">"A bold, individual musical voice."</p>
                <p className="quoted">—Marc Silverman</p>
                <p className="quote">"A captivating gem. Electric and masterful."</p>
                <p className="quoted">—Nancy Galbraith</p>
            </div>
        )
    }
}

export default Quotes;