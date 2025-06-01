import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <motion.div
        className="relative w-16 h-16"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute w-full h-full border-4 border-blue-200 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </motion.div>
      <p className="ml-4 text-gray-600 text-lg">Loading content...</p>
    </div>
  );
};

export default LoadingSpinner; 