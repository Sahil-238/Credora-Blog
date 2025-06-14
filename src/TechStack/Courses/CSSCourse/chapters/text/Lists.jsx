import React from 'react';
import { motion } from 'framer-motion';

const Lists = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Lists</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">List Styling</h2>
        <div className="space-y-6">
          {/* List Style Type */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">List Style Type</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Unordered list markers */
ul {
  list-style-type: disc;      /* Default bullet */
  list-style-type: circle;    /* Circle bullet */
  list-style-type: square;    /* Square bullet */
  list-style-type: none;      /* No bullet */
}

/* Ordered list markers */
ol {
  list-style-type: decimal;         /* 1, 2, 3 */
  list-style-type: decimal-leading-zero;  /* 01, 02, 03 */
  list-style-type: lower-alpha;    /* a, b, c */
  list-style-type: upper-alpha;    /* A, B, C */
  list-style-type: lower-roman;    /* i, ii, iii */
  list-style-type: upper-roman;    /* I, II, III */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Disc bullet point</li>
                  <li>Default unordered list</li>
                  <li>Basic bullet style</li>
                </ul>
                <ul className="list-circle ml-5 space-y-2">
                  <li>Circle bullet point</li>
                  <li>Hollow circle marker</li>
                  <li>Alternative style</li>
                </ul>
                <ul className="list-square ml-5 space-y-2">
                  <li>Square bullet point</li>
                  <li>Geometric marker</li>
                  <li>Modern look</li>
                </ul>
              </div>
              <div className="space-y-6">
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Decimal numbers</li>
                  <li>Standard ordered list</li>
                  <li>Sequential order</li>
                </ol>
                <ol className="list-[lower-alpha] ml-5 space-y-2">
                  <li>Lowercase letters</li>
                  <li>Alphabetical order</li>
                  <li>Alternative style</li>
                </ol>
                <ol className="list-[upper-roman] ml-5 space-y-2">
                  <li>Upper Roman numerals</li>
                  <li>Classical style</li>
                  <li>Formal look</li>
                </ol>
              </div>
            </div>
          </div>

          {/* List Style Position */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">List Style Position</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`ul {
  list-style-position: outside;  /* Default, marker outside text block */
  list-style-position: inside;   /* Marker inside text block */
}

/* With padding for better alignment */
ul {
  list-style-position: outside;
  padding-left: 1.5em;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">Outside (default):</p>
                <ul className="list-disc ml-5 space-y-2 bg-blue-50 p-4">
                  <li>Marker outside the text block</li>
                  <li>Text wraps under the content area</li>
                  <li>More traditional look</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Inside:</p>
                <ul className="list-disc list-inside space-y-2 bg-pink-50 p-4">
                  <li>Marker inside the text block</li>
                  <li>Text wraps from the margin</li>
                  <li>Compact appearance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom List Markers */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Custom List Markers</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Image as bullet */
ul {
  list-style-image: url('bullet.png');
}

/* Modern approach using ::marker */
li::marker {
  content: '👉';  /* Emoji */
  color: blue;    /* Marker color */
  font-size: 1.2em;  /* Marker size */
}

/* Custom counter style */
ol {
  counter-reset: custom-counter;
}

li {
  counter-increment: custom-counter;
}

li::before {
  content: counter(custom-counter) ") ";
  color: blue;
  font-weight: bold;
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">→</span>
                  <span>Custom arrow marker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Styled bullet point</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Checkmark as marker</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">01.</span>
                  <span>Custom numbered list</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">02.</span>
                  <span>With styled numbers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">03.</span>
                  <span>And consistent spacing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Nested Lists */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Nested Lists</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Nested list styles */
ul ul {
  list-style-type: circle;
}

ul ul ul {
  list-style-type: square;
}

/* Spacing for nested lists */
li > ul {
  margin-top: 0.5em;
  margin-left: 2em;
}`}
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <ul className="list-disc ml-5 space-y-4">
                <li>First level
                  <ul className="list-circle ml-5 mt-2 space-y-2">
                    <li>Second level
                      <ul className="list-square ml-5 mt-2 space-y-2">
                        <li>Third level</li>
                        <li>Third level</li>
                      </ul>
                    </li>
                    <li>Second level</li>
                  </ul>
                </li>
                <li>First level
                  <ul className="list-circle ml-5 mt-2 space-y-2">
                    <li>Second level</li>
                    <li>Second level</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">List Styling Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose appropriate list styles for content type</li>
          <li>Maintain consistent spacing in lists</li>
          <li>Use semantic HTML (ul/ol) for lists</li>
          <li>Consider mobile viewing when styling lists</li>
          <li>Ensure sufficient contrast for custom markers</li>
          <li>Use appropriate indentation for nested lists</li>
          <li>Keep custom markers simple and recognizable</li>
          <li>Test list styles across browsers</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Lists; 