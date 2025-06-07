import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Zustand = () => {
  const basicStore = `// store.js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));`;

  const componentUsage = `// CounterComponent.jsx
import React from 'react';
import useStore from './store';

function CounterComponent() {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
}

export default CounterComponent;`;

  const middlewareExample = `// store.js with middleware
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  persist(
    devtools((set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    })),
    {
      name: 'counter-storage', // name in localStorage
    }
  )
);`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Zustand</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Zustand?</h2>
        <p className="text-gray-600 mb-4">
          Zustand is a small, fast, and scalable state management library for React. Unlike Redux, it
          doesn't require context providers or reducers. Zustand simplifies global state management by
          using hooks and direct function-based stores.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-800">
            <strong>Quick Facts:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>No boilerplate: just plain functions</li>
              <li>No context provider needed</li>
              <li>Supports middleware like persist and devtools</li>
              <li>TypeScript support out of the box</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating a Store</h2>
        <p className="text-gray-600 mb-4">
          Zustand uses a <code>create</code> function to define a store. This store is just a hook you can use
          anywhere in your React components. Here's a basic counter store:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {basicStore}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Using the Store in a Component</h2>
        <p className="text-gray-600 mb-4">
          To use the store, simply call the hook returned by Zustand. Here's how you can use the
          <code>useStore</code> in a functional component:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {componentUsage}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600 mb-4">
          This setup ensures the component re-renders only when the selected state changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced: Middleware (DevTools & Persistence)</h2>
        <p className="text-gray-600 mb-4">
          Zustand supports middlewares like Redux DevTools and persistent storage. Here's an example
          with both devtools and localStorage support using <code>persist</code>:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {middlewareExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600">
          <strong>Tip:</strong> Middleware can be chained for features like logging, caching, or
          debugging with minimal setup.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use Zustand</h2>
        <p className="text-gray-600 mb-4">
          Zustand is ideal for small-to-medium apps, rapid prototyping, or any project where minimalism
          and speed matter. It’s also great for managing component-level shared state without needing
          context APIs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-medium mb-2">Use Zustand if:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>You want to avoid Redux boilerplate</li>
              <li>You prefer hook-based APIs</li>
              <li>You don’t need complex middleware setups</li>
              <li>You need fast and scalable local state management</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/redux-toolkit"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Redux Toolkit
        </Link>
        <Link
          to="/react-course/recoil"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Recoil →
        </Link>
      </div>
    </motion.div>
  );
};

export default Zustand;
