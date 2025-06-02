import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ErrorHandling = () => {
  const sections = [
    {
      title: 'Error Basics',
      content: `JavaScript error handling:
• Error types
• Error objects
• Stack traces
• try...catch blocks
• throw statement
• finally clause
• Error propagation`,
      code: `// Basic error handling
try {
  // Code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error('Error:', error.message);
  console.error('Stack:', error.stack);
} finally {
  // Always executed
  console.log('Cleanup code');
}

// Different error types
try {
  // Type error
  null.toString();
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type error:', error.message);
  } else if (error instanceof ReferenceError) {
    console.error('Reference error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}`
    },
    {
      title: 'Custom Errors',
      content: `Custom error handling:
• Custom error classes
• Error hierarchies
• Error properties
• Error serialization
• Error recovery
• Error logging
• Error boundaries`,
      code: `// Custom error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'NetworkError';
    this.status = status;
  }
}

// Usage
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required', 'email');
  }
  if (!user.password) {
    throw new ValidationError('Password is required', 'password');
  }
}

try {
  validateUser({ email: '', password: '123' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(\`\${error.field}: \${error.message}\`);
  } else {
    console.error('Unexpected error:', error);
  }
}`
    },
    {
      title: 'Async Error Handling',
      content: `Async error handling:
• Promise rejections
• async/await errors
• Event errors
• Stream errors
• Worker errors
• WebSocket errors
• Service worker errors`,
      code: `// Promise error handling
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new NetworkError('API request failed', response.status);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error(\`Network error (\${error.status}): \${error.message}\`);
    } else {
      console.error('Fetch error:', error);
    }
    return null;
  }
}

// Promise chain error handling
fetchData()
  .then(data => processData(data))
  .catch(error => {
    console.error('Processing error:', error);
    return fallbackData;
  })
  .finally(() => {
    // Cleanup
  });

// Event error handling
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault();
});

// Worker error handling
const worker = new Worker('worker.js');
worker.onerror = function(error) {
  console.error('Worker error:', error.message);
};`
    },
    {
      title: 'Error Recovery',
      content: `Error recovery strategies:
• Retry mechanisms
• Circuit breakers
• Fallback values
• Graceful degradation
• State recovery
• Data validation
• Cleanup procedures`,
      code: `// Retry mechanism
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new NetworkError('API request failed', response.status);
      }
      return await response.json();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Exponential backoff
      const delay = Math.min(1000 * Math.pow(2, i), 10000);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      console.log(\`Retry attempt \${i + 1}\`);
    }
  }
}

// Circuit breaker
class CircuitBreaker {
  constructor(fn, options = {}) {
    this.fn = fn;
    this.failures = 0;
    this.maxFailures = options.maxFailures || 3;
    this.resetTimeout = options.resetTimeout || 60000;
    this.isOpen = false;
  }
  
  async execute(...args) {
    if (this.isOpen) {
      throw new Error('Circuit breaker is open');
    }
    
    try {
      const result = await this.fn(...args);
      this.failures = 0;
      return result;
    } catch (error) {
      this.failures++;
      
      if (this.failures >= this.maxFailures) {
        this.isOpen = true;
        setTimeout(() => {
          this.isOpen = false;
          this.failures = 0;
        }, this.resetTimeout);
      }
      
      throw error;
    }
  }
}`
    },
    {
      title: 'Debugging Techniques',
      content: `Debugging strategies:
• Console methods
• Debugger statement
• Source maps
• Error logging
• Performance profiling
• Memory analysis
• Remote debugging`,
      code: `// Enhanced error logging
class Logger {
  static log(level, message, error) {
    const timestamp = new Date().toISOString();
    const entry = {
      timestamp,
      level,
      message,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
        cause: error.cause
      } : null
    };
    
    // Log to console
    console[level](JSON.stringify(entry, null, 2));
    
    // Could also send to logging service
    // this.sendToLoggingService(entry);
  }
  
  static error(message, error) {
    this.log('error', message, error);
  }
  
  static warn(message, error) {
    this.log('warn', message, error);
  }
  
  static debug(message, data) {
    this.log('debug', message, data);
  }
}

// Usage with source maps
try {
  throw new Error('Debug error');
} catch (error) {
  Logger.error('An error occurred', error);
  
  // Chrome DevTools
  console.group('Debug Info');
  console.log('State:', getCurrentState());
  console.table(getDebugData());
  console.trace('Stack trace');
  console.groupEnd();
  
  // Break into debugger
  debugger;
}`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Error Handling</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Error Handling</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript error handling, including error types, custom errors, async error handling, and debugging techniques.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {section.content}
                </p>
              </div>
              <div>
                <SyntaxHighlighter 
                  language="javascript"
                  style={atomDark}
                  className="rounded-lg"
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="mt-12 bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Common Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Catching all errors without proper handling</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not implementing proper cleanup in finally blocks</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Swallowing errors without logging or recovery</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use specific error types for different scenarios</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error recovery strategies</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always log errors with sufficient context</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default ErrorHandling; 