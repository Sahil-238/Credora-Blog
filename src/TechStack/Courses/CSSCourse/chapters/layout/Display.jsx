import React from 'react';
import { motion } from 'framer-motion';

const Display = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Display Property</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Display Values</h2>
        <div className="space-y-6">
          {/* Block, Inline, and Inline-Block */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Block, Inline, and Inline-Block</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Display values */
.block {
  display: block;           /* Takes full width */
  width: 200px;            /* Respects width */
  margin: 10px;            /* Respects margins */
}

.inline {
  display: inline;         /* Flows with text */
  width: 200px;            /* Ignores width */
  margin-top: 10px;        /* Ignores vertical margins */
}

.inline-block {
  display: inline-block;   /* Inline flow with block features */
  width: 200px;            /* Respects width */
  margin: 10px;            /* Respects all margins */
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Block elements:</p>
                <div className="bg-blue-100 p-2 w-48">Block element 1</div>
                <div className="bg-blue-100 p-2 w-48">Block element 2</div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Inline elements:</p>
                <span className="bg-pink-100 p-2">Inline 1</span>
                <span className="bg-pink-100 p-2">Inline 2</span>
                <span className="bg-pink-100 p-2">Inline 3</span>
              </div>

              <div>
                <p className="text-sm text-gray-600">Inline-block elements:</p>
                <div className="inline-block bg-purple-100 p-2 w-32 m-2">Inline-block 1</div>
                <div className="inline-block bg-purple-100 p-2 w-32 m-2">Inline-block 2</div>
              </div>
            </div>
          </div>

          {/* Flex and Grid */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Flex and Grid</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Flex container */
.flex-container {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Flex container:</p>
                <div className="flex gap-4 bg-gray-50 p-4 rounded">
                  <div className="bg-blue-100 p-2 rounded">Flex item 1</div>
                  <div className="bg-blue-100 p-2 rounded">Flex item 2</div>
                  <div className="bg-blue-100 p-2 rounded">Flex item 3</div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Grid container:</p>
                <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
                  <div className="bg-green-100 p-2 rounded">Grid item 1</div>
                  <div className="bg-green-100 p-2 rounded">Grid item 2</div>
                  <div className="bg-green-100 p-2 rounded">Grid item 3</div>
                  <div className="bg-green-100 p-2 rounded">Grid item 4</div>
                  <div className="bg-green-100 p-2 rounded">Grid item 5</div>
                  <div className="bg-green-100 p-2 rounded">Grid item 6</div>
                </div>
              </div>
            </div>
          </div>

          {/* None and Visibility */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">None and Visibility</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Hiding elements */
.hidden {
  display: none;         /* Removes from layout */
}

.invisible {
  visibility: hidden;    /* Keeps space in layout */
}

/* Show/hide with display */
@media (max-width: 768px) {
  .mobile-hidden {
    display: none;
  }
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <div className="bg-yellow-100 p-2 mb-2">Visible element</div>
                  <div className="invisible bg-yellow-100 p-2 mb-2">Invisible element (space preserved)</div>
                  <div className="bg-yellow-100 p-2">Another visible element</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Display */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Table Display</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Table display values */
.table {
  display: table;
}
.table-row {
  display: table-row;
}
.table-cell {
  display: table-cell;
  padding: 10px;
}

/* Table caption and column group */
.table-caption {
  display: table-caption;
}
.table-column-group {
  display: table-column-group;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="display-table w-full bg-gray-50 rounded">
                <div className="table w-full">
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell p-2 border border-gray-200">Table cell 1</div>
                      <div className="table-cell p-2 border border-gray-200">Table cell 2</div>
                    </div>
                    <div className="table-row">
                      <div className="table-cell p-2 border border-gray-200">Table cell 3</div>
                      <div className="table-cell p-2 border border-gray-200">Table cell 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Display Property Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose appropriate display values for layout needs</li>
          <li>Use flexbox for one-dimensional layouts</li>
          <li>Use grid for two-dimensional layouts</li>
          <li>Consider display: none impact on accessibility</li>
          <li>Understand the differences between visibility and display</li>
          <li>Use inline-block for text-flow with block features</li>
          <li>Consider responsive display changes</li>
          <li>Test layouts across different screen sizes</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Display; 