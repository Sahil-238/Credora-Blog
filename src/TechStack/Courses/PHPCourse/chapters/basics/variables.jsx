import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Variables = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Variables</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content Coming Soon</h2>
        <p className="text-gray-600">
          This chapter is under development. Check back soon for the complete content.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../syntax"
          className="text-blue-600 hover:text-blue-800"
        >
          ← PHP Syntax
        </Link>
        <Link
          to="../data-types"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: PHP Data Types →
        </Link>
      </div>
    </motion.div>
  );
};

export default Variables;