'use client'; // Required for hooks (useState, usePathname)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Defined links here for cleaner mapping in the JSX
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

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left side: Logo */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00b894] to-black"></div>
            <span className="ml-3 text-xl font-bold tracking-tight text-gray-600">
              CODE IT
            </span>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={`relative pb-1 font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'text-[#00b894]' // Active Color
                          : 'text-gray-600 hover:text-[#00b894]' // Inactive Color
                      }`}
                    >
                      {link.name}
                      {/* Animated Underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#00b894] transition-transform duration-300 ease-out ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right side: Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full border-[1.5px] border-[#00b894] px-5 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-[#00b894] hover:text-white hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none hover:text-[#00b894]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // X Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-100 md:hidden">
            <ul className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={`block text-lg font-semibold ${
                        isActive ? 'text-[#00b894]' : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block rounded-full border-[1.5px] border-[#00b894] px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-[#00b894] hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};