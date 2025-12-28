'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll on mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Blog', href: '/blog' },
  ];

  const isTransparent = pathname === '/' && !isScrolled;
  
  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      <nav
        className={`mx-auto transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'mt-4 max-w-[95%] lg:max-w-7xl rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.05)] py-3 px-8' 
            : 'mt-0 max-w-full bg-transparent py-8 px-8 sm:px-12'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className="logo flex items-center gap-3">
            <img src="/images/logo.png" alt="IMG" className="h-9 w-auto origin-center transition-transform scale-125" />
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-gray-800'
              } hover:text-[#0F4F3F]`}
            >
              CODEIT-INFOTECH
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-[#0F4F3F]'
                          : isTransparent ? 'text-white' : 'text-gray-800'
                      } hover:text-[#0F4F3F]`}
                    >
                      {link.name}
                    </Link>

                    {/* Underline Animation */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#0F4F3F] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ACTIONS & HAMBURGER */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className={`hidden md:block rounded-full border px-8 py-2 text-base font-semibold transition-all active:scale-95 ${
                isTransparent
                  ? 'border-white text-white hover:bg-white hover:text-[#0F4F3F]'
                  : 'border-[#0F4F3F] text-[#0F4F3F] hover:bg-[#0F4F3F] hover:text-white'
              }`}
            >
              Contact Us
            </Link>

            {/* HAMBURGER TRIGGER */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative z-[110] flex flex-col items-end gap-1.5 p-2 focus:outline-none md:hidden`}
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block h-[2.5px] w-8 rounded-full transition-colors ${
                  isMenuOpen || isTransparent ? 'bg-white' : 'bg-gray-800'
                }`}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className={`block h-[2.5px] w-5 rounded-full transition-colors ${
                  isMenuOpen || isTransparent ? 'bg-white' : 'bg-gray-800'
                }`}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8, width: 32 } : { rotate: 0, y: 0, width: 20 }}
                className={`block h-[2.5px] rounded-full transition-colors ${
                  isMenuOpen || isTransparent ? 'bg-white' : 'bg-gray-800'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= EXTRAVAGANT MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#050505] z-[105] flex flex-col justify-center px-12"
          >
            {/* Background Watermark Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-full text-center">
                <h2 className="text-[25vw] font-black text-white leading-none tracking-tighter uppercase">Elite</h2>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-5xl sm:text-7xl font-black tracking-tighter transition-all hover:pl-4 ${
                      pathname === link.href ? 'text-[#34d399]' : 'text-white hover:text-[#34d399]'
                    }`}
                  >
                    {link.name}<span className="text-[#0F4F3F]">.</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-16 left-12 right-12"
            >
                <div className="h-[1px] w-full bg-white/10 mb-8" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-white/40 font-bold tracking-widest text-[10px] uppercase">
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <Globe size={12} className="text-[#34d399]" />
                            <span>Global Studio</span>
                        </div>
                        <span>EST. 2025</span>
                    </div>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#34d399] transition-colors flex items-center gap-2 group">
                        Start Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}