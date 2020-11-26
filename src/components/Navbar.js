import React from 'react';

const navItems = ["home", "about", "media", "contact"];
const navList = navItems.map((navItem)=> 
    <li><a href={`#${navItem}`}>{navItem}</a></li>
);

class Navbar extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.resizeOnScroll);
    }
    resizeOnScroll() {
        const distY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkY = 380;
        const navbar = document.getElementsByClassName("Navbar")[0];
        const nav = document.getElementsByClassName("Nav")[0];
        const title = document.getElementsByClassName("Title")[0];
        if (distY > shrinkY) {
            navbar.classList.add("Navbar-top");
            nav.classList.add("Nav-top");
            title.classList.add("Title-top");
            navbar.style.opacity = 1;
        }
        else if (distY > shrinkY - 300) {
            navbar.style.opacity = 0.5;
        }
        else {
            navbar.style.opacity = 1;
            navbar.classList.remove("Navbar-top");
            nav.classList.remove("Nav-top");
            title.classList.remove("Title-top");           
        }
    }
    render() {
        return (
            <div class="Navbar">
            <h1 class="Title">
                Rishi Mirchandani
            </h1>
            <div className='Nav'>
                <ul id='nav'>
                    {navList}
                </ul>
            </div>
            </div>
        )
    }
}

export default Navbar;