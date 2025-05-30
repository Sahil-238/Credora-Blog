import React from 'react';
import { motion } from 'framer-motion';

const Tables = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Tables</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table Styling</h2>
        <div className="space-y-6">
          {/* Basic Table Styling */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Table Styling</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic table styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}

th, td {
  padding: 0.75em;
  text-align: left;
  border: 1px solid #e2e8f0;
}

th {
  background-color: #f7fafc;
  font-weight: bold;
}`}
              </pre>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-left bg-gray-50 border border-gray-200">Header 1</th>
                    <th className="p-3 text-left bg-gray-50 border border-gray-200">Header 2</th>
                    <th className="p-3 text-left bg-gray-50 border border-gray-200">Header 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">Data 1</td>
                    <td className="p-3 border border-gray-200">Data 2</td>
                    <td className="p-3 border border-gray-200">Data 3</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Data 4</td>
                    <td className="p-3 border border-gray-200">Data 5</td>
                    <td className="p-3 border border-gray-200">Data 6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Borders */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Table Borders</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Border collapse */
table {
  border-collapse: collapse;  /* Combines borders */
  border-collapse: separate;  /* Separates borders */
  border-spacing: 2px;       /* Space between cells */
}

/* Border styles */
table, th, td {
  border: 1px solid black;
}

/* Rounded corners (with separate borders) */
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">Collapsed borders:</p>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-left bg-blue-50 border-2 border-blue-200">Item</th>
                      <th className="p-3 text-left bg-blue-50 border-2 border-blue-200">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-2 border-blue-200">A</td>
                      <td className="p-3 border-2 border-blue-200">1</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-2 border-blue-200">B</td>
                      <td className="p-3 border-2 border-blue-200">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Separate borders:</p>
                <div className="rounded-lg overflow-hidden">
                  <table className="w-full" style={{ borderSpacing: '2px', borderCollapse: 'separate' }}>
                    <thead>
                      <tr>
                        <th className="p-3 text-left bg-pink-50 border border-pink-200 rounded-tl-lg">Item</th>
                        <th className="p-3 text-left bg-pink-50 border border-pink-200 rounded-tr-lg">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 bg-white border border-pink-200">A</td>
                        <td className="p-3 bg-white border border-pink-200">1</td>
                      </tr>
                      <tr>
                        <td className="p-3 bg-white border border-pink-200 rounded-bl-lg">B</td>
                        <td className="p-3 bg-white border border-pink-200 rounded-br-lg">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Table Layout */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Table Layout</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Fixed layout */
table {
  table-layout: fixed;
  width: 100%;
}

/* Auto layout */
table {
  table-layout: auto;
  width: 100%;
}

/* Column widths */
th, td {
  width: 25%;      /* Equal columns */
  min-width: 100px;  /* Minimum width */
  max-width: 200px;  /* Maximum width */
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Fixed layout:</p>
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200 w-1/4">Small Header</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200 w-1/4">Very Long Header Title Here</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200 w-1/2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 truncate">Short</td>
                      <td className="p-3 border border-gray-200 truncate">Very long content that should be truncated</td>
                      <td className="p-3 border border-gray-200">Normal content</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Auto layout:</p>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Small Header</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Very Long Header Title Here</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200">Short</td>
                      <td className="p-3 border border-gray-200">Very long content that adjusts to content width</td>
                      <td className="p-3 border border-gray-200">Normal content</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Responsive Tables */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Responsive Tables</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Horizontal scroll */
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Responsive cards */
@media (max-width: 640px) {
  table, thead, tbody, tr, th, td {
    display: block;
  }
  
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  td {
    position: relative;
    padding-left: 50%;
  }
  
  td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 45%;
    padding-right: 10px;
    font-weight: bold;
  }
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Scroll horizontally on small screens:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Column 1</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Column 2</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Column 3</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Column 4</th>
                      <th className="p-3 text-left bg-gray-50 border border-gray-200">Column 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200">Data 1</td>
                      <td className="p-3 border border-gray-200">Data 2</td>
                      <td className="p-3 border border-gray-200">Data 3</td>
                      <td className="p-3 border border-gray-200">Data 4</td>
                      <td className="p-3 border border-gray-200">Data 5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Table Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use semantic table markup (thead, tbody, th)</li>
          <li>Consider mobile responsiveness</li>
          <li>Implement proper spacing for readability</li>
          <li>Use appropriate text alignment</li>
          <li>Include hover states for better UX</li>
          <li>Maintain consistent styling</li>
          <li>Use zebra striping for long tables</li>
          <li>Add proper borders and padding</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Tables; 