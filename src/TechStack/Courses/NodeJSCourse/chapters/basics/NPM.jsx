import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPackage, FiSearch, FiSettings, FiShield } from 'react-icons/fi';

const NPM = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Node Package Manager (NPM)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is NPM?</h2>
        <p className="text-gray-600 mb-4">
          NPM (Node Package Manager) is the default package manager for Node.js and the world's largest software registry.
          It consists of three main components:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiPackage className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">Package Registry</h3>
            <p className="text-gray-600">
              A large public database of JavaScript packages and their metadata.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiSearch className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">Website</h3>
            <p className="text-gray-600">
              Interface to discover and manage packages at npmjs.com.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiSettings className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">Command Line Tool</h3>
            <p className="text-gray-600">
              CLI tool for package installation and management.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Essential NPM Commands</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Project Initialization</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`# Create a new package.json
npm init

# Create with default values
npm init -y`}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Package Installation</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`# Install a package
npm install package-name

# Install as a development dependency
npm install package-name --save-dev

# Install globally
npm install -g package-name

# Install specific version
npm install package-name@1.2.3`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Package Management</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`# Remove a package
npm uninstall package-name

# Update packages
npm update

# List installed packages
npm list

# Run scripts defined in package.json
npm run script-name`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Package.json</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            The package.json file is the heart of any Node.js project. It contains project metadata and dependencies.
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm">
            {`{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15",
    "jest": "^27.0.0"
  }
}`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dependency Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">dependencies</h3>
            <p className="text-gray-600">
              Packages required for the application to run in production.
              Installed with npm install package-name or npm install package-name --save
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">devDependencies</h3>
            <p className="text-gray-600">
              Packages needed only for development and testing.
              Installed with npm install package-name --save-dev
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Version Control</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiShield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Semantic Versioning</h3>
              <p className="text-gray-600 mb-4">
                NPM uses Semantic Versioning (MAJOR.MINOR.PATCH):
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>MAJOR version for incompatible API changes</li>
                <li>MINOR version for backwards-compatible features</li>
                <li>PATCH version for backwards-compatible bug fixes</li>
              </ul>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm mt-4">
                {`"dependencies": {
  "package": "^1.2.3",  // ^: Compatible with 1.x.x
  "package": "~1.2.3",  // ~: Compatible with 1.2.x
  "package": "1.2.3"    // Exact version
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Always use a .gitignore file to exclude node_modules</li>
            <li>Lock dependencies with package-lock.json</li>
            <li>Regularly update dependencies for security fixes</li>
            <li>Use npm audit to check for vulnerabilities</li>
            <li>Document scripts in package.json</li>
            <li>Consider using npm ci for clean installations</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/modules"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Modules
        </Link>
        <Link
          to="/nodejs-course/package-json"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Package.json →
        </Link>
      </div>
    </motion.div>
  );
};

export default NPM; 