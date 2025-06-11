import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UncontrolledComponents = () => {
  const uncontrolledInputExample = `
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Input value: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: 
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Uncontrolled Components</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Are Uncontrolled Components?</h2>
        <p className="text-gray-600 mb-4">
          An <strong>uncontrolled component</strong> is a form element that maintains its own internal state.
          Unlike controlled components, React does not directly manage the input's value.
          Instead, you access the input’s value using a <code>ref</code> to interact with the DOM element directly.
        </p>
        <p className="text-gray-600 mb-4">
          This approach is more similar to traditional HTML form behavior, where the browser manages the input state.
          You typically read the value only when you need it, like on form submission.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example: Uncontrolled Input Component</h2>
        <p className="text-gray-600 mb-4">
          Here’s a basic example using a React ref to get the input value when the form is submitted:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {uncontrolledInputExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600 mb-4">
          Explanation:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li><code>useRef</code> creates a reference to the input DOM element.</li>
          <li>The input’s value is not managed by React state; it lives inside the DOM.</li>
          <li>When the form is submitted, <code>handleSubmit</code> reads the value directly from the input using <code>inputRef.current.value</code>.</li>
          <li>This method bypasses React's state, so React doesn't re-render on input changes.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use Uncontrolled Components</h2>
        <p className="text-gray-600 mb-4">
          Uncontrolled components are useful when:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>You want to quickly integrate with non-React code or libraries that manipulate the DOM directly.</li>
          <li>Form complexity is low and you don’t need to respond to input changes instantly.</li>
          <li>You prefer less code for simple forms without validations or formatting during input.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Limitations Compared to Controlled Components</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Less control over the input state and user interactions.</li>
          <li>Difficult to perform instant validation or conditionally disable/enable inputs.</li>
          <li>Harder to synchronize input values with other React state or UI elements.</li>
          <li>Not the recommended pattern for complex React forms.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/controlled-components"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/form-validation"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UncontrolledComponents;
