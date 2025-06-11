import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDMediaQueries = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Media Queries</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to Media Queries</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Media queries allow you to apply CSS styles based on device characteristics like screen width,
            height, orientation, and more. They are a fundamental part of responsive web design.
          </p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Basic media query syntax */
@media screen and (max-width: 768px) {
  /* Styles for screens up to 768px wide */
}

@media screen and (min-width: 769px) {
  /* Styles for screens wider than 768px */
}

/* Multiple conditions */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles for screens between 768px and 1024px */
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Breakpoints</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Device</th>
                  <th className="p-3 border">Width</th>
                  <th className="p-3 border">Media Query</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Mobile</td>
                  <td className="p-3 border">320px - 480px</td>
                  <td className="p-3 border font-mono text-sm">@media (max-width: 480px) {'{ ... }'}</td>
                </tr>
                <tr>
                  <td className="p-3 border">Tablet</td>
                  <td className="p-3 border">481px - 768px</td>
                  <td className="p-3 border font-mono text-sm">@media (min-width: 481px) and (max-width: 768px) {'{ ... }'}</td>
                </tr>
                <tr>
                  <td className="p-3 border">Laptop</td>
                  <td className="p-3 border">769px - 1024px</td>
                  <td className="p-3 border font-mono text-sm">@media (min-width: 769px) and (max-width: 1024px) {'{ ... }'}</td>
                </tr>
                <tr>
                  <td className="p-3 border">Desktop</td>
                  <td className="p-3 border">1025px - 1200px</td>
                  <td className="p-3 border font-mono text-sm">@media (min-width: 1025px) and (max-width: 1200px) {'{ ... }'}</td>
                </tr>
                <tr>
                  <td className="p-3 border">Large Desktop</td>
                  <td className="p-3 border">1201px and above</td>
                  <td className="p-3 border font-mono text-sm">@media (min-width: 1201px) {'{ ... }'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Media Features</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Screen Size</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`/* Width and height */
@media (min-width: 768px) { ... }
@media (max-height: 600px) { ... }

/* Aspect ratio */
@media (aspect-ratio: 16/9) { ... }

/* Orientation */
@media (orientation: landscape) { ... }
@media (orientation: portrait) { ... }`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Display Quality</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) { ... }

/* Dark mode */
@media (prefers-color-scheme: dark) { ... }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) { ... }`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mobile-First Example</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Base styles for mobile */
.container {
  width: 100%;
  padding: 15px;
}

.nav {
  display: flex;
  flex-direction: column;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }

  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}`}</pre>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use mobile-first approach (min-width over max-width)</li>
          <li>Choose breakpoints based on content, not devices</li>
          <li>Keep media queries organized and maintainable</li>
          <li>Test across various devices and orientations</li>
          <li>Consider using CSS custom properties with media queries</li>
          <li>Use modern features like container queries when appropriate</li>
          <li>Avoid device-specific media queries</li>
          <li>Group media queries for better performance</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDMediaQueries; 