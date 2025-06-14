import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const tailwindExample = `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`;

const responsiveExample = `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-gray-200 p-4">Item 1</div>
  <div className="bg-gray-300 p-4">Item 2</div>
  <div className="bg-gray-400 p-4">Item 3</div>
  <div className="bg-gray-500 p-4">Item 4</div>
</div>`;

const Tailwind = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tailwind CSS</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Tailwind CSS?</h2>
        <p className="text-gray-600 mb-4">
          Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. Unlike traditional CSS frameworks that come with predefined components, Tailwind focuses on giving you the building blocks to create unique designs quickly without leaving your HTML.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use Tailwind CSS?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Highly customizable with configuration files.</li>
          <li>Encourages consistency with design tokens like colors, spacing, typography.</li>
          <li>Responsive design utilities built-in.</li>
          <li>Eliminates the need to write custom CSS for many cases.</li>
          <li>Improves productivity by keeping styles inline and close to markup.</li>
          <li>Small final CSS size with tree-shaking using PurgeCSS.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Example</h2>
        <p className="text-gray-600 mb-4">
          Here is a simple button styled using Tailwind CSS utility classes:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {tailwindExample}
        </SyntaxHighlighter>
        <p className="text-gray-600">
          This button uses utilities to set background color, hover state, text styling, padding, and rounded corners.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Design Example</h2>
        <p className="text-gray-600 mb-4">
          Tailwind makes responsive design easy with breakpoint prefixes. Here's an example of a responsive grid layout:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {responsiveExample}
        </SyntaxHighlighter>
        <p className="text-gray-600">
          This grid will have one column on small screens, two columns on small to medium screens, and four columns on large screens and above.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How to Set Up Tailwind CSS</h2>
        <p className="text-gray-600 mb-4">
          To install Tailwind in a React project:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Install Tailwind via npm: <code>npm install -D tailwindcss postcss autoprefixer</code></li>
          <li>Initialize Tailwind config: <code>npx tailwindcss init -p</code></li>
          <li>Configure your <code>tailwind.config.js</code> to include your source files.</li>
          <li>Import Tailwind’s base, components, and utilities in your main CSS file:</li>
        </ul>
        <SyntaxHighlighter language="css" style={atomDark} className="rounded-lg">
          {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        </SyntaxHighlighter>
        <p className="text-gray-600">
          This setup lets you use all Tailwind’s utility classes in your React components.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Use Tailwind’s configuration to customize colors, fonts, and breakpoints to match your design system.</li>
          <li>Combine utility classes logically for readability.</li>
          <li>Use JIT mode (Just-in-Time compiler) to generate styles on demand for faster builds.</li>
          <li>Leverage plugins for additional utilities like forms, typography, or animations.</li>
          <li>Use responsive prefixes like <code>sm:</code>, <code>md:</code>, <code>lg:</code> to create adaptive layouts.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/styled-components"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/css-in-js"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default Tailwind;
