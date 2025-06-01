import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Containers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Containers</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Containers?</h2>
        <p className="text-gray-600 mb-4">
          Containers are the most basic layout element in Bootstrap and are required when using the default grid system. 
          They're used to contain, pad, and (sometimes) center the content within them.
        </p>
        <p className="text-gray-600">
          Bootstrap comes with three different container types:
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Container Types</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">.container</h3>
            <p className="text-gray-600 mb-3">
              Sets a max-width at each responsive breakpoint:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Extra small (&lt;576px): 100%</li>
              <li>Small (≥576px): 540px</li>
              <li>Medium (≥768px): 720px</li>
              <li>Large (≥992px): 960px</li>
              <li>Extra large (≥1200px): 1140px</li>
              <li>Extra extra large (≥1400px): 1320px</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">.container-fluid</h3>
            <p className="text-gray-600">
              Spans the entire width of the viewport at all breakpoints. Width is always 100%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">.container-{'{breakpoint}'}</h3>
            <p className="text-gray-600 mb-3">
              Width is 100% until the specified breakpoint is reached:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>.container-sm (≥576px)</li>
              <li>.container-md (≥768px)</li>
              <li>.container-lg (≥992px)</li>
              <li>.container-xl (≥1200px)</li>
              <li>.container-xxl (≥1400px)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example Usage</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mb-4">
          {`<!-- Regular container -->
<div class="container">
  <!-- Content here -->
</div>

<!-- Fluid container -->
<div class="container-fluid">
  <!-- Content here -->
</div>

<!-- Responsive container -->
<div class="container-md">
  <!-- 100% wide until medium breakpoint -->
</div>`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Use .container for a responsive fixed-width container</li>
          <li>Use .container-fluid when you need a full-width container</li>
          <li>Use .container-{'{breakpoint}'} for responsive containers that are 100% wide until the specified breakpoint</li>
          <li>Containers can be nested, but most layouts don't require a nested container</li>
          <li>Combine containers with Bootstrap's grid system for complex layouts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Default Padding</h2>
        <p className="text-gray-600">
          Containers add padding to the left and right sides:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Default padding: 12px (1rem) on each side</li>
          <li>Padding helps maintain spacing between content and container edges</li>
          <li>Can be modified using Bootstrap's spacing utilities</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../get-started"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Getting Started
        </Link>
        <Link
          to="../grid-basic"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Grid Basics →
        </Link>
      </div>
    </motion.div>
  );
};

export default Containers; 