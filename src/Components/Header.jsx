import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';


function Header(){

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={scrolled ? 'scrolled' : 'transparent'}>
            <h1>Swiss Tourism</h1>
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="destinations" smooth={true} duration={500}>Destinations</Link></li>
                    <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
                    <li><Link to="" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header