import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPackage, FiSettings, FiLayers, FiCommand } from 'react-icons/fi';

const PackageJson = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Understanding package.json</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is package.json?</h2>
        <p className="text-gray-600 mb-4">
          The package.json file is a manifest file that contains metadata about your Node.js project and its dependencies.
          It's the central configuration file that npm uses to manage your project.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiPackage className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Functions</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Lists project dependencies and versions</li>
                <li>Defines project metadata (name, version, etc.)</li>
                <li>Configures npm scripts and commands</li>
                <li>Specifies project entry points</li>
                <li>Defines project configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Required Fields</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`{
  "name": "my-node-project",     // Project name (required)
  "version": "1.0.0",           // Project version (required)
  "description": "A Node.js project example",
  "main": "index.js",          // Entry point
  "author": "Your Name",
  "license": "MIT"
}`}
            </div>
            <p className="text-gray-600">
              Only "name" and "version" fields are required, but it's good practice to include other metadata fields.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Scripts Configuration</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCommand className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">NPM Scripts</h3>
              <p className="text-gray-600 mb-4">
                The "scripts" section defines commands that can be run using npm run:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint .",
    "build": "tsc",
    "serve": "node dist/index.js"
  }
}`}
              </div>
              <p className="text-gray-600 mt-4">
                Run these scripts using: npm run script-name (e.g., npm run dev)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dependencies Management</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiLayers className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Types of Dependencies</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
                {`{
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.0.0",
    "dotenv": "^10.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15",
    "jest": "^27.0.0",
    "eslint": "^8.0.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  "optionalDependencies": {
    "image-optimizer": "^1.0.0"
  }
}`}
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>dependencies:</strong> Required for production</li>
                <li><strong>devDependencies:</strong> Only needed during development</li>
                <li><strong>peerDependencies:</strong> Required by the project but expected to be installed by the parent project</li>
                <li><strong>optionalDependencies:</strong> Optional packages that aren't required for the project to work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Configuration</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSettings className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Common Configuration Fields</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`{
  "type": "module",           // Use ES modules
  "private": true,           // Prevent accidental publishing
  "engines": {
    "node": ">=14.0.0"      // Specify Node.js version
  },
  "browserslist": [         // Target browsers
    ">0.2%",
    "not dead"
  ],
  "config": {               // Custom configuration
    "port": 3000
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Package Distribution</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>files:</strong> Array of files to include when publishing
              <div className="bg-gray-100 p-2 rounded font-mono text-sm mt-1">
                {`"files": ["dist", "README.md"]`}
              </div>
            </li>
            <li>
              <strong>main:</strong> Entry point for Node.js
              <div className="bg-gray-100 p-2 rounded font-mono text-sm mt-1">
                {`"main": "dist/index.js"`}
              </div>
            </li>
            <li>
              <strong>module:</strong> Entry point for ES modules
              <div className="bg-gray-100 p-2 rounded font-mono text-sm mt-1">
                {`"module": "dist/index.mjs"`}
              </div>
            </li>
            <li>
              <strong>bin:</strong> Executable files
              <div className="bg-gray-100 p-2 rounded font-mono text-sm mt-1">
                {`"bin": { "my-cli": "./bin/cli.js" }`}
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Always include a README.md file and reference it in package.json</li>
            <li>Use semantic versioning for your package version</li>
            <li>Keep dependencies up to date</li>
            <li>Use the "private" field to prevent accidental publishing</li>
            <li>Document all available npm scripts</li>
            <li>Include appropriate .gitignore and .npmignore files</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/npm"
          className="text-blue-600 hover:text-blue-800"
        >
          ← NPM
        </Link>
        <Link
          to="/nodejs-course/events"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Events →
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageJson; 