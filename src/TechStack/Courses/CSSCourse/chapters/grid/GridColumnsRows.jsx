import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const GridColumnsRows = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Grid Columns and Rows</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Template Columns</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Fixed and Flexible Columns</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  /* Fixed sizes */
  grid-template-columns: 100px 200px 100px;
  
  /* Flexible sizes */
  grid-template-columns: 1fr 2fr 1fr;
  
  /* Mixed units */
  grid-template-columns: 200px 1fr 2fr;
  
  /* Repeat function */
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}`}</pre>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
                <div className="bg-blue-100 p-4 rounded">1fr</div>
                <div className="bg-blue-100 p-4 rounded">1fr</div>
                <div className="bg-blue-100 p-4 rounded">1fr</div>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 bg-gray-50 p-4 rounded">
                <div className="bg-pink-100 p-4 rounded">1fr</div>
                <div className="bg-pink-100 p-4 rounded">2fr</div>
                <div className="bg-pink-100 p-4 rounded">1fr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Template Rows</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Fixed row heights */
  grid-template-rows: 100px 200px;
  
  /* Auto rows */
  grid-auto-rows: minmax(100px, auto);
  
  /* Mixed units */
  grid-template-rows: auto 1fr 2fr;
}`}</pre>
          </div>
          <div className="grid grid-cols-3 grid-rows-[100px_200px] gap-4 bg-gray-50 p-4 rounded">
            <div className="bg-blue-100 p-4 rounded">Row 1</div>
            <div className="bg-blue-100 p-4 rounded">Row 1</div>
            <div className="bg-blue-100 p-4 rounded">Row 1</div>
            <div className="bg-pink-100 p-4 rounded">Row 2</div>
            <div className="bg-pink-100 p-4 rounded">Row 2</div>
            <div className="bg-pink-100 p-4 rounded">Row 2</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Gaps</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Column and row gaps */
  column-gap: 1rem;
  row-gap: 2rem;
  
  /* Shorthand */
  gap: 2rem 1rem;  /* row-gap column-gap */
  gap: 1rem;       /* Equal gaps */
}`}</pre>
          </div>
          <div className="grid grid-cols-3 gap-8 bg-gray-50 p-4 rounded">
            <div className="bg-purple-100 p-4 rounded">1</div>
            <div className="bg-purple-100 p-4 rounded">2</div>
            <div className="bg-purple-100 p-4 rounded">3</div>
            <div className="bg-purple-100 p-4 rounded">4</div>
            <div className="bg-purple-100 p-4 rounded">5</div>
            <div className="bg-purple-100 p-4 rounded">6</div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Grid Columns/Rows Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use fr units for flexible layouts</li>
          <li>Consider minmax() for responsive designs</li>
          <li>Use auto-fill/auto-fit for dynamic grids</li>
          <li>Set explicit grid-template-areas for complex layouts</li>
          <li>Use gap for consistent spacing</li>
          <li>Consider accessibility in grid layouts</li>
          <li>Test with different content sizes</li>
          <li>Use named grid lines for maintainability</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default GridColumnsRows; 