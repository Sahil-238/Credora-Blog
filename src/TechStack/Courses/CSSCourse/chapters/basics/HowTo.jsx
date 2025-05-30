import React from 'react';
import { motion } from 'framer-motion';

const HowTo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">How To Add CSS</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Three Ways to Insert CSS</h2>
        <div className="space-y-6">
          {/* External CSS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">1. External CSS</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`<!-- In HTML file -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* In styles.css */
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}`}
              </pre>
            </div>
            <p className="text-gray-600">
              External stylesheets are the most flexible way to add CSS. Link them in your HTML head section.
            </p>
          </div>

          {/* Internal CSS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">2. Internal CSS</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`<head>
  <style>
    body {
      background-color: lightblue;
    }
    
    h1 {
      color: navy;
      margin-left: 20px;
    }
  </style>
</head>`}
              </pre>
            </div>
            <p className="text-gray-600">
              Internal CSS is useful for single-page styles. Add them within a style tag in your HTML head.
            </p>
          </div>

          {/* Inline CSS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">3. Inline CSS</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`<h1 style="color: blue; margin-left: 20px;">This is a heading</h1>
<p style="color: red;">This is a paragraph.</p>`}
              </pre>
            </div>
            <p className="text-gray-600">
              Inline styles apply to individual elements. Use sparingly as they mix content with presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CSS Cascading Order</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            When multiple style sheets are used, styles will cascade into a new "virtual" style sheet with the following priority (highest to lowest):
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Inline styles (inside an HTML element)</li>
            <li>External and internal style sheets (in the head section)</li>
            <li>Browser default styles</li>
          </ol>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use external stylesheets for maintainability</li>
          <li>Avoid inline styles except for testing or dynamic styles</li>
          <li>Keep your CSS organized and well-commented</li>
          <li>Use consistent naming conventions</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default HowTo; 