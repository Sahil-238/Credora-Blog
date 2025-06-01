import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HooksIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Hooks Introduction</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Hooks?</h2>
        <p className="text-gray-600 mb-4">
          Hooks are functions introduced in React 16.8 that let you use state and other React features in functional components.
          Before hooks, only class components could manage state and lifecycle methods.
        </p>
        <p className="text-gray-600">
          With Hooks, you can now write cleaner, more readable, and reusable functional components without the need for class-based syntax.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Hooks?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Eliminates the need for class components.</li>
          <li>Allows logic to be reused across components using custom hooks.</li>
          <li>Makes code easier to read and test.</li>
          <li>Improves separation of concerns in components.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Rules of Hooks</h2>
        <ul className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Only call Hooks at the top level of your component or your own custom hooks.</li>
          <li>Only call Hooks from React function components or custom hooks (not regular JavaScript functions).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Types of Hooks</h2>
        <p className="text-gray-600 mb-2">React provides several built-in hooks, including:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><code>useState</code> – to manage state in functional components</li>
          <li><code>useEffect</code> – to perform side effects like data fetching</li>
          <li><code>useContext</code> – to access context values</li>
          <li><code>useRef</code> – to access DOM elements or persist values</li>
          <li><code>useMemo</code> and <code>useCallback</code> – for performance optimizations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Simple Hook Example</h2>
        <p className="text-gray-600 mb-4">Here’s a basic example using the <code>useState</code> hook:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
          {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`}
        </div>
        <p className="text-gray-600 mt-4">
          In this example, <code>useState</code> returns an array with the current state value (`count`) and a function to update it (`setCount`).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
        <p className="text-gray-600">
          Hooks are a game-changer in React development. They make components more concise, testable, and reusable.
          Throughout this course, we’ll dive deeper into each hook and understand when and how to use them effectively.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/useState"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default HooksIntro;
