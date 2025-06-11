import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Optimization = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Performance Optimization</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Performance Optimization?</h2>
        <p className="text-gray-600 mb-4">
          Performance optimization in React refers to techniques and best practices to make your app faster, more responsive, and efficient. 
          It helps reduce unnecessary re-renders, minimize resource consumption, and improve the user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Optimize React Apps?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Improves app responsiveness and fluidity.</li>
          <li>Reduces unnecessary CPU and memory usage.</li>
          <li>Enhances scalability for larger apps.</li>
          <li>Better user experience on slower devices or networks.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Optimization Techniques</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>
            <strong>React.memo:</strong> Memoizes functional components to avoid unnecessary re-renders when props haven't changed.
          </li>
          <li>
            <strong>useMemo and useCallback:</strong> Memoize expensive calculations and callback functions.
          </li>
          <li>
            <strong>Code Splitting:</strong> Load components lazily using React.lazy and Suspense to reduce initial bundle size.
          </li>
          <li>
            <strong>Virtualization:</strong> Use libraries like react-window or react-virtualized for efficiently rendering large lists.
          </li>
          <li>
            <strong>Avoid Inline Functions & Objects:</strong> Prevents creating new references each render causing child re-renders.
          </li>
          <li>
            <strong>Pure Components:</strong> Class components can use PureComponent for shallow prop/state comparison.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example: Using React.memo</h2>
        <p className="text-gray-600 mb-4">
          Here is a simple example showing how <code>React.memo</code> can prevent unnecessary re-rendering of a child component:
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
  const [other, setOther] = useState(false);

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other</button>
    </div>
  );
}

export default App;
          `}
        </pre>
        <p className="text-gray-600 mb-4">
          In this example, the <code>Child</code> component only re-renders when the <code>count</code> prop changes. Clicking "Toggle Other" won't cause <code>Child</code> to re-render.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Use React Developer Tools to analyze component re-renders.</li>
          <li>Memoize components and functions only when you see performance issues, as premature optimization can add complexity.</li>
          <li>Lazy load components/routes for better initial load times.</li>
          <li>Keep components small and focused for easier memoization and optimization.</li>
          <li>Use virtualization for long lists or heavy UI rendering.</li>
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
          to="/react-course/memo"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default Optimization;
