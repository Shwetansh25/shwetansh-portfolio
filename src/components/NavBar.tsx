import { Menu, Moon, SidebarClose, Sun } from 'lucide-react';
import React, { useState } from 'react';

export default function NavBar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [dark, setDark] = useState(true);

    const toggleDark = () => {
        const nextDark = !dark;
        setDark(nextDark);
        document.body.style.transition = 'all 0.5s ease-in-out';

        if (nextDark) {
            document.body.style.color = 'white';
            document.body.style.backgroundColor = '';
            document.body.style.backgroundImage = "url('/bg-red.jpg')";
        } else {
            document.body.style.color = 'black';
            document.body.style.backgroundColor = '';
            document.body.style.backgroundImage = "url('/bg-white.jpg')";
        }
    };

    const mobileLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Project' },
    ];

    return (
        <>
            {/* Desktop Nav */}
            <div className='hidden md:flex sticky top-0 z-50'>
                <div className='flex bg-gradient-to-b from-slate-900 to-black justify-between space-x-4 p-2 w-full rounded-b-md shadow-cyan-400 shadow-md'>
                    <button onClick={toggleDark} className='text-white p-2 text-xl'>
                        {dark ? <Moon /> : <Sun />}
                    </button>
                    <div className='flex space-x-5 p-2'>
                        {mobileLinks.map(({ href, label }) => (
                            <a key={label} href={href} className='text-xl text-white hover:scale-105'>
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden flex justify-between ${dark ? 'bg-white' : 'bg-black shadow-cyan-500 shadow-md'} p-3 sticky top-0 z-50`}>
                <Menu onClick={() => setSidebarVisible(true)} />
                {sidebarVisible && (
                    <div className='min-h-screen w-[60%] absolute bg-white left-0 z-50 p-4'>
                        <SidebarClose className='float-right mb-4' onClick={() => setSidebarVisible(false)} />
                        <div className='flex flex-col space-y-4'>
                            {mobileLinks.map(({ href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setSidebarVisible(false)}
                                    className='text-xl text-black hover:bg-blue-400 rounded p-2 hover:scale-105'
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
                <button onClick={toggleDark}>
                    {dark ? <Moon /> : <Sun />}
                </button>
            </div>
        </>
    );
}
