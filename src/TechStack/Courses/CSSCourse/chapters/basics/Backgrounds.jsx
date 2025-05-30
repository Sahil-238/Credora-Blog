import React from 'react';
import { motion } from 'framer-motion';

const Backgrounds = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Backgrounds</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Background Properties</h2>
        <div className="space-y-6">
          {/* Background Color */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Background Color</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  background-color: lightblue;
  /* Also supports rgba, hex, hsl */
  background-color: rgba(173, 216, 230, 0.5);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="h-20 bg-blue-200 rounded flex items-center justify-center">lightblue</div>
              <div className="h-20 bg-blue-200/50 rounded flex items-center justify-center">rgba(173, 216, 230, 0.5)</div>
            </div>
          </div>

          {/* Background Image */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Background Image</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  background-image: url("paper.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* Multiple backgrounds */
div {
  background-image: url("stars.png"), url("sky.jpg");
  background-position: center, top;
  background-repeat: no-repeat, no-repeat;
}`}
              </pre>
            </div>
          </div>

          {/* Background Repeat */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Background Repeat</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  background-repeat: repeat;      /* Default */
  background-repeat: no-repeat;   /* No repetition */
  background-repeat: repeat-x;    /* Repeat horizontally */
  background-repeat: repeat-y;    /* Repeat vertically */
  background-repeat: space;       /* Repeated with space between */
  background-repeat: round;       /* Repeated and stretched */
}`}
              </pre>
            </div>
          </div>

          {/* Background Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Background Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  /* Keywords */
  background-position: top right;
  background-position: center center;
  
  /* Percentages */
  background-position: 25% 75%;
  
  /* Pixels */
  background-position: 50px 100px;
}`}
              </pre>
            </div>
          </div>

          {/* Background Size */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Background Size</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  /* Keywords */
  background-size: cover;     /* Cover entire container */
  background-size: contain;   /* Fit inside container */
  
  /* One value: width (height auto) */
  background-size: 50%;
  
  /* Two values: width height */
  background-size: 50% auto;
  background-size: 100px 200px;
}`}
              </pre>
            </div>
          </div>

          {/* Background Attachment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Background Attachment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  background-attachment: scroll;  /* Default */
  background-attachment: fixed;   /* Fixed to viewport */
  background-attachment: local;   /* Scrolls with content */
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Background Shorthand</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Order: color image position/size repeat attachment */
div {
  background: #f0f0f0 url("image.jpg") center/cover no-repeat fixed;
}

/* Multiple backgrounds */
div {
  background: 
    url("foreground.png") center/100% no-repeat,
    url("background.jpg") center/cover no-repeat #f0f0f0;
}`}
            </pre>
          </div>
          <p className="text-gray-600">
            The background shorthand property lets you set all background properties in one declaration.
            When using multiple backgrounds, they are stacked with the first one on top.
          </p>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Background Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Optimize images before using them as backgrounds</li>
          <li>Consider using modern formats like WebP with fallbacks</li>
          <li>Use appropriate background-size for responsive designs</li>
          <li>Be cautious with fixed backgrounds on mobile devices</li>
          <li>Provide sufficient contrast with text content</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Backgrounds; 