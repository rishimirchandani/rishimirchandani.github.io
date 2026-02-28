import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: "/", label: "home" },
    { path: "/bio", label: "bio" },
    { path: "/concerts", label: "concerts" },
    { path: "/media", label: "media" },
    { path: "/contact", label: "contact" }
];

function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isScrolled, setIsScrolled] = React.useState(false);
    const locationPathRef = React.useRef(location.pathname);
    
    // Update location ref whenever it changes
    React.useEffect(() => {
        locationPathRef.current = location.pathname;
        setIsScrolled(false); // Reset scroll state on route change
    }, [location.pathname]);
    
    // Build className strings based on state
    const navbarClassName = `Navbar Navbar-top ${isHomePage ? 'Navbar-top-home' : ''} ${isScrolled ? 'Navbar-scrolled' : ''}`.trim();
    const navClassName = "Nav Nav-top";
    const titleClassName = "Title Title-top";
    
    // Scroll handling - separate effect that doesn't interfere with navigation
    React.useEffect(() => {
        let ticking = false;
        let isMounted = true;
        
        // Scroll handler to detect when past first image
        const handleScroll = () => {
            if (!isMounted || ticking) return;
            
            ticking = true;
            window.requestAnimationFrame(() => {
                if (!isMounted) {
                    ticking = false;
                    return;
                }
                
                try {
                    // Get current path from ref (always latest value)
                    const currentPath = locationPathRef.current;
                    const currentIsHomePage = currentPath === "/";
                    
                    // Find the first image (Hero on home page, Wide on other pages)
                    const firstImage = currentIsHomePage 
                        ? document.querySelector('.Hero')
                        : document.querySelector('.Wide');
                    
                    // Only proceed if the image element exists and has valid dimensions
                    if (firstImage && firstImage.offsetHeight > 0) {
                        const imageBottom = firstImage.offsetTop + firstImage.offsetHeight - 150;
                        const scrollY = window.scrollY || window.pageYOffset;
                        
                        // Update state instead of manipulating DOM directly
                        setIsScrolled(scrollY > imageBottom);
                    }
                } catch (error) {
                    // Silently fail to prevent breaking the component
                    console.error('Navbar scroll handler error:', error);
                }
                ticking = false;
            });
        };
        
        // Initial check after a delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            if (isMounted) {
                handleScroll();
            }
        }, 300);
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Cleanup
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []); // Only run once on mount - use refs for current values
    
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
        <div className={navbarClassName}>
            <Link to="/" className={titleClassName}>
                Rishi Mirchandani
            </Link>
            <div className={navClassName}>
                <ul id='nav'>
                    {navList}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;