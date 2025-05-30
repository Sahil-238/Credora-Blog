import React from 'react';
import { motion } from 'framer-motion';

const Whitespace = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Whitespace</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Whitespace Handling</h2>
        <div className="space-y-6">
          {/* White-space Property */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">White-space Property</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* White-space values */
.text {
  white-space: normal;     /* Default, wraps text */
  white-space: nowrap;     /* No wrapping */
  white-space: pre;        /* Preserves whitespace */
  white-space: pre-wrap;   /* Preserves + wraps */
  white-space: pre-line;   /* Wraps, collapses spaces */
  white-space: break-spaces; /* Like pre-wrap but preserves spaces */
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">normal:</p>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="whitespace-normal">This   is   normal   whitespace.
                    Multiple spaces are collapsed.
                    Line breaks are converted to spaces.</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">nowrap:</p>
                  <div className="p-4 bg-gray-50 rounded overflow-x-auto">
                    <p className="whitespace-nowrap">This text will not wrap to the next line. It will continue on the same line until it reaches the end.</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">pre:</p>
                  <div className="p-4 bg-gray-50 rounded overflow-x-auto">
                    <p className="whitespace-pre">This    preserves    whitespace
and line breaks
exactly    as    written.</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">pre-wrap:</p>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="whitespace-pre-wrap">This    preserves    whitespace
and line breaks
but    wraps    text    when    needed.</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">pre-line:</p>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="whitespace-pre-line">This    collapses    spaces
but preserves
line    breaks    and    wraps    text.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Word Break */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Word Break</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Word break values */
.text {
  word-break: normal;      /* Default */
  word-break: break-all;   /* Break at any character */
  word-break: keep-all;    /* No breaks for CJK text */
  word-break: break-word;  /* Deprecated, use overflow-wrap */
}

/* Overflow wrap (word-wrap) */
.text {
  overflow-wrap: normal;     /* Default */
  overflow-wrap: break-word; /* Break long words */
  overflow-wrap: anywhere;   /* Break at any point */
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">break-all:</p>
                <div className="p-4 bg-gray-50 rounded w-40">
                  <p className="break-all">ThisIsAVeryLongWordThatWillBreakAtAnyCharacter</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">break-word:</p>
                <div className="p-4 bg-gray-50 rounded w-40">
                  <p className="break-words">ThisIsAVeryLongWordThatWillBreakBetweenWords</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">normal:</p>
                <div className="p-4 bg-gray-50 rounded w-40 overflow-x-auto">
                  <p className="break-normal">ThisIsAVeryLongWordThatWillNotBreak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Wrapping */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Wrapping</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Modern text wrapping */
.text {
  text-wrap: wrap;        /* Default */
  text-wrap: nowrap;      /* No wrapping */
  text-wrap: balance;     /* Balanced wrapping */
  text-wrap: pretty;      /* Optimized wrapping */
}

/* Hyphenation */
.text {
  hyphens: none;         /* No hyphenation */
  hyphens: auto;         /* Automatic hyphenation */
  hyphens: manual;       /* Only at &shy; or - */
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Balanced text wrapping:</p>
                <div className="p-4 bg-gray-50 rounded max-w-sm">
                  <p className="text-balance">This text demonstrates balanced line wrapping, which attempts to make all lines similar in length for better visual appearance.</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Auto hyphenation:</p>
                <div className="p-4 bg-gray-50 rounded max-w-[200px]">
                  <p className="hyphens-auto" lang="en">This demonstrates automatic hyphenation for long words like internationalization and characteristics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Overflow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Overflow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Text overflow options */
.text {
  overflow: hidden;
  text-overflow: clip;      /* Cut off text */
  text-overflow: ellipsis;  /* Show ... */
}

/* Multi-line ellipsis */
.text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}
              </pre>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Single line ellipsis:</p>
                <div className="p-4 bg-gray-50 rounded">
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    This is a very long text that will be truncated with an ellipsis when it reaches the end of its container.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Multi-line ellipsis (2 lines):</p>
                <div className="p-4 bg-gray-50 rounded">
                  <p className="line-clamp-2">
                    This is a longer text that will be truncated after two lines. It demonstrates how to handle text that spans multiple lines while still showing an ellipsis at the end. The text continues but will not be shown beyond the second line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Whitespace Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose appropriate whitespace handling for content type</li>
          <li>Use overflow-wrap for long words</li>
          <li>Consider text-wrap: balance for headings</li>
          <li>Enable hyphenation for narrow columns</li>
          <li>Use ellipsis for truncated content</li>
          <li>Maintain consistent spacing patterns</li>
          <li>Test wrapping with various content lengths</li>
          <li>Consider RTL language support</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Whitespace; 