'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The text to be animated
  const glowingText = "READY TO SURVIVE ?";

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link href="/" onClick={closeMenu}>
              <Image 
                src="/image/Logo_noBG.png" 
                alt="Survivors Logo" 
                width={50} 
                height={50} 
                style={{ objectFit: 'contain' }}
              />
              {/* FIX: Replaced the old text with the new animated text structure */}
              <div className="glowing-text">
                {glowingText.split('').map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </Link>
          </div>

          <div className="navbar-links-desktop">
            <Link href="/#home">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/#login">Login</Link>
          </div>

          <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-close" onClick={closeMenu}>
          &times;
        </div>
        <div className="mobile-menu-header">
            <div className="navbar-logo">
                <Link href="/" onClick={closeMenu}>
                <Image 
                    src="/image/Logo_noBG.png" 
                    alt="Survivors Logo" 
                    width={50} 
                    height={50} 
                />
                </Link>
            </div>
        </div>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/#about" onClick={closeMenu}>About</Link>
        <Link href="/#tournaments" onClick={closeMenu}>Tournaments</Link>
        <Link href="/#contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
