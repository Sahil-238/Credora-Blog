import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const GridIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to CSS Grid</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is CSS Grid?</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="text-gray-600 mb-4">
            CSS Grid Layout is a two-dimensional layout system designed to handle both rows and columns simultaneously. It's perfect for creating complex layouts and can handle both large-scale page layouts and smaller component layouts.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Container Properties</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Grid Container</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.grid-container {
  display: grid;
  grid-template-columns: 200px auto 200px;
  grid-template-rows: 100px 200px;
  gap: 1rem;
}`}</pre>
            </div>
            <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded">
              <div className="bg-blue-100 p-4 rounded">1</div>
              <div className="bg-blue-100 p-4 rounded">2</div>
              <div className="bg-blue-100 p-4 rounded">3</div>
              <div className="bg-pink-100 p-4 rounded">4</div>
              <div className="bg-pink-100 p-4 rounded">5</div>
              <div className="bg-pink-100 p-4 rounded">6</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Lines and Tracks</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid-item {
  grid-column: 1 / 3;    /* Start at line 1, end at line 3 */
  grid-row: 2 / 4;       /* Start at line 2, end at line 4 */
}`}</pre>
          </div>
          <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 rounded">
            <div className="col-span-2 row-span-2 bg-purple-100 p-4 rounded">Spanning Item</div>
            <div className="bg-blue-100 p-4 rounded">2</div>
            <div className="bg-blue-100 p-4 rounded">3</div>
            <div className="bg-pink-100 p-4 rounded">4</div>
            <div className="bg-pink-100 p-4 rounded">5</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Areas</h2>
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
            <div className="col-span-3 bg-blue-100 p-4 rounded">Header</div>
            <div className="bg-pink-100 p-4 rounded">Sidebar</div>
            <div className="col-span-2 bg-purple-100 p-4 rounded">Main Content</div>
            <div className="col-span-3 bg-green-100 p-4 rounded">Footer</div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Grid Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use grid for two-dimensional layouts</li>
          <li>Consider using grid areas for semantic layouts</li>
          <li>Combine with flexbox for best results</li>
          <li>Use grid-gap for consistent spacing</li>
          <li>Make grids responsive with minmax() and auto-fit/auto-fill</li>
          <li>Name grid lines for better maintainability</li>
          <li>Test layouts across different screen sizes</li>
          <li>Consider accessibility in your grid layouts</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default GridIntro; 