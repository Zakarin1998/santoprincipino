import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.95,
  },
  in: { 
    opacity: 1, 
    scale: 1,
  },
  out: { 
    opacity: 0, 
    scale: 1.05,
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;