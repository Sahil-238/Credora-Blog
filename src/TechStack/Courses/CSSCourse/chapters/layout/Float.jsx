import React from 'react';
import { motion } from 'framer-motion';

const Float = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Float</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Float Properties</h2>
        <div className="space-y-6">
          {/* Basic Float */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Float</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic float values */
.element {
  float: left;      /* Float to the left */
  float: right;     /* Float to the right */
  float: none;      /* Default value */
}

/* Clear floats */
.clear-element {
  clear: left;      /* Clear left floats */
  clear: right;     /* Clear right floats */
  clear: both;      /* Clear both directions */
  clear: none;      /* Default value */
}`}
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="float-left bg-blue-100 p-2 m-2">
                Floated Left
              </div>
              <div className="float-right bg-pink-100 p-2 m-2">
                Floated Right
              </div>
              <p className="clear-both">
                This text comes after the floated elements and uses clear: both to ensure it appears below them.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Float with Images */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Float with Images</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Image float example */
.article-image {
  float: left;
  margin: 0 1rem 1rem 0;
}

/* Text wrap */
.text-content {
  overflow: auto;    /* Creates block formatting context */
}`}
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="float-left bg-blue-200 w-32 h-32 mr-4 mb-4 flex items-center justify-center">
                Image
              </div>
              <p className="text-gray-600">
                This is an example of text wrapping around a floated image. The text continues to flow around the image until it reaches the bottom of the floated element. This is a common pattern in articles and blog posts where images are positioned alongside text content.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="clear-both"></div>
            </div>
          </div>

          {/* Clearfix */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Clearfix</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Modern clearfix */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Alternative using overflow */
.container {
  overflow: auto;    /* Creates new block formatting context */
}

/* Using display: flow-root */
.modern-container {
  display: flow-root;  /* Modern clearfix alternative */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded after:content-[''] after:table after:clear-both">
                <div className="float-left bg-blue-100 p-2">
                  Floated Left
                </div>
                <div className="float-right bg-pink-100 p-2">
                  Floated Right
                </div>
              </div>
              <p className="text-sm text-gray-600">
                The container above uses a clearfix to contain the floated elements
              </p>
            </div>
          </div>

          {/* Float Layout Patterns */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Float Layout Patterns</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Grid-like layout with floats */
.grid {
  margin: -10px;
}
.grid-item {
  float: left;
  width: calc(33.333% - 20px);
  margin: 10px;
}

/* Equal height columns */
.column {
  float: left;
  width: 50%;
  padding: 20px;
}
.row::after {
  content: "";
  display: table;
  clear: both;
}`}
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="after:content-[''] after:table after:clear-both -m-2">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="float-left w-[calc(33.333%-1rem)] m-2 p-4 bg-blue-100 text-center">
                    Column {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Float Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use modern layout techniques (Flexbox/Grid) when possible</li>
          <li>Always clear floats to prevent layout issues</li>
          <li>Consider using display: flow-root for modern clearfix</li>
          <li>Be cautious with nested floated elements</li>
          <li>Use appropriate margins to prevent content overlap</li>
          <li>Test float layouts across different screen sizes</li>
          <li>Consider accessibility implications</li>
          <li>Document float usage for maintainability</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Float; 