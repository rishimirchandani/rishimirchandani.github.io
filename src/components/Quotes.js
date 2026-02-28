import React from 'react';

class Quotes extends React.Component {
    render() {
        return (
            <div className="Quotes">
                <div className="quote-item">
                    <p className="quote">"Such superlative conviction. True insight."</p>
                    <p className="quoted">—Ian Fountain</p>
                </div>
                <div className="quote-item">
                    <p className="quote">"A captivating gem. Electric and masterful."</p>
                    <p className="quoted">—Nancy Galbraith</p>
                </div>
                <div className="quote-item">
                    <p className="quote">"A bold, individual musical voice."</p>
                    <p className="quoted">–Mark Silverman</p>
                </div>
            </div>
        )
    }
}

export default Quotes;
