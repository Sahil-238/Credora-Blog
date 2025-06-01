import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Composition = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Component Composition</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Component Composition</h2>
        <p className="text-gray-600 mb-4">
          Content for Component Composition component.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/render-props"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/error-boundaries"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default Composition;