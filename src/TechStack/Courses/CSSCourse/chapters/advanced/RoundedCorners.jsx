import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RoundedCorners = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Rounded Corners</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Border Radius</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            The border-radius property allows you to create rounded corners on elements. You can specify
            different values for each corner or use a single value for all corners.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.rounded-box {
  /* All corners equal */
  border-radius: 8px;

  /* Individual corners (top-left, top-right, bottom-right, bottom-left) */
  border-radius: 10px 20px 30px 40px;

  /* Top corners / Bottom corners */
  border-radius: 10px 20px;

  /* Circle/Ellipse */
  border-radius: 50%;
}`}</pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border-2 border-blue-500 rounded-lg text-center">
              border-radius: 8px
            </div>
            <div className="p-4 border-2 border-blue-500 rounded-2xl text-center">
              border-radius: 16px
            </div>
            <div className="p-4 border-2 border-blue-500 rounded-[30px] text-center">
              border-radius: 30px
            </div>
            <div className="p-4 border-2 border-blue-500 rounded-full text-center">
              border-radius: 50%
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Individual Corner Control</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.custom-corners {
  /* Individual properties */
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 40px;

  /* Shorthand for each corner */
  border-radius: 10px 20px 30px 40px;

  /* Horizontal and vertical radii */
  border-radius: 10px 20px 30px 40px / 20px 30px 40px 50px;
}`}</pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border-2 border-blue-500 text-center" style={{ borderRadius: '20px 0 0 0' }}>
              Top Left Only
            </div>
            <div className="p-4 border-2 border-blue-500 text-center" style={{ borderRadius: '0 20px 0 0' }}>
              Top Right Only
            </div>
            <div className="p-4 border-2 border-blue-500 text-center" style={{ borderRadius: '0 0 20px 0' }}>
              Bottom Right Only
            </div>
            <div className="p-4 border-2 border-blue-500 text-center" style={{ borderRadius: '0 0 0 20px' }}>
              Bottom Left Only
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Buttons</h3>
              <div className="space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Default Button
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
                  Pill Button
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Cards</h3>
              <div className="p-4 bg-gray-100 rounded-lg">
                Card with rounded corners
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Images</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
                  Rounded Image
                </div>
                <div className="bg-gray-300 h-32 rounded-full flex items-center justify-center">
                  Circular Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use consistent border-radius values throughout your design</li>
          <li>Consider using CSS variables for reusable radius values</li>
          <li>Test rounded corners with different content sizes</li>
          <li>Be mindful of border-radius with responsive designs</li>
          <li>Use appropriate radius sizes for different UI elements</li>
          <li>Consider browser support for complex border-radius values</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RoundedCorners; 