"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-6 md:px-8 lg:px-32 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">&lt;</span>
        <div className="relative w-8 h-8">
          <Image
            src="/hammer.png"
            alt="Hammer logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold">&gt;</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block w-full h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-full h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Navigation Links */}
      <div className={`
        md:flex md:items-center md:gap-8
        absolute md:relative
        top-full left-0 right-0
        bg-white md:bg-transparent
        p-4 md:p-0
        shadow-lg md:shadow-none
        ${isMenuOpen ? 'flex flex-col gap-4' : 'hidden md:flex'}
      `}>
        <button 
          onClick={() => scrollToSection('home')}
          className="hover:text-gray-600 transition-colors text-left"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="hover:text-gray-600 transition-colors text-left"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="hover:text-gray-600 transition-colors text-left"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-center"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
} 