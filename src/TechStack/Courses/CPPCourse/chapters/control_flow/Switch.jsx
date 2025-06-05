import React from 'react';
import { motion } from 'framer-motion';

const Switch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Switch</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          Content for Switch will go here.
        </p>
      </section>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>
    </motion.div>
  );
};

export default Switch;