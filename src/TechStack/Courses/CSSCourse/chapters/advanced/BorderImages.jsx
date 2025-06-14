import React from 'react';
import { motion } from 'framer-motion';

const BorderImages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Border Images</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Border Image Properties</h2>
        <div className="space-y-6">
          {/* Basic Border Image */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Border Image</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic border image */
.element {
  border: 15px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: round;
}

/* Shorthand syntax */
.element {
  border-image: url('border.png') 30 round;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Basic border image</p>
                <div className="h-32 border-8 border-solid border-transparent bg-blue-50"
                     style={{
                       borderImage: 'linear-gradient(45deg, #3B82F6, #EC4899) 1',
                     }}>
                  Gradient border image
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Repeating pattern</p>
                <div className="h-32 border-8 border-solid border-transparent bg-pink-50"
                     style={{
                       borderImage: 'repeating-linear-gradient(45deg, #3B82F6, #3B82F6 10px, #EC4899 10px, #EC4899 20px) 1',
                     }}>
                  Repeating pattern
                </div>
              </div>
            </div>
          </div>

          {/* Border Image Properties */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Border Image Properties</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Border image properties */
.element {
  border-image-source: url('border.png');  /* Image source */
  border-image-slice: 30 40 50 60;         /* Top Right Bottom Left */
  border-image-width: 1 2 3 4;             /* Border widths */
  border-image-outset: 1 1.5;              /* Extend beyond border */
  border-image-repeat: stretch round;       /* How to fill sides */
}

/* Gradient as border image */
.gradient-border {
  border-image-source: linear-gradient(45deg, #f00, #00f);
  border-image-slice: 1;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Different widths</p>
                <div className="h-32 border-[15px] border-solid border-transparent bg-purple-50"
                     style={{
                       borderImageSource: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                       borderImageSlice: '1',
                       borderImageWidth: '10px 20px 30px 40px',
                     }}>
                  Variable width borders
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Outset border</p>
                <div className="h-32 border-8 border-solid border-transparent bg-yellow-50"
                     style={{
                       borderImageSource: 'linear-gradient(45deg, #F59E0B, #EC4899)',
                       borderImageSlice: '1',
                       borderImageOutset: '8px',
                     }}>
                  Outset border
                </div>
              </div>
            </div>
          </div>

          {/* Border Image Patterns */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Border Image Patterns</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Pattern repetition */
.stretch {
  border-image-repeat: stretch;  /* Default */
}
.repeat {
  border-image-repeat: repeat;   /* Repeat whole image */
}
.round {
  border-image-repeat: round;    /* Scale to fit */
}
.space {
  border-image-repeat: space;    /* Even spacing */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Repeat pattern</p>
                <div className="h-32 border-8 border-solid border-transparent bg-green-50"
                     style={{
                       borderImage: 'repeating-linear-gradient(-45deg, #10B981, #10B981 5px, transparent 5px, transparent 15px) 1',
                     }}>
                  Repeating stripes
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Round pattern</p>
                <div className="h-32 border-8 border-solid border-transparent bg-red-50"
                     style={{
                       borderImage: 'radial-gradient(circle at 10px 10px, #EF4444 6px, transparent 6px) 1 / 20px / 0 round',
                     }}>
                  Rounded pattern
                </div>
              </div>
            </div>
          </div>

          {/* Creative Examples */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Creative Examples</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Creative border patterns */
.rainbow {
  border-image: linear-gradient(
    to right,
    red, orange, yellow, green, blue, indigo, violet
  ) 1;
}

.animated {
  border-image: conic-gradient(
    from var(--angle),
    #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00
  ) 1;
  animation: rotate 4s linear infinite;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Rainbow border</p>
                <div className="h-32 border-4 border-solid border-transparent bg-white"
                     style={{
                       borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1',
                     }}>
                  Rainbow border
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Pattern border</p>
                <div className="h-32 border-4 border-solid border-transparent bg-white"
                     style={{
                       borderImage: 'repeating-conic-gradient(from 0deg, #60A5FA 0deg 20deg, transparent 20deg 30deg) 1',
                     }}>
                  Pattern border
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Border Image Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Consider browser support when using complex border images</li>
          <li>Optimize border image assets for performance</li>
          <li>Provide fallback borders for older browsers</li>
          <li>Use SVG images for scalable border patterns</li>
          <li>Test border images across different screen sizes</li>
          <li>Consider using CSS gradients for simple patterns</li>
          <li>Be mindful of border-image performance impact</li>
          <li>Document complex border-image implementations</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BorderImages; 