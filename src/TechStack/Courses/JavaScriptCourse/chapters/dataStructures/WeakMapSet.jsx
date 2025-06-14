import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const WeakMapSet = () => {
  const sections = [
    {
      title: 'WeakMap Basics',
      content: `WeakMap characteristics:
• Weak references to keys
• Only objects as keys
• No size property
• No iteration methods
• Garbage collection
• Memory management
• Private data storage`,
      code: `// Creating WeakMap
const weakMap = new WeakMap();

// Only objects as keys
const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

// Invalid keys
try {
  weakMap.set(42, 'value');  // TypeError
  weakMap.set('key', 'value');  // TypeError
} catch (e) {
  console.error('Only objects can be keys');
}

// Basic operations
console.log(weakMap.has(obj1));  // true
console.log(weakMap.get(obj1));  // 'value1'

weakMap.delete(obj1);
console.log(weakMap.has(obj1));  // false

// Garbage collection example
let obj = { data: 'temp' };
weakMap.set(obj, 'will be removed');
obj = null;  // object becomes eligible for GC`
    },
    {
      title: 'WeakSet Basics',
      content: `WeakSet characteristics:
• Weak references to values
• Only objects as values
• No size property
• No iteration methods
• Garbage collection
• Unique objects
• Object lifecycle`,
      code: `// Creating WeakSet
const weakSet = new WeakSet();

// Only objects as values
const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

// Invalid values
try {
  weakSet.add(42);  // TypeError
  weakSet.add('value');  // TypeError
} catch (e) {
  console.error('Only objects can be values');
}

// Basic operations
console.log(weakSet.has(obj1));  // true
weakSet.delete(obj1);
console.log(weakSet.has(obj1));  // false

// Garbage collection example
let obj = { data: 'temp' };
weakSet.add(obj);
obj = null;  // object becomes eligible for GC`
    },
    {
      title: 'Use Cases',
      content: `Common use cases:
• Private data storage
• Cache management
• Event listener tracking
• DOM node tracking
• Object capability marking
• Temporary associations
• Memory leak prevention`,
      code: `// Private data with WeakMap
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, {
      name,
      createdAt: new Date()
    });
  }
  
  getName() {
    return privateData.get(this).name;
  }
}

// DOM node tracking
const nodeData = new WeakMap();

function trackNode(node, data) {
  nodeData.set(node, data);
}

document.querySelectorAll('.tracked').forEach(node => {
  trackNode(node, { clicks: 0 });
});

// Event listener tracking
const listeners = new WeakMap();

class EventTracker {
  constructor(element) {
    const listener = () => this.handleClick();
    listeners.set(this, listener);
    element.addEventListener('click', listener);
  }
  
  cleanup(element) {
    const listener = listeners.get(this);
    if (listener) {
      element.removeEventListener('click', listener);
      listeners.delete(this);
    }
  }
  
  handleClick() {
    console.log('Clicked!');
  }
}`
    },
    {
      title: 'Memory Management',
      content: `Memory management aspects:
• Garbage collection
• Reference counting
• Memory leaks
• Weak references
• Resource cleanup
• Performance impact
• Best practices`,
      code: `// Memory leak prevention
class ResourceManager {
  #resources = new WeakMap();
  
  allocate(owner, resource) {
    this.#resources.set(owner, resource);
    
    // No need to manually clean up when
    // owner is garbage collected
  }
  
  getResource(owner) {
    return this.#resources.get(owner);
  }
}

// Cache with automatic cleanup
class Cache {
  #cache = new WeakMap();
  
  set(key, value) {
    if (typeof key !== 'object') {
      throw new TypeError('Key must be an object');
    }
    this.#cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
  
  get(key) {
    const entry = this.#cache.get(key);
    if (!entry) return undefined;
    
    // Check if cache entry is still valid
    if (Date.now() - entry.timestamp > 3600000) {
      this.#cache.delete(key);
      return undefined;
    }
    
    return entry.value;
  }
}

// DOM element tracking
class ElementTracker {
  #elements = new WeakSet();
  
  track(element) {
    if (!(element instanceof Element)) {
      throw new TypeError('Can only track DOM elements');
    }
    this.#elements.add(element);
  }
  
  isTracked(element) {
    return this.#elements.has(element);
  }
  
  // No need to manually untrack elements
  // They are automatically removed when
  // the element is removed from the DOM
}`
    },
    {
      title: 'Best Practices',
      content: `Implementation guidelines:
• Proper key/value types
• Error handling
• Memory considerations
• Performance optimization
• Security aspects
• Testing strategies
• Documentation`,
      code: `// Type checking utility
function isValidKey(key) {
  return key !== null && 
         (typeof key === 'object' || 
          typeof key === 'function');
}

// Safe WeakMap wrapper
class SafeWeakMap {
  #map = new WeakMap();
  
  set(key, value) {
    if (!isValidKey(key)) {
      throw new TypeError(
        'WeakMap key must be an object'
      );
    }
    this.#map.set(key, value);
    return this;
  }
  
  get(key) {
    if (!isValidKey(key)) return undefined;
    return this.#map.get(key);
  }
  
  has(key) {
    if (!isValidKey(key)) return false;
    return this.#map.has(key);
  }
  
  delete(key) {
    if (!isValidKey(key)) return false;
    return this.#map.delete(key);
  }
}

// WeakRef vs WeakMap comparison
class Registry {
  #strongRefs = new Map();
  #weakRefs = new WeakMap();
  
  // Strong reference - prevents GC
  addStrong(key, value) {
    this.#strongRefs.set(key, value);
  }
  
  // Weak reference - allows GC
  addWeak(key, value) {
    this.#weakRefs.set(key, value);
  }
  
  // Compare reference types
  compareRefs(key) {
    return {
      strong: this.#strongRefs.has(key),
      weak: this.#weakRefs.has(key)
    };
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
      <h1 className="text-4xl font-bold mb-6">JavaScript WeakMap and WeakSet</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Weak References</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript's WeakMap and WeakSet, their unique characteristics, and how they help with memory management.
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
            <p className="text-gray-700">Using primitive values as keys/values</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Trying to iterate over WeakMap/WeakSet</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not understanding garbage collection timing</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use for object-only collections</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error handling</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Consider memory implications</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default WeakMapSet; 