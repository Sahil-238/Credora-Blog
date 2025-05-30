import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const GridContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grid Container Properties</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Justify Content</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: space-between;  /* start | end | center | space-around | space-between | space-evenly */
}`}</pre>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 justify-items-center gap-4 bg-gray-50 p-4 rounded">
              <div className="bg-blue-100 p-4 rounded w-24">1</div>
              <div className="bg-blue-100 p-4 rounded w-24">2</div>
              <div className="bg-blue-100 p-4 rounded w-24">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Align Items</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;  /* start | end | center | stretch */
  height: 200px;
}`}</pre>
          </div>
          <div className="h-48 grid grid-cols-3 items-center gap-4 bg-gray-50 p-4 rounded">
            <div className="bg-pink-100 p-4 rounded">1</div>
            <div className="bg-pink-100 p-4 rounded">2</div>
            <div className="bg-pink-100 p-4 rounded">3</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Place Items</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;  /* Shorthand for align-items and justify-items */
}`}</pre>
          </div>
          <div className="h-48 grid grid-cols-3 place-items-center gap-4 bg-gray-50 p-4 rounded">
            <div className="bg-purple-100 p-4 rounded w-24">1</div>
            <div className="bg-purple-100 p-4 rounded w-24">2</div>
            <div className="bg-purple-100 p-4 rounded w-24">3</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Auto Flow</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;  /* row | column | row dense | column dense */
}`}</pre>
          </div>
          <div className="grid grid-cols-3 auto-rows-fr gap-4 bg-gray-50 p-4 rounded">
            <div className="col-span-2 bg-green-100 p-4 rounded">1 (span 2)</div>
            <div className="bg-green-100 p-4 rounded">2</div>
            <div className="bg-green-100 p-4 rounded">3</div>
            <div className="bg-green-100 p-4 rounded">4</div>
            <div className="bg-green-100 p-4 rounded">5</div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Grid Container Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use grid-template-areas for semantic layouts</li>
          <li>Consider grid-auto-flow for better item placement</li>
          <li>Use place-items for quick alignment</li>
          <li>Set explicit grid sizes when possible</li>
          <li>Use minmax() for flexible layouts</li>
          <li>Consider grid-auto-rows/columns for implicit grids</li>
          <li>Test with different screen sizes</li>
          <li>Use grid-gap for consistent spacing</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default GridContainer; 