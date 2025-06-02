import React from 'react';
import { motion } from 'framer-motion';

const Icons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Icons</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Icon Implementation Methods</h2>
        <div className="space-y-6">
          {/* Icon Fonts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Icon Fonts</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Font Awesome CDN */
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

/* Using icon fonts */
<i class="fas fa-user"></i>

/* Styling icons */
.icon {
  font-size: 24px;
  color: #4a5568;
}

/* Icon with background */
.icon-bg {
  background: #edf2f7;
  padding: 8px;
  border-radius: 50%;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 mb-2">Popular icon font libraries:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Font Awesome</li>
                <li>Material Icons</li>
                <li>Bootstrap Icons</li>
                <li>Feather Icons</li>
              </ul>
            </div>
          </div>

          {/* SVG Icons */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">SVG Icons</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Inline SVG */
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
</svg>

/* Styling SVG */
.icon-svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

/* SVG with hover effects */
.icon-svg:hover {
  stroke: #4299e1;
  transform: scale(1.1);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-gray-100 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="p-4 bg-gray-100 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
            </div>
          </div>

          {/* CSS Icons */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">CSS-only Icons</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Hamburger menu icon */
.hamburger {
  width: 24px;
  height: 3px;
  background: #4a5568;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  left: 0;
}

.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

/* Close icon */
.close {
  width: 24px;
  height: 24px;
  position: relative;
}

.close::before,
.close::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #4a5568;
  top: 50%;
  left: 0;
}

.close::before { transform: rotate(45deg); }
.close::after { transform: rotate(-45deg); }`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="p-4 bg-gray-100 rounded flex items-center justify-center">
                <div className="relative w-6 h-0.5 bg-gray-600">
                  <div className="absolute w-6 h-0.5 bg-gray-600 -top-2"></div>
                  <div className="absolute w-6 h-0.5 bg-gray-600 top-2"></div>
                </div>
              </div>
              <div className="p-4 bg-gray-100 rounded flex items-center justify-center">
                <div className="relative w-6 h-6">
                  <div className="absolute w-6 h-0.5 bg-gray-600 top-1/2 transform -translate-y-1/2 rotate-45"></div>
                  <div className="absolute w-6 h-0.5 bg-gray-600 top-1/2 transform -translate-y-1/2 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Sprites */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Icon Sprites</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* SVG sprite */
<svg style="display: none;">
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
  </symbol>
</svg>

/* Using sprite */
<svg class="icon">
  <use xlink:href="#icon-home"/>
</svg>

/* CSS for sprite icons */
.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}`}
              </pre>
            </div>
            <p className="text-gray-600 mt-4">
              Icon sprites combine multiple icons into a single file, reducing HTTP requests
              and improving performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Icon Accessibility</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Decorative icon */
<i class="fas fa-star" aria-hidden="true"></i>

/* Icon with meaning */
<button aria-label="Close menu">
  <i class="fas fa-times" aria-hidden="true"></i>
</button>

/* Icon with visible text */
<button>
  <i class="fas fa-save" aria-hidden="true"></i>
  <span>Save changes</span>
</button>`}
            </pre>
          </div>
          <div className="mt-4 space-y-2 text-gray-600">
            <p>Key accessibility considerations:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use aria-hidden for decorative icons</li>
              <li>Provide aria-label for meaningful icons</li>
              <li>Include visible text when possible</li>
              <li>Ensure sufficient color contrast</li>
              <li>Make interactive icons keyboard-accessible</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Icon Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose SVG over icon fonts when possible</li>
          <li>Optimize SVG files for production</li>
          <li>Use consistent icon sizes throughout the UI</li>
          <li>Implement proper accessibility attributes</li>
          <li>Consider using icon sprites for better performance</li>
          <li>Provide appropriate hover and focus states</li>
          <li>Ensure icons are recognizable and meaningful</li>
          <li>Use appropriate icon colors for context</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Icons; 