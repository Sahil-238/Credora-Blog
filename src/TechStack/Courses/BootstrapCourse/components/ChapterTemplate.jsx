import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ChapterTemplate = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>

      <div className="prose max-w-none">
        {content}
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/bootstrap-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Course
        </Link>
      </div>
    </motion.div>
  );
};

export default ChapterTemplate; 