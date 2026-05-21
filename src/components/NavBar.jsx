import { useEffect, useState } from "react"
import { navLinks } from "../constants"

function NavBar() {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handledScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handledScroll);
        return () => window.removeEventListener('scroll', handledScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner relative z-[110]">
                <a className="logo z-[110]" href="#hero">
                    <img className="w-16 h-16 md:w-20 md:h-20 object-contain" src="/images/logo.png" alt="Logo" />
                </a>
                
                {/* Desktop Navigation */}
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ name, link, isDownload }) => (
                            <li key={name} className="group">
                                <a href={link} {...(isDownload ? { download: "Akash_Resume.pdf", target: "_blank" } : {})}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className="flex items-center gap-4">
                    {/* Desktop Contact Button */}
                    <div className="hidden lg:block">
                        <a href="#contact" className="contact-btn group">
                            <div className="inner">
                                <span>Contact Me</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button 
                        className="lg:hidden flex flex-col gap-[6px] justify-center items-center w-8 h-8 z-[110] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                        <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[105] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <aside 
                className={`fixed top-0 right-0 h-dvh w-[70vw] sm:w-[50vw] bg-black/80 backdrop-blur-2xl border-l border-white/10 z-[105] lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col pt-32 px-8 shadow-2xl`}
            >
                <nav className="flex flex-col gap-8">
                    {navLinks.map(({ name, link, isDownload }) => (
                        <div key={name} className="border-b border-white/5 pb-4 flex">
                            <a 
                                href={link} 
                                {...(isDownload ? { download: "Akash_Resume.pdf", target: "_blank" } : {})}
                                onClick={() => setIsOpen(false)}
                                className="group relative text-white-50 hover:text-white text-xl font-medium transition-colors"
                            >
                                <span>{name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        </div>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-6 py-3 bg-white text-black text-center rounded-lg font-semibold hover:bg-white-50 transition-colors"
                    >
                        Contact Me
                    </a>
                </nav>
            </aside>
        </header>
    )
}

export default NavBar