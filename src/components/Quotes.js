import React from 'react';
import data from '../data.json'

class Quotes extends React.Component {
    render() {
        return (
            <div className="Section Quotes">
                <p className="quote">"Unique and wonderful. A bold, individual musical voice."</p>
                <p className="quoted">—Marc Silverman</p>
                <br/>
                <p className="quote">"A captivating gem."</p>
                <p className="quoted">—Nancy Galbraith</p>
            </div>
        )
    }
}

export default Quotes;