import React from 'react';
import { motion } from 'framer-motion';

const Text = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Text Properties</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Formatting</h2>
        <div className="space-y-6">
          {/* Text Color */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Color</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  /* Named colors */
  color: red;

  /* HEX values */
  color: #ff0000;

  /* RGB values */
  color: rgb(255, 0, 0);

  /* HSL values */
  color: hsl(0, 100%, 50%);

  /* With opacity */
  color: rgba(255, 0, 0, 0.5);
}`}
              </pre>
            </div>
            <div className="space-y-2">
              <p className="text-red-500">Red text using Tailwind class</p>
              <p className="text-blue-500">Blue text using Tailwind class</p>
              <p className="text-green-500">Green text using Tailwind class</p>
              <p className="text-opacity-50 text-black">Semi-transparent text</p>
            </div>
          </div>

          {/* Text Alignment */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Alignment</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  text-align: left;      /* Left alignment */
  text-align: right;     /* Right alignment */
  text-align: center;    /* Center alignment */
  text-align: justify;   /* Justified text */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-left bg-blue-50 p-2">Left aligned text</p>
              <p className="text-right bg-blue-50 p-2">Right aligned text</p>
              <p className="text-center bg-blue-50 p-2">Center aligned text</p>
              <p className="text-justify bg-blue-50 p-2">
                Justified text with equal spacing between words. This paragraph demonstrates how justified text looks when it spans multiple lines.
              </p>
            </div>
          </div>

          {/* Text Decoration */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Decoration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  text-decoration: none;           /* No decoration */
  text-decoration: underline;      /* Underlined text */
  text-decoration: overline;       /* Line above text */
  text-decoration: line-through;   /* Strikethrough */

  /* Decoration styles */
  text-decoration-style: solid;
  text-decoration-style: double;
  text-decoration-style: dotted;
  text-decoration-style: dashed;
  text-decoration-style: wavy;

  /* Decoration color */
  text-decoration-color: red;
}`}
              </pre>
            </div>
            <div className="space-y-2">
              <p className="underline">Underlined text</p>
              <p className="overline">Overlined text</p>
              <p className="line-through">Strikethrough text</p>
              <p className="underline decoration-wavy">Wavy underline</p>
              <p className="underline decoration-dotted">Dotted underline</p>
              <p className="underline decoration-double">Double underline</p>
              <p className="underline decoration-red-500">Colored underline</p>
            </div>
          </div>

          {/* Text Transform */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Transform</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  text-transform: none;        /* Original text */
  text-transform: uppercase;   /* ALL CAPS */
  text-transform: lowercase;   /* all lowercase */
  text-transform: capitalize;  /* First Letter Cap */
}`}
              </pre>
            </div>
            <div className="space-y-2">
              <p className="uppercase">uppercase text</p>
              <p className="lowercase">LOWERCASE TEXT</p>
              <p className="capitalize">capitalized text</p>
            </div>
          </div>

          {/* Text Spacing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Spacing</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  /* Letter spacing */
  letter-spacing: 2px;
  letter-spacing: -1px;

  /* Word spacing */
  word-spacing: 4px;

  /* Line height */
  line-height: 1.5;
  line-height: 20px;

  /* Text indent */
  text-indent: 50px;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="tracking-widest bg-blue-50 p-2">Wide letter spacing</p>
              <p className="tracking-tight bg-blue-50 p-2">Tight letter spacing</p>
              <p className="leading-loose bg-blue-50 p-2">
                Text with increased line height. This shows how line height affects readability when text spans multiple lines.
              </p>
              <p className="indent-8 bg-blue-50 p-2">
                This paragraph has an indented first line, which is common in printed text and formal documents.
              </p>
            </div>
          </div>

          {/* Text Shadow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Shadow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`p {
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  /* Multiple shadows */
  text-shadow: 2px 2px red, -2px -2px blue;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white text-shadow-lg">
                Text with shadow
              </p>
              <p className="text-2xl font-bold text-blue-500" style={{ textShadow: '2px 2px red, -2px -2px blue' }}>
                Multiple shadows
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Text Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Maintain sufficient contrast for readability</li>
          <li>Use appropriate line height for comfortable reading</li>
          <li>Consider letter spacing for headings and small text</li>
          <li>Use text-transform carefully to maintain readability</li>
          <li>Ensure text shadows don't impair legibility</li>
          <li>Test text formatting across different screen sizes</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Text; 