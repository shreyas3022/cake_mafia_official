'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Clock, Phone, Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // First phase: Hide top info when scrolled a little
      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Second phase: Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isNavHidden) {
          setIsNavHidden(true);
        } else if (currentScrollY < lastScrollY && isNavHidden) {
          setIsNavHidden(false);
        }
      } else {
        setIsNavHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavHidden]);

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out
        ${isNavHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top info bar - transparent and responsive */}
      <div className={`bg-gradient-to-r from-blue-800/40 to-slate-700/40 text-white transition-all duration-500 overflow-hidden
        ${isScrolled ? 'h-0 opacity-0' : 'h-12 opacity-100'} 
        hidden md:block`}>
        <div className="flex justify-between items-center h-full text-base px-8">
          {/* Left side - visible on xl screens only */}
          <div className="xl:flex items-center hidden">
            <Clock className="w-5 h-6 mr-2 text-blue-300" />
            <span>Daily: 9:00 AM to 11:00 PM</span>
          </div>
          
          {/* Center - visible on md and lg screens */}
          <div className="md:flex items-center gap-5 hidden xl:hidden mx-auto">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span> 
            </a>
            <a href="mailto:info@cakemafira.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@cakemafira.com</span>
            </a>
          </div>
          
          {/* Right side - visible on xl screens only */}
          <div className="xl:flex items-center gap-5 hidden">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@cakemafira.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@cakemafira.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar - changes color on scroll */}
      <div className={`transition-all duration-500
        ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center py-4 px-8">
        {/* Logo - moved to left */}
        <div className="flex items-center p-0 m-0">
        <div className="relative" style={{ height: '96px', width: '99px' }}>
        <Image
          src="/images/logo1.png"
          alt="Cake Mafira"
          fill
          className="object-contain"
          priority
        />
        </div>
        </div>

          
          {/* Desktop Navigation - moved to right with proper spacing */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors font-medium text-base py-2">
                HOME
              </a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors font-medium text-base py-2">
                ABOUT US
              </a>
              <a href="#menu" className="text-white hover:text-blue-400 transition-colors font-medium text-base py-2">
                MENU
              </a>
              <a href="#gallery" className="text-white hover:text-blue-400 transition-colors font-medium text-base py-2">
                GALLERY
              </a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors font-medium text-base py-2">
                CONTACT
              </a>
            </nav>

            {/* Order Now Button and mobile menu */}
            <div className="flex items-center gap-4">
              <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base group overflow-hidden">
                <span className="relative z-10">ORDER NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine transition-all duration-500"></div>
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 p-1 rounded text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden bg-slate-900/95 backdrop-blur-lg ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-5 space-y-4">
            <a href="#home" className="block text-white hover:text-blue-400 transition-colors py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="#about" className="block text-white hover:text-blue-400 transition-colors py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            <a href="#menu" className="block text-white hover:text-blue-400 transition-colors py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>MENU</a>
            <a href="#gallery" className="block text-white hover:text-blue-400 transition-colors py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
            <a href="#contact" className="block text-white hover:text-blue-400 transition-colors py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
            <button className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-5 py-3.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base group overflow-hidden mt-4">
              <span className="relative z-10">ORDER NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Add shine animation to tailwind config (if not already present) */}
      <style jsx>{`
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
        .animate-shine {
          animation: shine 1.5s;
        }
      `}</style>
    </header>
  );
};

export default Header;