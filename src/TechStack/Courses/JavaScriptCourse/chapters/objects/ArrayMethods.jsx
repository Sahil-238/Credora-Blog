import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ArrayMethods = () => {
  const sections = [
    {
      title: 'Array Methods Overview',
      content: `JavaScript arrays come with many built-in methods for:
• Adding/removing elements
• Finding elements
• Transforming arrays
• Iterating over elements
• Sorting and ordering
• Testing elements`,
      code: `const fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('grape');           // Add to end
fruits.unshift('mango');       // Add to start

// Removing elements
fruits.pop();                  // Remove from end
fruits.shift();               // Remove from start

// Finding elements
fruits.indexOf('banana');      // Find index
fruits.includes('apple');      // Check existence`
    },
    {
      title: 'Transformation Methods',
      content: `Methods that transform arrays:
• map() - Create new array with transformed elements
• filter() - Create new array with filtered elements
• reduce() - Reduce array to single value
• slice() - Extract portion of array
• concat() - Combine arrays`,
      code: `const numbers = [1, 2, 3, 4, 5];

// Map: multiply each by 2
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Filter: keep even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);   // [2, 4]

// Reduce: sum all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);     // 15

// Slice: get subset
const subset = numbers.slice(1, 4);
console.log(subset);  // [2, 3, 4]

// Concat: combine arrays
const combined = numbers.concat([6, 7, 8]);
console.log(combined);  // [1, 2, 3, 4, 5, 6, 7, 8]`
    },
    {
      title: 'Iteration Methods',
      content: `Methods for iterating over arrays:
• forEach() - Execute function for each element
• some() - Test if any element passes condition
• every() - Test if all elements pass condition
• find() - Find first matching element
• findIndex() - Find index of first match`,
      code: `const items = [
  { id: 1, name: 'Book', price: 20 },
  { id: 2, name: 'Pen', price: 5 },
  { id: 3, name: 'Notebook', price: 15 }
];

// forEach
items.forEach(item => {
  console.log(\`\${item.name}: $\${item.price}\`);
});

// some: check if any item costs more than $10
const hasExpensive = items.some(item => item.price > 10);
console.log(hasExpensive);  // true

// every: check if all items cost less than $30
const allAffordable = items.every(item => item.price < 30);
console.log(allAffordable);  // true

// find: get first item costing more than $10
const expensive = items.find(item => item.price > 10);
console.log(expensive);  // { id: 1, name: 'Book', price: 20 }

// findIndex: get index of 'Pen'
const penIndex = items.findIndex(item => item.name === 'Pen');
console.log(penIndex);  // 1`
    },
    {
      title: 'Sorting and Ordering',
      content: `Methods for sorting and ordering arrays:
• sort() - Sort elements
• reverse() - Reverse order
• Note: sort() converts elements to strings by default
• Use compare function for custom sorting`,
      code: `// Basic sorting (alphabetical)
const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits);  // ['apple', 'banana', 'orange']

// Reverse order
fruits.reverse();
console.log(fruits);  // ['orange', 'banana', 'apple']

// Numeric sorting
const numbers = [10, 5, 8, 1, 3];
numbers.sort((a, b) => a - b);  // Ascending
console.log(numbers);  // [1, 3, 5, 8, 10]

// Complex object sorting
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

// Sort by age
people.sort((a, b) => a.age - b.age);
console.log(people);

// Sort by name
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);`
    },
    {
      title: 'Array Modification Methods',
      content: `Methods that modify the original array:
• splice() - Add/remove elements
• fill() - Fill array with value
• copyWithin() - Copy elements within array
These methods mutate the original array.`,
      code: `const arr = [1, 2, 3, 4, 5];

// splice: remove elements
arr.splice(2, 1);  // Remove 1 element at index 2
console.log(arr);  // [1, 2, 4, 5]

// splice: add elements
arr.splice(2, 0, 3);  // Add 3 at index 2
console.log(arr);  // [1, 2, 3, 4, 5]

// fill: fill with value
const filled = new Array(3).fill(0);
console.log(filled);  // [0, 0, 0]

// copyWithin
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);  // Copy from index 3 to index 0
console.log(numbers);  // [4, 5, 3, 4, 5]`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Array Methods</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Array Methods</h2>
        <p className="text-gray-700 mb-4">
          Learn about the powerful built-in methods available for JavaScript arrays and how to use them effectively.
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
            <p className="text-gray-700">Forgetting that some methods modify the original array</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not providing a compare function for sorting numbers</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Using index-based methods on empty arrays</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use immutable methods when possible (map, filter, reduce)</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Chain methods responsibly to maintain readability</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Consider performance when working with large arrays</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default ArrayMethods; 