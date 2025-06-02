import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAlertTriangle, FiShield, FiActivity, FiCheckCircle } from 'react-icons/fi';

const ErrorHandling = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Error Handling in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Types of Errors</h2>
        <p className="text-gray-600 mb-4">
          Node.js applications can encounter various types of errors that need to be handled appropriately
          to ensure robust operation and good user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Standard JavaScript Errors</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>SyntaxError</li>
              <li>ReferenceError</li>
              <li>TypeError</li>
              <li>RangeError</li>
              <li>URIError</li>
              <li>EvalError</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Node.js Specific Errors</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>SystemError</li>
              <li>AssertionError</li>
              <li>CustomError</li>
              <li>ValidationError</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Error First Callback Pattern</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiAlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Node.js uses the error-first callback pattern for asynchronous operations. The first argument
                of the callback is reserved for an error object.
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const fs = require('fs');

// Error-first callback pattern
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Multiple error handling in callbacks
fs.readFile('file1.txt', (err1, data1) => {
  if (err1) return handleError(err1);
  
  fs.readFile('file2.txt', (err2, data2) => {
    if (err2) return handleError(err2);
    
    processFiles(data1, data2);
  });
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Promises and Async/Await</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiActivity className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Modern Node.js applications often use Promises and async/await for cleaner error handling:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const fs = require('fs').promises;

// Using Promises
fs.readFile('file.txt')
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

// Using async/await with try/catch
async function readFileContents() {
  try {
    const data = await fs.readFile('file.txt');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// Handling multiple async operations
async function processMultipleFiles() {
  try {
    const [file1, file2] = await Promise.all([
      fs.readFile('file1.txt'),
      fs.readFile('file2.txt')
    ]);
    return processFiles(file1, file2);
  } catch (err) {
    console.error('Error processing files:', err);
    throw err; // Re-throw if needed
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Error Types</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiShield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Creating custom error types helps in handling specific error scenarios:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.code = 'EVAL_ERR';
    Error.captureStackTrace(this, ValidationError);
  }
}

class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = 'DatabaseError';
    this.query = query;
    Error.captureStackTrace(this, DatabaseError);
  }
}

// Usage
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required');
  }
  if (!user.password) {
    throw new ValidationError('Password is required');
  }
}

// Error handling
try {
  validateUser({ name: 'John' });
} catch (err) {
  if (err instanceof ValidationError) {
    console.error('Validation failed:', err.message);
  } else {
    console.error('Unknown error:', err);
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Global Error Handling</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Node.js provides several ways to handle uncaught errors globally:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform cleanup
  process.exit(1);
});

// Handle program termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  // Perform cleanup
  server.close(() => {
    process.exit(0);
  });
});

// In Express applications
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Error Handling Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Always handle both synchronous and asynchronous errors</li>
            <li>Use try/catch blocks with async/await</li>
            <li>Create custom error types for specific scenarios</li>
            <li>Implement global error handlers</li>
            <li>Log errors with appropriate detail level</li>
            <li>Clean up resources in error handlers</li>
            <li>Don't expose sensitive information in error messages</li>
            <li>Use error monitoring services in production</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/streams"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Streams
        </Link>
        <Link
          to="/nodejs-course/http-module"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: HTTP Module →
        </Link>
      </div>
    </motion.div>
  );
};

export default ErrorHandling; 