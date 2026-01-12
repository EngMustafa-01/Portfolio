import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import LearningFocus from '../components/LearningFocus';
import Skills from '../components/Skills';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrolled > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-red-600 to-accent z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <LearningFocus />
        <Skills />
        <CallToAction />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-primary to-red-800 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 z-40"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <HiArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Home;
