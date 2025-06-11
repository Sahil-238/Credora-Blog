import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Recoil = () => {
  const basicAtomExample = `import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  default: 0,          // default value (aka initial value)
});`;

  const usageInComponent = `import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from './state';

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;`;

  const selectorExample = `import { selector } from 'recoil';
import { counterState } from './state';

export const doubledCountState = selector({
  key: 'doubledCountState',
  get: ({ get }) => {
    const count = get(counterState);
    return count * 2;
  },
});`;

  const usageWithSelector = `import React from 'react';
import { useRecoilValue } from 'recoil';
import { doubledCountState } from './state';

function DisplayDouble() {
  const doubledCount = useRecoilValue(doubledCountState);

  return <p>Doubled Count: {doubledCount}</p>;
}

export default DisplayDouble;`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Recoil</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Recoil?</h2>
        <p className="text-gray-600 mb-4">
          Recoil is a state management library for React developed by Facebook. It offers a simple and
          flexible way to share state across components with a minimal API surface. Recoil works by
          introducing <strong>atoms</strong> (units of state) and <strong>selectors</strong> (derived state),
          providing a scalable solution that integrates seamlessly with React’s concurrent mode.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>State is shared using atoms, which are like React state but globally accessible.</li>
              <li>Selectors allow you to compute derived state efficiently.</li>
              <li>Supports asynchronous queries and React Suspense integration.</li>
              <li>Optimized for fine-grained re-rendering.</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating an Atom (State Unit)</h2>
        <p className="text-gray-600 mb-4">
          Atoms are the fundamental units of state in Recoil. Think of them like pieces of React state,
          but accessible globally to any component that needs them. Here's an example of creating a simple
          counter atom:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {basicAtomExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Using the Atom in Components</h2>
        <p className="text-gray-600 mb-4">
          You can read and write atom state using Recoil hooks such as <code>useRecoilState</code>, which
          works similarly to React’s <code>useState</code> but with global shared state:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {usageInComponent}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600">
          In this example, the <code>Counter</code> component can both display and update the shared
          counter state.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Selectors: Computing Derived State</h2>
        <p className="text-gray-600 mb-4">
          Sometimes you want to derive state based on other state values. Recoil's selectors let you
          define computed state that updates automatically when its dependencies change. For example,
          doubling the counter value:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {selectorExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600 mb-4">
          You can then use selectors in your components with <code>useRecoilValue</code>:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {usageWithSelector}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Recoil?</h2>
        <p className="text-gray-600 mb-4">
          Recoil shines when you need fine-grained shared state with easy-to-manage derived data.
          It integrates nicely with React’s Suspense and concurrent features and avoids the boilerplate
          often associated with other state management solutions like Redux.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Great for apps needing complex state sharing across many components.</li>
          <li>Allows asynchronous selectors for fetching and caching data.</li>
          <li>Minimal API and very React-friendly.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Getting Started with Recoil</h2>
        <p className="text-gray-600 mb-4">
          To start using Recoil, install it with:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>npm install recoil</code></pre>
        <p className="text-gray-600 mb-4">
          Wrap your app in the <code>RecoilRoot</code> component to provide Recoil state context:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      {/* Your components */}
    </RecoilRoot>
  );
}

export default App;`}</code>
        </pre>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/zustand"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Zustand
        </Link>
        <Link
          to="/react-course/jotai"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Jotai →
        </Link>
      </div>
    </motion.div>
  );
};

export default Recoil;
