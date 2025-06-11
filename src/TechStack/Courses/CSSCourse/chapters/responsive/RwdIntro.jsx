import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to Responsive Web Design</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Responsive Web Design?</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Responsive Web Design (RWD) is an approach to web design that makes web pages render well on
            a variety of devices and window or screen sizes. It uses HTML and CSS to resize, hide, shrink,
            enlarge, or move content to make it look good on any screen.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fluid grids and layouts</li>
              <li>Flexible images and media</li>
              <li>Media queries</li>
              <li>Breakpoints</li>
              <li>Mobile-first approach</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Core Principles</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">1. Fluid Grids</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`}</pre>
            </div>
            <p className="text-gray-600">
              Fluid grids use relative units like percentages instead of fixed units,
              allowing content to flex and adapt to different screen sizes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">2. Flexible Images</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`img {
  max-width: 100%;
  height: auto;
}

.responsive-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}`}</pre>
            </div>
            <p className="text-gray-600">
              Images should scale within their containing elements while maintaining
              their aspect ratios.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">3. Media Queries</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Mobile First Approach */
.container {
  width: 100%;
  padding: 15px;
}

/* Tablet and larger */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}`}</pre>
            </div>
            <p className="text-gray-600">
              Media queries allow you to apply different styles based on device characteristics,
              primarily the viewport width.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mobile-First Approach</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Mobile-first is a design strategy that prioritizes designing for mobile devices first,
            then progressively enhancing the design for larger screens. This approach ensures a
            better experience on mobile devices and typically results in cleaner, more efficient code.
          </p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Base styles for mobile */
.element {
  font-size: 16px;
  padding: 10px;
}

/* Enhanced styles for larger screens */
@media (min-width: 768px) {
  .element {
    font-size: 18px;
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .element {
    font-size: 20px;
    padding: 30px;
  }
}`}</pre>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Start with a mobile-first approach</li>
          <li>Use relative units (%, rem, em) instead of fixed units</li>
          <li>Test on real devices when possible</li>
          <li>Consider performance on all devices</li>
          <li>Use appropriate breakpoints based on content</li>
          <li>Maintain consistent spacing and typography</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDIntro; 