import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example 1: Basic Functional Component
const Greeting = ({ name, role = 'User' }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-medium">Hello, {name}!</h3>
      <p className="text-gray-600">Role: {role}</p>
    </div>
  );
};

// Example 2: Component with Hooks
const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = 'React App';
    };
  }, [count]);

  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => c - step);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-gray-700">
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="ml-2 px-2 py-1 border rounded w-20"
            min="1"
          />
        </label>
      </div>
      <div className="text-4xl font-mono text-center">{count}</div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

// Example 3: Component with Multiple Hooks
const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'light'
  });

  const [isEditing, setIsEditing] = useState(false);

  // Memoized formatter
  const formattedEmail = useMemo(() => {
    return user.email.toLowerCase();
  }, [user.email]);

  // Memoized handler
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsEditing(false);
    // Save changes...
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow space-y-4">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email:</strong> {formattedEmail}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

const FunctionalComponents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Functional Components</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Functional Components?</h2>
        <p className="text-gray-600 mb-4">
          Functional components are JavaScript functions that accept props and return React elements.
          They are the modern way to write React components, especially when combined with hooks.
          Benefits include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Simpler syntax and easier to understand</li>
          <li>No this keyword or binding required</li>
          <li>Better performance in some cases</li>
          <li>Easier to test and debug</li>
          <li>Better type inference with TypeScript</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Start with functional components by default and only use class
            components when you specifically need a feature that's only available in classes (like error boundaries).
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 1: Basic Component</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Simple Greeting Component</h3>
          <div className="space-y-4">
            <Greeting name="John" role="Admin" />
            <Greeting name="Jane" />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const Greeting = ({ name, role = 'User' }) => {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>Role: {role}</p>
    </div>
  );
};`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 2: Hooks Usage</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Counter with Hooks</h3>
          <Counter />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
    return () => {
      document.title = 'React App';
    };
  }, [count]);

  return (
    <div>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <div>{count}</div>
      <button onClick={() => setCount(c => c + step)}>
        Increment
      </button>
    </div>
  );
};`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 3: Advanced Patterns</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">User Profile with Multiple Hooks</h3>
          <UserProfile />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com'
  });
  const [isEditing, setIsEditing] = useState(false);

  const formattedEmail = useMemo(() => {
    return user.email.toLowerCase();
  }, [user.email]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsEditing(false);
  }, []);

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
        </form>
      ) : (
        <div>
          {/* Display mode */}
        </div>
      )}
    </div>
  );
};`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Do:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>Keep components focused and small</li>
              <li>Use destructuring for props</li>
              <li>Provide default values for optional props</li>
              <li>Use TypeScript for better type safety</li>
              <li>Memoize callbacks and computed values</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>❌ Don't:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>Declare components inside other components</li>
              <li>Use hooks conditionally</li>
              <li>Mutate props</li>
              <li>Over-optimize with useMemo/useCallback</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Patterns</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Controlled vs Uncontrolled components</li>
          <li>Container/Presentational pattern</li>
          <li>Custom hooks for reusable logic</li>
          <li>Composition over inheritance</li>
          <li>Render props and higher-order components</li>
          <li>Context for state management</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/class-components"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Class Components
        </Link>
        <Link
          to="/react-course/composition"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Component Composition →
        </Link>
      </div>
    </motion.div>
  );
};

export default FunctionalComponents;