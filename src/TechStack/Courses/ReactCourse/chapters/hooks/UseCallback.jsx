import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Expensive calculation component
const ExpensiveCalculation = memo(({ onCalculate, value }) => {
  console.log('ExpensiveCalculation rendered');
  
  return (
    <div className="p-4 bg-gray-50 rounded">
      <p className="text-gray-600 mb-2">Value: {value}</p>
      <button
        onClick={() => onCalculate(value)}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Calculate
      </button>
    </div>
  );
});

// Item list component
const ItemList = memo(({ items, onItemClick }) => {
  console.log('ItemList rendered');
  
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(42);
  const [items] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  // Without useCallback - this function is recreated on every render
  const handleCalculateWithoutCallback = (val) => {
    console.log('Calculating...', val);
    // Expensive calculation simulation
    return val * 2;
  };

  // With useCallback - this function is memoized
  const handleCalculateWithCallback = useCallback((val) => {
    console.log('Calculating...', val);
    // Expensive calculation simulation
    return val * 2;
  }, []); // Empty deps array means function is created once and reused

  // Example with dependencies
  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
    setCount(c => c + 1);
  }, []); // If we needed count in the callback, we'd add it to deps

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useCallback Hook</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useCallback?</h2>
        <p className="text-gray-600 mb-4">
          useCallback is a Hook that returns a memoized version of a callback function. The memoized function only changes if one of its dependencies changes.
          This is useful when:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Passing callbacks to optimized child components that rely on reference equality</li>
          <li>Preventing unnecessary re-renders in child components</li>
          <li>Memoizing functions that are used in useEffect dependencies</li>
        </ul>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
          <p className="text-pink-700">
            <strong>Best Practice:</strong> Only use useCallback when passing callbacks to optimized components that rely on reference equality to prevent unnecessary renders.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <p className="text-gray-600">Count: {count}</p>
            <div className="space-x-2">
              <button
                onClick={() => setCount(c => c + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Increment Count
              </button>
              <button
                onClick={() => setValue(v => v + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Change Value
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Without useCallback</h3>
                <ExpensiveCalculation
                  value={value}
                  onCalculate={handleCalculateWithoutCallback}
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">With useCallback</h3>
                <ExpensiveCalculation
                  value={value}
                  onCalculate={handleCalculateWithCallback}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`// Without useCallback
const handleCalculate = (val) => {
  console.log('Calculating...', val);
  return val * 2;
};

// With useCallback
const handleCalculate = useCallback((val) => {
  console.log('Calculating...', val);
  return val * 2;
}, []); // Empty deps array = function never changes`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Real-World Example: Item List</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <p className="text-gray-600 mb-4">Items clicked: {count}</p>
          <ItemList items={items} onItemClick={handleItemClick} />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const ItemList = memo(({ items, onItemClick }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
});

const handleItemClick = useCallback((id) => {
  console.log('Item clicked:', id);
  setCount(c => c + 1);
}, []); // Add dependencies if needed`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use useCallback</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Use when:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>Passing callbacks to memoized child components</li>
              <li>Callbacks are used in useEffect dependencies</li>
              <li>Callbacks are expensive to create</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>❌ Don't use when:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>Passing callbacks to regular components</li>
              <li>The function is only used in render</li>
              <li>The function is simple and cheap to create</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Patterns</h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">
              <strong>⚠️ Dependencies Matter:</strong>
            </p>
            <div className="bg-yellow-100 p-2 rounded mt-2 text-sm font-mono">
              {`// Recreated when a or b changes
const callback = useCallback(() => {
  console.log(a + b);
}, [a, b]);

// Never changes
const callback = useCallback(() => {
  console.log('Hello');
}, []);

// Changes on every render (usually a mistake)
const callback = useCallback(() => {
  console.log('Hello');
});`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Always define dependencies array</li>
          <li>Use with memo() for optimal performance</li>
          <li>Consider if you really need memoization</li>
          <li>Keep dependencies array as small as possible</li>
          <li>Use ESLint hooks plugin to catch mistakes</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/useReducer"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/useMemo"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UseCallback;