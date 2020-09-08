import React from 'react';

class Wide extends React.Component {
    render() {
        return (
            <div class="Wide">
                <img src={this.props.src}></img>
            </div>
        );
    }
}

export default Wide;