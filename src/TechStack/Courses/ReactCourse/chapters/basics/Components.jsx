import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Components = () => {
  const functionalComponentExample = `// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow Function Component
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// Usage
<Welcome name="John" />`;

  const classComponentExample = `// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Usage
<Welcome name="John" />`;

  const compositionExample = `// Button Component
function Button({ children, onClick, color = 'blue' }) {
  return (
    <button 
      onClick={onClick}
      className={\`bg-\${color}-500 text-white px-4 py-2 rounded\`}
    >
      {children}
    </button>
  );
}

// Card Component using Button
function Card({ title, description }) {
  return (
    <div className="border p-4 rounded">
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={() => console.log('Clicked!')}>
        Learn More
      </Button>
    </div>
  );
}`;

  const pureComponentExample = `// Pure Component
function NumberDisplay(props) {
  return <div>The number is: {props.number}</div>;
}

// Impure Component (Avoid this)
function RandomNumber(props) {
  return <div>Random: {Math.random()}</div>;
}`;

  const fragmentExample = `// Using Fragments
function UserInfo({ user }) {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </>
  );
}

// Long Syntax with Key
function GroceryList() {
  return (
    <React.Fragment>
      <li key="1">Apples</li>
      <li key="2">Bananas</li>
    </React.Fragment>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Components</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Components?</h2>
        <p className="text-gray-600 mb-4">
          Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            Components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Functional Components</h2>
        <p className="text-gray-600 mb-4">
          Functional components are the modern way to write React components. They are simple JavaScript functions that return JSX.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {functionalComponentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Class Components</h2>
        <p className="text-gray-600 mb-4">
          Class components are the traditional way to write React components. While still supported, functional components are now preferred.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {classComponentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Component Composition</h2>
        <p className="text-gray-600 mb-4">
          Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {compositionExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pure Components</h2>
        <p className="text-gray-600 mb-4">
          A pure component always renders the same output for the same props and state. This makes components predictable and easier to debug.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {pureComponentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fragments</h2>
        <p className="text-gray-600 mb-4">
          Fragments let you group a list of children without adding extra nodes to the DOM.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {fragmentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Component Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Keep components focused and single-responsibility</li>
            <li>Use functional components with hooks instead of class components</li>
            <li>Extract reusable logic into custom hooks</li>
            <li>Use TypeScript for better type safety</li>
            <li>Follow naming conventions (PascalCase for components)</li>
            <li>Keep components small and manageable</li>
            <li>Use prop-types or TypeScript for props validation</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use composition over inheritance</li>
          <li>Implement error boundaries for better error handling</li>
          <li>Use React.memo() for performance optimization when needed</li>
          <li>Keep your components pure whenever possible</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/jsx"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: JSX
        </Link>
        <Link
          to="/react-course/props"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Props <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Components;