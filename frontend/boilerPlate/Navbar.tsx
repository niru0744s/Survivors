import React from 'react';
import Link from 'next/link';
// import 'tailwindcss'
import Image from 'next/image';
import './Navbar.css';
import Logo from '../Public/image/Logo_noBG.png';

const Navbar = () => {

    const Links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "About Us", link: "/about" },
        { name: "Gaming", link: "/gaming" },
        { name: "Blog", link: "/blog" },
        { name: "Contact Us", link: "/contact" },
        { name: "Login", link: "/login" }
    ];

    return (
        <header className='bg-transparent text-white p-4 sticky-top'>
            <nav className='container mx-auto flex justify-between items-center'>
                <Link href="/" className='flex items-center'>
                    <Image src={Logo} alt="Logo" width={70} height={70} className='mr-2' />
                    {/* <span className='text-xl font-bold'>Survivors</span> */}
                </Link>
                {/* <ul className='flex space-x-4 nav-links'>
                    <li className='nav-item'>
                        <Link href="/" className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link href="/services" className='nav-link'>Services</Link>
                    </li>
                    <li>
                        <Link href="/about" className='nav-link'>About Us</Link>
                    </li>
                    <li>
                        <Link href="/gaming" className='nav-link'>Gaming</Link>
                    </li>
                    <li>
                        <Link href={"/blog"} className='nav-link'>Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" className='nav-link'>Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/login" className='nav-link'>Login</Link>
                    </li>
                </ul> */}
                <ul className='flex space-x-4 nav-links'>
                    {Links.map((link, index) => (
                        <li key={index} className='nav-item'>
                            <Link href={link.link} className='nav-link'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;