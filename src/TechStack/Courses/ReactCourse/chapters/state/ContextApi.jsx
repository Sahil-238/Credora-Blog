import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ContextApi = () => {
  const createContextExample = `// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};`;

  const useContextExample = `// App.js
const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

// Layout.js
const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={\`app \${theme}\`}>
      <button onClick={toggleTheme}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <Content />
    </div>
  );
};`;

  const multipleContextsExample = `// Combining Multiple Contexts
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LocaleProvider>
          <Layout />
        </LocaleProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

// Using Multiple Contexts
const Header = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const { locale } = useLocale();

  return (
    <header className={\`header \${theme}\`}>
      <h1>{translations[locale].welcome}</h1>
      {user && <span>Welcome, {user.name}</span>}
    </header>
  );
};`;

  const contextUpdateExample = `// Using Context with Complex State
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({});

  const updatePreferences = (newPrefs) => {
    setPreferences(prev => ({
      ...prev,
      ...newPrefs
    }));
  };

  const contextValue = {
    user,
    setUser,
    preferences,
    updatePreferences
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Context API</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Context API</h2>
        <p className="text-gray-600 mb-4">
          The Context API provides a way to pass data through the component tree without having to
          pass props manually at every level. It's designed to share data that can be considered
          "global" for a tree of React components.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Key Concept:</strong> Context provides a way to share values between components
            without explicitly passing a prop through every level of the tree.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating and Providing Context</h2>
        <p className="text-gray-600 mb-4">
          To create a context, you use the createContext function and wrap your component tree with
          a Provider component. Here's an example of a theme context implementation.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {createContextExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Using Context in Components</h2>
        <p className="text-gray-600 mb-4">
          Components can consume context using the useContext hook or Context.Consumer component.
          The useContext hook is the more modern and cleaner approach.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {useContextExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Multiple Contexts</h2>
        <p className="text-gray-600 mb-4">
          Applications often need multiple contexts for different types of data. You can nest
          context providers and consume multiple contexts in a single component.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {multipleContextsExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Context with Complex State</h2>
        <p className="text-gray-600 mb-4">
          When using context with complex state, it's important to structure your context value
          and update functions properly to maintain performance and prevent unnecessary rerenders.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {contextUpdateExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">When to Use Context</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Theme data</li>
              <li>User authentication</li>
              <li>Language preferences</li>
              <li>UI state that many components need</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Context Pitfalls</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Don't overuse for component composition</li>
              <li>Be careful with frequent updates</li>
              <li>Consider performance implications</li>
              <li>Don't use just to avoid prop drilling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Theming</h3>
            <p className="text-sm text-gray-600">Dark/light mode, custom themes</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Authentication</h3>
            <p className="text-sm text-gray-600">User session, permissions</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Localization</h3>
            <p className="text-sm text-gray-600">Language, formatting</p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/navigation"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Navigation
        </Link>
        <Link
          to="/react-course/redux-basics"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Redux Basics →
        </Link>
      </div>
    </motion.div>
  );
};

export default ContextApi;