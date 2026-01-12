import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass-panel p-8 md:p-12 space-y-6 backdrop-blur-xl rounded-2xl border border-white/5"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed dark:text-gray-300 light:text-gray-700"
            >
              I am a dedicated software engineering student at Salahaddin University-Erbil 
              with a passion for creating practical technological solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed dark:text-gray-300 light:text-gray-700"
            >
              As a junior-level Java backend developer, I focus on building robust 
              server-side applications and efficient database systems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed dark:text-gray-300 light:text-gray-700"
            >
              My approach combines academic knowledge with hands-on project experience 
              to deliver clean, maintainable code.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
