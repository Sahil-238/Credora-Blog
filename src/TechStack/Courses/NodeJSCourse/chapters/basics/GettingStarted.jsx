import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload, FiTerminal, FiCode, FiCheckCircle } from 'react-icons/fi';

const GettingStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installing Node.js</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="flex items-start mb-4">
            <FiDownload className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Download and Install</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Visit the official Node.js website at <a href="https://nodejs.org" className="text-blue-600 hover:text-blue-800">nodejs.org</a></li>
                <li>Download the LTS (Long Term Support) version recommended for most users</li>
                <li>Run the installer and follow the installation wizard</li>
                <li>Verify installation by opening a terminal and running:
                  <div className="bg-gray-100 p-2 rounded mt-2 font-mono">
                    node --version
                    <br />
                    npm --version
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Development Environment Setup</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiCode className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Code Editor</h3>
                <p className="text-gray-600 mb-2">
                  We recommend using Visual Studio Code with these extensions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Node.js Extension Pack</li>
                  <li>ESLint</li>
                  <li>Prettier</li>
                  <li>Node.js Debugging</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiTerminal className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Terminal Setup</h3>
                <p className="text-gray-600 mb-2">
                  Ensure you have access to a terminal or command prompt. You'll use it to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Run Node.js applications</li>
                  <li>Install packages with npm</li>
                  <li>Execute npm scripts</li>
                  <li>Manage project files</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your First Node.js Application</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">1. Create a New Project</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
              {`mkdir my-first-node-app
cd my-first-node-app
npm init -y`}
            </div>
            <p className="text-gray-600">
              This creates a new directory and initializes it with a package.json file.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">2. Create Your First Script</h3>
            <p className="text-gray-600 mb-4">Create a new file called app.js:</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
              {`// app.js
console.log('Welcome to Node.js!');

const os = require('os');
console.log('\\nSystem Information:');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">3. Run Your Application</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
              node app.js
            </div>
            <p className="text-gray-600">
              You should see your welcome message and system information printed to the console.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Next Steps</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Now that you have Node.js installed and your first application running, you're ready to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Learn about Node.js modules and the module system</li>
                <li>Explore the Node Package Manager (npm)</li>
                <li>Work with built-in modules like fs, http, and path</li>
                <li>Build more complex applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/introduction"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Introduction
        </Link>
        <Link
          to="/nodejs-course/modules"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Modules →
        </Link>
      </div>
    </motion.div>
  );
};

export default GettingStarted; 