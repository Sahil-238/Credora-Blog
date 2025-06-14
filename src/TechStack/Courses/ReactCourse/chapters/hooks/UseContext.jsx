import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Create a theme context
const ThemeContext = createContext(null);

// Create a user context
const UserContext = createContext(null);

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Example components using context
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded transition-colors ${
        theme === 'light' 
          ? 'bg-gray-800 text-white hover:bg-gray-900' 
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
      }`}
    >
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

const UserProfile = () => {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`p-4 rounded ${
      theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
    }`}>
      <h3 className="font-semibold mb-2">User Profile</h3>
      <p>Name: {user?.name || 'Guest'}</p>
      <p>Role: {user?.role || 'Visitor'}</p>
    </div>
  );
};

const UseContext = () => {
  const [user] = useState({
    name: 'John Doe',
    role: 'Admin'
  });

  return (
    <ThemeProvider>
      <UserContext.Provider value={user}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-6"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">useContext Hook</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useContext?</h2>
            <p className="text-gray-600 mb-4">
              useContext is a Hook that lets you subscribe to React context without introducing nesting.
              It's particularly useful for sharing data that can be considered "global" for a tree of React components.
            </p>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
              <p className="text-pink-700">
                <strong>Best Practice:</strong> Use Context for data that needs to be accessed by many components at different nesting levels.
                Don't overuse it for data that should be passed as props.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating and Using Context</h2>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
              {`// 1. Create context
const ThemeContext = createContext(null);

// 2. Provide context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Consume context
const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // Use theme value here
};`}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Live Example</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <ThemedButton />
                <UserProfile />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Theme switching (dark/light mode)</li>
              <li>User authentication state</li>
              <li>Language/Locale preferences</li>
              <li>UI state that affects multiple components</li>
              <li>Feature flags and app configuration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-green-700">
                  <strong>✅ Do:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 text-green-700">
                  <li>Keep context-specific state close to where it's being used</li>
                  <li>Split contexts by concern (theme, auth, etc.)</li>
                  <li>Provide meaningful default values</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700">
                  <strong>❌ Don't:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 text-red-700">
                  <li>Use context for props that could be passed directly</li>
                  <li>Put everything in a single context</li>
                  <li>Nest too many context providers</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Considerations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-700 mb-2">
                <strong>⚠️ Context Re-renders:</strong>
              </p>
              <p className="text-yellow-700">
                All components that use a particular context will re-render when that context's value changes.
                Consider splitting your context or using memoization if this becomes a performance issue.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mt-4">
              {`// Splitting context example
const ThemeContext = createContext(null);
const ThemeActionsContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const actions = useMemo(() => ({
    toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  }), []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeActionsContext.Provider value={actions}>
        {children}
      </ThemeActionsContext.Provider>
    </ThemeContext.Provider>
  );
};`}
            </div>
          </section>

          <div className="mt-12 flex justify-between items-center">
            <Link
              to="/react-course/useEffect"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Previous
            </Link>
            <Link
              to="/react-course/useRef"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next →
            </Link>
          </div>
        </motion.div>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default UseContext;