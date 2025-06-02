import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Syntax</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`selector {
  property: value;
}`}
            </pre>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Selector points to the HTML element you want to style</li>
            <li>Declaration block contains one or more declarations</li>
            <li>Each declaration includes a property and a value</li>
            <li>Property and value are separated by a colon</li>
            <li>Each declaration ends with a semicolon</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Selector Types</h2>
        <div className="space-y-6">
          {/* Element Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Element Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  color: blue;
  text-align: center;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects all &lt;p&gt; elements</p>
          </div>

          {/* Class Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Class Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.highlight {
  background-color: yellow;
  font-weight: bold;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects elements with class="highlight"</p>
          </div>

          {/* ID Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">ID Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`#header {
  background-color: black;
  color: white;
  padding: 20px;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects element with id="header"</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Combinators</h2>
        <div className="space-y-6">
          {/* Descendant Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Descendant Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div p {
  margin: 10px;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects all &lt;p&gt; elements inside &lt;div&gt; elements</p>
          </div>

          {/* Child Selector */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Child Selector</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div > p {
  margin: 10px;
}`}
              </pre>
            </div>
            <p className="text-gray-600">Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</p>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">CSS Syntax Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use meaningful and descriptive class names</li>
          <li>Keep selectors simple and efficient</li>
          <li>Avoid using !important</li>
          <li>Group related styles together</li>
          <li>Use comments to explain complex selectors</li>
          <li>Maintain consistent formatting</li>
          <li>Follow a naming convention (e.g., BEM)</li>
          <li>Minimize specificity conflicts</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default Syntax; 