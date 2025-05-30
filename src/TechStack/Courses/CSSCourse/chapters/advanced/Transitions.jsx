import React from 'react';
import { motion } from 'framer-motion';

const Transitions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Transitions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transition Properties</h2>
        <div className="space-y-6">
          {/* Basic Transitions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Transitions</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Single property transition */
.element {
  transition: background-color 0.3s ease;
}

/* Multiple property transitions */
.element {
  transition: background-color 0.3s ease,
              transform 0.5s ease-out;
}

/* All properties */
.element {
  transition: all 0.3s ease-in-out;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:bg-pink-500 transition-colors duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Color transition</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:scale-125 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Scale transition</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:bg-pink-500 hover:scale-125 transition-all duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Multiple properties</p>
              </div>
            </div>
          </div>

          {/* Timing Functions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Timing Functions</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Built-in timing functions */
.ease {
  transition-timing-function: ease;
}
.linear {
  transition-timing-function: linear;
}
.ease-in {
  transition-timing-function: ease-in;
}
.ease-out {
  transition-timing-function: ease-out;
}
.ease-in-out {
  transition-timing-function: ease-in-out;
}

/* Custom cubic bezier */
.custom {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:translate-x-16 transition-transform duration-1000 ease-linear"></div>
                <p className="text-sm text-gray-600 mt-2">Linear</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:translate-x-16 transition-transform duration-1000 ease-in-out"></div>
                <p className="text-sm text-gray-600 mt-2">Ease-in-out</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:translate-x-16 transition-transform duration-1000" style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Custom bezier</p>
              </div>
            </div>
          </div>

          {/* Delay and Duration */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Delay and Duration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Duration */
.fast {
  transition-duration: 0.2s;
}
.slow {
  transition-duration: 1s;
}

/* Delay */
.delayed {
  transition-delay: 0.5s;
}

/* Combined with specific properties */
.element {
  transition: transform 0.3s ease 0.5s,
              opacity 0.5s linear;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:translate-y-8 transition-transform duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Fast (0.3s)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 hover:translate-y-8 transition-transform duration-1000"></div>
                <p className="text-sm text-gray-600 mt-2">Slow (1s)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 hover:translate-y-8 transition-transform duration-300" style={{ 
                  transitionDelay: '0.5s'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Delayed (0.5s)</p>
              </div>
            </div>
          </div>

          {/* Transitioning Multiple Properties */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Multiple Properties</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Individual transitions */
.element {
  transition: 
    background-color 0.3s ease,
    transform 0.5s ease-out 0.1s,
    box-shadow 0.2s linear;
}

/* Property groups */
.element {
  transition: transform 0.5s ease-out,
              filter 0.3s ease;
}

/* Using transition-property */
.element {
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 hover:rotate-45 hover:shadow-lg transition-all duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Multiple properties</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110 hover:brightness-125 hover:contrast-125 transition-all duration-300"></div>
                <p className="text-sm text-gray-600 mt-2">Filter transitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Transition Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use appropriate timing functions for natural movement</li>
          <li>Keep transitions under 400ms for optimal UX</li>
          <li>Consider using delays for sequential animations</li>
          <li>Transition only transform and opacity for performance</li>
          <li>Test transitions across different browsers</li>
          <li>Provide fallbacks for older browsers</li>
          <li>Use hardware acceleration when possible</li>
          <li>Consider reduced motion preferences</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Transitions; 