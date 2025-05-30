import React from 'react';
import { motion } from 'framer-motion';

const Syntax = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Syntax</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CSS Rule Structure</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
          <pre className="whitespace-pre-wrap">
{`selector {
  property1: value1;
  property2: value2;
  /* CSS Comment */
}`}
          </pre>
        </div>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Selector:</strong> Targets the HTML element(s) to style</li>
          <li><strong>Property:</strong> The style attribute you want to change</li>
          <li><strong>Value:</strong> The specific setting for the property</li>
          <li><strong>Declaration:</strong> The property-value pair</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Syntax Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Element Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`p {
  color: blue;
  font-size: 16px;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Class Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`.highlight {
  background-color: yellow;
  padding: 10px;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">ID Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`#header {
  margin: 20px;
  text-align: center;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CSS Comments</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
          <pre className="whitespace-pre-wrap">
{`/* Single line comment */

/* Multiple line comment
   Can span across
   multiple lines */

selector {
  /* Comment within rules */
  property: value;
}`}
          </pre>
        </div>
        <p className="text-gray-600">
          Comments are useful for documenting your CSS code and temporarily disabling certain styles during development.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Mistakes to Avoid</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <ul className="list-disc list-inside text-red-600 space-y-2">
            <li>Forgetting to close curly braces</li>
            <li>Missing semicolons after declarations</li>
            <li>Incorrect property names or values</li>
            <li>Using wrong selector syntax</li>
            <li>Misspelling property names or values</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Practice Exercise</h2>
        <p className="text-pink-600">
          Try writing CSS rules for different types of selectors. Remember to include properties, values,
          and proper syntax with semicolons and curly braces. In the next lesson, we'll dive deeper into
          CSS selectors and their specificity.
        </p>
      </div>
    </motion.div>
  );
};

export default Syntax; 