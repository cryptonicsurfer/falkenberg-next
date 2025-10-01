'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-anton text-dark-text cursor-pointer"
        >
          FALKENBERG NEXT
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink onClick={() => scrollToSection('insights')}>
            Insikter
          </NavLink>
          <NavLink onClick={() => scrollToSection('progress')}>
            Utveckling
          </NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>
            Kontakt
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="text-dark-text font-medium relative group"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-bright group-hover:w-full transition-all duration-300"
      />
    </motion.button>
  );
}
