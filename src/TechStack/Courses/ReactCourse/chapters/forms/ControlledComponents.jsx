import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ControlledComponents = () => {
  const controlledInputExample = `
function ControlledInput() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>
        Name: 
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Your input: {name}</p>
    </div>
  );
}
`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Controlled Components</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Are Controlled Components?</h2>
        <p className="text-gray-600 mb-4">
          In React, a <strong>controlled component</strong> is a form element (like an input, textarea, or select) 
          whose value is controlled by React state. This means React is the “single source of truth” for the input’s value.
          The input's displayed value always reflects the React state, and user changes trigger React state updates.
        </p>
        <p className="text-gray-600 mb-4">
          This approach gives you full control over the form data and makes it easy to validate, format, or manipulate input values before they are displayed or submitted.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example: Controlled Input Component</h2>
        <p className="text-gray-600 mb-4">
          Here's a simple example of a controlled text input where the value is tied to React state:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {controlledInputExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600 mb-4">
          In this example:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li><code>name</code> is the state variable holding the input’s current value.</li>
          <li>The input's <code>value</code> prop is set to <code>name</code>, making it controlled by React.</li>
          <li><code>onChange</code> handler updates the state whenever the user types something new.</li>
          <li>The paragraph below the input shows the current state, updating in real time.</li>
        </ul>
        <p className="text-gray-600">
          Controlled components are the recommended way to handle form inputs in React because they keep your UI and state in sync.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Benefits of Controlled Components</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Instant access to user input data via React state.</li>
          <li>Easier form validation and conditional UI rendering.</li>
          <li>Ability to enforce input formats or restrictions.</li>
          <li>Better control over component behavior and integration with other state logic.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/uncontrolled-components"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default ControlledComponents;
