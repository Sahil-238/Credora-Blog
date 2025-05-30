import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const FlexContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Flex Container Properties</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Main Axis Properties</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">justify-content</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container {
  display: flex;
  justify-content: flex-start;    /* Default */
  justify-content: flex-end;      /* Items at end */
  justify-content: center;        /* Items at center */
  justify-content: space-between; /* Equal space between items */
  justify-content: space-around;  /* Equal space around items */
  justify-content: space-evenly;  /* Equal space between and around */
}`}</pre>
            </div>
            <div className="space-y-4">
              <div className="flex justify-start gap-2 bg-gray-50 p-4 rounded">
                <div className="bg-blue-100 p-2 rounded">1</div>
                <div className="bg-blue-100 p-2 rounded">2</div>
                <div className="bg-blue-100 p-2 rounded">3</div>
              </div>
              <div className="flex justify-end gap-2 bg-gray-50 p-4 rounded">
                <div className="bg-pink-100 p-2 rounded">1</div>
                <div className="bg-pink-100 p-2 rounded">2</div>
                <div className="bg-pink-100 p-2 rounded">3</div>
              </div>
              <div className="flex justify-center gap-2 bg-gray-50 p-4 rounded">
                <div className="bg-purple-100 p-2 rounded">1</div>
                <div className="bg-purple-100 p-2 rounded">2</div>
                <div className="bg-purple-100 p-2 rounded">3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cross Axis Properties</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">align-items</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container {
  display: flex;
  align-items: stretch;      /* Default */
  align-items: flex-start;   /* Items at start */
  align-items: flex-end;     /* Items at end */
  align-items: center;       /* Items at center */
  align-items: baseline;     /* Items aligned by text baseline */
}`}</pre>
            </div>
            <div className="space-y-4">
              <div className="flex align-start gap-2 h-24 bg-gray-50 p-4 rounded">
                <div className="bg-blue-100 p-2 rounded h-12 flex items-center">1</div>
                <div className="bg-blue-100 p-2 rounded h-16 flex items-center">2</div>
                <div className="bg-blue-100 p-2 rounded h-8 flex items-center">3</div>
              </div>
              <div className="flex items-center gap-2 h-24 bg-gray-50 p-4 rounded">
                <div className="bg-pink-100 p-2 rounded h-12 flex items-center">1</div>
                <div className="bg-pink-100 p-2 rounded h-16 flex items-center">2</div>
                <div className="bg-pink-100 p-2 rounded h-8 flex items-center">3</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">align-content</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;    /* Lines at start */
  align-content: flex-end;      /* Lines at end */
  align-content: center;        /* Lines at center */
  align-content: space-between; /* Equal space between lines */
  align-content: space-around;  /* Equal space around lines */
  align-content: stretch;       /* Lines stretch to fill container */
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Flow Properties</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">flex-direction</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container {
  display: flex;
  flex-direction: row;            /* Default - left to right */
  flex-direction: row-reverse;    /* Right to left */
  flex-direction: column;         /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}`}</pre>
            </div>
            <div className="space-y-4">
              <div className="flex flex-row gap-2 bg-gray-50 p-4 rounded">
                <div className="bg-blue-100 p-2 rounded">1</div>
                <div className="bg-blue-100 p-2 rounded">2</div>
                <div className="bg-blue-100 p-2 rounded">3</div>
              </div>
              <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded">
                <div className="bg-pink-100 p-2 rounded">1</div>
                <div className="bg-pink-100 p-2 rounded">2</div>
                <div className="bg-pink-100 p-2 rounded">3</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">flex-wrap</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container {
  display: flex;
  flex-wrap: nowrap;       /* Default - single line */
  flex-wrap: wrap;         /* Multiple lines */
  flex-wrap: wrap-reverse; /* Multiple lines, reversed */
}`}</pre>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 bg-gray-50 p-4 rounded w-64">
                <div className="bg-blue-100 p-2 rounded">Item 1</div>
                <div className="bg-blue-100 p-2 rounded">Item 2</div>
                <div className="bg-blue-100 p-2 rounded">Item 3</div>
                <div className="bg-blue-100 p-2 rounded">Item 4</div>
                <div className="bg-blue-100 p-2 rounded">Item 5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Flex Container Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use flex-direction to control the main axis</li>
          <li>Consider flex-wrap for responsive layouts</li>
          <li>Combine justify-content and align-items for perfect centering</li>
          <li>Use gap property for consistent spacing</li>
          <li>Consider browser support for newer features</li>
          <li>Test layouts with different content sizes</li>
          <li>Use flex-flow shorthand when appropriate</li>
          <li>Consider accessibility in your layout choices</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default FlexContainer; 