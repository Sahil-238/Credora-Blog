import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw, FiLink, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hooks = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const countRef = useRef(0);
  const intervalRef = useRef(null);

  const examples = {
    basics: {
      title: 'Basic Hooks',
      code: `// useState Hook
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// useEffect Hook
function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

// useRef Hook
function FocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}`,
      explanation: 'Basic hooks (useState, useEffect, useRef) are the foundation of React hooks.'
    },
    performance: {
      title: 'Performance Hooks',
      code: `// useMemo Hook
function ExpensiveCalculation({ numbers }) {
  const sum = useMemo(() => {
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
}

// useCallback Hook
function ParentComponent() {
  const [items, setItems] = useState([]);

  const addItem = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []);

  return <ChildComponent onAddItem={addItem} />;
}

// React.memo with useCallback
const ChildComponent = React.memo(({ onAddItem }) => {
  console.log("Child rendered");
  return <button onClick={() => onAddItem("New Item")}>Add</button>;
});`,
      explanation: 'Performance hooks (useMemo, useCallback) help optimize expensive calculations and prevent unnecessary re-renders.'
    },
    state: {
      title: 'State Management',
      code: `// useReducer Hook
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => {
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text, completed: false }
    });
  };

  return (
    <div>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      {todos.map(todo => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
            onClick={() => dispatch({
              type: 'TOGGLE_TODO',
              payload: todo.id
            })}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch({
              type: 'REMOVE_TODO',
              payload: todo.id
            })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}`,
      explanation: 'useReducer provides a more structured way to manage complex state logic.'
    },
    context: {
      title: 'Context Hooks',
      code: `// Create Context
const ThemeContext = React.createContext('light');

// Context Provider
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

// useContext Hook
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      Current theme: {theme}
    </button>
  );
}`,
      explanation: 'useContext provides a way to pass data through the component tree without prop drilling.'
    },
    custom: {
      title: 'Custom Hooks',
      code: `// Custom Hook for API Calls
function useAPI(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Custom Hook for Form Fields
function useFormField(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(null);
  };

  const validate = (rules) => {
    for (const rule of rules) {
      const error = rule(value);
      if (error) {
        setError(error);
        return false;
      }
    }
    return true;
  };

  return {
    value,
    error,
    onChange: handleChange,
    validate
  };
}

// Usage
function LoginForm() {
  const email = useFormField('');
  const password = useFormField('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = email.validate([
      value => !value && 'Email is required',
      value => !/\\S+@\\S+\\.\\S+/.test(value) && 'Email is invalid'
    ]);
    const isPasswordValid = password.validate([
      value => !value && 'Password is required',
      value => value.length < 6 && 'Password must be at least 6 characters'
    ]);

    if (isEmailValid && isPasswordValid) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        {...email}
        placeholder="Email"
      />
      {email.error && <span>{email.error}</span>}
      
      <input
        type="password"
        {...password}
        placeholder="Password"
      />
      {password.error && <span>{password.error}</span>}
      
      <button type="submit">Login</button>
    </form>
  );
}`,
      explanation: 'Custom hooks allow you to extract component logic into reusable functions.'
    }
  };

  // Demo effects
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
      countRef.current += 1;
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const expensiveCalculation = useMemo(() => {
    return Array(count)
      .fill(0)
      .reduce((acc) => acc + 1, 0);
  }, [count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Hooks</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Hooks</h2>
        <p className="text-gray-600 mb-4">
          Hooks are functions that allow you to "hook into" React state and lifecycle
          features from function components. They let you use state and other React
          features without writing a class component.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiRefreshCw className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">State</h3>
            <p className="text-gray-600">
              Manage component state with useState and useReducer
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiLink className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Effects</h3>
            <p className="text-gray-600">
              Handle side effects with useEffect
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Custom</h3>
            <p className="text-gray-600">
              Create reusable stateful logic
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Live Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">useState & useRef</h3>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">{count}</p>
              <p className="text-gray-600 mb-4">
                useState count (renders): {count}<br />
                useRef count (no renders): {countRef.current}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">useEffect & useCallback</h3>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : data ? (
                <div>
                  <h4 className="font-semibold mb-2">{data.title}</h4>
                  <p className="text-gray-600">{data.body}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hook Examples</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                className={`px-6 py-3 whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {example.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {examples[activeTab].code}
            </pre>
            <p className="text-gray-600">
              {examples[activeTab].explanation}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hook Rules</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Only Call Hooks at the Top Level</h3>
                <p className="text-gray-600">
                  Don't call hooks inside loops, conditions, or nested functions
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Only Call Hooks from React Functions</h3>
                <p className="text-gray-600">
                  Call hooks from React function components or custom hooks
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Use the ESLint Plugin</h3>
                <p className="text-gray-600">
                  The eslint-plugin-react-hooks helps enforce these rules
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Name Custom Hooks with 'use' Prefix</h3>
                <p className="text-gray-600">
                  This convention lets us know at a glance that a function follows the rules of Hooks
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Create a custom hook for managing a shopping cart with the following features:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Add/remove items from cart</li>
              <li>Update item quantities</li>
              <li>Calculate total price</li>
              <li>Persist cart in localStorage</li>
              <li>Handle loading and error states</li>
              <li>Implement cart item validation</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/forms"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Forms
        </Link>
        <Link
          to="/react-course/routing"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Routing →
        </Link>
      </div>
    </motion.div>
  );
};

export default Hooks; 