import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to CSS</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is CSS?</h2>
        <p className="text-gray-600 mb-4">
          CSS (Cascading Style Sheets) is the language used to style and layout web pages. It's what makes the web beautiful,
          allowing you to control the design, layout, and variations in display for different devices and screen sizes.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Points:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>CSS describes how HTML elements should be displayed</li>
            <li>It can control layout, colors, fonts, spacing, and more</li>
            <li>It allows separation of content (HTML) from presentation (CSS)</li>
            <li>It can be used to create responsive designs</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Learn CSS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">For Developers</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Essential for web development</li>
              <li>• High demand skill</li>
              <li>• Foundation for frameworks</li>
              <li>• Better understanding of web</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">For Designers</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Creative control</li>
              <li>• Responsive design</li>
              <li>• Interactive elements</li>
              <li>• Visual consistency</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Syntax</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
          <pre className="whitespace-pre-wrap">
{`selector {
  property: value;
  /* This is a comment */
  another-property: another-value;
}`}
          </pre>
        </div>
        <p className="text-gray-600 mt-4">
          This is the fundamental structure of CSS. We'll dive deeper into selectors, properties, and values
          in the following lessons.
        </p>
      </section>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Ready to Start?</h2>
        <p className="text-blue-600">
          In the next lessons, we'll explore CSS syntax in detail and learn how to select and style HTML elements.
          Make sure you're comfortable with these basic concepts before moving forward.
        </p>
      </div>
    </motion.div>
  );
};

export default Introduction; 