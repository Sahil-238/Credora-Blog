import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTerminal, FiSettings, FiLifeBuoy, FiActivity } from 'react-icons/fi';

const Process = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Process in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to Process</h2>
        <p className="text-gray-600 mb-4">
          The process object is a global object in Node.js that provides information about, and control
          over, the current Node.js process. It allows you to handle process events, manage environment
          variables, and control the process lifecycle.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiTerminal className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process information and control</li>
                <li>Environment variable management</li>
                <li>Command line arguments</li>
                <li>Process events and signals</li>
                <li>Standard I/O streams</li>
                <li>Exit codes and handlers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Process Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiActivity className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Access basic information about the current process:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Process ID and parent process ID
console.log('Process ID:', process.pid);
console.log('Parent Process ID:', process.ppid);

// Process title
console.log('Process Title:', process.title);
process.title = 'My Node App';

// Current working directory
console.log('Current Directory:', process.cwd());

// Node.js version
console.log('Node Version:', process.version);
console.log('Node Versions:', process.versions);

// CPU usage
const startUsage = process.cpuUsage();
// Do some work...
const endUsage = process.cpuUsage(startUsage);
console.log('CPU Usage:', endUsage);

// Memory usage
const memoryUsage = process.memoryUsage();
console.log('Memory Usage:', {
  heapTotal: memoryUsage.heapTotal / 1024 / 1024 + 'MB',
  heapUsed: memoryUsage.heapUsed / 1024 / 1024 + 'MB',
  external: memoryUsage.external / 1024 / 1024 + 'MB',
  rss: memoryUsage.rss / 1024 / 1024 + 'MB'
});

// Platform information
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Environment Variables</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSettings className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Work with environment variables in Node.js:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Access environment variables
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PATH:', process.env.PATH);

// Set environment variables
process.env.MY_VARIABLE = 'my value';
process.env.API_KEY = 'secret_key';

// Environment variable management
function getConfig() {
  return {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017',
    nodeEnv: process.env.NODE_ENV || 'development',
    apiKey: process.env.API_KEY
  };
}

// Check for required environment variables
function validateEnv() {
  const required = ['API_KEY', 'DATABASE_URL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    process.exit(1);
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Command Line Arguments</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Handling Command Line Arguments</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Access command line arguments
console.log('Executable Path:', process.argv[0]);
console.log('Script Path:', process.argv[1]);
console.log('Arguments:', process.argv.slice(2));

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};

  args.forEach((arg, index) => {
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = args[index + 1];
      if (value && !value.startsWith('--')) {
        params[key] = value;
      } else {
        params[key] = true;
      }
    }
  });

  return params;
}

// Usage example
const args = parseArgs();
console.log('Parsed Arguments:', args);

// Example command: node app.js --port 3000 --debug
// Output: { port: '3000', debug: true }`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Process Events and Signals</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiLifeBuoy className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Handle process events and signals:
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

// Handle process signals
process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Performing cleanup...');
  // Cleanup code here
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Performing cleanup...');
  // Cleanup code here
  process.exit(0);
});

// Handle process exit
process.on('exit', (code) => {
  console.log('Process exiting with code:', code);
  // Perform synchronous cleanup
});

// Graceful shutdown example
function gracefulShutdown() {
  console.log('Starting graceful shutdown...');
  
  // Close database connections
  closeDatabase()
    .then(() => closeServer())
    .then(() => {
      console.log('Cleanup completed');
      process.exit(0);
    })
    .catch(err => {
      console.error('Error during cleanup:', err);
      process.exit(1);
    });
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Standard I/O Streams</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Working with Standard I/O</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Write to stdout
process.stdout.write('Hello ');
process.stdout.write('World\\n');

// Write to stderr
process.stderr.write('Error: Something went wrong\\n');

// Read from stdin
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log('Received input:', data.trim());
});

// Create a simple CLI prompt
function prompt(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });
}

// Usage example
async function getUserInput() {
  const name = await prompt('What is your name? ');
  console.log(\`Hello, \${name}!\`);
  process.exit(0);
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
            <li>Always handle uncaught exceptions and unhandled rejections</li>
            <li>Implement proper cleanup on process exit</li>
            <li>Use environment variables for configuration</li>
            <li>Validate required environment variables early</li>
            <li>Implement graceful shutdown handlers</li>
            <li>Be careful with synchronous operations in exit handlers</li>
            <li>Use appropriate exit codes</li>
            <li>Consider security when handling environment variables</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/os-module"
          className="text-blue-600 hover:text-blue-800"
        >
          ← OS Module
        </Link>
        <Link
          to="/nodejs-course/crypto-module"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Crypto Module →
        </Link>
      </div>
    </motion.div>
  );
};

export default Process; 