import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Sets = () => {
  const sections = [
    {
      title: 'Set Basics',
      content: `JavaScript Sets provide:
• Unique value collection
• Value types support
• Iterable interface
• Size property
• No index access
• No duplicate values
• Type coercion rules`,
      code: `// Creating Sets
const set = new Set();
const numbersSet = new Set([1, 2, 3]);
const stringSet = new Set('hello');  // h,e,l,o

// Adding values
set.add(1);
set.add('two');
set.add({ three: 3 });

// No duplicates
set.add(1);  // ignored
console.log(set.size);  // 3

// Type coercion
const mixedSet = new Set([1, '1', true]);
console.log(mixedSet.size);  // 3 (no coercion)

// Checking values
console.log(set.has(1));  // true
console.log(set.has(2));  // false`
    },
    {
      title: 'Set Operations',
      content: `Set operations include:
• Adding elements
• Deleting elements
• Clearing the set
• Checking existence
• Getting size
• Converting to array
• Iterating values`,
      code: `const set = new Set([1, 2, 3]);

// Adding and deleting
set.add(4);
set.delete(1);
console.log(set);  // Set(3) {2, 3, 4}

// Clear all elements
set.clear();
console.log(set.size);  // 0

// Convert to array
const numbers = new Set([1, 2, 3]);
const array = Array.from(numbers);
// or
const spread = [...numbers];

// Iteration
const letters = new Set(['a', 'b', 'c']);

for (const letter of letters) {
  console.log(letter);
}

letters.forEach(value => {
  console.log(value);
});`
    },
    {
      title: 'Set Methods',
      content: `Set methods and properties:
• add()
• delete()
• has()
• clear()
• size
• values()
• keys()
• entries()
• forEach()`,
      code: `const set = new Set();

// Adding values
set.add(1)
   .add(2)
   .add(3);  // chainable

// Checking membership
if (set.has(2)) {
  console.log('Found 2');
}

// Size property
console.log(set.size);  // 3

// Getting values
const values = set.values();
const keys = set.keys();  // same as values
const entries = set.entries();  // [value, value] pairs

// Iteration methods
set.forEach((value, valueAgain, set) => {
  console.log(value);  // 1, 2, 3
});

for (const [value, sameValue] of set.entries()) {
  console.log(value === sameValue);  // true
}`
    },
    {
      title: 'Set Operations',
      content: `Mathematical set operations:
• Union
• Intersection
• Difference
• Symmetric difference
• Subset
• Superset
• Disjoint`,
      code: `// Set operations
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
const union = new Set([...a, ...b]);
console.log([...union]);  // [1, 2, 3, 4]

// Intersection
const intersection = new Set(
  [...a].filter(x => b.has(x))
);
console.log([...intersection]);  // [2, 3]

// Difference (a - b)
const difference = new Set(
  [...a].filter(x => !b.has(x))
);
console.log([...difference]);  // [1]

// Symmetric difference
const symmetricDifference = new Set(
  [...a].filter(x => !b.has(x))
    .concat([...b].filter(x => !a.has(x)))
);
console.log([...symmetricDifference]);  // [1, 4]

// Subset check
function isSubset(set, subset) {
  return [...subset].every(x => set.has(x));
}

// Superset check
function isSuperset(set, superset) {
  return isSubset(superset, set);
}`
    },
    {
      title: 'Performance Considerations',
      content: `Set performance aspects:
• Lookup efficiency
• Memory usage
• Iteration speed
• Size limitations
• Implementation details
• Use cases
• Alternatives`,
      code: `// Performance comparison
const size = 1000000;
const numbers = Array.from({ length: size }, (_, i) => i);

// Array lookup
console.time('Array lookup');
const arrayHas = numbers.includes(999999);
console.timeEnd('Array lookup');

// Set lookup
const numberSet = new Set(numbers);
console.time('Set lookup');
const setHas = numberSet.has(999999);
console.timeEnd('Set lookup');

// Memory usage
const array = [1, 2, 3, 1, 2, 3];
const set = new Set(array);
console.log(array.length);  // 6
console.log(set.size);     // 3

// Efficient uniqueness check
function hasUniqueElements(array) {
  return new Set(array).size === array.length;
}

// Using Set for caching
class Cache {
  #cache = new Set();
  
  add(value) {
    if (this.#cache.size >= 1000) {
      const [firstItem] = this.#cache;
      this.#cache.delete(firstItem);
    }
    this.#cache.add(value);
  }
  
  has(value) {
    return this.#cache.has(value);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Sets</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Sets</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript Sets, including creation, operations, methods, and performance considerations.
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
            <p className="text-gray-700">Trying to access Set elements by index</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not considering object reference equality</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Forgetting Set is not array-like</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use Sets for unique value collections</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Convert to array when needed</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Consider performance implications</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Sets; 