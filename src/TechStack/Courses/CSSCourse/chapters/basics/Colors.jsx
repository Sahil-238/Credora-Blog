import React from 'react';
import { motion } from 'framer-motion';

const Colors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Colors</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Color Values</h2>
        <div className="space-y-6">
          {/* Color Keywords */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Color Keywords</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.element {
  color: red;
  background-color: blue;
  border-color: green;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 bg-red-500 rounded flex items-center justify-center text-white">red</div>
              <div className="h-16 bg-blue-500 rounded flex items-center justify-center text-white">blue</div>
              <div className="h-16 bg-green-500 rounded flex items-center justify-center text-white">green</div>
            </div>
          </div>

          {/* Hexadecimal Colors */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Hexadecimal Colors</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.element {
  /* Full hex */
  color: #ff0000;
  
  /* Shorthand hex */
  background-color: #f00;
  
  /* With alpha */
  border-color: #ff0000aa;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: '#ff0000' }}>#ff0000</div>
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: '#00ff00' }}>#00ff00</div>
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: '#0000ff' }}>#0000ff</div>
            </div>
          </div>

          {/* RGB and RGBA */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">RGB and RGBA</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.element {
  /* RGB */
  color: rgb(255, 0, 0);
  
  /* RGBA with opacity */
  background-color: rgba(0, 0, 255, 0.5);
  
  /* Modern RGB with alpha */
  border-color: rgb(0 255 0 / 0.75);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>rgb(255, 0, 0)</div>
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}>rgba(0, 0, 255, 0.5)</div>
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: 'rgb(0 255 0 / 0.75)' }}>rgb(0 255 0 / 0.75)</div>
            </div>
          </div>

          {/* HSL and HSLA */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">HSL and HSLA</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.element {
  /* HSL */
  color: hsl(0, 100%, 50%);
  
  /* HSLA with opacity */
  background-color: hsla(240, 100%, 50%, 0.5);
  
  /* Modern HSL with alpha */
  border-color: hsl(120 100% 50% / 0.75);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>hsl(0, 100%, 50%)</div>
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: 'hsla(240, 100%, 50%, 0.5)' }}>hsla(240, 100%, 50%, 0.5)</div>
              <div className="h-16 rounded flex items-center justify-center text-white" style={{ backgroundColor: 'hsl(120 100% 50% / 0.75)' }}>hsl(120 100% 50% / 0.75)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Color Functions</h2>
        <div className="space-y-6">
          {/* Color Mixing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Color Mixing</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.element {
  /* Color mix */
  background-color: color-mix(in srgb, #34c9eb 25%, #e11d48);
  
  /* Color contrast */
  color: color-contrast(#34c9eb vs #000, #fff);
  
  /* Relative color */
  border-color: color(display-p3 0.8 0.2 0.1);
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="h-16 rounded flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-rose-600">Color Mixing Example</div>
            </div>
          </div>

          {/* Color Schemes */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Color Schemes</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: white;
    --bg-color: black;
  }
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-gray-200 rounded">Light Theme</div>
              <div className="p-4 bg-gray-900 text-white rounded">Dark Theme</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Color Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use consistent color schemes throughout your design</li>
          <li>Ensure sufficient color contrast for accessibility</li>
          <li>Consider color blindness in your design</li>
          <li>Use CSS variables for theme colors</li>
          <li>Implement dark mode alternatives</li>
          <li>Test colors across different devices</li>
          <li>Use modern color functions for better compatibility</li>
          <li>Document your color palette</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Colors; 