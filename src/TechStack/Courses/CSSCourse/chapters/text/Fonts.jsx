import React from 'react';
import { motion } from 'framer-motion';

const Fonts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Fonts</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Font Properties</h2>
        <div className="space-y-6">
          {/* Font Family */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Family</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Generic font families */
p {
  font-family: serif;
  font-family: sans-serif;
  font-family: monospace;
  font-family: cursive;
  font-family: fantasy;
}

/* Specific fonts with fallbacks */
p {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-family: Georgia, "Times New Roman", serif;
  font-family: Monaco, Consolas, monospace;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="font-serif text-lg">This text uses a serif font family</p>
              <p className="font-sans text-lg">This text uses a sans-serif font family</p>
              <p className="font-mono text-lg">This text uses a monospace font family</p>
            </div>
          </div>

          {/* Font Size */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Size</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Absolute sizes */
p {
  font-size: 12px;
  font-size: 1em;      /* Relative to parent */
  font-size: 1rem;     /* Relative to root */
  font-size: 100%;     /* Relative to parent */
}

/* Relative sizes */
p {
  font-size: larger;
  font-size: smaller;
  font-size: 200%;
  font-size: 2em;
}`}
              </pre>
            </div>
            <div className="space-y-2">
              <p className="text-xs">Extra small text (12px)</p>
              <p className="text-sm">Small text (14px)</p>
              <p className="text-base">Base text (16px)</p>
              <p className="text-lg">Large text (18px)</p>
              <p className="text-xl">Extra large text (20px)</p>
              <p className="text-2xl">2XL text (24px)</p>
            </div>
          </div>

          {/* Font Weight */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Weight</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Keyword values */
p {
  font-weight: normal;
  font-weight: bold;
  font-weight: lighter;
  font-weight: bolder;
}

/* Numeric values (100-900) */
p {
  font-weight: 100;  /* Thin */
  font-weight: 400;  /* Normal */
  font-weight: 700;  /* Bold */
  font-weight: 900;  /* Extra Bold */
}`}
              </pre>
            </div>
            <div className="space-y-2">
              <p className="font-thin">Thin text (100)</p>
              <p className="font-light">Light text (300)</p>
              <p className="font-normal">Normal text (400)</p>
              <p className="font-medium">Medium text (500)</p>
              <p className="font-semibold">Semibold text (600)</p>
              <p className="font-bold">Bold text (700)</p>
              <p className="font-extrabold">Extra bold text (800)</p>
              <p className="font-black">Black text (900)</p>
            </div>
          </div>

          {/* Font Style */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Style</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}`}
              </pre>
            </div>
            <div className="space-y-2">
              <p className="font-normal">Normal text style</p>
              <p className="italic">Italic text style</p>
              <p className="font-normal" style={{ fontStyle: 'oblique' }}>Oblique text style</p>
            </div>
          </div>

          {/* Web Fonts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Web Fonts</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Self-hosted fonts */
@font-face {
  font-family: 'CustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* Using web fonts */
body {
  font-family: 'Roboto', sans-serif;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 mb-2">Common ways to use web fonts:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Google Fonts (free, easy to use)</li>
                <li>Adobe Fonts (subscription-based)</li>
                <li>Self-hosted fonts (better performance)</li>
                <li>Variable fonts (adjustable weights)</li>
              </ul>
            </div>
          </div>

          {/* Font Performance */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Performance</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Font display options */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;    /* Show fallback until font loads */
}

/* Preload critical fonts */
<link
  rel="preload"
  href="font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>`}
              </pre>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>Best practices for font loading:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Use WOFF2 format for modern browsers</li>
                <li>Implement font-display strategy</li>
                <li>Preload critical fonts</li>
                <li>Limit font weights and styles</li>
                <li>Consider system fonts for better performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Font Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose readable fonts for body text</li>
          <li>Limit the number of font families used</li>
          <li>Provide appropriate fallback fonts</li>
          <li>Use relative units for font sizes</li>
          <li>Consider font loading performance</li>
          <li>Test fonts across different devices</li>
          <li>Ensure sufficient font contrast</li>
          <li>Use variable fonts when possible</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Fonts; 