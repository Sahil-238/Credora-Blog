import React from 'react';
import { motion } from 'framer-motion';

const Typography = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Typography</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Font Properties</h2>
        <div className="space-y-6">
          {/* Font Family */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Family</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.serif {
  font-family: Georgia, Times, "Times New Roman", serif;
}

.sans-serif {
  font-family: Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Courier New", Courier, monospace;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="font-serif">This is a serif font (Georgia)</p>
              <p className="font-sans">This is a sans-serif font (Arial)</p>
              <p className="font-mono">This is a monospace font (Courier)</p>
            </div>
          </div>

          {/* Font Size */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Size</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.text {
  /* Absolute sizes */
  font-size: 16px;
  font-size: 1rem;
  
  /* Relative sizes */
  font-size: 1.2em;
  font-size: 120%;
  
  /* Keywords */
  font-size: small;
  font-size: medium;
  font-size: large;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-sm">Small text (14px)</p>
              <p className="text-base">Base text (16px)</p>
              <p className="text-lg">Large text (18px)</p>
              <p className="text-xl">Extra large text (20px)</p>
            </div>
          </div>

          {/* Font Weight */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Weight</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.text {
  /* Numeric values */
  font-weight: 400;  /* normal */
  font-weight: 700;  /* bold */
  
  /* Keywords */
  font-weight: normal;
  font-weight: bold;
  font-weight: lighter;
  font-weight: bolder;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="font-light">Light text (300)</p>
              <p className="font-normal">Normal text (400)</p>
              <p className="font-medium">Medium text (500)</p>
              <p className="font-bold">Bold text (700)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Properties</h2>
        <div className="space-y-6">
          {/* Text Alignment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Alignment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.text {
  text-align: left;
  text-align: right;
  text-align: center;
  text-align: justify;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-left">Left aligned text</p>
              <p className="text-center">Center aligned text</p>
              <p className="text-right">Right aligned text</p>
              <p className="text-justify">Justified text that spans multiple lines. This text is long enough to demonstrate justification.</p>
            </div>
          </div>

          {/* Line Height */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Line Height</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.text {
  /* Unitless values (recommended) */
  line-height: 1.5;
  
  /* Length values */
  line-height: 20px;
  
  /* Percentage values */
  line-height: 150%;
}`}
              </pre>
            </div>
            <div className="space-y-8">
              <p className="leading-tight">Tight line height (1.25): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="leading-normal">Normal line height (1.5): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="leading-loose">Loose line height (2): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          {/* Text Decoration */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Decoration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.text {
  text-decoration: none;
  text-decoration: underline;
  text-decoration: overline;
  text-decoration: line-through;
  
  /* Styling */
  text-decoration-color: red;
  text-decoration-style: solid;
  text-decoration-thickness: 2px;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="underline">Underlined text</p>
              <p className="line-through">Strikethrough text</p>
              <p className="overline">Overline text</p>
              <p className="underline decoration-wavy">Wavy underline text</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Typography Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use a font-size base of 16px</li>
          <li>Maintain consistent line heights</li>
          <li>Use relative units (em, rem) for scalability</li>
          <li>Include fallback fonts</li>
          <li>Consider font loading performance</li>
          <li>Ensure sufficient contrast for readability</li>
          <li>Test typography across different devices</li>
          <li>Use system font stacks when appropriate</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Typography; 