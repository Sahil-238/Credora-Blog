import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Introduction to jQuery</h1>
      <p>
        Welcome to the jQuery course! jQuery is a fast, lightweight, and feature-rich
        JavaScript library designed to simplify HTML document traversing, event handling,
        animating, and Ajax interactions for rapid web development.
      </p>

      <h2>Why Learn jQuery?</h2>
      <ul>
        <li>Easy DOM manipulation</li>
        <li>Cross-browser compatibility</li>
        <li>Rich ecosystem of plugins</li>
        <li>Simplified AJAX operations</li>
        <li>Powerful animation capabilities</li>
      </ul>

      <h2>Course Overview</h2>
      <p>
        This course will take you from jQuery basics to advanced concepts. You'll learn:
      </p>
      <ul>
        <li>DOM manipulation and traversal</li>
        <li>Event handling and effects</li>
        <li>AJAX and JSON</li>
        <li>jQuery plugins</li>
        <li>Best practices and optimization</li>
      </ul>

      <h2>Prerequisites</h2>
      <p>
        Basic knowledge of HTML, CSS, and JavaScript will be helpful. We'll start with
        the fundamentals and progressively move to more advanced topics. By the end of
        this course, you'll be able to build interactive web applications using jQuery.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="text-yellow-700">
          <strong>Note:</strong> While jQuery's popularity has decreased with the rise
          of modern JavaScript frameworks, it remains widely used in legacy applications
          and continues to be a valuable skill for web developers.
        </p>
      </div>
    </motion.div>
  );
};

export default Introduction;