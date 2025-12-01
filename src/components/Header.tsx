'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Change state if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    {
      name: 'Careers',
      href: 'https://www.linkedin.com/company/code-it-software-training-institute/posts/?feedView=all',
      external: true,
    },
    { name: 'Blog', href: '/blog' },
  ];

  // LOGIC: If Scrolled -> Text White. If Top -> Text Dark Gray.
  const textColorClass = 'text-gray-800';
  const hoverColorClass = 'hover:text-[#0F4F3F]';

  return (
    <header>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-gray-100  backdrop-blur-md py-4 shadow-md' // Slimmer (py-1), Softer Color, Glass Effect
            : 'bg-transparent py-6' // Taller when transparent
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* LOGO */}
          <div className="logo flex items-center">
            <img src="/images/logo.png" alt="IMG" className='h-8' w-8 />
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${textColorClass} ${hoverColorClass}`}
            >
              CODE IT
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isActive ? 'text-[#0F4F3F]' : 'text-gray-800 hover:text-[#0F4F3F]'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {/* Sliding Underline Effect */}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] w-full text-[#0F4F3F] transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CONTACT BUTTON (Desktop) */}
          <div className="hidden md:block">
              <Link 
                  href="/contact" 
                  className="rounded-full border border-[#0F4F3F] px-6 py-1.5 text-base font-semibold text-gray-800 transition-all hover:bg-[#0F4F3F] hover:text-white"
              >
                  Contact
              </Link>
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative h-6 w-8 focus:outline-none"
            >
              <span
                className={`absolute left-0 top-0 block h-[3px] w-full rounded-sm transition-all duration-300 ${
                   isMenuOpen ? 'bg-white' : 'bg-gray-800'
                } ${isMenuOpen ? 'top-3 rotate-45 transform' : ''}`}
              ></span>
              
              <span
                className={`absolute left-0 top-3 block h-[3px] w-full rounded-sm transition-all duration-300 ${
                   isMenuOpen ? 'bg-white' : 'bg-gray-800'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              
              <span
                className={`absolute bottom-0 left-0 block h-[3px] w-full rounded-sm transition-all duration-300 ${
                   isMenuOpen ? 'bg-white' : 'bg-gray-800'
                } ${isMenuOpen ? 'bottom-2.5 -rotate-45 transform' : ''}`}
              ></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`fixed left-0 top-0 -z-10 flex h-screen w-full flex-col items-center justify-center space-y-8 bg-slate-900 transition-transform duration-500 md:hidden ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {navLinks.map((link) => {
             const isActive = pathname === link.href;
             return (
              <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-bold transition-colors ${
                      isActive ? 'text-[#0F4F3F]' : 'text-white hover:text-[#0F4F3F]'
                  }`}
              >
                  {link.name}
              </Link>
             )
          })}
          <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 rounded-full border-2 border-[#0F4F3F] px-8 py-3 text-xl text-white hover:bg-[#0F4F3F]"
          >
              Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}