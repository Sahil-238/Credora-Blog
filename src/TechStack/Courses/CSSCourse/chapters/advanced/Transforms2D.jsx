import React from 'react';
import { motion } from 'framer-motion';

const Transforms2D = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS 2D Transforms</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Transforms</h2>
        <div className="space-y-6">
          {/* Translate */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Translate</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Single axis translation */
.move-right {
  transform: translateX(100px);
}
.move-down {
  transform: translateY(50px);
}

/* Combined translation */
.move-diagonal {
  transform: translate(100px, 50px);
}

/* Percentage based */
.move-relative {
  transform: translate(50%, -25%);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:translate-x-8 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">translateX</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:translate-y-8 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">translateY</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:translate-x-8 hover:translate-y-8 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">translate(X,Y)</p>
              </div>
            </div>
          </div>

          {/* Rotate */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Rotate</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic rotation */
.rotate-45 {
  transform: rotate(45deg);
}

/* Negative rotation */
.rotate-counter {
  transform: rotate(-90deg);
}

/* Using turns */
.rotate-full {
  transform: rotate(1turn);
}

/* Using radians */
.rotate-rad {
  transform: rotate(3.14159rad);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:rotate-45 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">rotate(45deg)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:rotate-90 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">rotate(90deg)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:rotate-180 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">rotate(180deg)</p>
              </div>
            </div>
          </div>

          {/* Scale */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Scale</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Uniform scaling */
.scale-up {
  transform: scale(1.5);
}

/* Individual axis scaling */
.scale-x {
  transform: scaleX(2);
}
.scale-y {
  transform: scaleY(0.5);
}

/* Combined scaling */
.scale-custom {
  transform: scale(2, 0.5);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:scale-150 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">scale(1.5)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:scale-x-150 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">scaleX(1.5)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:scale-y-150 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">scaleY(1.5)</p>
              </div>
            </div>
          </div>

          {/* Skew */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Skew</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Single axis skew */
.skew-x {
  transform: skewX(20deg);
}
.skew-y {
  transform: skewY(10deg);
}

/* Combined skew */
.skew-both {
  transform: skew(20deg, 10deg);
}

/* Negative skew */
.skew-negative {
  transform: skew(-20deg, -10deg);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:skew-x-12 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">skewX(12deg)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:skew-y-12 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">skewY(12deg)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:skew-x-12 hover:skew-y-12 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">skew(12deg, 12deg)</p>
              </div>
            </div>
          </div>

          {/* Transform Origin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Transform Origin</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Keyword values */
.origin-corner {
  transform-origin: top left;
}

/* Percentage values */
.origin-custom {
  transform-origin: 75% 25%;
}

/* Length values */
.origin-pixels {
  transform-origin: 100px 50px;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:rotate-45 origin-top-left transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">origin: top left</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:rotate-45 origin-center transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">origin: center</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:rotate-45 origin-bottom-right transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">origin: bottom right</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">2D Transform Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use transforms instead of absolute positioning for animations</li>
          <li>Combine transforms for complex movements</li>
          <li>Consider transform-origin for rotation and scaling effects</li>
          <li>Use hardware acceleration with transform: translate3d(0,0,0)</li>
          <li>Test transform behavior across different browsers</li>
          <li>Be mindful of transform order in complex animations</li>
          <li>Use transition for smooth transform animations</li>
          <li>Consider performance impact of complex transforms</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Transforms2D; 