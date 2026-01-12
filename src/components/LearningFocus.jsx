import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiSpringboot } from 'react-icons/si';

const LearningFocus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-gradient">Current Learning Focus</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="card dark:card-dark light:card-light p-8 md:p-12 hover-glow cursor-pointer"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-full bg-gradient-to-br from-primary to-red-800"
            >
              <SiSpringboot className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-gradient">
              Java Spring Boot
            </h3>

            <p className="text-lg md:text-xl dark:text-gray-300 light:text-gray-700 max-w-2xl">
              Mastering enterprise-level backend development and RESTful API design
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold">
                REST APIs
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold">
                Microservices
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold">
                Spring Security
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningFocus;
