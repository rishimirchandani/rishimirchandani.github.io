import React from 'react';
import Quotes from './Quotes';

class Hero extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.lightenOnScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.lightenOnScroll);
    }
    lightenOnScroll() {
        const distY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkY = 200;
        const hero = document.getElementsByClassName("Hero")[0];
        if (hero) {
            if (distY > shrinkY) {
                hero.classList.add("Hero-top");
            }
            else {
                hero.classList.remove("Hero-top");
            }
        }
    }
    render() {
        return (
            <div className="Hero">
                <img alt="" src={this.props.src}></img>
                <div className="photo-credit">
                    {this.props.credit}
                </div>
                <Quotes />
            </div>
        );
    }
}

export default Hero;