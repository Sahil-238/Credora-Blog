import React from 'react';
import { motion } from 'framer-motion';

const Position = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Position Property</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Position Values and Usage</h2>
        <div className="space-y-6">
          {/* Static Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Static Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Default positioning */
.element {
  position: static;    /* Default value */
}

/* Offset properties have no effect */
.static-element {
  position: static;
  top: 20px;      /* No effect */
  left: 20px;     /* No effect */
}`}
              </pre>
            </div>
            <div className="relative bg-gray-50 p-8 rounded">
              <div className="bg-blue-100 p-4 mb-4">
                Static positioned element (default)
              </div>
              <div className="bg-blue-100 p-4">
                Another static element
              </div>
            </div>
          </div>

          {/* Relative Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Relative Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Relative positioning */
.element {
  position: relative;
  top: 20px;      /* Offset from normal position */
  left: 20px;     /* Offset from normal position */
}

/* Creates positioning context */
.parent {
  position: relative;  /* For absolute children */
}`}
              </pre>
            </div>
            <div className="bg-gray-50 p-8 rounded">
              <div className="bg-blue-100 p-4 mb-4">Normal element</div>
              <div className="relative bg-pink-100 p-4 top-4 left-4">
                Relatively positioned (moved 1rem right and down)
              </div>
              <div className="bg-blue-100 p-4 mt-8">Normal element</div>
            </div>
          </div>

          {/* Absolute Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Absolute Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Absolute positioning */
.element {
  position: absolute;
  top: 0;         /* Distance from top */
  right: 0;       /* Distance from right */
  bottom: 0;      /* Distance from bottom */
  left: 0;        /* Distance from left */
}

/* Center absolutely */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}
              </pre>
            </div>
            <div className="relative bg-gray-50 p-8 rounded min-h-[200px]">
              <div className="bg-blue-100 p-4 mb-4">Normal element</div>
              <div className="absolute top-0 right-0 bg-pink-100 p-4 m-2">
                Absolute: Top Right
              </div>
              <div className="absolute bottom-0 left-0 bg-purple-100 p-4 m-2">
                Absolute: Bottom Left
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-100 p-4">
                Absolute: Centered
              </div>
            </div>
          </div>

          {/* Fixed Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Fixed Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Fixed positioning */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Fixed button */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`}
              </pre>
            </div>
            <div className="relative bg-gray-50 p-8 rounded min-h-[200px]">
              <div className="border-2 border-dashed border-blue-300 p-4 rounded">
                Fixed elements stay in place during scroll. Examples:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Navigation bars</li>
                  <li>Cookie notices</li>
                  <li>Back to top buttons</li>
                  <li>Chat widgets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Sticky Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Sticky positioning */
.section-header {
  position: sticky;
  top: 0;         /* Sticks at top */
  background: white;
  z-index: 10;
}

/* Sticky sidebar */
.sidebar {
  position: sticky;
  top: 20px;      /* Sticks 20px from top */
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}`}
              </pre>
            </div>
            <div className="relative bg-gray-50 p-8 rounded">
              <div className="border-2 border-dashed border-blue-300 p-4 rounded">
                Sticky elements remain in flow until scroll threshold, then stick. Common uses:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Section headers</li>
                  <li>Table headers</li>
                  <li>Category labels</li>
                  <li>Sidebars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Position Property Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use relative positioning sparingly</li>
          <li>Create positioning contexts deliberately</li>
          <li>Consider z-index stacking contexts</li>
          <li>Use sticky for modern scrolling interactions</li>
          <li>Be cautious with fixed positioning on mobile</li>
          <li>Ensure positioned elements remain accessible</li>
          <li>Test positioning across different screen sizes</li>
          <li>Consider performance implications of fixed/sticky elements</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Position; 