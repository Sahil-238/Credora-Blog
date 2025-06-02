import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiRefreshCw, FiDatabase, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BasicHooks = () => {
  const useStateExample = `// useState Hook
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// useState with object
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        name="age"
        value={user.age}
        onChange={handleChange}
      />
    </form>
  );
}`;

  const useEffectExample = `// useEffect Hook
import React, { useState, useEffect } from 'react';

// Basic effect
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return <div>Seconds: {seconds}</div>;
}

// Data fetching
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          \`/api/users/\${userId}\`
        );
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Dependency array with userId

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`;

  const useRefExample = `// useRef Hook
import React, { useRef, useEffect } from 'react';

// DOM reference
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

// Previous value reference
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

// Mutable value reference
function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}`;

  const useContextExample = `// useContext Hook
import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext(null);

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={\`btn-\${theme}\`}
      onClick={toggleTheme}
    >
      Current theme: {theme}
    </button>
  );
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Themed App</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Basic React Hooks</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Hooks</h2>
        <p className="text-gray-600 mb-4">
          Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They let you use state and other React features without writing a class.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiRefreshCw className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">State</h3>
            <p className="text-gray-600">
              Manage component state
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiDatabase className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Effect</h3>
            <p className="text-gray-600">
              Handle side effects
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Context</h3>
            <p className="text-gray-600">
              Share data between components
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useState Hook</h2>
        <p className="text-gray-600 mb-4">
          The useState hook lets you add state to functional components. It returns an array with the current state value and a function to update it.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useStateExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useEffect Hook</h2>
        <p className="text-gray-600 mb-4">
          The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useEffectExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useRef Hook</h2>
        <p className="text-gray-600 mb-4">
          The useRef hook creates a mutable ref object that persists for the full lifetime of the component. It's commonly used to access DOM elements directly.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useRefExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useContext Hook</h2>
        <p className="text-gray-600 mb-4">
          The useContext hook subscribes to React context without introducing nesting. It's used for consuming context that was created by a parent Provider component.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useContextExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hooks Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Only call Hooks at the top level</li>
            <li>Only call Hooks from React function components</li>
            <li>Use multiple useState calls for unrelated state</li>
            <li>Keep effects focused on one concern</li>
            <li>Always include all dependencies in useEffect</li>
            <li>Clean up side effects when necessary</li>
            <li>Use custom hooks for reusable logic</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use the ESLint plugin for Hooks</li>
          <li>Extract complex state logic into reducers</li>
          <li>Consider memoization for expensive calculations</li>
          <li>Use custom hooks for shared logic</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/advanced-routing"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Advanced Routing
        </Link>
        <Link
          to="/react-course/custom-hooks"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Custom Hooks <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BasicHooks; 