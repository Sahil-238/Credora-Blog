import React from 'react';
import { motion } from 'framer-motion';

const Padding = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Padding</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Padding Properties</h2>
        <div className="space-y-6">
          {/* Individual Padding */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Individual Padding</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}`}
              </pre>
            </div>
            <div className="relative bg-gray-100 p-8 rounded">
              <div className="relative bg-blue-100 border border-blue-300">
                <div className="p-4">Content Box</div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-xs text-gray-500">padding-top: 10px</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-xs text-gray-500">padding-right: 20px</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 text-xs text-gray-500">padding-bottom: 30px</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-xs text-gray-500">padding-left: 40px</div>
              </div>
            </div>
          </div>

          {/* Padding Shorthand */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Padding Shorthand</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  padding: 10px;                    /* All sides */
  padding: 10px 20px;               /* top/bottom right/left */
  padding: 10px 20px 30px;          /* top right/left bottom */
  padding: 10px 20px 30px 40px;     /* top right bottom left */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded">
                <div className="bg-blue-100 border border-blue-300 p-4">
                  padding: 16px
                </div>
              </div>
              <div className="bg-gray-100 rounded">
                <div className="bg-blue-100 border border-blue-300 pt-2 pr-4 pb-6 pl-8">
                  Different sides
                </div>
              </div>
            </div>
          </div>

          {/* Padding with Width */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Padding with Width</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  width: 300px;
  padding: 20px;    /* Increases total width */
}

div {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;    /* Width includes padding */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded">
                <div className="bg-blue-100 border border-blue-300 w-64 p-4">
                  Content-box (default)
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <div className="bg-pink-100 border border-pink-300 w-64 p-4 box-border">
                  Border-box
                </div>
              </div>
            </div>
          </div>

          {/* Percentage Padding */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Percentage Padding</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  padding: 10%;    /* Relative to parent width */
}

/* Common use case: Aspect ratio */
.aspect-ratio {
  padding-top: 56.25%;    /* 16:9 ratio */
  position: relative;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 w-64 rounded">
                <div className="bg-blue-100 border border-blue-300 p-[10%]">
                  10% padding
                </div>
              </div>
              <div className="bg-gray-100 rounded">
                <div className="relative w-full pt-[56.25%] bg-pink-100 border border-pink-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    16:9 ratio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Padding vs Margin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Padding vs Margin</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Padding: inner spacing */
div {
  padding: 20px;
  background-color: lightblue;    /* Affects padded area */
}

/* Margin: outer spacing */
div {
  margin: 20px;
  background-color: lightblue;    /* Doesn't affect margin */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Padding (inner space):</p>
                <div className="bg-gray-100 rounded">
                  <div className="bg-blue-100 border border-blue-300 p-8">
                    Content
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Margin (outer space):</p>
                <div className="bg-gray-100 rounded p-8">
                  <div className="bg-blue-100 border border-blue-300 p-2">
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Padding Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use padding for inner spacing within elements</li>
          <li>Consider box-sizing when setting widths</li>
          <li>Use consistent padding values throughout your design</li>
          <li>Be mindful of padding's effect on element dimensions</li>
          <li>Use padding-based aspect ratios for responsive media</li>
          <li>Choose padding over margin for clickable elements</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Padding; 