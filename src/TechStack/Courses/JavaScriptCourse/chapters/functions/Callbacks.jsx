import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Callbacks = () => {
  const sections = [
    {
      title: 'Callback Functions',
      content: `A callback is a function passed as an argument to another function.

Key concepts:
• Functions as arguments
• Asynchronous operations
• Event handling
• Higher-order functions
• Error handling`,
      code: `// Basic callback
function greet(name, callback) {
  const greeting = \`Hello, \${name}!\`;
  callback(greeting);
}

greet('John', message => {
  console.log(message);  // "Hello, John!"
});

// Asynchronous callback
setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

// Event listener callback
button.addEventListener('click', () => {
  console.log('Button clicked!');
});`
    },
    {
      title: 'Synchronous Callbacks',
      content: `Synchronous callbacks are executed immediately by the calling function.

Use cases:
• Array methods
• String methods
• Object methods
• Iterators
• Data transformation`,
      code: `// Array methods
const numbers = [1, 2, 3, 4, 5];

// map callback
const doubled = numbers.map(num => num * 2);

// filter callback
const even = numbers.filter(num => num % 2 === 0);

// reduce callback
const sum = numbers.reduce((acc, num) => acc + num, 0);

// forEach callback
numbers.forEach(num => {
  console.log(num);
});

// sort callback
const fruits = ['banana', 'apple', 'orange'];
fruits.sort((a, b) => a.localeCompare(b));

// Custom higher-order function
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const squared = processArray(numbers, x => x * x);`
    },
    {
      title: 'Asynchronous Callbacks',
      content: `Asynchronous callbacks are executed at a later time, after the calling function has finished.

Common scenarios:
• AJAX requests
• File operations
• Timers
• Event handlers
• Database operations`,
      code: `// Timer callbacks
setTimeout(() => {
  console.log('Delayed message');
}, 2000);

setInterval(() => {
  console.log('Repeated message');
}, 1000);

// AJAX with callbacks
function fetchData(url, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      success(xhr.responseText);
    } else {
      error(xhr.statusText);
    }
  };
  
  xhr.onerror = () => {
    error('Network error');
  };
  
  xhr.send();
}

fetchData(
  'https://api.example.com/data',
  data => console.log('Success:', data),
  error => console.error('Error:', error)
);

// File reading (Node.js)
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('File contents:', data);
});`
    },
    {
      title: 'Error Handling',
      content: `Proper error handling is crucial when working with callbacks.

Patterns:
• Error-first callbacks
• Try-catch blocks
• Error propagation
• Default error handlers
• Error recovery`,
      code: `// Error-first callback pattern
function readConfig(path, callback) {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      callback(error);
      return;
    }
    
    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(parseError);
    }
  });
}

// Using the error-first callback
readConfig('config.json', (error, config) => {
  if (error) {
    console.error('Error reading config:', error);
    return;
  }
  console.log('Config loaded:', config);
});

// Error recovery
function fetchDataWithRetry(url, maxRetries = 3) {
  let attempts = 0;
  
  function attempt() {
    attempts++;
    
    fetch(url)
      .then(response => response.json())
      .catch(error => {
        if (attempts < maxRetries) {
          console.log(\`Retry attempt \${attempts}\`);
          attempt();
        } else {
          console.error('Max retries reached:', error);
        }
      });
  }
  
  attempt();
}`
    },
    {
      title: 'Callback Hell',
      content: `Callback hell occurs when multiple asynchronous operations are nested.

Solutions:
• Promises
• Async/await
• Named functions
• Modularization
• Control flow libraries`,
      code: `// Callback hell example
asyncOperation1(result1 => {
  asyncOperation2(result1, result2 => {
    asyncOperation3(result2, result3 => {
      asyncOperation4(result3, result4 => {
        console.log(result4);
      });
    });
  });
});

// Solution 1: Named functions
function handleResult1(result1) {
  asyncOperation2(result1, handleResult2);
}

function handleResult2(result2) {
  asyncOperation3(result2, handleResult3);
}

function handleResult3(result3) {
  asyncOperation4(result3, handleResult4);
}

function handleResult4(result4) {
  console.log(result4);
}

asyncOperation1(handleResult1);

// Solution 2: Promises
asyncOperation1()
  .then(result1 => asyncOperation2(result1))
  .then(result2 => asyncOperation3(result2))
  .then(result3 => asyncOperation4(result3))
  .then(result4 => console.log(result4))
  .catch(error => console.error(error));

// Solution 3: Async/await
async function processOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    const result4 = await asyncOperation4(result3);
    console.log(result4);
  } catch (error) {
    console.error(error);
  }
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
      <h1 className="text-4xl font-bold mb-6">Callback Functions</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Callbacks</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use callback functions for handling asynchronous operations and event-driven programming in JavaScript.
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

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Callback Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Keep callbacks small and focused</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use error-first callbacks for Node.js style APIs</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Consider using Promises or async/await for complex async operations</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Handle errors appropriately in callbacks</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Callbacks; 