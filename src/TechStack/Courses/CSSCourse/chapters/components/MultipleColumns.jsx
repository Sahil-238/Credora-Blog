import React from 'react';
import { motion } from 'framer-motion';

const MultipleColumns = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Multiple Columns</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Column Layout Properties</h2>
        <div className="space-y-6">
          {/* Basic Column Count */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Column Count</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.multi-column {
  column-count: 3;
  column-gap: 2em;
  column-rule: 1px solid #ddd;
}

/* Column width instead of count */
.column-width {
  column-width: 200px; /* Minimum column width */
  column-gap: 2em;
}`}
              </pre>
            </div>
            <div className="[column-count:3] [column-gap:2em] [column-rule:1px_solid_#ddd]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Column Spans */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Column Spans</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.column-span {
  column-span: all; /* Span across all columns */
}

.no-span {
  column-span: none; /* Default behavior */
}`}
              </pre>
            </div>
            <div className="[column-count:2] [column-gap:2em] [column-rule:1px_solid_#ddd]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h4 className="text-lg font-semibold my-4 [column-span:all] text-center bg-gray-100 py-2">
                Important Section Header
              </h4>
              <p className="mb-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Column Fill */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Column Fill</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.balanced-columns {
  column-fill: balance; /* Equal height columns */
}

.auto-columns {
  column-fill: auto; /* Columns fill sequentially */
  height: 300px; /* Fixed height required */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Balanced columns:</p>
                <div className="[column-count:3] [column-gap:1em] [column-fill:balance] [column-rule:1px_solid_#ddd]">
                  <p className="mb-2">Short text example to demonstrate balanced columns. Each column will try to maintain equal height.</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Auto-fill columns:</p>
                <div className="h-32 [column-count:3] [column-gap:1em] [column-fill:auto] [column-rule:1px_solid_#ddd] overflow-hidden">
                  <p className="mb-2">Longer text example to show auto-filling columns. The content will fill each column sequentially until it reaches the container height limit.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column Breaks */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Column Breaks</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.break-after {
  break-after: column;
}

.break-before {
  break-before: column;
}

.break-inside {
  break-inside: avoid;
}`}
              </pre>
            </div>
            <div className="[column-count:3] [column-gap:2em] [column-rule:1px_solid_#ddd]">
              <div className="[break-inside:avoid] mb-4">
                <h4 className="font-semibold mb-2">Avoiding Breaks</h4>
                <p>This content block will not break across columns, ensuring better readability.</p>
              </div>
              <div className="[break-inside:avoid] mb-4">
                <h4 className="font-semibold mb-2">Another Section</h4>
                <p>Another example of content that stays together within its column.</p>
              </div>
              <div className="[break-inside:avoid]">
                <h4 className="font-semibold mb-2">Final Section</h4>
                <p>The last section demonstrating break-inside: avoid property.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Multiple Columns Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use appropriate column widths for readability</li>
          <li>Consider responsive breakpoints for column counts</li>
          <li>Avoid breaking important content across columns</li>
          <li>Use column-span for important headings</li>
          <li>Maintain consistent column gaps</li>
          <li>Test readability across different screen sizes</li>
          <li>Use column rules to improve visual separation</li>
          <li>Consider using column-width for flexible layouts</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MultipleColumns; 