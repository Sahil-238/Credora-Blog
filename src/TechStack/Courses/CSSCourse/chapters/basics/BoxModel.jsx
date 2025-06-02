import React from 'react';
import { motion } from 'framer-motion';

const BoxModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Box Model</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding the Box Model</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="text-gray-600 mb-4">
            The CSS box model is the foundation of layout on the web. Every element in web design is a rectangular box.
            The box model consists of:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Content - The actual content of the element</li>
            <li>Padding - Clear space around the content</li>
            <li>Border - A border that goes around the padding</li>
            <li>Margin - Clear space outside the border</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Box Model Properties</h2>
        <div className="space-y-6">
          {/* Content Box */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Content Box</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.content-box {
  width: 200px;
  height: 100px;
  background-color: #e5e7eb;
}`}
              </pre>
            </div>
            <div className="w-[200px] h-[100px] bg-gray-200 mx-auto"></div>
          </div>

          {/* Padding */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Padding</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.padded-box {
  padding: 20px;
  /* Individual sides */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  /* Shorthand */
  padding: 10px 20px; /* vertical horizontal */
  padding: 10px 20px 15px 25px; /* top right bottom left */
}`}
              </pre>
            </div>
            <div className="w-[200px] h-[100px] bg-blue-200 p-4 mx-auto">
              <div className="w-full h-full bg-blue-500"></div>
            </div>
          </div>

          {/* Border */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Border</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.bordered-box {
  border: 2px solid black;
  /* Individual properties */
  border-width: 2px;
  border-style: solid;
  border-color: black;
  /* Individual sides */
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
}`}
              </pre>
            </div>
            <div className="w-[200px] h-[100px] bg-pink-200 p-4 border-4 border-pink-500 mx-auto">
              <div className="w-full h-full bg-pink-500"></div>
            </div>
          </div>

          {/* Margin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Margin</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.margin-box {
  margin: 20px;
  /* Individual sides */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  /* Shorthand */
  margin: 10px 20px; /* vertical horizontal */
  margin: 10px 20px 15px 25px; /* top right bottom left */
  /* Center horizontally */
  margin: 0 auto;
}`}
              </pre>
            </div>
            <div className="bg-gray-100 p-8">
              <div className="w-[200px] h-[100px] bg-purple-500 m-8 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Box Sizing</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Content-box vs Border-box</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Default box sizing */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  /* Total width = 200px + 40px + 4px = 244px */
}

/* Modern box sizing */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  /* Total width = 200px */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">content-box:</p>
                <div className="w-[200px] h-[100px] bg-green-200 p-4 border-4 border-green-500">
                  <div className="w-full h-full bg-green-500"></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">border-box:</p>
                <div className="w-[200px] h-[100px] bg-blue-200 p-4 border-4 border-blue-500 box-border">
                  <div className="w-full h-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Box Model Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use border-box for more predictable layouts</li>
          <li>Be consistent with units (px, em, rem)</li>
          <li>Use margin for spacing between elements</li>
          <li>Use padding for spacing within elements</li>
          <li>Consider collapsing margins</li>
          <li>Use shorthand properties when appropriate</li>
          <li>Be mindful of box model impact on responsive design</li>
          <li>Document complex layout calculations</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BoxModel; 