import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const ImageFilters = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Image Filters</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Filters</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grayscale {
  filter: grayscale(100%);
}

.blur {
  filter: blur(5px);
}

.brightness {
  filter: brightness(150%);
}

.contrast {
  filter: contrast(200%);
}

.invert {
  filter: invert(100%);
}

.sepia {
  filter: sepia(100%);
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Multiple Filters</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Combining Filters</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.vintage {
  filter: sepia(50%) contrast(150%) brightness(90%);
}

.dramatic {
  filter: contrast(120%) saturate(150%) hue-rotate(45deg);
}

.noir {
  filter: grayscale(100%) contrast(120%) brightness(90%);
}`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Hover Effects</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.filter-hover {
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.filter-hover:hover {
  filter: grayscale(0%);
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Filters</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.drop-shadow {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}

.hue-rotate {
  filter: hue-rotate(90deg);
}

.saturate {
  filter: saturate(200%);
}

.opacity {
  filter: opacity(50%);
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Considerations</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <p className="text-gray-600">
              CSS filters can impact performance. Consider the following tips:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use hardware acceleration when possible</li>
              <li>Limit the number of filtered elements</li>
              <li>Use will-change property for animations</li>
              <li>Test performance on mobile devices</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use filters sparingly to maintain performance</li>
          <li>Consider browser support for advanced filters</li>
          <li>Provide fallbacks for older browsers</li>
          <li>Test filter effects across different devices</li>
          <li>Optimize images before applying filters</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default ImageFilters; 