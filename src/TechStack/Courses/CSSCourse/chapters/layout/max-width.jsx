import React from 'react';
import { motion } from 'framer-motion';

const MaxWidth = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Width Properties</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Max-width and Related Properties</h2>
        <div className="space-y-6">
          {/* Basic Width Properties */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Width Properties</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Width values */
.element {
  width: 300px;          /* Fixed width */
  width: 50%;            /* Percentage width */
  width: auto;           /* Default width */
  width: 100vw;          /* Viewport width */
  width: max-content;    /* Fit content */
  width: min-content;    /* Minimum content width */
  width: fit-content;    /* Optimal content width */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Fixed width (300px):</p>
                <div className="w-[300px] bg-blue-100 p-4">Fixed width element</div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Percentage width (50%):</p>
                <div className="w-1/2 bg-pink-100 p-4">50% width element</div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Auto width:</p>
                <div className="w-auto inline-block bg-purple-100 p-4">Auto width element</div>
              </div>
            </div>
          </div>

          {/* Max-width */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Max-width</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Max-width examples */
.container {
  max-width: 800px;      /* Maximum width */
  width: 100%;           /* Full width until max-width */
  margin: 0 auto;        /* Center container */
}

.responsive-text {
  max-width: 65ch;       /* Optimal reading width */
}

.image {
  max-width: 100%;       /* Responsive images */
  height: auto;
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Max-width container:</p>
                <div className="max-w-lg w-full mx-auto bg-blue-50 p-4">
                  This container has a max-width of 32rem (lg) but will shrink on smaller screens
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Optimal reading width (65ch):</p>
                <div className="max-w-[65ch] bg-pink-50 p-4">
                  This text container has an optimal reading width of 65 characters. This makes the text more comfortable to read by preventing lines from becoming too long.
                </div>
              </div>
            </div>
          </div>

          {/* Min-width */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Min-width</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Min-width examples */
.element {
  min-width: 200px;      /* Minimum width */
  width: 50%;            /* Target width */
}

.button {
  min-width: min-content;  /* Minimum content width */
  padding: 0.5em 1em;
}

.table-cell {
  min-width: 100px;      /* Minimum cell width */
  white-space: nowrap;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Min-width element:</p>
                <div className="min-w-[200px] w-1/4 bg-green-100 p-4">
                  This element maintains a minimum width of 200px
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Min-content width button:</p>
                <button className="min-w-min bg-blue-500 text-white px-4 py-2 rounded">
                  Click me
                </button>
              </div>
            </div>
          </div>

          {/* Width Calculations */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Width Calculations</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* CSS calculations */
.element {
  width: calc(100% - 2rem);  /* Full width minus margins */
  max-width: calc(var(--sidebar-width) + 20px);
  min-width: min(300px, 100%);
}

/* Modern width functions */
.container {
  width: clamp(200px, 50%, 800px);
  width: min(900px, 100% - 2rem);
  width: max(50%, 300px);
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Calculated width (100% - 2rem):</p>
                <div className="w-[calc(100%-2rem)] mx-4 bg-yellow-100 p-4">
                  This element has margins and fills the remaining space
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Clamped width:</p>
                <div className="w-[clamp(200px,50%,400px)] bg-purple-100 p-4">
                  This element has a width between 200px and 400px
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Width Properties Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use max-width for responsive containers</li>
          <li>Set width: 100% with max-width for flexibility</li>
          <li>Use ch units for optimal reading widths</li>
          <li>Apply min-width to prevent content squishing</li>
          <li>Consider using modern CSS functions like clamp()</li>
          <li>Use relative units for better responsiveness</li>
          <li>Test layouts at various viewport sizes</li>
          <li>Consider content-based sizing with min-content/max-content</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MaxWidth; 