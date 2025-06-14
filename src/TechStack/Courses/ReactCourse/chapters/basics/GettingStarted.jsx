import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay, FiTerminal } from 'react-icons/fi';

const GettingStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Setting Up Your Development Environment</h2>
        <p className="text-gray-600 mb-4">
          Before you start building React applications, you need to set up your development environment. Here's what you'll need:
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <FiTerminal className="mr-2" /> Node.js and npm
            </h3>
            <p className="text-gray-600">
              Download and install Node.js from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">nodejs.org</a>. 
              This will also install npm (Node Package Manager).
            </p>
            <div className="bg-gray-800 rounded p-3 mt-2">
              <code className="text-green-400">node --version</code>
              <br />
              <code className="text-green-400">npm --version</code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <FiCode className="mr-2" /> Code Editor
            </h3>
            <p className="text-gray-600">
              Install a code editor like Visual Studio Code, which offers excellent React support through extensions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Different Ways to Create React Apps</h2>
        
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">1. Create React App (Recommended for Beginners)</h3>
            <p className="text-gray-600 mb-3">
              Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
            </p>
            <div className="bg-gray-800 rounded p-3">
              <code className="text-green-400">npx create-react-app my-app</code>
              <br />
              <code className="text-green-400">cd my-app</code>
              <br />
              <code className="text-green-400">npm start</code>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">2. Vite</h3>
            <p className="text-gray-600 mb-3">
              Vite is a modern build tool that offers a faster and leaner development experience.
            </p>
            <div className="bg-gray-800 rounded p-3">
              <code className="text-green-400">npm create vite@latest my-react-app -- --template react</code>
              <br />
              <code className="text-green-400">cd my-react-app</code>
              <br />
              <code className="text-green-400">npm install</code>
              <br />
              <code className="text-green-400">npm run dev</code>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">3. Next.js (For Full-Stack Applications)</h3>
            <p className="text-gray-600 mb-3">
              Next.js is a popular framework for production-grade React applications that need server-side rendering and static site generation.
            </p>
            <div className="bg-gray-800 rounded p-3">
              <code className="text-green-400">npx create-next-app@latest my-next-app</code>
              <br />
              <code className="text-green-400">cd my-next-app</code>
              <br />
              <code className="text-green-400">npm run dev</code>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Structure</h2>
        <p className="text-gray-600 mb-4">
          After creating a new React app, you'll see a project structure similar to this:
        </p>
        <div className="bg-gray-800 rounded-lg p-4">
          <pre className="text-green-400">
            <code>{`my-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   ├── App.css
  │   └── index.css
  ├── package.json
  └── README.md`}</code>
          </pre>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tip</h3>
        <p className="text-blue-700">
          Always check the official documentation of the tool you're using, as it provides the most up-to-date information and best practices.
        </p>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/introduction"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: Introduction
        </Link>
        <Link
          to="/react-course/create-react-app"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Create React App <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default GettingStarted;