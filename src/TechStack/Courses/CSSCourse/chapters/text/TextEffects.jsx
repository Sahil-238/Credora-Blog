import React from 'react';
import { motion } from 'framer-motion';

const TextEffects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Text Effects</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Decorations and Effects</h2>
        <div className="space-y-6">
          {/* Text Decoration */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Decoration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Text decoration properties */
.text {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #4299e1;
  text-decoration-thickness: 2px;
}

/* Shorthand */
.text {
  text-decoration: underline wavy red 2px;
}

/* Multiple decorations */
.text {
  text-decoration: underline overline;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="underline decoration-blue-500">Underlined text</p>
              <p className="underline decoration-wavy decoration-2 decoration-pink-500">Wavy underline</p>
              <p className="underline decoration-dotted decoration-2 decoration-purple-500">Dotted underline</p>
              <p className="underline decoration-dashed decoration-2 decoration-green-500">Dashed underline</p>
              <p className="underline decoration-double decoration-2 decoration-orange-500">Double underline</p>
              <p className="underline overline decoration-2 decoration-red-500">Underline and overline</p>
              <p className="line-through decoration-2 decoration-gray-500">Strikethrough text</p>
            </div>
          </div>

          {/* Text Shadow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Shadow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic shadow */
.text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Multiple shadows */
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
            <div className="space-y-6 text-2xl font-bold">
              <p className="text-gray-800 drop-shadow-md">Basic shadow effect</p>
              <p className="text-white" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
                Outline text effect
              </p>
              <p className="text-blue-500" style={{ textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6' }}>
                Neon glow effect
              </p>
              <p className="text-purple-600" style={{ textShadow: '2px 2px 4px rgba(139, 92, 246, 0.5)' }}>
                Colored shadow
              </p>
            </div>
          </div>

          {/* Gradient Text */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Gradient Text</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic gradient text */
.text {
  background: linear-gradient(45deg, #4299e1, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Animated gradient */
.text {
  background: linear-gradient(
    to right,
    #4299e1 20%,
    #805ad5 40%,
    #805ad5 60%,
    #4299e1 80%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2s linear infinite;
}

@keyframes shine {
  to { background-position: 200% center; }
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Basic gradient text
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Another gradient combination
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Multi-color gradient
              </p>
              <p className="text-3xl font-bold animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] text-transparent bg-clip-text">
                Animated gradient text
              </p>
            </div>
          </div>

          {/* Text Transform */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Transform</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Text transform values */
.text {
  text-transform: none;       /* Default */
  text-transform: capitalize; /* First Letter Upper */
  text-transform: uppercase;  /* All Upper */
  text-transform: lowercase;  /* All Lower */
  text-transform: full-width; /* Full-width chars */
}

/* Writing mode */
.text {
  writing-mode: horizontal-tb; /* Default */
  writing-mode: vertical-rl;   /* Vertical right-left */
  writing-mode: vertical-lr;   /* Vertical left-right */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="capitalize">this text is capitalized</p>
              <p className="uppercase">this text is uppercase</p>
              <p className="lowercase">THIS TEXT IS LOWERCASE</p>
              <div className="h-32 flex gap-4">
                <p className="writing-vertical-rl rotate-180">Vertical right-to-left text</p>
                <p className="writing-vertical-lr">Vertical left-to-right text</p>
              </div>
            </div>
          </div>

          {/* Advanced Effects */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Advanced Effects</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Clip path text */
.text {
  -webkit-text-stroke: 2px black;
  -webkit-text-fill-color: transparent;
}

/* Text reveal */
.text {
  position: relative;
  color: transparent;
}
.text::before {
  content: attr(data-text);
  position: absolute;
  color: black;
  animation: reveal 2s linear;
}

@keyframes reveal {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <p className="text-4xl font-bold" style={{ WebkitTextStroke: '2px #4299e1', WebkitTextFillColor: 'transparent' }}>
                Outlined text
              </p>
              <p className="text-4xl font-bold relative overflow-hidden">
                <span className="text-transparent">Reveal animation</span>
                <span className="absolute inset-0 animate-text-reveal">Reveal animation</span>
              </p>
              <p className="text-4xl font-bold mix-blend-difference">Blend mode text</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Text Effects Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Ensure text remains readable with effects</li>
          <li>Consider performance impact of animations</li>
          <li>Test effects across different browsers</li>
          <li>Use appropriate contrast ratios</li>
          <li>Keep decorations consistent with design</li>
          <li>Consider accessibility implications</li>
          <li>Use effects purposefully, not just for decoration</li>
          <li>Test effects on different font sizes</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TextEffects; 