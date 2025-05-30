import React from 'react';
import { motion } from 'framer-motion';

const Transforms3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS 3D Transforms</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3D Transform Properties</h2>
        <div className="space-y-6">
          {/* Perspective */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Perspective</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Container perspective */
.container {
  perspective: 1000px;
}

/* Individual element perspective */
.element {
  transform: perspective(1000px);
}

/* Perspective origin */
.container {
  perspective-origin: center center;
  perspective-origin: top left;
  perspective-origin: 75% 25%;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4 perspective-1000">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:rotate-x-45 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">perspective: 500px</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:rotate-y-45 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">perspective: 1000px</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:rotate-x-45 hover:rotate-y-45 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Combined rotation</p>
              </div>
            </div>
          </div>

          {/* 3D Rotate */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">3D Rotate</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Rotate around X axis */
.rotate-x {
  transform: rotateX(45deg);
}

/* Rotate around Y axis */
.rotate-y {
  transform: rotateY(45deg);
}

/* Rotate around Z axis */
.rotate-z {
  transform: rotateZ(45deg);
}

/* Combined rotation */
.rotate-3d {
  transform: rotate3d(1, 1, 1, 45deg);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4 perspective-1000">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:rotate-x-180 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">rotateX(180deg)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:rotate-y-180 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">rotateY(180deg)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:[transform:rotate3d(1,1,1,180deg)] transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">rotate3d(1,1,1,180deg)</p>
              </div>
            </div>
          </div>

          {/* 3D Translate */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">3D Translate</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Translate along Z axis */
.translate-z {
  transform: translateZ(100px);
}

/* Combined translation */
.translate-3d {
  transform: translate3d(100px, 50px, 200px);
}

/* With perspective */
.container {
  perspective: 1000px;
}
.element {
  transform: translateZ(100px);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4 perspective-1000">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:[transform:translateZ(100px)] transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">translateZ(100px)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:[transform:translate3d(50px,50px,100px)] transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">translate3d</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:[transform:translateZ(100px)_rotateY(45deg)] transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Combined transform</p>
              </div>
            </div>
          </div>

          {/* Transform Style */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Transform Style & Backface</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Preserve 3D */
.container {
  transform-style: preserve-3d;
}

/* Flat rendering */
.element {
  transform-style: flat;
}

/* Hide backface */
.card {
  backface-visibility: hidden;
}

/* Show backface */
.card-visible {
  backface-visibility: visible;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4 perspective-1000">
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-blue-500 hover:rotate-y-180 transition-transform duration-300 [backface-visibility:hidden]"></div>
                  <div className="absolute inset-0 bg-pink-500 rotate-y-180 hover:rotate-y-0 transition-transform duration-300 [backface-visibility:hidden]"></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Hidden backface</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-purple-500 hover:rotate-y-180 transition-transform duration-300"></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Visible backface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">3D Transform Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Set appropriate perspective for realistic 3D effects</li>
          <li>Use transform-style: preserve-3d for nested 3D transforms</li>
          <li>Consider backface-visibility for card flip effects</li>
          <li>Optimize performance with will-change property</li>
          <li>Test 3D effects across different browsers</li>
          <li>Use hardware acceleration for smooth animations</li>
          <li>Consider mobile device capabilities</li>
          <li>Provide fallbacks for older browsers</li>
        </ul>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </motion.div>
  );
};

export default Transforms3D; 