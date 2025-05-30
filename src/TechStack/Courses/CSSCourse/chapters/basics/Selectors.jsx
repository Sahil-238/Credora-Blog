import React from 'react';
import { motion } from 'framer-motion';

const Selectors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Selectors</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Selectors</h2>
        <div className="space-y-6">
          {/* Universal Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Universal Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects all elements on the page</p>
          </div>

          {/* Type Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Type Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`h1 {
  font-size: 2em;
}

p {
  line-height: 1.5;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects all elements of the specified type</p>
          </div>

          {/* Class Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Class Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.primary-button {
  background-color: blue;
  color: white;
}

.card {
  border: 1px solid #ddd;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects elements with the specified class</p>
          </div>

          {/* ID Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">ID Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`#main-header {
  position: sticky;
  top: 0;
}

#footer {
  margin-top: auto;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects a single element with the specified ID</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Combinators</h2>
        <div className="space-y-6">
          {/* Descendant Combinator */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Descendant Combinator</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container p {
  margin-bottom: 1em;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects all p elements inside elements with class container</p>
          </div>

          {/* Child Combinator */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Child Combinator</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.nav > li {
  display: inline-block;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects elements that are direct children of another element</p>
          </div>

          {/* Adjacent Sibling */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Adjacent Sibling</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`h2 + p {
  font-size: 1.2em;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects an element that directly follows another element</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pseudo Selectors</h2>
        <div className="space-y-6">
          {/* Pseudo Classes */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Pseudo Classes</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`a:hover {
  text-decoration: underline;
}

input:focus {
  border-color: blue;
}

li:first-child {
  font-weight: bold;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Select elements based on their state or position</p>
          </div>

          {/* Pseudo Elements */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Pseudo Elements</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p::first-line {
  font-weight: bold;
}

.quote::before {
  content: "\\201C";
}

.quote::after {
  content: "\\201D";
}`}
              </pre>
            </div>
            <p className="text-gray-600">Style a specific part of an element</p>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Selector Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Keep selectors as simple as possible</li>
          <li>Avoid over-qualified selectors</li>
          <li>Use classes instead of IDs when possible</li>
          <li>Minimize the use of descendant selectors</li>
          <li>Consider selector performance</li>
          <li>Use meaningful class names</li>
          <li>Follow a consistent naming convention</li>
          <li>Document complex selectors with comments</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Selectors; 