import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const ContactCard = ({ icon: Icon, label, value, description, link, options, delay = 0 }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleCardClick = (e) => {
    if (options) {
      e.preventDefault();
      setShowOptions(!showOptions);
    }
  };

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.03 }}
      onClick={handleCardClick}
      className={`glass-panel glass-panel-hover p-8 rounded-2xl cursor-pointer h-full border border-white/5 backdrop-blur-xl relative overflow-hidden group ${options ? 'z-20' : ''}`}
    >
      <div className={`flex flex-col items-center text-center space-y-4 transition-all duration-300 ${showOptions ? 'blur-sm opacity-50' : ''}`}>
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="p-4 rounded-full bg-primary/20 text-primary border border-primary/30"
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        {/* Label */}
        <h3 className="text-xl font-bold text-gradient">{label}</h3>

        {/* Value */}
        <p className="text-lg font-semibold text-gray-200 break-all">
          {value}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>

      {/* Options Overlay */}
      <AnimatePresence>
        {showOptions && options && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-black/60"
          >
            {options.map((option, idx) => (
              <motion.a
                key={idx}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-red-700 hover:scale-105 transition-all w-4/5 justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {option.icon && <option.icon className="w-5 h-5" />}
                {option.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => { e.stopPropagation(); setShowOptions(false); }}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (link && !options) {
    return (
      <a
        href={link}
        target={link.startsWith('http') ? '_blank' : undefined}
        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block h-full"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default ContactCard;
