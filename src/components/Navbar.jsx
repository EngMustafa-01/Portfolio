import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled
          ? 'glass-panel border-b-0' // Use glass-panel class, remove default border
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl md:text-3xl font-bold text-gradient cursor-pointer"
              style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}
            >
              Eng.Mustafa 
            </motion.h1>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link to={link.path} key={link.path}>
                  <motion.span
                    whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255, 0, 0)" }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-2 py-1 text-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-primary font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]'
                        : 'text-gray-300 font-medium hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center gap-6 mt-4">
          <Link to="/">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/')
                  ? 'text-primary font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </motion.span>
          </Link>
          <Link to="/contact">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/contact')
                  ? 'text-primary font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
