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
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Universal Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Type Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`h1 {
  font-size: 24px;
}

p {
  line-height: 1.5;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Class Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
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
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">ID Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`#main-header {
  position: fixed;
  top: 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Combinators</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Descendant Combinator</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`.container p {
  margin-bottom: 1em;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Child Combinator</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`nav > ul {
  display: flex;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Adjacent Sibling</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`h2 + p {
  font-size: 1.2em;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pseudo-classes</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">State Pseudo-classes</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`a:hover {
  text-decoration: underline;
}

button:focus {
  outline: 2px solid blue;
}

input:disabled {
  background-color: #eee;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Structural Pseudo-classes</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`li:first-child {
  font-weight: bold;
}

li:nth-child(odd) {
  background-color: #f5f5f5;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Attribute Selectors</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
            <pre className="whitespace-pre-wrap">
{`/* Exact match */
[type="submit"] {
  background-color: green;
}

/* Contains value */
[class*="btn"] {
  border-radius: 4px;
}

/* Starts with */
[href^="https"] {
  color: purple;
}`}
            </pre>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Selector Specificity</h2>
        <p className="text-pink-600 mb-4">
          Understanding selector specificity is crucial for writing maintainable CSS. The order of specificity from highest to lowest is:
        </p>
        <ol className="list-decimal list-inside text-pink-600 space-y-1">
          <li>Inline styles</li>
          <li>ID selectors</li>
          <li>Class selectors, attributes selectors, and pseudo-classes</li>
          <li>Type selectors and pseudo-elements</li>
        </ol>
      </div>
    </motion.div>
  );
};

export default Selectors; 