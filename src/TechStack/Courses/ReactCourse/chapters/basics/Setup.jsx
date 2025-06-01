import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiTerminal, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Setup = () => {
  const [activeTab, setActiveTab] = useState('prerequisites');

  const sections = {
    prerequisites: {
      title: 'Prerequisites',
      content: `// Required Tools
1. Node.js (LTS version)
2. npm (comes with Node.js)
3. Code Editor (VS Code recommended)
4. Git (optional but recommended)

// Recommended VS Code Extensions
- ESLint
- Prettier
- React Developer Tools
- JavaScript (ES6) code snippets`,
      explanation: 'Essential tools and software needed to start React development.'
    },
    installation: {
      title: 'Installation',
      content: `// Install Node.js and npm
Download from https://nodejs.org

// Verify installation
node --version
npm --version

// Create React App
npx create-react-app my-app
cd my-app
npm start`,
      explanation: 'Step by step guide to install React and create your first project.'
    },
    editor: {
      title: 'Editor Setup',
      content: `// VS Code settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always"
}

// .prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true
}`,
      explanation: 'Recommended editor configuration for React development.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Setting Up Your Development Environment</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Development Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiDownload className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Node.js & npm</h3>
            <p className="text-gray-600">
              Runtime environment and package manager
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiTerminal className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Command Line</h3>
            <p className="text-gray-600">
              Terminal for running commands and scripts
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Code Editor</h3>
            <p className="text-gray-600">
              VS Code with React extensions
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Setup Guide</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                className={`px-6 py-3 ${
                  activeTab === key
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {sections[activeTab].content}
            </pre>
            <p className="text-gray-600">
              {sections[activeTab].explanation}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Structure</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`my-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   ├── favicon.ico
  │   └── manifest.json
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   ├── App.css
  │   └── index.css
  ├── package.json
  ├── README.md
  └── .gitignore`}
          </pre>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600">
              <strong>node_modules/</strong> - Contains all dependencies
            </p>
            <p className="text-gray-600">
              <strong>public/</strong> - Static files and HTML template
            </p>
            <p className="text-gray-600">
              <strong>src/</strong> - Source code of your application
            </p>
            <p className="text-gray-600">
              <strong>package.json</strong> - Project configuration and dependencies
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Scripts</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">npm start</h3>
              <p className="text-gray-600">
                Runs the app in development mode at http://localhost:3000
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">npm test</h3>
              <p className="text-gray-600">
                Launches the test runner in interactive watch mode
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">npm run build</h3>
              <p className="text-gray-600">
                Builds the app for production to the build folder
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">npm run eject</h3>
              <p className="text-gray-600">
                Removes the single build dependency from your project
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/introduction"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Introduction
        </Link>
        <Link
          to="/react-course/jsx"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: JSX →
        </Link>
      </div>
    </motion.div>
  );
};

export default Setup; 