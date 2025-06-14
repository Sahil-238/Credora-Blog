import React from 'react';
import { motion } from 'framer-motion';

const HeightWidth = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Height and Width</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Dimensions</h2>
        <div className="space-y-6">
          {/* Height and Width Values */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Height and Width Values</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  /* Pixels - fixed size */
  width: 200px;
  height: 100px;

  /* Percentages - relative to parent */
  width: 50%;
  height: 75%;

  /* Auto - based on content */
  width: auto;
  height: auto;

  /* Viewport units */
  width: 50vw;    /* 50% of viewport width */
  height: 50vh;   /* 50% of viewport height */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-100 w-48 h-24 flex items-center justify-center border border-blue-300">
                200px × 100px
              </div>
              <div className="bg-gray-100 p-4">
                <div className="bg-pink-100 w-1/2 h-24 flex items-center justify-center border border-pink-300">
                  50% width
                </div>
              </div>
            </div>
          </div>

          {/* Min and Max Dimensions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Min and Max Dimensions</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  /* Minimum dimensions */
  min-width: 200px;
  min-height: 100px;

  /* Maximum dimensions */
  max-width: 800px;
  max-height: 600px;

  /* Common responsive pattern */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-100 min-w-[200px] h-24 w-1/2 flex items-center justify-center border border-blue-300">
                min-width: 200px
              </div>
              <div className="bg-pink-100 max-w-[300px] h-24 w-full flex items-center justify-center border border-pink-300">
                max-width: 300px
              </div>
            </div>
          </div>

          {/* Box Sizing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Box Sizing</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Reset for all elements */
* {
  box-sizing: border-box;
}

.content-box {
  box-sizing: content-box;  /* Width/height exclude padding & border */
  width: 200px;
  padding: 20px;
  border: 1px solid black;
  /* Total width = 242px (200 + 40 + 2) */
}

.border-box {
  box-sizing: border-box;   /* Width/height include padding & border */
  width: 200px;
  padding: 20px;
  border: 1px solid black;
  /* Total width = 200px */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">content-box:</p>
                <div className="bg-blue-100 w-48 h-24 p-4 border border-blue-300">
                  Total > 200px
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">border-box:</p>
                <div className="bg-pink-100 w-48 h-24 p-4 border border-pink-300 box-border">
                  Total = 200px
                </div>
              </div>
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Aspect Ratio</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  /* Modern approach */
  aspect-ratio: 16/9;
  width: 100%;

  /* Legacy approach */
  width: 100%;
  padding-top: 56.25%;  /* (9/16) * 100% */
  position: relative;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 aspect-[16/9] flex items-center justify-center border border-blue-300">
                16:9 ratio
              </div>
              <div className="bg-pink-100 aspect-square flex items-center justify-center border border-pink-300">
                1:1 ratio
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Special Values</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`div {
  /* Fill available space */
  width: 100%;
  height: 100%;

  /* Fit content */
  width: fit-content;
  height: fit-content;

  /* Minimum content size */
  width: min-content;
  height: min-content;

  /* Maximum content size */
  width: max-content;
  height: max-content;
}`}
            </pre>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4">
              <div className="bg-blue-100 w-fit border border-blue-300 p-4">
                fit-content width
              </div>
            </div>
            <div className="bg-gray-100 p-4">
              <div className="bg-pink-100 w-full border border-pink-300 p-4">
                100% width
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Height/Width Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use relative units (%, vh/vw) for responsive layouts</li>
          <li>Set box-sizing: border-box globally</li>
          <li>Use max-width for responsive containers</li>
          <li>Consider aspect-ratio for media elements</li>
          <li>Use min-height for variable content</li>
          <li>Avoid fixed heights when possible</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default HeightWidth; 