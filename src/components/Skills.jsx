import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaJava,
  FaGithub,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiGit,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#181717' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-gradient">Technical Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-panel glass-panel-hover p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group rounded-xl"
            >
              <skill.icon
                className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              />
              <span className="text-sm md:text-base font-semibold dark:text-gray-300 light:text-gray-700 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
