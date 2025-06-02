import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDViewport = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Responsive Design Viewport</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is the Viewport?</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="text-gray-600 mb-4">
            The viewport is the visible area of a web page on a device. It varies with the device - it will be smaller on a mobile phone than on a computer screen.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </pre>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>width=device-width</strong> - Sets the width of the page to follow the screen-width of the device</li>
            <li><strong>initial-scale=1.0</strong> - Sets the initial zoom level when the page is first loaded</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Viewport Units</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Viewport Width (vw)</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.hero {
  width: 100vw;  /* Full viewport width */
  height: 50vw;  /* Half of viewport width */
}`}
              </pre>
            </div>
            <p className="text-gray-600">
              1vw = 1% of viewport width
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Viewport Height (vh)</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.full-screen {
  height: 100vh;  /* Full viewport height */
  min-height: 50vh;  /* Minimum half viewport height */
}`}
              </pre>
            </div>
            <p className="text-gray-600">
              1vh = 1% of viewport height
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Viewport Min/Max (vmin/vmax)</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.square {
  width: 50vmin;  /* 50% of viewport's smaller dimension */
  height: 50vmin;
}

.responsive-font {
  font-size: 5vmin;  /* Responsive font size */
}`}
              </pre>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>vmin</strong> - 1% of viewport's smaller dimension</li>
              <li><strong>vmax</strong> - 1% of viewport's larger dimension</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Full-screen Sections</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`.hero-section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Responsive Typography</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`.responsive-title {
  font-size: calc(16px + 2vw);
  /* Minimum 16px, grows with viewport width */
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Always include the viewport meta tag</li>
          <li>Use relative viewport units for responsive layouts</li>
          <li>Combine viewport units with calc() for flexible sizing</li>
          <li>Consider using clamp() for responsive typography</li>
          <li>Test on various device sizes and orientations</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDViewport; 