import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Jotai = () => {
  const basicAtomExample = `import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`;

  const derivedAtomExample = `import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubledAtom = atom((get) => get(countAtom) * 2);

function DisplayDouble() {
  const [doubled] = useAtom(doubledAtom);
  
  return <p>Doubled Count: {doubled}</p>;
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Jotai</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Jotai?</h2>
        <p className="text-gray-600 mb-4">
          Jotai is a minimalistic and flexible state management library for React. The word "Jotai" means "atom" in Japanese,
          which perfectly represents the library's core concept — managing state in small, atomic units. 
          It provides a simple and intuitive API that makes sharing state between components effortless.
        </p>
        <p className="text-gray-600 mb-4">
          Unlike some state libraries that require a lot of boilerplate, Jotai is built with React hooks and has zero dependencies,
          making it lightweight and easy to integrate.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Atom Usage in Jotai</h2>
        <p className="text-gray-600 mb-4">
          In Jotai, state is stored in atoms. An atom represents a piece of state that components can subscribe to.
          Here's how to create and use a simple counter atom:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {basicAtomExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600">
          This example shows a counter component that uses the <code>useAtom</code> hook to both read and update the state stored in <code>countAtom</code>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Derived State with Atoms</h2>
        <p className="text-gray-600 mb-4">
          Jotai allows creating derived atoms — atoms that compute their value based on other atoms. This is similar to selectors in Recoil.
          For example, you can create a doubled value atom that depends on the count atom:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {derivedAtomExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600">
          Here, <code>doubledAtom</code> automatically recalculates when <code>countAtom</code> changes, and components using it will re-render accordingly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use Jotai?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Minimal and simple API with just atoms and hooks.</li>
          <li>Lightweight with no external dependencies.</li>
          <li>Great for small to medium scale apps or when you want to avoid boilerplate.</li>
          <li>Built with React hooks, so it fits naturally into React apps.</li>
          <li>Supports async atoms for asynchronous state.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Getting Started with Jotai</h2>
        <p className="text-gray-600 mb-4">
          You can install Jotai using npm or yarn:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>npm install jotai</code></pre>
        <p className="text-gray-600 mb-4">
          Then you can start creating atoms and use the <code>useAtom</code> hook in your components.
          There is no need for a provider wrapper like in some other libraries; Jotai works out-of-the-box.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/recoil"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Recoil
        </Link>
        <Link
          to="/react-course"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default Jotai;
