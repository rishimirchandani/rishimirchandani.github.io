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
        
        if (isHomePage) {
            navbar.classList.add("Navbar-top");
            nav.classList.add("Nav-top");
            title.classList.add("Title-top");
            navbar.classList.add("Navbar-top-home");
        }
        else {
            navbar.classList.remove("Navbar-top-home");
            navbar.classList.add("Navbar-top");
            nav.classList.add("Nav-top");
            title.classList.add("Title-top");
        }
        
    }, [location.pathname, isHomePage]);
    
    const navList = navItems.map((navItem, index) => {
        const isActive = location.pathname === navItem.path;
        return (
            <li key={index}>
                <Link 
                    to={navItem.path} 
                    className={isActive ? 'nav-link active' : 'nav-link'}
                >
                    {navItem.label}
                </Link>
            </li>
        );
    });
    
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