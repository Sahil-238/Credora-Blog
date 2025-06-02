import React from 'react';
import { motion } from 'framer-motion';

const Links = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Links</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Link States and Styling</h2>
        <div className="space-y-6">
          {/* Link States */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Link States</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Link states */
a:link {
  color: #3182ce;  /* Unvisited links */
}

a:visited {
  color: #805ad5;  /* Visited links */
}

a:hover {
  color: #2c5282;  /* Mouse over links */
}

a:active {
  color: #e53e3e;  /* Selected links */
}

/* Order matters: LVHA */
a:link, a:visited, a:hover, a:active {
  /* Common styles */
}`}
              </pre>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded">
              <a href="#" className="block text-blue-600 hover:text-blue-800">Unvisited link</a>
              <a href="#" className="block text-purple-600 hover:text-purple-800">Visited link</a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 active:text-red-600">
                Hover and active states (click me)
              </a>
            </div>
          </div>

          {/* Text Decoration */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Decoration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic underline */
a {
  text-decoration: underline;
}

/* Remove underline */
a {
  text-decoration: none;
}

/* Underline on hover */
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Custom underline */
a {
  text-decoration: none;
  border-bottom: 2px solid currentColor;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <a href="#" className="block underline text-blue-600">Default underlined link</a>
              <a href="#" className="block no-underline text-blue-600">No underline link</a>
              <a href="#" className="block no-underline hover:underline text-blue-600">
                Underline on hover
              </a>
              <a href="#" className="block no-underline border-b-2 border-blue-600 inline-block text-blue-600">
                Custom underline
              </a>
            </div>
          </div>

          {/* Modern Link Styles */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Modern Link Styles</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Gradient underline */
a {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
}

a:hover {
  background-size: 100% 2px;
}

/* Button-like link */
a.button {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #4299e1;
  color: white;
  border-radius: 0.25em;
  text-decoration: none;
  transition: background-color .3s;
}

a.button:hover {
  background-color: #3182ce;
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <a href="#" className="relative inline-block text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">
                  Animated underline
                </a>
                <br />
                <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Button-like link
                </a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block w-fit relative text-blue-600 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform">
                  Scale animation
                </a>
                <a href="#" className="inline-block px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all">
                  Outline button
                </a>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">External Links</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Add icon to external links */
a[href^="http"]:not([href*="yourdomain.com"])::after {
  content: " ↗";
  display: inline-block;
}

/* Style download links */
a[href$=".pdf"]::before {
  content: "📄 ";
}

a[href$=".zip"]::before {
  content: "📦 ";
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <a href="https://example.com" className="block text-blue-600 hover:text-blue-800">
                External link <span className="inline-block">↗</span>
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800">
                <span className="mr-2">📄</span>Download PDF
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800">
                <span className="mr-2">📦</span>Download ZIP
              </a>
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Accessibility</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Focus styles */
a:focus {
  outline: 2px solid #4299e1;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background: #4299e1;
  color: white;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                Focusable link with visible outline
              </a>
              <div className="relative">
                <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-2 focus:bg-blue-500 focus:text-white focus:z-50">
                  Skip to main content
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Link Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Make links visually distinct from regular text</li>
          <li>Provide clear hover and focus states</li>
          <li>Ensure sufficient color contrast</li>
          <li>Use descriptive link text</li>
          <li>Add visual indicators for external links</li>
          <li>Maintain consistent link styling</li>
          <li>Consider mobile touch targets</li>
          <li>Implement proper focus management</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Links; 