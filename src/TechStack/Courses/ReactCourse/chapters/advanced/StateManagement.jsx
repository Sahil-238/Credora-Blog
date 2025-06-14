import React, { useState, useContext, createContext } from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiGlobe, FiPackage } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Example Theme Context
const ThemeContext = createContext('light');

const StateManagement = () => {
  const [activeTab, setActiveTab] = useState('context');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [theme, setTheme] = useState('light');

  const examples = {
    context: {
      title: 'Context API',
      code: `const ThemeContext = createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}`,
      explanation: 'Context provides a way to pass data through the component tree without prop drilling.'
    },
    redux: {
      title: 'Redux',
      code: `// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Component
function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}`,
      explanation: 'Redux is a predictable state container for JavaScript apps.'
    },
    zustand: {
      title: 'Zustand',
      code: `import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}`,
      explanation: 'Zustand is a small, fast and scalable state management solution.'
    },
    recoil: {
      title: 'Recoil',
      code: `import { atom, useRecoilState } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  
  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}`,
      explanation: 'Recoil is a state management library that provides atomic model and derived data.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">State Management</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding State Management</h2>
        <p className="text-gray-600 mb-4">
          As React applications grow, managing state becomes more complex. Different
          state management solutions offer various approaches to handle this complexity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiDatabase className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Local State</h3>
            <p className="text-gray-600">
              Component-level state with useState
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiGlobe className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Global State</h3>
            <p className="text-gray-600">
              Application-wide state management
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiPackage className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">State Libraries</h3>
            <p className="text-gray-600">
              Third-party state management solutions
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">State Management Solutions</h2>
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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Context API Demo</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="space-y-4">
              <div className={`p-4 rounded transition-colors ${
                theme === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white'
              }`}>
                <p>Current theme: {theme}</p>
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Toggle Theme
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// Current theme context value
{
  theme: '${theme}',
  setTheme: Function
}`}
              </pre>
            </div>
          </ThemeContext.Provider>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use What</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Context API</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Theme management</li>
              <li>User authentication state</li>
              <li>Localization</li>
              <li>Small to medium applications</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Redux</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Large applications</li>
              <li>Complex state logic</li>
              <li>Need for middleware</li>
              <li>Time-travel debugging</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Zustand/Recoil</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Modern alternatives to Redux</li>
              <li>Simpler API</li>
              <li>Better TypeScript support</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Patterns</h2>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="mb-4 text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? 'Hide Advanced Patterns' : 'Show Advanced Patterns'}
        </button>
        {showAdvanced && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Redux Toolkit</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Context with Reducer</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}`}
              </pre>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Create a shopping cart application using Redux Toolkit with the following features:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Product listing with add to cart functionality</li>
              <li>Cart management (add, remove, update quantity)</li>
              <li>Persist cart state in localStorage</li>
              <li>Implement loading and error states</li>
              <li>Add unit tests for reducers</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/routing"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Routing
        </Link>
        <Link
          to="/react-course/performance"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Performance →
        </Link>
      </div>
    </motion.div>
  );
};

export default StateManagement; 