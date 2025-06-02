import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Maps = () => {
  const sections = [
    {
      title: 'Map Basics',
      content: `JavaScript Maps provide:
• Key-value pairs
• Any type as keys
• Ordered entries
• Size property
• Iterable interface
• No key coercion
• Unique keys`,
      code: `// Creating Maps
const map = new Map();
const initial = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);

// Adding entries
map.set('string', 'value');
map.set(42, 'number key');
map.set(true, 'boolean key');
map.set({ obj: 1 }, 'object key');
map.set(() => {}, 'function key');

// Getting values
console.log(map.get('string'));  // 'value'
console.log(map.get(42));        // 'number key'

// Checking entries
console.log(map.has('string'));  // true
console.log(map.size);           // 5

// Object vs Map keys
const obj = {};
obj[true] = 'value1';
obj['true'] = 'value2';
console.log(obj[true]);  // 'value2' (coercion)

const map2 = new Map();
map2.set(true, 'value1');
map2.set('true', 'value2');
console.log(map2.get(true));  // 'value1' (no coercion)`
    },
    {
      title: 'Map Methods',
      content: `Map methods and properties:
• set()
• get()
• has()
• delete()
• clear()
• size
• keys()
• values()
• entries()
• forEach()`,
      code: `const map = new Map();

// Setting values (chainable)
map.set('a', 1)
   .set('b', 2)
   .set('c', 3);

// Getting values
console.log(map.get('a'));  // 1
console.log(map.get('d'));  // undefined

// Checking and deleting
if (map.has('b')) {
  map.delete('b');
}

// Size and clearing
console.log(map.size);  // 2
map.clear();
console.log(map.size);  // 0

// Iteration methods
const items = new Map([
  ['apple', 1],
  ['banana', 2]
]);

// Keys iterator
for (const key of items.keys()) {
  console.log(key);  // 'apple', 'banana'
}

// Values iterator
for (const value of items.values()) {
  console.log(value);  // 1, 2
}

// Entries iterator
for (const [key, value] of items.entries()) {
  console.log(\`\${key}: \${value}\`);
}

// ForEach method
items.forEach((value, key) => {
  console.log(\`\${key}: \${value}\`);
});`
    },
    {
      title: 'Map vs Object',
      content: `Comparing Maps and Objects:
• Key types
• Size tracking
• Iteration order
• Performance
• JSON handling
• Prototype chain
• Use cases
• Memory usage`,
      code: `// Key types
const map = new Map();
map.set({}, 'object key');    // works
map.set(() => {}, 'function key');  // works

const obj = {};
obj[{}] = 'object key';       // converts to '[object Object]'
obj[() => {}] = 'function key';  // converts to string

// Size
const map2 = new Map([['a', 1], ['b', 2]]);
console.log(map2.size);  // 2

const obj2 = { a: 1, b: 2 };
console.log(Object.keys(obj2).length);  // 2

// Iteration order
const map3 = new Map([
  [1, 'one'],
  [2, 'two']
]);
for (const [key, value] of map3) {
  // Guaranteed order
  console.log(\`\${key}: \${value}\`);
}

// Performance comparison
const SIZE = 1000000;

console.time('Map');
const map4 = new Map();
for (let i = 0; i < SIZE; i++) {
  map4.set(i, i);
}
console.timeEnd('Map');

console.time('Object');
const obj4 = {};
for (let i = 0; i < SIZE; i++) {
  obj4[i] = i;
}
console.timeEnd('Object');

// JSON handling
const map5 = new Map([['a', 1], ['b', 2]]);
const json = JSON.stringify([...map5]);  // manual conversion

// Converting between Map and Object
const obj5 = { a: 1, b: 2 };
const map6 = new Map(Object.entries(obj5));
const backToObj = Object.fromEntries(map6);`
    },
    {
      title: 'Advanced Map Patterns',
      content: `Advanced Map usage:
• Weak references
• Caching
• Event handling
• State management
• Data relationships
• Bidirectional maps
• Composite keys`,
      code: `// WeakMap for memory-sensitive caching
const cache = new WeakMap();

function expensiveOperation(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  
  const result = /* expensive computation */;
  cache.set(obj, result);
  return result;
}

// Bidirectional map
class BiMap {
  #forward = new Map();
  #reverse = new Map();
  
  set(key, value) {
    this.#forward.set(key, value);
    this.#reverse.set(value, key);
  }
  
  getByKey(key) {
    return this.#forward.get(key);
  }
  
  getByValue(value) {
    return this.#reverse.get(value);
  }
}

// Composite keys
class CompositeMap {
  #map = new Map();
  
  #makeKey(key1, key2) {
    return JSON.stringify([key1, key2]);
  }
  
  set(key1, key2, value) {
    this.#map.set(this.#makeKey(key1, key2), value);
  }
  
  get(key1, key2) {
    return this.#map.get(this.#makeKey(key1, key2));
  }
}

// Event handling with Map
class EventEmitter {
  #handlers = new Map();
  
  on(event, handler) {
    if (!this.#handlers.has(event)) {
      this.#handlers.set(event, new Set());
    }
    this.#handlers.get(event).add(handler);
  }
  
  emit(event, data) {
    const handlers = this.#handlers.get(event);
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }
}`
    },
    {
      title: 'Performance Optimization',
      content: `Map performance tips:
• Memory management
• Iteration efficiency
• Key design
• Garbage collection
• Batch operations
• Data structure choice
• Implementation details`,
      code: `// Memory-efficient data structure
class LRUCache {
  #map;
  #maxSize;
  
  constructor(maxSize) {
    this.#map = new Map();
    this.#maxSize = maxSize;
  }
  
  get(key) {
    if (!this.#map.has(key)) return undefined;
    
    const value = this.#map.get(key);
    // Refresh position
    this.#map.delete(key);
    this.#map.set(key, value);
    return value;
  }
  
  set(key, value) {
    if (this.#map.has(key)) {
      this.#map.delete(key);
    } else if (this.#map.size >= this.#maxSize) {
      // Remove oldest entry
      const firstKey = this.#map.keys().next().value;
      this.#map.delete(firstKey);
    }
    this.#map.set(key, value);
  }
}

// Batch operations
function batchUpdate(map, entries) {
  const tempMap = new Map(map);
  for (const [key, value] of entries) {
    tempMap.set(key, value);
  }
  return tempMap;
}

// Efficient key lookup
class FastMap {
  #primitive = new Map();
  #objects = new Map();
  
  set(key, value) {
    if (this.#isPrimitive(key)) {
      this.#primitive.set(key, value);
    } else {
      this.#objects.set(key, value);
    }
  }
  
  get(key) {
    return this.#isPrimitive(key)
      ? this.#primitive.get(key)
      : this.#objects.get(key);
  }
  
  #isPrimitive(value) {
    return value === null ||
           (typeof value !== 'object' &&
            typeof value !== 'function');
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Maps</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Maps</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript Maps, including creation, methods, comparison with objects, and advanced patterns.
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
            <p className="text-gray-700">Using objects as keys without considering reference equality</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not handling Map serialization properly</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Choosing Map when an object would be more appropriate</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use Maps when keys are not strings/symbols</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Consider WeakMap for memory-sensitive cases</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper cleanup for large Maps</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Maps; 