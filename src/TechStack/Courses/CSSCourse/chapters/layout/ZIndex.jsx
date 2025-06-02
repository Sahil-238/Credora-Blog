import React from 'react';
import { motion } from 'framer-motion';

const ZIndex = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Z-Index</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Z-Index and Stacking Contexts</h2>
        <div className="space-y-6">
          {/* Basic Z-Index */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Z-Index</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Z-index values */
.element {
  position: relative;    /* Required for z-index */
  z-index: 1;           /* Above default */
  z-index: -1;          /* Below default */
  z-index: 999;         /* Higher stack level */
  z-index: auto;        /* Default stacking */
}

/* Only works on positioned elements */
.positioned {
  position: relative;   /* or absolute, fixed, sticky */
  z-index: 1;          /* Now takes effect */
}`}
              </pre>
            </div>
            <div className="relative h-48 bg-gray-50 p-4 rounded">
              <div className="absolute left-4 top-4 w-24 h-24 bg-blue-200 flex items-center justify-center">
                z-index: auto
              </div>
              <div className="absolute left-12 top-12 w-24 h-24 bg-pink-200 z-10 flex items-center justify-center">
                z-index: 10
              </div>
              <div className="absolute left-20 top-20 w-24 h-24 bg-purple-200 z-20 flex items-center justify-center">
                z-index: 20
              </div>
            </div>
          </div>

          {/* Stacking Contexts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Stacking Contexts</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Creating stacking contexts */
.new-context {
  /* Any of these create a new stacking context */
  position: relative;
  z-index: 0;
  opacity: less-than-1;
  transform: any-value;
  filter: any-value;
  isolation: isolate;
}

/* Nested stacking contexts */
.parent {
  position: relative;
  z-index: 1;
}
.child {
  position: relative;
  z-index: 999;  /* Only compared within parent */
}`}
              </pre>
            </div>
            <div className="relative h-64 bg-gray-50 p-4 rounded">
              <div className="relative z-10 p-4 bg-blue-100">
                Parent (z-index: 10)
                <div className="absolute right-0 top-0 z-[999] p-2 bg-blue-200">
                  Child (z-index: 999)
                </div>
              </div>
              <div className="relative z-20 -mt-8 p-4 bg-pink-100">
                Higher parent (z-index: 20)
                <div className="absolute right-0 top-0 z-[5] p-2 bg-pink-200">
                  Child (z-index: 5)
                </div>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Common Use Cases</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Modal overlay */
.overlay {
  position: fixed;
  z-index: 100;
}
.modal {
  position: fixed;
  z-index: 101;
}

/* Dropdown menu */
.dropdown-trigger {
  position: relative;
  z-index: 1;
}
.dropdown-menu {
  position: absolute;
  z-index: 2;
}

/* Fixed header */
.header {
  position: fixed;
  z-index: 1000;  /* High value for always on top */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="relative h-32 bg-gray-50 p-4 rounded overflow-hidden">
                <div className="absolute inset-0 bg-black/20">
                  Overlay (z-index: 100)
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-10">
                  Modal (z-index: 101)
                </div>
              </div>
              <div className="relative h-32 bg-gray-50 p-4 rounded">
                <div className="relative inline-block z-10">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Dropdown
                  </button>
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-1 p-2 z-20">
                    Dropdown menu
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debugging Z-Index */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Debugging Z-Index</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Common debugging techniques */
* {
  /* Highlight stacking contexts */
  outline: 1px solid red;
}

/* Isolate elements */
.isolated {
  isolation: isolate;
}

/* Reset stacking context */
.reset {
  position: static;
  z-index: auto;
}`}
              </pre>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Common z-index issues and solutions:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Element not appearing above others despite high z-index</li>
                <li>Z-index not working on static positioned elements</li>
                <li>Nested stacking contexts limiting z-index effectiveness</li>
                <li>Conflicts between different stacking contexts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Z-Index Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use meaningful z-index values (avoid arbitrary large numbers)</li>
          <li>Create z-index scales/systems for consistency</li>
          <li>Be aware of stacking context limitations</li>
          <li>Use isolation: isolate for independent stacking contexts</li>
          <li>Document z-index usage in complex layouts</li>
          <li>Consider using CSS custom properties for z-index values</li>
          <li>Test z-index behavior across different browsers</li>
          <li>Minimize the number of stacking contexts</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ZIndex; 