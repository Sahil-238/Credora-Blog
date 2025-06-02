import React from 'react';
import { motion } from 'framer-motion';

const Animations = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Animations</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Animation Properties</h2>
        <div className="space-y-6">
          {/* Keyframes */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">@keyframes Rule</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic keyframe animation */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

/* Multiple keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 animate-bounce"></div>
                <p className="text-sm text-gray-600 mt-2">Bounce animation</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500 animate-pulse"></div>
                <p className="text-sm text-gray-600 mt-2">Pulse animation</p>
              </div>
            </div>
          </div>

          {/* Animation Properties */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Animation Properties</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Individual properties */
.element {
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

/* Shorthand */
.element {
  animation: slide 2s ease-in-out 1s infinite alternate forwards;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500" style={{
                  animation: 'spin 2s linear infinite'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Infinite spin</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500" style={{
                  animation: 'bounce 1s ease-in-out infinite alternate'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Alternate bounce</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500" style={{
                  animation: 'fade 2s ease-in-out forwards'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Forward fill</p>
              </div>
            </div>
          </div>

          {/* Multiple Animations */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Multiple Animations</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Multiple animations */
.element {
  animation: 
    slide 2s ease infinite,
    fade 3s linear infinite,
    scale 1.5s ease-in-out infinite;
}

/* Staggered animations */
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }

/* Chained animations */
.element {
  animation: slideIn 1s ease forwards,
             rotate 2s ease 1s infinite;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500" style={{
                  animation: 'spin 2s linear infinite, pulse 3s ease-in-out infinite'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Multiple animations</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 bg-pink-500" style={{
                  animation: 'bounce 1s ease-in-out infinite',
                  animationDelay: '0s'
                }}></div>
                <div className="w-4 h-4 bg-pink-500" style={{
                  animation: 'bounce 1s ease-in-out infinite',
                  animationDelay: '0.2s'
                }}></div>
                <div className="w-4 h-4 bg-pink-500" style={{
                  animation: 'bounce 1s ease-in-out infinite',
                  animationDelay: '0.4s'
                }}></div>
              </div>
            </div>
          </div>

          {/* Animation Events */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Animation Events</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* JavaScript animation events */
element.addEventListener('animationstart', () => {
  console.log('Animation started');
});

element.addEventListener('animationend', () => {
  console.log('Animation completed');
});

element.addEventListener('animationiteration', () => {
  console.log('Animation iteration');
});

/* Controlling animations */
.paused {
  animation-play-state: paused;
}

.running {
  animation-play-state: running;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 hover:[animation-play-state:paused]" style={{
                  animation: 'spin 2s linear infinite'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">Hover to pause</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-500" style={{
                  animation: 'bounce 2s ease-in-out 3'
                }}></div>
                <p className="text-sm text-gray-600 mt-2">3 iterations only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Animation Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use animations sparingly to avoid overwhelming users</li>
          <li>Keep animations under 1 second for UI interactions</li>
          <li>Use appropriate timing functions for natural movement</li>
          <li>Consider reduced motion preferences</li>
          <li>Test animations across different browsers</li>
          <li>Use transform and opacity for better performance</li>
          <li>Implement fallbacks for older browsers</li>
          <li>Consider mobile device capabilities</li>
        </ul>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-20px); }
        }
        @keyframes fade {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </motion.div>
  );
};

export default Animations; 