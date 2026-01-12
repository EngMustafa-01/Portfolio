  import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-[0_4px_24px_rgba(255,0,0,0.4)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Mustafa Kabeer</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineering Student & Backend Developer
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-4 rounded-full glass-panel glass-panel-hover border border-primary/30 backdrop-blur-xl"
            >
              <span className="text-primary lg:text-xl font-bold tracking-wide">Java Backend Developer</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-4 rounded-full glass-panel glass-panel-hover border border-primary/30 backdrop-blur-xl"
            >
              <span className="text-primary lg:text-xl font-bold tracking-wide">Problem Solver</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator Removed */}
      </div>
    </section>
  );
};

export default Hero;
