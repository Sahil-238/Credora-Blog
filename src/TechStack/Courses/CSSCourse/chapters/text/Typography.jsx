import React from 'react';
import { motion } from 'framer-motion';

const Typography = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Typography</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Typography Fundamentals</h2>
        <div className="space-y-6">
          {/* Type Scale */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Type Scale</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`:root {
  /* Modern type scale (1.250 - Major Third) */
  --scale-000: 0.8rem;    /* 12.80px */
  --scale-100: 1rem;      /* 16.00px */
  --scale-200: 1.25rem;   /* 20.00px */
  --scale-300: 1.563rem;  /* 25.00px */
  --scale-400: 1.953rem;  /* 31.25px */
  --scale-500: 2.441rem;  /* 39.06px */
  --scale-600: 3.052rem;  /* 48.83px */
}

h1 { font-size: var(--scale-500); }
h2 { font-size: var(--scale-400); }
h3 { font-size: var(--scale-300); }
h4 { font-size: var(--scale-200); }
p { font-size: var(--scale-100); }
small { font-size: var(--scale-000); }`}
              </pre>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl">Level 1 Heading</h1>
              <h2 className="text-4xl">Level 2 Heading</h2>
              <h3 className="text-3xl">Level 3 Heading</h3>
              <h4 className="text-2xl">Level 4 Heading</h4>
              <p className="text-base">Base paragraph text</p>
              <small className="text-sm">Small text</small>
            </div>
          </div>

          {/* Line Height */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Line Height</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Line height values */
.text {
  line-height: 1;          /* No extra leading */
  line-height: 1.5;        /* Comfortable reading */
  line-height: 2;          /* Double-spaced */
  line-height: 24px;       /* Fixed height */
  line-height: normal;     /* Browser default */
}

/* Recommended values */
h1, h2 { line-height: 1.1; }      /* Headings */
h3, h4 { line-height: 1.2; }      /* Subheadings */
p { line-height: 1.5; }           /* Body text */
small { line-height: 1.4; }       /* Small text */`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50">
                <p className="leading-none mb-4">
                  This paragraph has no line height (leading-none). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="leading-normal mb-4">
                  This paragraph has normal line height (leading-normal). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="leading-relaxed">
                  This paragraph has relaxed line height (leading-relaxed). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          {/* Measure (Line Length) */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Measure (Line Length)</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Optimal reading length */
.text-container {
  max-width: 65ch;    /* Character width */
  max-width: 35em;    /* Em-based width */
  max-width: 600px;   /* Fixed width */
}

/* Responsive measure */
.text-container {
  width: 100%;
  max-width: min(65ch, 100%);
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="max-w-sm bg-blue-50 p-4 rounded">
                <p className="text-sm text-gray-600 mb-2">Narrow measure (~45 characters)</p>
                <p>This is a narrow text container that might feel a bit cramped for comfortable reading of longer passages.</p>
              </div>
              <div className="max-w-2xl bg-green-50 p-4 rounded">
                <p className="text-sm text-gray-600 mb-2">Optimal measure (~65 characters)</p>
                <p>This is an optimal text container width that provides comfortable reading for longer passages of text. The line length is neither too short nor too long.</p>
              </div>
              <div className="w-full bg-red-50 p-4 rounded">
                <p className="text-sm text-gray-600 mb-2">Wide measure (100% width)</p>
                <p>This is a very wide text container that can be difficult to read because the eyes have to travel too far from the end of one line to the beginning of the next line.</p>
              </div>
            </div>
          </div>

          {/* Vertical Rhythm */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Vertical Rhythm</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Base rhythm */
:root {
  --baseline: 1.5rem;  /* 24px */
}

/* Vertical spacing */
h1 { margin-bottom: var(--baseline); }
h2 { margin-bottom: calc(var(--baseline) * 0.75); }
p { margin-bottom: var(--baseline); }

/* Consistent spacing */
.content > * + * {
  margin-top: var(--baseline);
}`}
              </pre>
            </div>
            <div className="space-y-6 bg-gray-50 p-6 rounded">
              <h2 className="text-2xl font-bold mb-6">Article Title</h2>
              <p className="mb-6">This is an example of consistent vertical rhythm. Notice how the spacing between elements creates a harmonious flow down the page.</p>
              <h3 className="text-xl font-semibold mb-4">Section Heading</h3>
              <p className="mb-6">The spacing between different types of elements is proportional and creates a pleasing visual hierarchy.</p>
              <blockquote className="border-l-4 border-blue-500 pl-4 mb-6">
                This blockquote also maintains the rhythm while being visually distinct.
              </blockquote>
              <p>The consistent spacing helps guide the reader's eye through the content.</p>
            </div>
          </div>

          {/* Advanced Text Styling */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Advanced Text Styling</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Text columns */
.text-columns {
  column-count: 2;
  column-gap: 2rem;
  column-rule: 1px solid #e2e8f0;
}

/* Drop caps */
.drop-cap::first-letter {
  float: left;
  font-size: 3em;
  line-height: 0.8;
  padding-right: 0.1em;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(45deg, #4299e1, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Text balance */
.balanced-text {
  text-wrap: balance;
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="sm:columns-2 gap-6 text-gray-600">
                <p className="mb-4">This text is displayed in multiple columns on wider screens. Column layouts can be useful for certain types of content, like magazine-style layouts or lists.</p>
                <p>The gap between columns and optional column rule helps separate the content while maintaining readability.</p>
              </div>
              <p className="text-2xl">
                <span className="float-left text-5xl font-serif mr-2 leading-tight">D</span>
                rop caps are a classic typographic treatment often used at the beginning of articles or book chapters.
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                This text uses a gradient fill effect
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Typography Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use a consistent type scale</li>
          <li>Maintain appropriate line height for readability</li>
          <li>Limit line length to 65-75 characters</li>
          <li>Establish a clear visual hierarchy</li>
          <li>Keep consistent vertical rhythm</li>
          <li>Choose appropriate font combinations</li>
          <li>Consider responsive typography</li>
          <li>Test typography across devices</li>
          <li>Ensure sufficient contrast ratios</li>
          <li>Use proper semantic markup</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Typography; 