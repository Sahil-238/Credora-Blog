import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AsyncIntro = () => {
  const sections = [
    {
      title: 'Understanding Asynchronous JavaScript',
      content: `Asynchronous programming in JavaScript:
• Allows non-blocking code execution
• Handles time-consuming operations
• Manages multiple tasks simultaneously
• Uses callbacks, promises, async/await
• Essential for modern web development

Common async operations:
• API calls
• File operations
• Database queries
• Timer functions
• Event handling`,
      code: `// Synchronous code
console.log('Start');
const result = someTimeConsumingOperation();
console.log(result);
console.log('End');

// Asynchronous code
console.log('Start');
someTimeConsumingOperation((result) => {
  console.log(result);
});
console.log('End');  // This runs before result

// Modern async code
async function getData() {
  const result = await someTimeConsumingOperation();
  console.log(result);
}`
    },
    {
      title: 'Callbacks',
      content: `Callbacks are:
• Functions passed as arguments
• Called when task completes
• Traditional way of handling async
• Can lead to callback hell
• Still used in event handlers
• Often replaced by promises

Problems with callbacks:
• Nested code (callback hell)
• Error handling is complex
• Code flow is hard to follow
• Inversion of control`,
      code: `// Basic callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'John' };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

// Callback hell example
fetchUser(userId, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      fetchReplies(comments[0].id, (replies) => {
        console.log(replies);
        // Deep nesting continues...
      });
    });
  });
});

// Error handling with callbacks
function fetchData(success, error) {
  if (/* operation successful */) {
    success(data);
  } else {
    error(new Error('Failed to fetch data'));
  }
}`
    },
    {
      title: 'Event Loop',
      content: `The JavaScript Event Loop:
• Manages async operations
• Single-threaded execution
• Uses callback queue
• Handles microtasks
• Processes macrotasks
• Ensures non-blocking I/O

Components:
• Call Stack
• Callback Queue
• Microtask Queue
• Event Loop
• Web APIs`,
      code: `console.log('Start');  // 1

setTimeout(() => {
  console.log('Timeout');  // 4
}, 0);

Promise.resolve()
  .then(() => console.log('Promise'));  // 3

console.log('End');  // 2

// Output order:
// Start
// End
// Promise
// Timeout

// Example of microtasks
process.nextTick(() => {
  console.log('Next tick');
});

Promise.resolve().then(() => {
  console.log('Promise resolved');
});

setTimeout(() => {
  console.log('Timeout');
}, 0);`
    },
    {
      title: 'Timers and Intervals',
      content: `Asynchronous timing functions:
• setTimeout() - Run once
• setInterval() - Run repeatedly
• clearTimeout() - Cancel timeout
• clearInterval() - Cancel interval
• requestAnimationFrame() - Animation
• process.nextTick() - Node.js specific`,
      code: `// setTimeout
const timeoutId = setTimeout(() => {
  console.log('Delayed message');
}, 1000);

// Cancel timeout
clearTimeout(timeoutId);

// setInterval
const intervalId = setInterval(() => {
  console.log('Repeated message');
}, 1000);

// Cancel interval
clearInterval(intervalId);

// Nested setTimeout vs setInterval
function repeatedTask() {
  setTimeout(() => {
    console.log('Task executed');
    repeatedTask();  // Schedule next execution
  }, 1000);
}

// Animation frame
function animate() {
  requestAnimationFrame(() => {
    // Update animation
    animate();  // Next frame
  });
}`
    },
    {
      title: 'Error Handling in Async Code',
      content: `Handling async errors:
• try/catch blocks
• Error callbacks
• Promise rejection
• async/await errors
• Global error handlers
• Uncaught rejections

Best practices:
• Always handle errors
• Use try/catch with await
• Provide fallback values
• Log errors appropriately
• Clean up resources`,
      code: `// Callback error handling
function fetchData(success, error) {
  try {
    // Async operation
    success(data);
  } catch (err) {
    error(err);
  }
}

// Promise error handling
fetchData()
  .then(data => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  })
  .finally(() => {
    // Clean up
  });

// Async/await error handling
async function getData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;  // Re-throw or handle
  }
}

// Global handlers
window.onerror = function(message, source, line, column, error) {
  console.error('Global error:', error);
};

window.onunhandledrejection = function(event) {
  console.error('Unhandled rejection:', event.reason);
};`
    },
    {
      title: 'Async Patterns and Best Practices',
      content: `Common async patterns:
• Sequential execution
• Parallel execution
• Race conditions
• Throttling/debouncing
• Polling
• Pub/sub pattern

Best practices:
• Prefer async/await
• Handle all errors
• Avoid callback hell
• Use Promise.all()
• Clean up resources
• Consider cancellation`,
      code: `// Sequential execution
async function sequential() {
  const a = await stepOne();
  const b = await stepTwo(a);
  const c = await stepThree(b);
  return c;
}

// Parallel execution
async function parallel() {
  const [a, b, c] = await Promise.all([
    stepOne(),
    stepTwo(),
    stepThree()
  ]);
  return { a, b, c };
}

// Throttling
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Polling
function poll(fn, interval) {
  let timeoutId;
  
  const executePoll = async () => {
    try {
      const result = await fn();
      if (shouldContinue(result)) {
        timeoutId = setTimeout(executePoll, interval);
      }
    } catch (error) {
      // Handle error
    }
  };
  
  executePoll();
  return () => clearTimeout(timeoutId);
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
      <h1 className="text-4xl font-bold mb-6">Introduction to Asynchronous JavaScript</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Asynchronous Programming</h2>
        <p className="text-gray-700 mb-4">
          Learn about asynchronous programming in JavaScript, including callbacks, promises, async/await, and the event loop.
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
            <p className="text-gray-700">Not handling asynchronous errors properly</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Creating deeply nested callbacks</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Forgetting to clean up timers and subscriptions</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use async/await for cleaner asynchronous code</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always handle errors in asynchronous operations</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Consider using Promise.all() for parallel operations</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default AsyncIntro; 