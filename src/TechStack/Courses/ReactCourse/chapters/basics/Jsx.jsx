import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Jsx = () => {
  const basicJsxExample = `// JSX Example
const element = (
  <div className="greeting">
    <h1>Hello, {name}!</h1>
    <p>Welcome to React</p>
  </div>
);`;

  const jsxVsNoJsxExample = `// With JSX
const element = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);

// Without JSX (Raw React)
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);`;

  const jsxExpressionExample = `const name = 'John';
const age = 25;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Age: {age}</p>
    <p>2 + 2 = {2 + 2}</p>
    <p>Name: {formatName({firstName: 'John', lastName: 'Doe'})}</p>
  </div>
);`;

  const jsxAttributesExample = `// String Literals
const element = <div className="container">Hello</div>;

// JavaScript Expressions
const buttonText = "Click Me";
const element = <button className={isActive ? 'active' : 'inactive'}>{buttonText}</button>;

// Spread Attributes
const props = { firstName: 'John', lastName: 'Doe' };
const element = <Greeting {...props} />;`;

  const jsxChildrenExample = `// Single Line
const element = <img src={user.avatarUrl} />;

// Multiple Lines
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// Children with JavaScript Expressions
const todos = ['Learn JSX', 'Practice React', 'Build Projects'];
const element = (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
  </ul>
);`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">JSX in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is JSX?</h2>
        <p className="text-gray-600 mb-4">
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It makes React code more readable and writing templates more intuitive.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            JSX is not required for using React, but it makes the code more readable and writing templates more intuitive.
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicJsxExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">JSX vs Raw React</h2>
        <p className="text-gray-600 mb-4">
          Under the hood, JSX is converted to regular JavaScript. Each JSX element is converted to a React.createElement() call.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {jsxVsNoJsxExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Embedding Expressions in JSX</h2>
        <p className="text-gray-600 mb-4">
          You can embed any valid JavaScript expression inside JSX by wrapping it in curly braces {}.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {jsxExpressionExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">JSX Attributes</h2>
        <p className="text-gray-600 mb-4">
          You can use both string literals and JavaScript expressions as JSX attributes.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
          <p className="text-yellow-800">
            Note: React DOM uses camelCase property naming convention. For example, class becomes className in JSX, and tabindex becomes tabIndex.
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {jsxAttributesExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Children in JSX</h2>
        <p className="text-gray-600 mb-4">
          JSX elements can contain children, just like HTML elements. This allows you to nest components and elements.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {jsxChildrenExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">JSX Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Always close all tags (including self-closing tags like <code className="bg-gray-100 px-2 py-1 rounded">{'<img />'}</code>)</li>
            <li>Use className instead of class for CSS classes</li>
            <li>Wrap multi-line JSX in parentheses to avoid automatic semicolon insertion</li>
            <li>Use camelCase for event handlers and other props (onClick, onSubmit, etc.)</li>
            <li>Keep JSX expressions simple, extract complex logic into separate functions</li>
            <li>Use meaningful component and variable names</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use fragments (<code className="bg-blue-100 px-2 py-1 rounded">{'<></>'}</code>) to avoid unnecessary div wrappers</li>
          <li>Install ESLint and the React plugin for better JSX code quality</li>
          <li>Use prettier for consistent JSX formatting</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/create-react-app"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: Create React App
        </Link>
        <Link
          to="/react-course/components"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Components <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Jsx;