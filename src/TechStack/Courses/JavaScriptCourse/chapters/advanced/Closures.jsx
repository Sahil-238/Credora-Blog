import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Closures = () => {
  const sections = [
    {
      title: 'Understanding Closures',
      content: `JavaScript closures provide:
• Lexical scoping
• Data privacy
• State preservation
• Function factories
• Module patterns
• Callback context
• Memory management`,
      code: `// Basic closure example
function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
console.log(counter.decrement());  // 1

// count is not accessible directly
console.log(counter.count);  // undefined`
    },
    {
      title: 'Closure Patterns',
      content: `Common closure patterns:
• Module pattern
• Factory functions
• Partial application
• Currying
• Memoization
• Event handlers
• Iterator pattern`,
      code: `// Module pattern
const calculator = (function() {
  // Private members
  let result = 0;
  
  function validate(n) {
    return typeof n === 'number';
  }
  
  // Public API
  return {
    add(n) {
      if (validate(n)) result += n;
      return this;
    },
    subtract(n) {
      if (validate(n)) result -= n;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

// Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// Usage
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));     // 6
console.log(add(1, 2)(3));     // 6
console.log(add(1)(2, 3));     // 6`
    },
    {
      title: 'Practical Applications',
      content: `Closure applications:
• Private variables
• Event handling
• Async operations
• Caching/memoization
• Function decoration
• State management
• API design`,
      code: `// Memoization
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit');
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Usage
const expensiveFunction = memoize((n) => {
  console.log('Computing...');
  return n * 2;
});

console.log(expensiveFunction(5));  // Computing... 10
console.log(expensiveFunction(5));  // Cache hit 10

// Event handling with closure
function createButtonHandler(id) {
  let clicks = 0;
  
  return function() {
    clicks++;
    console.log(\`Button \${id} clicked \${clicks} times\`);
  };
}

const handleClick = createButtonHandler('btn1');
// Later in event listener
// button.addEventListener('click', handleClick);`
    },
    {
      title: 'Advanced Patterns',
      content: `Advanced closure patterns:
• Composition
• Middleware
• Decorators
• Generators
• Async patterns
• Error handling
• Memory optimization`,
      code: `// Function composition
const compose = (...fns) => x =>
  fns.reduceRight((v, f) => f(v), x);

const pipe = (...fns) => x =>
  fns.reduce((v, f) => f(v), x);

// Middleware pattern
function createMiddleware() {
  const middlewares = [];

  return {
    use(fn) {
      middlewares.push(fn);
    },
    execute(input) {
      return middlewares.reduce(
        (promise, middleware) => promise.then(middleware),
        Promise.resolve(input)
      );
    }
  };
}

// Decorator pattern
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  pi() { return 3.14; }
}

// Generator with closure
function* createIdGenerator() {
  let id = 0;
  while (true) {
    yield \`id_\${id++}\`;
  }
}`
    },
    {
      title: 'Memory Management',
      content: `Closure memory considerations:
• Memory leaks
• Garbage collection
• Circular references
• Weak references
• Performance impact
• Cleanup strategies
• Best practices`,
      code: `// Memory leak example
function createLeakyClosure() {
  const largeData = new Array(1000000);
  
  return function() {
    console.log(largeData.length);
  };
}

// Better version with cleanup
function createCleanClosure() {
  let largeData = new Array(1000000);
  
  const closure = function() {
    console.log(largeData.length);
  };
  
  closure.cleanup = function() {
    largeData = null;  // Allow GC
  };
  
  return closure;
}

// WeakMap for private data
const privateData = new WeakMap();

class SafeClass {
  constructor() {
    privateData.set(this, {
      data: new Array(1000000)
    });
  }
  
  doSomething() {
    const data = privateData.get(this);
    console.log(data.length);
  }
  
  cleanup() {
    privateData.delete(this);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Closures</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Closures</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript closures, including lexical scoping, data privacy, and practical applications.
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
            <p className="text-gray-700">Creating memory leaks with unnecessary references</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not cleaning up event listeners in closures</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Misunderstanding variable scope in loops</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement cleanup methods for large data structures</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use WeakMap/WeakSet for better memory management</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Keep closure scope as small as possible</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Closures; 