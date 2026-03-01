import React from 'react';

class Wide extends React.Component {
    render() {
        const offset = this.props.offset || 0;
        const objectPosition = offset > 0 ? `center ${offset}%` : 'center';
        const className = ['Wide', this.props.className].filter(Boolean).join(' ');
        
        return (
            <div className={className}>
                <img 
                    alt="" 
                    src={this.props.src}
                    style={{ objectPosition: objectPosition }}
                ></img>
                {this.props.credit && (
                    <div className="photo-credit">{this.props.credit}</div>
                )}
                {this.props.title && (
                    <div className="wide-title-overlay">
                        <h1 className="wide-title">{this.props.title}</h1>
                    </div>
                )}
            </div>
        );
    }
}

export default Wide;