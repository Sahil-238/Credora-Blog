import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPackage, FiBox, FiShare2, FiDownload } from 'react-icons/fi';

const Modules = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Node.js Modules</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Modules?</h2>
        <p className="text-gray-600 mb-4">
          Modules are reusable blocks of code whose existence does not accidentally impact other code.
          Node.js uses the CommonJS module system, where each file is treated as a separate module.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiPackage className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Types of Modules</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Core/Built-in Modules (comes with Node.js)</li>
                <li>Local Modules (created by developers)</li>
                <li>Third-party Modules (from npm)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Core Modules</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="flex items-start">
            <FiBox className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Node.js has several built-in modules that you can use without installation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>http - HTTP server and client</li>
                  <li>fs - File system operations</li>
                  <li>path - Path manipulations</li>
                  <li>os - Operating system info</li>
                </ul>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>events - Event handling</li>
                  <li>util - Utility functions</li>
                  <li>crypto - Cryptography</li>
                  <li>stream - Streaming data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`// Using core modules
const fs = require('fs');
const path = require('path');
const http = require('http');

// Reading a file
fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating Local Modules</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiShare2 className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Module Creation and Export</h3>
                <p className="text-gray-600 mb-4">
                  You can create your own modules and export functionality using module.exports:
                </p>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
                  {`// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

// Alternative export syntax
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;`}
                </div>
                <p className="text-gray-600 mb-4">
                  Using the module in another file:
                </p>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                  {`// app.js
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Third-party Modules</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiDownload className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Using npm Packages</h3>
              <p className="text-gray-600 mb-4">
                Install third-party modules using npm (Node Package Manager):
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
                {`# Install a package
npm install express

# Install and save as a dependency
npm install lodash --save

# Install development dependency
npm install nodemon --save-dev`}
              </div>
              <p className="text-gray-600 mb-4">
                Using installed packages in your code:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const express = require('express');
const _ = require('lodash');

const app = express();
const numbers = [1, 2, 3, 4, 5];
console.log(_.sum(numbers)); // Using lodash to sum array`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">ES Modules in Node.js</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Node.js also supports ES Modules (ESM) with the .mjs extension or by setting "type": "module" in package.json:
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm">
            {`// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.mjs
import { add, subtract } from './math.mjs';
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Keep modules focused and single-purpose</li>
            <li>Use meaningful file names that reflect module functionality</li>
            <li>Handle module loading errors with try-catch</li>
            <li>Use path.join() for cross-platform compatibility</li>
            <li>Consider using ES Modules for new projects</li>
            <li>Document module exports and dependencies</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/getting-started"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Getting Started
        </Link>
        <Link
          to="/nodejs-course/npm"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: NPM →
        </Link>
      </div>
    </motion.div>
  );
};

export default Modules; 