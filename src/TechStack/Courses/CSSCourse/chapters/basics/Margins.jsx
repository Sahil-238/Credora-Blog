import React from 'react';
import { motion } from 'framer-motion';

const Margins = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Margins</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Margin Properties</h2>
        <div className="space-y-6">
          {/* Individual Margins */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Individual Margins</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}`}
              </pre>
            </div>
            <div className="relative p-8 bg-gray-100 rounded">
              <div className="p-4 bg-blue-100 border border-blue-300">
                Content Box
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-gray-500">margin-top: 10px</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-gray-500">margin-right: 20px</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-gray-500">margin-bottom: 30px</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-gray-500">margin-left: 40px</div>
              </div>
            </div>
          </div>

          {/* Margin Shorthand */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Margin Shorthand</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  margin: 10px;                    /* All sides */
  margin: 10px 20px;               /* top/bottom right/left */
  margin: 10px 20px 30px;          /* top right/left bottom */
  margin: 10px 20px 30px 40px;     /* top right bottom left */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="relative p-8 bg-gray-100 rounded">
                <div className="p-4 bg-blue-100 border border-blue-300 m-4">
                  margin: 16px
                </div>
              </div>
              <div className="relative p-8 bg-gray-100 rounded">
                <div className="p-4 bg-blue-100 border border-blue-300 mt-2 mr-4 mb-6 ml-8">
                  Different sides
                </div>
              </div>
            </div>
          </div>

          {/* Auto Margins */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Auto Margins</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Center horizontally */
div {
  width: 300px;
  margin: 0 auto;
}

/* Push to right */
div {
  margin-left: auto;
}

/* Push to left */
div {
  margin-right: auto;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded">
                <div className="w-32 mx-auto p-2 bg-blue-100 border border-blue-300 text-center">
                  Centered
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <div className="w-32 ml-auto p-2 bg-blue-100 border border-blue-300 text-center">
                  Right aligned
                </div>
              </div>
            </div>
          </div>

          {/* Negative Margins */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Negative Margins</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  margin-top: -20px;    /* Move up */
  margin-left: -20px;   /* Move left */
}

/* Can be used for overlapping effects */
.overlap {
  margin-top: -50px;
  position: relative;
}`}
              </pre>
            </div>
            <div className="mt-8 relative">
              <div className="p-4 bg-blue-100 border border-blue-300">Base element</div>
              <div className="p-4 bg-pink-100 border border-pink-300 -mt-6 ml-8 relative">
                Overlapping element
              </div>
            </div>
          </div>

          {/* Margin Collapse */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Margin Collapse</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Vertical margins collapse */
.first {
  margin-bottom: 20px;
}
.second {
  margin-top: 30px;    /* Only 30px space between elements */
}`}
              </pre>
            </div>
            <p className="text-gray-600 mb-4">
              When two vertical margins meet, they collapse into a single margin.
              The larger margin value is used.
            </p>
            <div className="space-y-4 bg-gray-100 p-4 rounded">
              <div className="p-4 bg-blue-100 border border-blue-300 mb-8">
                margin-bottom: 32px
              </div>
              <div className="p-4 bg-pink-100 border border-pink-300 mt-8">
                margin-top: 32px
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Margin Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use consistent spacing with a spacing scale</li>
          <li>Be aware of margin collapse in vertical layouts</li>
          <li>Prefer padding for inner spacing</li>
          <li>Use auto margins for alignment when appropriate</li>
          <li>Be cautious with negative margins</li>
          <li>Consider using CSS Grid or Flexbox for complex layouts</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Margins; 