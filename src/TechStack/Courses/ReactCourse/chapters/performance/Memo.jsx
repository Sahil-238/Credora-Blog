import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Memo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React.memo</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is React.memo?</h2>
        <p className="text-gray-600 mb-4">
          <code>React.memo</code> is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders by performing a shallow comparison of the component’s props. 
          If the props haven’t changed, React skips rendering the component and reuses the last rendered output.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why use React.memo?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Optimizes functional components that render often with unchanged props.</li>
          <li>Improves performance by reducing unnecessary DOM updates.</li>
          <li>Useful when passing components as children or in large lists.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How React.memo works</h2>
        <p className="text-gray-600 mb-4">
          React.memo performs a shallow comparison of the previous and new props. If all props are equal (===), the component will not re-render.
          For complex prop comparisons, you can provide a custom comparison function as the second argument.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Example</h2>
        <p className="text-gray-600 mb-4">
          Here is a simple example demonstrating how React.memo prevents unnecessary re-renders:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto mb-4">
{`
import React, { useState } from 'react';

const Child = React.memo(({ count }) => {
  console.log('Child rendered');
  return <div>Count: {count}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setToggle(!toggle)}>Toggle State</button>
    </div>
  );
}

export default App;
`}
        </pre>
        <p className="text-gray-600 mb-4">
          In this example:
          <ul className="list-disc list-inside ml-6">
            <li>The <code>Child</code> component only re-renders when the <code>count</code> prop changes.</li>
            <li>Clicking "Toggle State" does not cause the <code>Child</code> to re-render because its props remain the same.</li>
            <li>You can see "Child rendered" logged only when necessary.</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Using a custom comparison function</h2>
        <p className="text-gray-600 mb-4">
          By default, React.memo uses a shallow comparison. You can provide a custom <code>areEqual</code> function to control how props are compared:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto mb-4">
{`
const Child = React.memo(
  ({ user }) => {
    console.log('Child rendered');
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // return true to skip re-render
    return prevProps.user.id === nextProps.user.id;
  }
);
`}
        </pre>
        <p className="text-gray-600 mb-4">
          In this example, the component only re-renders if the <code>user.id</code> changes, ignoring other property changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When NOT to use React.memo</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>For components that rarely re-render or have simple render logic.</li>
          <li>When prop comparison is expensive and outweighs the rendering cost.</li>
          <li>If your props are frequently new objects or functions, causing memoization to fail.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/optimization"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/lazy-loading"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default Memo;
