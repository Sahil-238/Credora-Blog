import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

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
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="text-gray-600 mb-4">
            CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It enables you to control:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Layout and Design</li>
            <li>Colors and Typography</li>
            <li>Spacing and Positioning</li>
            <li>Animations and Transitions</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CSS Syntax</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`selector {
  property: value;
  /* This is a comment */
  another-property: another-value;
}`}
            </pre>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Example:</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`.header {
  background-color: #3B82F6;
  color: white;
  padding: 20px;
  border-radius: 8px;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ways to Include CSS</h2>
        <div className="space-y-6">
          {/* Inline CSS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">1. Inline CSS</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`<div style="color: blue; margin: 20px;">
  This is inline CSS
</div>`}
              </pre>
            </div>
            <p className="text-gray-600">
              ⚠️ Use sparingly - makes code harder to maintain
            </p>
          </div>

          {/* Internal CSS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">2. Internal CSS</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>`}
              </pre>
            </div>
            <p className="text-gray-600">
              👍 Useful for single-page applications
            </p>
          </div>

          {/* External CSS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">3. External CSS</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* styles.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

<!-- In HTML file -->
<link rel="stylesheet" href="styles.css">`}
              </pre>
            </div>
            <p className="text-gray-600">
              ✅ Recommended - Better organization and maintenance
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Modern CSS Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Layout</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Flexbox</li>
              <li>• Grid</li>
              <li>• Container Queries</li>
              <li>• Multi-column Layout</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Styling</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Custom Properties</li>
              <li>• Color Functions</li>
              <li>• Gradients</li>
              <li>• Animations</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">CSS Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use meaningful class names</li>
          <li>Follow a consistent naming convention</li>
          <li>Keep selectors simple and efficient</li>
          <li>Organize CSS with a methodology (BEM, SMACSS, etc.)</li>
          <li>Use CSS preprocessors for large projects</li>
          <li>Minimize use of !important</li>
          <li>Write maintainable and scalable code</li>
          <li>Consider browser compatibility</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default Introduction; 