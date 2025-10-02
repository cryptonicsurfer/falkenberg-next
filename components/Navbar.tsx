'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-2xl font-montserrat font-black text-dark-text cursor-pointer"
        >
          FALKENBERG NEXT
        </motion.div>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-dark-text p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('insights')}
                className="text-dark-text font-medium text-left py-2 hover:text-yellow-bright transition-colors"
              >
                Insikter
              </button>
              <button
                onClick={() => scrollToSection('progress')}
                className="text-dark-text font-medium text-left py-2 hover:text-yellow-bright transition-colors"
              >
                Utveckling
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-dark-text font-medium text-left py-2 hover:text-yellow-bright transition-colors"
              >
                Kontakt
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
