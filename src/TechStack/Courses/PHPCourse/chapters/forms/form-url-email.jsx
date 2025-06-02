import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FormUrlEmail = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">FormUrlEmail</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content Coming Soon</h2>
        <p className="text-gray-600">
          This chapter is under development. Check back soon for the complete content.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/php-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Course
        </Link>
      </div>
    </motion.div>
  );
};

export default FormUrlEmail;