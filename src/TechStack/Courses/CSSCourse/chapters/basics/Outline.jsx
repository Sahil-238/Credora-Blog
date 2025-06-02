import React from 'react';
import { motion } from 'framer-motion';

const Outline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Outline</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Outline Properties</h2>
        <div className="space-y-6">
          {/* Basic Outline */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Outline</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  /* Individual properties */
  outline-width: 2px;
  outline-style: solid;
  outline-color: blue;

  /* Shorthand */
  outline: 2px solid blue;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 outline outline-2 outline-blue-500">
                Basic outline
              </div>
              <div className="bg-white p-4 outline-dashed outline-2 outline-pink-500">
                Dashed outline
              </div>
            </div>
          </div>

          {/* Outline Styles */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Outline Styles</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  outline-style: solid;    /* Solid line */
  outline-style: dotted;   /* Dotted line */
  outline-style: dashed;   /* Dashed line */
  outline-style: double;   /* Double line */
  outline-style: groove;   /* 3D grooved */
  outline-style: ridge;    /* 3D ridged */
  outline-style: inset;    /* 3D inset */
  outline-style: outset;   /* 3D outset */
  outline-style: none;     /* No outline */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 outline outline-2 outline-blue-500">solid</div>
              <div className="bg-white p-4 outline-dotted outline-2 outline-blue-500">dotted</div>
              <div className="bg-white p-4 outline-dashed outline-2 outline-blue-500">dashed</div>
              <div className="bg-white p-4 outline-double outline-2 outline-blue-500">double</div>
              <div className="bg-white p-4 outline-[groove] outline-2 outline-blue-500">groove</div>
              <div className="bg-white p-4 outline-[ridge] outline-2 outline-blue-500">ridge</div>
            </div>
          </div>

          {/* Outline Offset */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Outline Offset</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`div {
  outline: 2px solid blue;
  outline-offset: 5px;    /* Space between outline and border */
}

/* Negative offset */
div {
  outline: 2px solid red;
  outline-offset: -5px;   /* Outline inside the border */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-8">
                <div className="bg-blue-100 p-4 border border-blue-300 outline outline-2 outline-blue-500 outline-offset-4">
                  Positive offset
                </div>
              </div>
              <div className="bg-white p-8">
                <div className="bg-pink-100 p-4 border border-pink-300 outline outline-2 outline-pink-500 -outline-offset-4">
                  Negative offset
                </div>
              </div>
            </div>
          </div>

          {/* Outline vs Border */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Outline vs Border</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Border takes up space */
div {
  border: 2px solid blue;    /* Affects layout */
  padding: 10px;
}

/* Outline doesn't affect layout */
div {
  outline: 2px solid red;    /* Doesn't affect layout */
  padding: 10px;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4">
                <div className="inline-block bg-blue-100 p-4 border-4 border-blue-500">
                  Border (affects layout)
                </div>
              </div>
              <div className="bg-gray-100 p-4">
                <div className="inline-block bg-pink-100 p-4 outline outline-4 outline-pink-500">
                  Outline (doesn't affect layout)
                </div>
              </div>
            </div>
          </div>

          {/* Focus Outlines */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Focus Outlines</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Custom focus outline */
button:focus {
  outline: 3px solid blue;
  outline-offset: 2px;
}

/* Remove focus outline (use with caution) */
button:focus {
  outline: none;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Custom focus ring
              </button>
              <p className="text-sm text-gray-600">
                Note: Always provide visible focus indicators for accessibility.
                Use :focus-visible for modern browsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Outline Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Never remove focus outlines without providing an alternative</li>
          <li>Use outline-offset to prevent overlap with content</li>
          <li>Consider using outlines for temporary visual feedback</li>
          <li>Use borders for permanent visual boundaries</li>
          <li>Ensure sufficient contrast for accessibility</li>
          <li>Test focus styles across different browsers</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Outline; 