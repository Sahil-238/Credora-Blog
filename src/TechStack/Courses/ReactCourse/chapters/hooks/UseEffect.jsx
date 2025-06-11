import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UseEffect = () => {
  // Example 1: Basic useEffect
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Example 2: Data Fetching
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array = run once on mount

  // Example 3: Cleanup
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useEffect Hook</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useEffect?</h2>
        <p className="text-gray-600 mb-4">
          useEffect is a Hook that lets you perform side effects in function components. Side effects include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Data fetching</li>
          <li>Subscriptions</li>
          <li>DOM manipulation</li>
          <li>Event listeners</li>
          <li>Timer functions</li>
        </ul>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
          <p className="text-pink-700">
            <strong>Best Practice:</strong> Always include all dependencies in the dependency array that are used inside the effect.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Example: Document Title</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <p className="text-gray-600 mb-4">Current count: {count}</p>
          <button 
            onClick={() => setCount(c => c + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <p className="text-gray-500 mt-2 text-sm">
            Check your browser tab title - it updates with the count!
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);  // Only re-run when count changes`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Fetching Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : user ? (
            <div>
              <h3 className="font-semibold mb-2">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          ) : null}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError('Failed to fetch user');
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, []);  // Empty array = run once on mount`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cleanup Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <button
            onClick={() => setIsVisible(v => !v)}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mb-4"
          >
            Toggle Component
          </button>
          {isVisible && (
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-600">
                This component cleans up after itself when unmounted!
              </p>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`useEffect(() => {
  // Setup
  const subscription = someAPI.subscribe();

  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, []);  // Empty array = run on mount, cleanup on unmount`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Patterns</h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">
              <strong>⚠️ Run once on mount:</strong>
            </p>
            <pre className="bg-yellow-100 p-2 rounded mt-2 text-sm">
              {`useEffect(() => {
  // Your code here
}, []);  // Empty dependency array`}
            </pre>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Run on specific prop/state changes:</strong>
            </p>
            <pre className="bg-green-100 p-2 rounded mt-2 text-sm">
              {`useEffect(() => {
  // Your code here
}, [prop1, prop2]);  // Only run if these values change`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-blue-700">
              <strong>🔄 Run on every render:</strong>
            </p>
            <pre className="bg-blue-100 p-2 rounded mt-2 text-sm">
              {`useEffect(() => {
  // Your code here
});  // No dependency array`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Always clean up side effects (subscriptions, timers, listeners)</li>
          <li>Include all dependencies used inside the effect</li>
          <li>Keep effects focused on one concern</li>
          <li>Use multiple effects to separate concerns</li>
          <li>Avoid infinite loops by properly setting dependencies</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/useState"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/useContext"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UseEffect;