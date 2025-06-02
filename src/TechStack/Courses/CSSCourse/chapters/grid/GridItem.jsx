import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const GridItem = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grid Item Properties</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Column</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.item {
  /* Start at column line 1, span 2 columns */
  grid-column: 1 / span 2;
  
  /* Alternative syntax */
  grid-column: 1 / 3;
  
  /* Named lines */
  grid-column: main-start / main-end;
  
  /* Shorthand for grid-column-start/end */
  grid-column: span 2;
}`}</pre>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
            <div className="col-span-2 bg-blue-100 p-4 rounded">Span 2 columns</div>
            <div className="bg-blue-100 p-4 rounded">1 column</div>
            <div className="bg-blue-100 p-4 rounded">1 column</div>
            <div className="col-span-2 bg-blue-100 p-4 rounded">Span 2 columns</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Row</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.item {
  /* Start at row line 1, span 2 rows */
  grid-row: 1 / span 2;
  
  /* Alternative syntax */
  grid-row: 1 / 3;
  
  /* Named lines */
  grid-row: content-start / content-end;
  
  /* Shorthand for grid-row-start/end */
  grid-row: span 2;
}`}</pre>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-64 bg-gray-50 p-4 rounded">
            <div className="row-span-2 bg-pink-100 p-4 rounded">Span 2 rows</div>
            <div className="bg-pink-100 p-4 rounded">1 row</div>
            <div className="row-span-3 bg-pink-100 p-4 rounded">Span 3 rows</div>
            <div className="bg-pink-100 p-4 rounded">1 row</div>
            <div className="bg-pink-100 p-4 rounded">1 row</div>
            <div className="bg-pink-100 p-4 rounded">1 row</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Area</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}</pre>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
            <div className="col-span-3 bg-purple-100 p-4 rounded">Header</div>
            <div className="bg-purple-100 p-4 rounded">Sidebar</div>
            <div className="col-span-2 bg-purple-100 p-4 rounded">Main Content</div>
            <div className="col-span-3 bg-purple-100 p-4 rounded">Footer</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Justify and Align Self</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.item {
  justify-self: center;  /* start | end | center | stretch */
  align-self: center;    /* start | end | center | stretch */
  
  /* Shorthand */
  place-self: center;    /* <align-self> <justify-self> */
}`}</pre>
          </div>
          <div className="h-48 grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
            <div className="justify-self-start bg-green-100 p-4 rounded w-24">Start</div>
            <div className="justify-self-center bg-green-100 p-4 rounded w-24">Center</div>
            <div className="justify-self-end bg-green-100 p-4 rounded w-24">End</div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Grid Item Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use grid-area for semantic placement</li>
          <li>Consider order property for responsive layouts</li>
          <li>Use span keyword for clarity</li>
          <li>Name grid lines for better maintainability</li>
          <li>Use place-self for individual item alignment</li>
          <li>Consider z-index for overlapping items</li>
          <li>Test with different content sizes</li>
          <li>Use min-content/max-content when appropriate</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default GridItem; 