'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mark mounted to avoid hydration mismatch for dynamic classes
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sachinmstackdev' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-kumar-5647b5219/' },
    { icon: MessageCircle, href: 'https://wa.me/919289613912' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-container ${
        hasMounted && isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-white/70 backdrop-blur'
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group touch-manipulation" aria-label="Go to homepage">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm sm:text-base">SK</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
              Sachin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50 touch-manipulation"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-gray-50 touch-manipulation"
                aria-label={`Visit ${social.icon.name} profile`}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow transition-all touch-manipulation"
            >
              Let’s Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-[60] bg-white min-h-screen overflow-y-auto"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              onClick={() => setIsMenuOpen(false)}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-4 p-3 rounded-lg hover:bg-gray-100 transition-colors z-20"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="container pt-24 pb-8 safe-area-bottom relative" onClick={(e) => e.stopPropagation()}>
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="mobile-nav-item text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-xl transition-colors touch-manipulation"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="px-4 pt-4 border-t border-gray-200 mt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Follow Me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <Link
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-gray-700 hover:text-purple-600 transition-colors p-3 rounded-lg hover:bg-gray-50 touch-manipulation"
                          aria-label={`Visit ${social.icon.name} profile`}
                        >
                          <social.icon className="h-6 w-6" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 