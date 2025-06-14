import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ReactCourse.css';

const GettingStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="chapter-content">
      <nav className="bg-white shadow-lg mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/courses/react')}
                className="text-gray-800 hover:text-blue-600"
              >
                ← Back to Course
              </button>
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Getting Started with React</h1>

        <section className="section">
          <h2>Setting Up Your Development Environment</h2>
          <div className="callout">
            <strong>Prerequisites:</strong>
            <ul>
              <li>Node.js (version 14 or higher)</li>
              <li>npm (comes with Node.js) or yarn</li>
              <li>A code editor (VS Code recommended)</li>
            </ul>
          </div>
          
          <div className="code-example">
            <h3>Check your Node.js installation:</h3>
            <pre>
              <code>{`
# Check Node.js version
node --version

# Check npm version
npm --version
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>Creating Your First React App</h2>
          <p>
            We'll use Create React App, the official tool for creating React applications.
            It sets up your development environment with the best configuration.
          </p>

          <div className="code-example">
            <pre>
              <code>{`
# Create a new React application
npx create-react-app my-react-app

# Navigate to the project directory
cd my-react-app

# Start the development server
npm start
              `}</code>
            </pre>
          </div>

          <div className="callout">
            <strong>Project Structure:</strong>
            <pre>
              <code>{`
my-react-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   ├── favicon.ico
  │   └── manifest.json
  ├── src/
  │   ├── App.js
  │   ├── App.css
  │   ├── index.js
  │   └── index.css
  ├── package.json
  └── README.md
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>Your First React Component</h2>
          <p>
            Let's create a simple React component to understand the basics.
          </p>

          <div className="code-example">
            <pre>
              <code>{`
// App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;
              `}</code>
            </pre>
          </div>

          <div className="mt-4">
            <h3>Understanding the Code:</h3>
            <ul className="list-disc pl-6">
              <li>We import React to use JSX</li>
              <li>Components are JavaScript functions or classes</li>
              <li>Components return JSX (HTML-like syntax)</li>
              <li>Components must be exported to be used elsewhere</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>React Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tool-card bg-white p-4 rounded-lg shadow">
              <h3>Browser Extension</h3>
              <p>Install React Developer Tools for Chrome or Firefox</p>
              <ul className="text-sm mt-2">
                <li>Inspect React component hierarchy</li>
                <li>Debug props and state</li>
                <li>Monitor performance</li>
              </ul>
            </div>
            <div className="tool-card bg-white p-4 rounded-lg shadow">
              <h3>VS Code Extensions</h3>
              <p>Recommended extensions for React development:</p>
              <ul className="text-sm mt-2">
                <li>ES7+ React/Redux/React-Native snippets</li>
                <li>Prettier - Code formatter</li>
                <li>ESLint</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="next-step-card bg-gray-50 p-4 rounded">
              <h3>Learn JSX</h3>
              <p>Understand how to write JSX syntax and its rules</p>
            </div>
            <div className="next-step-card bg-gray-50 p-4 rounded">
              <h3>Components</h3>
              <p>Explore React components and their lifecycle</p>
            </div>
            <div className="next-step-card bg-gray-50 p-4 rounded">
              <h3>Props & State</h3>
              <p>Learn about data handling in React</p>
            </div>
          </div>
        </section>

        <div className="chapter-nav">
          <button
            onClick={() => navigate('/courses/react/introduction')}
            className="nav-button"
          >
            ← Previous: Introduction
          </button>
          <button
            onClick={() => navigate('/courses/react/jsx')}
            className="nav-button"
          >
            Next: JSX →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GettingStarted; 