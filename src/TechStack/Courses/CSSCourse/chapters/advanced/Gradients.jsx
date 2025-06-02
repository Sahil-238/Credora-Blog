import React from 'react';
import { motion } from 'framer-motion';

const Gradients = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Gradients</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gradient Types</h2>
        <div className="space-y-6">
          {/* Linear Gradients */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Linear Gradients</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic linear gradient */
.element {
  background: linear-gradient(blue, red);
}

/* Directional gradient */
.element {
  background: linear-gradient(to right, blue, red);
  background: linear-gradient(45deg, blue, red);
}

/* Multiple color stops */
.element {
  background: linear-gradient(
    to right,
    red,
    orange 20%,
    yellow 40%,
    green 60%,
    blue 80%,
    purple
  );
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Basic gradient</p>
                <div className="h-32 rounded bg-gradient-to-b from-blue-500 to-red-500"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Diagonal gradient</p>
                <div className="h-32 rounded" style={{ background: 'linear-gradient(45deg, #3B82F6, #EC4899)' }}></div>
              </div>
            </div>
          </div>

          {/* Radial Gradients */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Radial Gradients</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic radial gradient */
.element {
  background: radial-gradient(blue, red);
}

/* Shaped radial gradient */
.element {
  background: radial-gradient(circle, blue, red);
  background: radial-gradient(ellipse, blue, red);
}

/* Positioned radial gradient */
.element {
  background: radial-gradient(
    circle at top right,
    blue,
    red
  );
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Circle gradient</p>
                <div className="h-32 rounded" style={{ background: 'radial-gradient(circle, #3B82F6, #EC4899)' }}></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Positioned gradient</p>
                <div className="h-32 rounded" style={{ background: 'radial-gradient(circle at top right, #3B82F6, #EC4899)' }}></div>
              </div>
            </div>
          </div>

          {/* Conic Gradients */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Conic Gradients</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic conic gradient */
.element {
  background: conic-gradient(blue, red);
}

/* From angle */
.element {
  background: conic-gradient(from 45deg, blue, red);
}

/* Color wheel */
.element {
  background: conic-gradient(
    red, orange, yellow, green,
    blue, indigo, violet, red
  );
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Basic conic</p>
                <div className="h-32 rounded-full" style={{ background: 'conic-gradient(#3B82F6, #EC4899, #3B82F6)' }}></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Color wheel</p>
                <div className="h-32 rounded-full" style={{ background: 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)' }}></div>
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Advanced Techniques</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Repeating gradients */
.element {
  background: repeating-linear-gradient(
    45deg,
    #f00 0px,
    #f00 10px,
    #00f 10px,
    #00f 20px
  );
}

/* Multiple gradients */
.element {
  background: linear-gradient(red, transparent),
             linear-gradient(to right, blue, transparent);
}

/* Gradient text */
.element {
  background: linear-gradient(45deg, #f00, #00f);
  -webkit-background-clip: text;
  color: transparent;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Repeating pattern</p>
                <div className="h-32 rounded" style={{ 
                  background: 'repeating-linear-gradient(45deg, #3B82F6 0px, #3B82F6 10px, #EC4899 10px, #EC4899 20px)'
                }}></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Multiple gradients</p>
                <div className="h-32 rounded" style={{ 
                  background: 'linear-gradient(45deg, rgba(59,130,246,0.5), transparent), linear-gradient(-45deg, rgba(236,73,153,0.5), transparent)'
                }}></div>
              </div>
            </div>
          </div>

          {/* Gradient Patterns */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Gradient Patterns</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Checkerboard pattern */
.checkerboard {
  background-image:
    linear-gradient(45deg, #000 25%, transparent 25%),
    linear-gradient(-45deg, #000 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #000 75%),
    linear-gradient(-45deg, transparent 75%, #000 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

/* Striped pattern */
.stripes {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    #ccc 10px,
    #ccc 20px
  );
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Checkerboard</p>
                <div className="h-32 rounded" style={{ 
                  backgroundImage: `
                    linear-gradient(45deg, #3B82F6 25%, transparent 25%),
                    linear-gradient(-45deg, #3B82F6 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #3B82F6 75%),
                    linear-gradient(-45deg, transparent 75%, #3B82F6 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Stripes</p>
                <div className="h-32 rounded" style={{ 
                  background: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #3B82F6 10px, #3B82F6 20px)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Gradient Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use gradients sparingly to avoid visual overload</li>
          <li>Consider performance impact of complex gradient patterns</li>
          <li>Provide fallback colors for older browsers</li>
          <li>Use CSS custom properties for reusable gradient values</li>
          <li>Test gradient contrast for accessibility</li>
          <li>Optimize gradient color stops for smooth transitions</li>
          <li>Consider using gradients instead of images when possible</li>
          <li>Document complex gradient patterns for maintainability</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Gradients; 