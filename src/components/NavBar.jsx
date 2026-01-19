import { useEffect, useState } from "react"
import { navLinks } from "../constants"

function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handledScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener("scroll", handledScroll);
        return () => window.removeEventListener('scroll', handledScroll)
    }, [])


    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Akash | Abrrar
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ name, link }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar