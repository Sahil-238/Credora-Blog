import React from 'react';
import { motion } from 'framer-motion';

const WebFonts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Web Fonts</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Web Font Implementation</h2>
        <div className="space-y-6">
          {/* @font-face Rule */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">@font-face Rule</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic @font-face usage */
@font-face {
  font-family: 'CustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Multiple font weights */
@font-face {
  font-family: 'CustomFont';
  src: url('path/to/font-bold.woff2') format('woff2');
  font-weight: bold;
}

/* Variable font */
@font-face {
  font-family: 'VariableFont';
  src: url('path/to/variable.woff2') format('woff2-variations');
  font-weight: 100 900;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">System fonts</p>
                <p className="text-2xl" style={{ fontFamily: 'system-ui' }}>
                  System Default Font
                </p>
                <p className="text-2xl" style={{ fontFamily: 'serif' }}>
                  Serif Font
                </p>
                <p className="text-2xl" style={{ fontFamily: 'monospace' }}>
                  Monospace Font
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Web safe combinations</p>
                <p className="text-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Arial/Sans-serif
                </p>
                <p className="text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                  Georgia/Serif
                </p>
                <p className="text-2xl" style={{ fontFamily: 'Courier New, monospace' }}>
                  Courier/Mono
                </p>
              </div>
            </div>
          </div>

          {/* Google Fonts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Google Fonts Integration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`<!-- HTML Link Method -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

/* CSS Import Method */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Usage */
.element {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

.bold {
  font-weight: 700;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Font weights</p>
                <p className="text-2xl font-normal">Regular weight (400)</p>
                <p className="text-2xl font-medium">Medium weight (500)</p>
                <p className="text-2xl font-bold">Bold weight (700)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Font styles</p>
                <p className="text-2xl italic">Italic style</p>
                <p className="text-2xl not-italic">Normal style</p>
                <p className="text-2xl font-bold italic">Bold italic</p>
              </div>
            </div>
          </div>

          {/* Font Loading Strategies */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Font Loading Strategies</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Font display options */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;    /* Show fallback, swap when ready */
  font-display: block;   /* Brief block, then swap */
  font-display: fallback;/* Brief block, then fallback */
  font-display: optional;/* Brief block, maybe swap */
}

/* Font loading API */
const font = new FontFace('CustomFont', 'url(font.woff2)');
font.load().then(() => {
  document.fonts.add(font);
});`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Loading Behavior</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><code>swap</code>: Shows fallback immediately, swaps when custom font loads</li>
                  <li><code>block</code>: Brief invisible text, then shows custom font</li>
                  <li><code>fallback</code>: Brief invisible text, then fallback, maybe swap</li>
                  <li><code>optional</code>: Like fallback, but browser decides on swap</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Performance Optimization</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Subset fonts */
@font-face {
  font-family: 'CustomFont';
  src: url('font-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF; /* Latin characters */
}

/* Preload critical fonts */
<link
  rel="preload"
  href="font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>

/* Variable fonts */
.text {
  font-variation-settings: 'wght' 375, 'wdth' 80;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Font formats</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>WOFF2: Best compression, modern browsers</li>
                  <li>WOFF: Good compression, wide support</li>
                  <li>TTF/OTF: Older browser support</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Loading techniques</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Preload critical fonts</li>
                  <li>Use font-display strategy</li>
                  <li>Subset large fonts</li>
                  <li>Consider variable fonts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Web Fonts Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose appropriate font-display strategy for your use case</li>
          <li>Implement fallback fonts that closely match custom fonts</li>
          <li>Use modern font formats (WOFF2) with fallbacks</li>
          <li>Consider variable fonts for multiple weights/styles</li>
          <li>Optimize font loading performance</li>
          <li>Subset fonts to include only needed characters</li>
          <li>Cache fonts effectively</li>
          <li>Test font rendering across different devices</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default WebFonts; 