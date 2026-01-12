import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiArrowUp } from 'react-icons/hi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'mustafabradosty16@gmail.com',
      description: 'Primary communication channel',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mustafabradosty16@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Mustafa,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.'
    ,
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+964 (750) 932 0686',
      description: 'Available during business hours',
      options: [
        { label: 'Call Now', href: 'tel:+9647509320686', icon: HiPhone },
        { label: 'WhatsApp', href: 'https://wa.me/9647509320686', icon: FaWhatsapp },
      ]
    },

    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Erbil, Iraq',
      description: 'GMT+3 timezone',
      link: null,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Professional Profile',
      description: 'Connect professionally',
      link: 'https://linkedin.com/in/mustafa-k-ba743a2a2',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-red-600 to-accent z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <Navbar />

      <main className="pt-32 pb-20">
        {/* Contact Hero Section */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient">Get In Touch</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl dark:text-gray-300 light:text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ready to collaborate on innovative projects
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <ContactCard
                  key={index}
                  icon={info.icon}
                  label={info.label}
                  value={info.value}
                  description={info.description}
                  link={info.link}
                  options={info.options}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Availability Status */}
        <section className="px-6 relative">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 animate-pulse-slow" />
              
              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                {/* Status Indicator */}
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                      boxShadow: ["0 0 0 0 rgba(255, 0, 0, 0.7)", "0 0 0 10px rgba(255, 0, 0, 0)", "0 0 0 0 rgba(255, 0, 0, 0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-4 h-4 bg-primary rounded-full"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                    Currently Available
                  </h3>
                </div>

                {/* Details */}
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                  Open for internships, part-time positions, and collaborative projects
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {['Internships', 'Part-Time', 'Collaborations'].map((tag) => (
                    <span key={tag} className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-bold tracking-wide backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
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

export default Contact;
