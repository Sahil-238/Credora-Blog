import React from 'react';
import { motion } from 'framer-motion';

const Align = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Alignment</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alignment Properties</h2>
        <div className="space-y-6">
          {/* Text Alignment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Alignment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Text alignment */
.text-container {
  text-align: left;      /* Default */
  text-align: center;    /* Center text */
  text-align: right;     /* Right align */
  text-align: justify;   /* Justify text */
}

/* Vertical alignment */
.text {
  vertical-align: baseline;  /* Default */
  vertical-align: top;       /* Top align */
  vertical-align: middle;    /* Middle align */
  vertical-align: bottom;    /* Bottom align */
}`}
              </pre>
            </div>
            <div className="space-y-4 bg-gray-50 p-4 rounded">
              <p className="text-left">Left aligned text (default)</p>
              <p className="text-center">Center aligned text</p>
              <p className="text-right">Right aligned text</p>
              <p className="text-justify">
                Justified text that spans multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Box Alignment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Box Alignment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Box alignment with margin */
.box {
  margin: 0 auto;     /* Center horizontally */
  margin-left: auto;  /* Right align */
  margin-right: auto; /* Left align */
}

/* Absolute positioning */
.centered-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded relative h-32">
                <div className="w-24 h-12 bg-blue-100 mx-auto flex items-center justify-center">
                  Centered Box
                </div>
                <div className="w-24 h-12 bg-pink-100 ml-auto mt-4 flex items-center justify-center">
                  Right Box
                </div>
              </div>
            </div>
          </div>

          {/* Flexbox Alignment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Flexbox Alignment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Flexbox container alignment */
.flex-container {
  display: flex;
  justify-content: center;     /* Main axis */
  align-items: center;         /* Cross axis */
  align-content: center;       /* Multiple lines */
}

/* Flexbox item alignment */
.flex-item {
  align-self: center;         /* Individual item */
  margin: auto;              /* Auto margins */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded h-48 flex flex-wrap justify-center items-center gap-4">
                <div className="bg-blue-100 p-4">Item 1</div>
                <div className="bg-pink-100 p-4">Item 2</div>
                <div className="bg-purple-100 p-4">Item 3</div>
              </div>
            </div>
          </div>

          {/* Grid Alignment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Grid Alignment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Grid container alignment */
.grid-container {
  display: grid;
  justify-items: center;    /* Horizontal alignment */
  align-items: center;      /* Vertical alignment */
  justify-content: center;  /* Column alignment */
  align-content: center;    /* Row alignment */
}

/* Grid item alignment */
.grid-item {
  justify-self: center;    /* Individual horizontal */
  align-self: center;      /* Individual vertical */
}`}
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="grid grid-cols-3 gap-4 place-items-center h-48">
                <div className="bg-blue-100 p-4">1</div>
                <div className="bg-pink-100 p-4">2</div>
                <div className="bg-purple-100 p-4">3</div>
                <div className="bg-green-100 p-4">4</div>
                <div className="bg-yellow-100 p-4">5</div>
                <div className="bg-red-100 p-4">6</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Alignment Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use modern layout systems (Flexbox/Grid) for complex alignment</li>
          <li>Consider responsive behavior when choosing alignment methods</li>
          <li>Use logical properties for better internationalization</li>
          <li>Avoid using absolute positioning for basic alignment</li>
          <li>Test alignment across different screen sizes</li>
          <li>Consider content flow when using text-align: justify</li>
          <li>Use margin: auto strategically for box alignment</li>
          <li>Maintain consistent alignment patterns throughout the layout</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Align; 