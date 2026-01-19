import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/concerts", label: "concerts" },
    { path: "/media", label: "media" },
    { path: "/contact", label: "contact" }
];

function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    React.useEffect(() => {
        const navbar = document.getElementsByClassName("Navbar")[0];
        const nav = document.getElementsByClassName("Nav")[0];
        const title = document.getElementsByClassName("Title")[0];
        
        if (!navbar || !nav || !title) return;
        
        // On non-home pages, always show navbar in top position
        if (!isHomePage) {
            navbar.classList.add("Navbar-top");
            nav.classList.add("Nav-top");
            title.classList.add("Title-top");
            return;
        }
        else {
            navbar.classList.remove("Navbar-top");
            nav.classList.remove("Nav-top");
            title.classList.remove("Title-top");
        }
        
        // On home page, use scroll-based behavior
        const resizeOnScroll = () => {
            // const distY = window.pageYOffset || document.documentElement.scrollTop;
            // const shrinkY = 380;
            // if (distY > shrinkY) {
            //     navbar.classList.add("Navbar-top");
            //     nav.classList.add("Nav-top");
            //     title.classList.add("Title-top");
            //     navbar.style.opacity = 1;
            // }
            // else if (distY > shrinkY - 300) {
            //     navbar.style.opacity = 0.5;
            // }
            // else {
            //     navbar.style.opacity = 1;
            //     navbar.classList.remove("Navbar-top");
            //     nav.classList.remove("Nav-top");
            //     title.classList.remove("Title-top");           
            // }
        };
        
        // Set initial state for home page
        resizeOnScroll();
        
        window.addEventListener("scroll", resizeOnScroll);
        return () => window.removeEventListener("scroll", resizeOnScroll);
    }, [location.pathname, isHomePage]);
    
    const navList = navItems.map((navItem, index) => (
        <li key={index}>
            <Link to={navItem.path}>{navItem.label}</Link>
        </li>
    ));
    
    return (
        <div className="Navbar">
            <Link to="/" className="Title">
                Rishi Mirchandani
            </Link>
            <div className='Nav'>
                <ul id='nav'>
                    {navList}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;