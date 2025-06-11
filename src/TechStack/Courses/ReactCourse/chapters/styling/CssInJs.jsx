import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const exampleStyledComponents = `import styled from 'styled-components';

const Button = styled.button\`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
\`;

function App() {
  return <Button>Click me</Button>;
}`;

const exampleEmotion = `/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css\`
  background-color: #e67e22;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d35400;
  }
\`;

function App() {
  return <button css={buttonStyle}>Click me</button>;
}`;

const CssInJs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS-in-JS</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is CSS-in-JS?</h2>
        <p className="text-gray-600 mb-4">
          CSS-in-JS is a styling technique where CSS is composed using JavaScript instead of external stylesheets or inline styles.
          It allows you to write CSS directly inside your JavaScript code, often scoped to components, enabling dynamic styling,
          theming, and better modularity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use CSS-in-JS?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Scoped styles that avoid global CSS conflicts.</li>
          <li>Dynamic styling with access to component props and state.</li>
          <li>Improved maintainability by co-locating styles with components.</li>
          <li>Easy theming and style overrides.</li>
          <li>Enhanced developer experience with auto-prefixing and optimizations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Popular Libraries</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Styled Components:</strong> Uses tagged template literals for styling React components.</li>
          <li><strong>Emotion:</strong> Provides powerful and flexible CSS-in-JS with both styled and css prop APIs.</li>
          <li><strong>JSS:</strong> JavaScript Style Sheets, used in some UI frameworks like Material-UI.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example Using Styled Components</h2>
        <p className="text-gray-600 mb-4">Here is a simple button styled with <code>styled-components</code>:</p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {exampleStyledComponents}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example Using Emotion</h2>
        <p className="text-gray-600 mb-4">Same button implemented using <code>Emotion</code>’s <code>css</code> prop:</p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {exampleEmotion}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How to Get Started</h2>
        <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2">
          <li>Install your preferred library, e.g., <code>npm install styled-components</code> or <code>npm install @emotion/react @emotion/styled</code>.</li>
          <li>Import the library in your component files.</li>
          <li>Write styled components using template literals or CSS objects.</li>
          <li>Use props to create dynamic styles.</li>
          <li>Run your app and enjoy scoped, maintainable CSS.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Keep styles close to the components they style for better maintainability.</li>
          <li>Use themes to manage colors, fonts, and other design tokens globally.</li>
          <li>Avoid overusing inline styles; prefer styled components or css props for consistency.</li>
          <li>Leverage tools like Babel plugins and linters for optimized and error-free styling.</li>
          <li>Write reusable styled components to avoid duplication.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/tailwind"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/material-ui"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default CssInJs;
