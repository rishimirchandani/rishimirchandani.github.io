import React from 'react';

class Hero extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.lightenOnScroll);
    }
    lightenOnScroll() {
        const distY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkY = 200;
        const hero = document.getElementsByClassName("Hero")[0];
        if (distY > shrinkY) {
            hero.classList.add("Hero-top");
        }
        else {
            hero.classList.remove("Hero-top");
        }
    }
    render() {
        return (
            <div id="home" class="Hero">
                <img src={this.props.src}></img>
            </div>
        );
    }
}

export default Hero;