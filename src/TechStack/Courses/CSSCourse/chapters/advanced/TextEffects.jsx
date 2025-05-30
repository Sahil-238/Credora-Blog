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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Effect Types</h2>
        <div className="space-y-6">
          {/* Gradient Text */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Gradient Text</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic gradient text */
.gradient-text {
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Animated gradient text */
.animated-gradient {
  background: linear-gradient(
    to right,
    #12c2e9 20%,
    #c471ed 40%,
    #f64f59 60%,
    #12c2e9 80%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to { background-position: 200% center; }
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Static gradient</p>
                <p className="text-4xl font-bold" style={{ 
                  background: 'linear-gradient(45deg, #3B82F6, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Gradient Text
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Animated gradient</p>
                <p className="text-4xl font-bold" style={{ 
                  background: 'linear-gradient(to right, #3B82F6 20%, #EC4899 40%, #8B5CF6 60%, #3B82F6 80%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  animation: 'shine 3s linear infinite'
                }}>
                  Moving Text
                </p>
              </div>
            </div>
          </div>

          {/* Text Stroke */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Stroke</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic text stroke */
.stroke-text {
  -webkit-text-stroke: 2px #000;
  color: transparent;
}

/* Stroke with fill */
.stroke-fill {
  -webkit-text-stroke: 2px #000;
  color: #fff;
}

/* Multiple strokes using text-shadow */
.multi-stroke {
  color: #fff;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Outline only</p>
                <p className="text-4xl font-bold" style={{ 
                  WebkitTextStroke: '2px #3B82F6',
                  color: 'transparent'
                }}>
                  Outline
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Stroke with fill</p>
                <p className="text-4xl font-bold" style={{ 
                  WebkitTextStroke: '2px #3B82F6',
                  color: '#EC4899'
                }}>
                  Filled
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Multiple strokes</p>
                <p className="text-4xl font-bold text-white" style={{ 
                  textShadow: '-1px -1px 0 #3B82F6, 1px -1px 0 #3B82F6, -1px 1px 0 #3B82F6, 1px 1px 0 #3B82F6'
                }}>
                  Multi
                </p>
              </div>
            </div>
          </div>

          {/* Text Glow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Glow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic glow */
.glow {
  text-shadow: 0 0 10px #00f;
}

/* Neon effect */
.neon {
  color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #ff1177,
    0 0 40px #ff1177,
    0 0 80px #ff1177;
}

/* Animated glow */
.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { text-shadow: 0 0 10px #00f; }
  50% { text-shadow: 0 0 20px #00f; }
}`}
              </pre>
            </div>
            <div className="grid grid-cols-3 gap-4 bg-gray-900 p-4 rounded">
              <div>
                <p className="text-sm text-gray-400 mb-2">Basic glow</p>
                <p className="text-4xl font-bold text-white" style={{ 
                  textShadow: '0 0 10px #3B82F6'
                }}>
                  Glow
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Neon effect</p>
                <p className="text-4xl font-bold text-white" style={{ 
                  textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #EC4899, 0 0 40px #EC4899, 0 0 80px #EC4899'
                }}>
                  Neon
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Pulsing glow</p>
                <p className="text-4xl font-bold text-white" style={{ 
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  Pulse
                </p>
              </div>
            </div>
          </div>

          {/* Text Distortion */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Distortion</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Glitch effect */
.glitch {
  position: relative;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  text-shadow: 1px 0 red;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 2s infinite linear alternate-reverse;
}

/* Wavy text */
.wavy {
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Glitch effect</p>
                <div className="relative">
                  <p className="text-4xl font-bold text-blue-500" style={{ 
                    position: 'relative',
                    animation: 'glitch 500ms infinite'
                  }}>
                    Glitch Text
                    <span className="absolute inset-0 text-pink-500" style={{ 
                      clipPath: 'inset(10% 0 10% 0)',
                      transform: 'translateX(-2px)',
                      opacity: 0.75
                    }}>Glitch Text</span>
                    <span className="absolute inset-0 text-blue-300" style={{ 
                      clipPath: 'inset(20% 0 20% 0)',
                      transform: 'translateX(2px)',
                      opacity: 0.75
                    }}>Glitch Text</span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Wavy text</p>
                <div className="flex space-x-1">
                  {'WAVY TEXT'.split('').map((letter, i) => (
                    <span
                      key={i}
                      className="text-4xl font-bold text-blue-500"
                      style={{
                        display: 'inline-block',
                        animation: 'wave 2s ease-in-out infinite',
                        animationDelay: `${i * 0.1}s`
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes pulse {
          0%, 100% { text-shadow: 0 0 10px #3B82F6; }
          50% { text-shadow: 0 0 20px #3B82F6; }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Text Effects Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Consider accessibility when using decorative text effects</li>
          <li>Ensure text remains readable with applied effects</li>
          <li>Use animations sparingly to avoid visual fatigue</li>
          <li>Test effects across different browsers</li>
          <li>Provide fallbacks for unsupported features</li>
          <li>Consider performance impact of complex animations</li>
          <li>Respect user preferences for reduced motion</li>
          <li>Maintain consistent styling throughout the design</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TextEffects; 