import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UseState = () => {
  // Interactive counter example
  const [count, setCount] = useState(0);
  
  // Interactive form example
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useState Hook</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useState?</h2>
        <p className="text-gray-600 mb-4">
          The useState hook is your primary tool for managing state in functional components. 
          It returns an array with two elements:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>The current state value</li>
          <li>A function to update that value</li>
        </ul>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
          <p className="text-pink-700">
            <strong>Best Practice:</strong> Always use the setter function from useState to update state, 
            never modify state directly.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Counter Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <p className="text-gray-600 mb-4">Count: {count}</p>
          <div className="space-x-2">
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Decrease
            </button>
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Increase
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const [count, setCount] = useState(0);

// Using previous state
const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Managing Object State</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </form>
          <div className="mt-4">
            <p className="text-gray-600">Current State:</p>
            <pre className="bg-gray-100 p-2 rounded mt-2">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const [formData, setFormData] = useState({
  name: '',
  email: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Points to Remember</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Always use the setter function to update state</li>
          <li>Use the functional update form (prev => ...) when new state depends on previous state</li>
          <li>State updates are asynchronous</li>
          <li>For objects and arrays, make sure to spread the previous state when updating</li>
          <li>Initialize state with useState only once during component mount</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Pitfalls</h2>
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>❌ Don't modify state directly:</strong>
            </p>
            <pre className="bg-red-100 p-2 rounded mt-2 text-sm">
              {`// Wrong
formData.name = 'John';  // This won't trigger re-render

// Correct
setFormData(prev => ({ ...prev, name: 'John' }));`}
            </pre>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Use functional updates for state that depends on previous value:</strong>
            </p>
            <pre className="bg-green-100 p-2 rounded mt-2 text-sm">
              {`// Wrong
setCount(count + 1);  // May lead to race conditions

// Correct
setCount(prev => prev + 1);  // Always uses latest state`}
            </pre>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/hooks-intro"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/useEffect"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UseState;