import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/10 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="https://github.com/EngMustafa-01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass-panel glass-panel-hover text-gray-300 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/mustafa-k-ba743a2a2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass-panel glass-panel-hover text-gray-300 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>

           <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mustafabradosty16@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Mustafa,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass-panel glass-panel-hover text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <HiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 text-sm md:text-base"
          >
            © {currentYear} Mustafa Kabeer | Software Engineer
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
