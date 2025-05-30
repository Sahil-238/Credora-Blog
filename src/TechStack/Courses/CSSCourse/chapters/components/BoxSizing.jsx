import React from 'react';
import { motion } from 'framer-motion';

const BoxSizing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Box Sizing</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Box Sizing</h2>
        <div className="space-y-6">
          {/* Content Box vs Border Box */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Content Box vs Border Box</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Default box sizing */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #3b82f6;
  /* Total width: 200px + 40px + 10px = 250px */
}

/* Modern box sizing */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #8b5cf6;
  /* Total width: 200px (includes padding and border) */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">content-box:</p>
                <div className="relative">
                  <div style={{ 
                    boxSizing: 'content-box',
                    width: '200px',
                    padding: '20px',
                    border: '5px solid #3b82f6',
                    backgroundColor: '#eff6ff'
                  }}>
                    Content box with 200px width + padding + border
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Total width: 250px (200 + 40 + 10)
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">border-box:</p>
                <div className="relative">
                  <div style={{ 
                    boxSizing: 'border-box',
                    width: '200px',
                    padding: '20px',
                    border: '5px solid #8b5cf6',
                    backgroundColor: '#f5f3ff'
                  }}>
                    Border box with fixed 200px total width
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Total width: 200px (includes padding and border)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Box Sizing Reset */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Global Box Sizing Reset</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Modern box sizing reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Inheritance approach */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}`}
              </pre>
            </div>
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                It's recommended to use border-box globally in modern web development. 
                This makes sizing elements more intuitive and prevents unexpected layout issues.
              </p>
            </div>
          </div>

          {/* Box Sizing with Flex and Grid */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Box Sizing with Flex and Grid</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.flex-container {
  display: flex;
  gap: 1rem;
}

.flex-item {
  box-sizing: border-box;
  flex: 1;
  padding: 1rem;
  border: 2px solid;
}`}
              </pre>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 p-4 border-2 border-blue-500 bg-blue-50">
                Flex Item 1
              </div>
              <div className="flex-1 p-4 border-2 border-blue-500 bg-blue-50">
                Flex Item 2
              </div>
              <div className="flex-1 p-4 border-2 border-blue-500 bg-blue-50">
                Flex Item 3
              </div>
            </div>
          </div>

          {/* Box Sizing with Max/Min Width */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Box Sizing with Max/Min Width</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.responsive-element {
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  min-width: 200px;
  padding: 20px;
  border: 2px solid;
}`}
              </pre>
            </div>
            <div style={{ 
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '500px',
              minWidth: '200px',
              padding: '20px',
              border: '2px solid #4b5563',
              backgroundColor: '#f9fafb'
            }}>
              Responsive element with min and max width constraints
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Box Sizing Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use border-box as the default box-sizing</li>
          <li>Apply box-sizing reset at the root level</li>
          <li>Consider inheritance for component-specific overrides</li>
          <li>Be consistent with box model throughout the project</li>
          <li>Account for box-sizing when using width constraints</li>
          <li>Test layouts with different content sizes</li>
          <li>Use modern layout techniques (Flex/Grid) with border-box</li>
          <li>Document any deviations from border-box</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BoxSizing; 