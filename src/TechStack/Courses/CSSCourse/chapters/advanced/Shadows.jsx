import React from 'react';
import { motion } from 'framer-motion';

const Shadows = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Shadows</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shadow Types</h2>
        <div className="space-y-6">
          {/* Box Shadow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Box Shadow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic box shadow */
.element {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Multiple shadows */
.element {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Inset shadow */
.element {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Basic shadow</p>
                <div className="h-24 bg-white rounded shadow-md flex items-center justify-center">
                  Basic
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Multiple shadows</p>
                <div className="h-24 bg-white rounded flex items-center justify-center"
                     style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)' }}>
                  Multiple
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Inset shadow</p>
                <div className="h-24 bg-white rounded flex items-center justify-center"
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
                  Inset
                </div>
              </div>
            </div>
          </div>

          {/* Text Shadow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Shadow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic text shadow */
.text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Multiple text shadows */
.text {
  text-shadow:
    2px 2px 0 #000,
    -2px -2px 0 #000;
}

/* Glow effect */
.text {
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #0073e6;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Basic text shadow</p>
                <p className="text-2xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Shadow
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Multiple shadows</p>
                <p className="text-2xl font-bold" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000' }}>
                  Outline
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Glow effect</p>
                <p className="text-2xl font-bold text-white" style={{ 
                  textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #3B82F6',
                  backgroundColor: '#1F2937',
                  padding: '0.5rem',
                  borderRadius: '0.375rem'
                }}>
                  Glow
                </p>
              </div>
            </div>
          </div>

          {/* Drop Shadow Filter */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Drop Shadow Filter</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Drop shadow filter */
.element {
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

/* Multiple drop shadows */
.element {
  filter:
    drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.2));
}

/* Colored drop shadow */
.element {
  filter: drop-shadow(0 0 0.75rem crimson);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Basic drop shadow</p>
                <div className="h-24 flex items-center justify-center">
                  <div className="w-16 h-16" style={{ 
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                    backgroundColor: '#3B82F6',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Multiple shadows</p>
                <div className="h-24 flex items-center justify-center">
                  <div className="w-16 h-16" style={{ 
                    filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2)) drop-shadow(4px 4px 4px rgba(0,0,0,0.2))',
                    backgroundColor: '#EC4899',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Colored shadow</p>
                <div className="h-24 flex items-center justify-center">
                  <div className="w-16 h-16" style={{ 
                    filter: 'drop-shadow(0 0 0.75rem #EC4899)',
                    backgroundColor: '#3B82F6',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Shadow Techniques */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Advanced Shadow Techniques</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Layered shadows */
.card {
  box-shadow:
    0 1px 1px rgba(0,0,0,0.12),
    0 2px 2px rgba(0,0,0,0.12),
    0 4px 4px rgba(0,0,0,0.12),
    0 8px 8px rgba(0,0,0,0.12);
}

/* Inner glow */
.glow {
  box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff;
}

/* Floating effect */
.float {
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Layered shadows</p>
                <div className="h-24 bg-white rounded flex items-center justify-center"
                     style={{ 
                       boxShadow: '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12)'
                     }}>
                  Layered
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Inner glow</p>
                <div className="h-24 bg-white rounded flex items-center justify-center"
                     style={{ 
                       boxShadow: 'inset 0 0 50px #fff, inset 20px 0 80px #EC4899, inset -20px 0 80px #3B82F6'
                     }}>
                  Glow
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Floating effect</p>
                <div className="h-24 bg-white rounded flex items-center justify-center"
                     style={{ 
                       boxShadow: '0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06)'
                     }}>
                  Float
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Shadow Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use shadows to create depth and hierarchy</li>
          <li>Keep shadow values consistent throughout the design</li>
          <li>Consider performance impact of multiple shadows</li>
          <li>Use CSS variables for reusable shadow values</li>
          <li>Test shadows across different backgrounds</li>
          <li>Ensure sufficient contrast with text shadows</li>
          <li>Use drop-shadow for non-rectangular elements</li>
          <li>Consider reduced motion preferences for animated shadows</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Shadows; 