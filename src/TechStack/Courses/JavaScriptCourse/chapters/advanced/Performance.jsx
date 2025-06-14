import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Performance = () => {
  const sections = [
    {
      title: 'Performance Basics',
      content: `JavaScript performance:
• Execution context
• Memory management
• Garbage collection
• Event loop
• Call stack
• Task queue
• Microtasks`,
      code: `// Memory management example
let heavyObject = null;

function createHeavyObject() {
  heavyObject = {
    data: new Array(1000000),
    process() {
      // Heavy computation
    }
  };
}

function cleanupHeavyObject() {
  heavyObject = null;  // Allow GC
}

// Event loop example
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output:
// Start
// End
// Promise
// Timeout`
    },
    {
      title: 'Code Optimization',
      content: `Code optimization techniques:
• Algorithm efficiency
• Data structures
• Loop optimization
• Function optimization
• Memory usage
• String manipulation
• Array operations`,
      code: `// Loop optimization
const arr = new Array(1000000);

// Bad: Creating function in loop
for (let i = 0; i < arr.length; i++) {
  arr[i] = function(x) { return x * i; };
}

// Good: Function hoisting
function multiply(x, i) {
  return x * i;
}
for (let i = 0; i < arr.length; i++) {
  arr[i] = multiply.bind(null, i);
}

// Array optimization
const numbers = [1, 2, 3, 4, 5];

// Bad: Multiple array traversals
const result = numbers
  .map(n => n * 2)
  .filter(n => n > 5)
  .reduce((sum, n) => sum + n, 0);

// Good: Single traversal
const optimizedResult = numbers.reduce((acc, n) => {
  const doubled = n * 2;
  if (doubled > 5) {
    acc.sum += doubled;
  }
  return acc;
}, { sum: 0 }).sum;`
    },
    {
      title: 'Memory Management',
      content: `Memory optimization:
• Memory leaks
• Closure cleanup
• WeakMap/WeakSet
• Object pooling
• Buffer management
• Cache strategies
• Resource disposal`,
      code: `// Memory leak prevention
class ResourceManager {
  #resources = new WeakMap();
  
  allocate(owner, resource) {
    this.#resources.set(owner, resource);
  }
  
  release(owner) {
    const resource = this.#resources.get(owner);
    if (resource) {
      resource.dispose();
      this.#resources.delete(owner);
    }
  }
}

// Object pooling
class ObjectPool {
  constructor(factory, size = 1000) {
    this.factory = factory;
    this.pool = new Array(size);
    this.init();
  }
  
  init() {
    for (let i = 0; i < this.pool.length; i++) {
      this.pool[i] = this.factory();
    }
  }
  
  acquire() {
    return this.pool.pop() || this.factory();
  }
  
  release(obj) {
    if (this.pool.length < this.pool.length) {
      this.pool.push(obj);
    }
  }
}

// Usage
const vectorPool = new ObjectPool(() => ({ x: 0, y: 0 }));
const vector = vectorPool.acquire();
// Use vector
vectorPool.release(vector);`
    },
    {
      title: 'Async Performance',
      content: `Async optimization:
• Promise optimization
• Worker threads
• Task scheduling
• Lazy loading
• Debouncing
• Throttling
• Request batching`,
      code: `// Worker thread example
const worker = new Worker('worker.js');

worker.postMessage({ data: largeArray });
worker.onmessage = function(e) {
  console.log('Processed:', e.data);
};

// Debouncing
function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Throttling
function throttle(fn, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Request batching
class RequestBatcher {
  constructor(batchSize = 10, delay = 100) {
    this.queue = [];
    this.batchSize = batchSize;
    this.delay = delay;
    this.timeout = null;
  }
  
  add(request) {
    this.queue.push(request);
    
    if (this.queue.length >= this.batchSize) {
      this.flush();
    } else if (!this.timeout) {
      this.timeout = setTimeout(() => this.flush(), this.delay);
    }
  }
  
  async flush() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    
    const batch = this.queue.splice(0, this.batchSize);
    if (batch.length > 0) {
      await this.processBatch(batch);
    }
  }
  
  async processBatch(batch) {
    // Process batch of requests
  }
}`
    },
    {
      title: 'Profiling & Monitoring',
      content: `Performance monitoring:
• Chrome DevTools
• Performance API
• Memory profiling
• CPU profiling
• Network monitoring
• Metrics collection
• Benchmarking`,
      code: `// Performance measurement
const performance = window.performance;

// Mark start
performance.mark('startOperation');

// Expensive operation
for (let i = 0; i < 1000000; i++) {
  // ...
}

// Mark end
performance.mark('endOperation');

// Measure
performance.measure(
  'operationDuration',
  'startOperation',
  'endOperation'
);

// Get measurements
const measurements = performance.getEntriesByType('measure');
console.log(measurements);

// Custom performance monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
  }
  
  start(label) {
    this.metrics.set(label, {
      startTime: performance.now(),
      measurements: []
    });
  }
  
  end(label) {
    const metric = this.metrics.get(label);
    if (metric) {
      const duration = performance.now() - metric.startTime;
      metric.measurements.push(duration);
      
      // Calculate statistics
      const avg = this.calculateAverage(metric.measurements);
      const std = this.calculateStdDev(metric.measurements, avg);
      
      console.log(\`\${label} Statistics:
        Count: \${metric.measurements.length}
        Average: \${avg.toFixed(2)}ms
        StdDev: \${std.toFixed(2)}ms\`);
    }
  }
  
  calculateAverage(numbers) {
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
  }
  
  calculateStdDev(numbers, mean) {
    const variance = numbers.reduce((sum, n) => {
      const diff = n - mean;
      return sum + diff * diff;
    }, 0) / numbers.length;
    
    return Math.sqrt(variance);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Performance</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Performance</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript performance optimization, including memory management, code optimization, async performance, and monitoring techniques.
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
            <p className="text-gray-700">Creating functions inside loops</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not cleaning up event listeners and timers</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Inefficient DOM manipulation</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use appropriate data structures and algorithms</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper memory management</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Monitor and profile performance regularly</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Performance; 