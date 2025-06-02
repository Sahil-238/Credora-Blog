import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GridBasic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Grid Basics</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding the Grid System</h2>
        <p className="text-gray-600 mb-4">
          Bootstrap's grid system is built with flexbox and allows up to 12 columns across the page. 
          The grid system helps you create responsive layouts by defining how your content should appear 
          across different screen sizes.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Grid System Components</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><code className="bg-gray-100 px-2 py-1 rounded">.container</code> - Wrapper for the grid rows</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">.row</code> - Horizontal groups of columns</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">.col-*</code> - Content containers with variable widths</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Grid Structure</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mb-4">
          {`<div class="container">
  <div class="row">
    <div class="col">
      Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
  </div>
</div>`}
        </div>
        <p className="text-gray-600 mt-4">
          In this example, the columns will automatically be equal width. Each column will take up 
          one-third of the container width since we have three columns.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Column Sizes</h2>
        <p className="text-gray-600 mb-4">
          You can specify column widths using numbers from 1 to 12:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mb-4">
          {`<div class="container">
  <div class="row">
    <div class="col-8">
      <!-- Takes up 8/12 columns -->
    </div>
    <div class="col-4">
      <!-- Takes up 4/12 columns -->
    </div>
  </div>
</div>`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Breakpoints</h2>
        <p className="text-gray-600 mb-4">
          Bootstrap's grid includes six responsive breakpoints:
        </p>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><code className="bg-gray-100 px-2 py-1 rounded">xs</code> - Extra small (&lt;576px)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">sm</code> - Small (≥576px)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">md</code> - Medium (≥768px)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">lg</code> - Large (≥992px)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">xl</code> - Extra large (≥1200px)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">xxl</code> - Extra extra large (≥1400px)</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- Full width on xs, half width on md, one-third on lg -->
  </div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Auto-layout Columns</h3>
            <p className="text-gray-600">
              Use <code className="bg-gray-100 px-2 py-1 rounded">col</code> class for equal-width columns 
              that automatically size themselves.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Nesting</h3>
            <p className="text-gray-600">
              Nest grids by adding new <code className="bg-gray-100 px-2 py-1 rounded">.row</code> and 
              <code className="bg-gray-100 px-2 py-1 rounded">.col-*</code> classes within columns.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Always use rows within containers</li>
          <li>Place columns only within rows</li>
          <li>Specify column sizes that add up to 12 or less</li>
          <li>Use responsive classes for different layouts across screen sizes</li>
          <li>Test your layouts across different viewport sizes</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../containers"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Containers
        </Link>
        <Link
          to="../typography"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Typography →
        </Link>
      </div>
    </motion.div>
  );
};

export default GridBasic; 