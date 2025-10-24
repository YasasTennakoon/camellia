import { useState, useEffect } from 'react'

import Rooms from './pages/Rooms/Rooms.tsx'
import About from './pages/About/About.tsx'
import Footer from './pages/Footer/Footer.tsx'
import { LanguageSwitcher } from './components/LanguageSwitcher.tsx'
import Home from './pages/Home/Home.tsx'
import Gallery from './pages/Gallery/Gallery.tsx'
import Review from './pages/Review/Review.tsx'

export default function App() {
    let navBarItems: string[] = ['HOME', 'GALLERY', 'ROOMS', 'ABOUT', 'CONTACT'];
    const [menuOpen, setMenuOpen] = useState(false)
    const [_scrolled, setScrolled] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {
        let lastScrollY = window.scrollY
        const onScroll = () => {
            setScrolled(window.scrollY > 4)
            const deltaY = Math.abs(window.scrollY - lastScrollY)
            if (menuOpen && deltaY > 10) closeMenu()
            lastScrollY = window.scrollY
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [menuOpen])

    return (
        <div className="font-sans text-gray-800 antialiased">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
                <nav className="relative flex items-center justify-between h-20 text-white max-w-[90rem] mx-auto px-4">
                    <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center gap-3 overflow-visible z-20">
                        <img
                            src="/hotel_logo.png"
                            alt="Kamilia Logo"
                            className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto object-contain select-none"
                            draggable="false"
                        />
                    </div>

                    <ul className="hidden lg:flex items-center gap-8 text-[13px]">
                        {navBarItems.map(item => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="relative font-semibold text-black transition-all duration-200 hover:text-[#612d87]
                                                after:absolute after:left-0 after:-bottom-[2px] after:h-[1.5px] after:w-0
                                                after:bg-[#612d87] after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="#contact"
                            className="
                                bg-[#612d87] text-white
                                px-3 py-1 sm:px-3.5 sm:py-1.5 lg:px-4 lg:py-1.5
                                text-[11px] sm:text-[13px] lg:text-[14px]
                                rounded-md
                                font-semibold shadow-md
                                hover:bg-[#8d42c4] transition-all duration-200
                                whitespace-nowrap
                            "
                        >
                            Book&nbsp;Now
                        </a>

                        <LanguageSwitcher />
                    </div>

                    <button
                        className="lg:hidden p-1 bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(v => !v)}
                    >
                        <span className="relative block w-5 h-4">
                            <span
                                className={[
                                    'absolute left-0 top-0 h-[2px] w-5 bg-black rounded-sm transition-all duration-300 ease-in-out',
                                    menuOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0',
                                ].join(' ')}
                            />
                            <span
                                className={[
                                    'absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-5 bg-black rounded-sm transition-all duration-200 ease-in-out',
                                    menuOpen ? 'opacity-0' : 'opacity-100',
                                ].join(' ')}
                            />
                            <span
                                className={[
                                    'absolute left-0 bottom-0 h-[2px] w-5 bg-black rounded-sm transition-all duration-300 ease-in-out',
                                    menuOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0',
                                ].join(' ')}
                            />
                        </span>
                    </button>

                    <div className='lg:hidden'>
                        <LanguageSwitcher />
                    </div>
                </nav>

                <div
                    className={[
                        'lg:hidden fixed left-0 right-0 top-20 z-40',
                        'origin-top bg-white/90 border-t shadow-lg',
                        'transition-all duration-300 ease-out',
                        menuOpen
                            ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-y-95 -translate-y-1 pointer-events-none',
                    ].join(' ')}
                >
                    <div className="container-max py-3 text-white">
                        <ul className="grid gap-2 text-xs">
                            {navBarItems.map(item => (
                                <li key={item} className="grid place-items-center">
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={closeMenu}
                                        className="relative py-2 font-semibold text-black transition-all duration-200 hover:text-[#612d87]
                                                after:absolute after:left-0 after:-bottom-[2px] after:h-[1.5px] after:w-0
                                                after:bg-[#612d87] after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

            <main className="pt-16">
                <section id="home"><Home /></section>
                <section id="gallery"><Gallery /></section>
                <section id="rooms"><Rooms /></section>
                <section id="rooms"><Review /></section>
                <section id="about"><About /></section>
                <Footer />
            </main>
        </div>
    )
}
