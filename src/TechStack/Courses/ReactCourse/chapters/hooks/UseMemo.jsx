import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Expensive calculation simulation
const calculateFactorial = (n) => {
  if (n < 0) return -1;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    // Artificial delay to simulate expensive calculation
    for (let j = 0; j < 1000000; j++) {}
  }
  return result;
};

// Complex object calculation simulation
const calculateComplexData = (items, filter) => {
  console.log('Calculating complex data...');
  return items
    .filter(item => item.value > filter)
    .map(item => ({
      ...item,
      doubled: item.value * 2,
      squared: item.value * item.value
    }))
    .sort((a, b) => b.squared - a.squared);
};

const UseMemo = () => {
  // Example 1: Factorial Calculator
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // Without useMemo - recalculates on every render
  const factorialWithoutMemo = calculateFactorial(number);

  // With useMemo - only recalculates when number changes
  const factorialWithMemo = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  // Example 2: Complex Data Processing
  const [items] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 }
  ]);
  const [filter, setFilter] = useState(25);

  // Memoized complex data calculation
  const processedData = useMemo(() => {
    return calculateComplexData(items, filter);
  }, [items, filter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useMemo Hook</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useMemo?</h2>
        <p className="text-gray-600 mb-4">
          useMemo is a Hook that memoizes expensive computations and returns a cached value. The computation only runs when one of its dependencies changes.
          This is useful for:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Optimizing expensive calculations</li>
          <li>Preventing unnecessary re-renders</li>
          <li>Maintaining referential equality for complex objects</li>
        </ul>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
          <p className="text-pink-700">
            <strong>Best Practice:</strong> Only use useMemo for computationally expensive operations or when you need to maintain referential equality.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Factorial Calculator Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                className="px-4 py-2 border rounded w-24"
                min="0"
                max="10"
              />
              <button
                onClick={() => setCount(c => c + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Increment Count: {count}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Without useMemo</h3>
                <p className="text-gray-600">
                  Factorial: {factorialWithoutMemo}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">With useMemo</h3>
                <p className="text-gray-600">
                  Factorial: {factorialWithMemo}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`// Without useMemo
const factorial = calculateFactorial(number);

// With useMemo
const factorial = useMemo(() => {
  return calculateFactorial(number);
}, [number]); // Only recalculate when number changes`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Complex Data Processing Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter Value: {filter}
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={filter}
                onChange={(e) => setFilter(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Processed Data</h3>
              <ul className="space-y-2">
                {processedData.map(item => (
                  <li key={item.id} className="bg-gray-50 p-2 rounded">
                    Value: {item.value}, Doubled: {item.doubled}, Squared: {item.squared}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const processedData = useMemo(() => {
  return items
    .filter(item => item.value > filter)
    .map(item => ({
      ...item,
      doubled: item.value * 2,
      squared: item.value * item.value
    }))
    .sort((a, b) => b.squared - a.squared);
}, [items, filter]); // Recalculate when items or filter changes`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use useMemo</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Use when:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>Computation is expensive</li>
              <li>Result is used in child component props</li>
              <li>Value is used in other hooks' dependencies</li>
              <li>Need to maintain referential equality</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>❌ Don't use when:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>Computation is simple</li>
              <li>Value is only used for rendering</li>
              <li>Value changes frequently</li>
              <li>Memoization cost exceeds computation cost</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Patterns</h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">
              <strong>⚠️ Common Use Cases:</strong>
            </p>
            <div className="bg-yellow-100 p-2 rounded mt-2 text-sm font-mono">
              {`// Expensive computation
const result = useMemo(() => expensiveOperation(a, b), [a, b]);

// Complex object for child props
const memoizedValue = useMemo(() => ({
  complex: 'object',
  that: 'should',
  not: 'change',
  unnecessarily: '!'
}), []);

// Derived state
const filteredList = useMemo(() => {
  return items.filter(item => item.type === selectedType);
}, [items, selectedType]);`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Profile before optimizing</li>
          <li>Consider the cost of memoization</li>
          <li>Keep dependency arrays minimal</li>
          <li>Use for expensive computations</li>
          <li>Combine with useCallback for optimal performance</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/useCallback"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/custom-hooks"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UseMemo;