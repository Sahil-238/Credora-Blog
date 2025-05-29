import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Arrays = () => {
  const sections = [
    {
      title: 'Introduction to Arrays',
      content: `Arrays in JavaScript are used to store multiple values in a single variable. They can hold values of different types, including numbers, strings, objects, and even other arrays.

Key points about arrays:
• Arrays are zero-indexed
• Arrays can hold mixed data types
• Array length is dynamic
• Arrays are objects in JavaScript`,
      code: `// Creating arrays
let fruits = ['apple', 'banana', 'orange'];
let mixed = [1, 'hello', true, { name: 'John' }];

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'

// Array length
console.log(fruits.length); // 3

// Adding elements
fruits.push('grape');
fruits[4] = 'mango';`
    },
    {
      title: 'Array Operations',
      content: `Common array operations include:
• Adding elements (push, unshift)
• Removing elements (pop, shift)
      • Finding elements (indexOf, includes)
• Modifying elements
• Iterating through arrays`,
      code: `let numbers = [1, 2, 3, 4, 5];

// Adding elements
numbers.push(6);        // Add to end
numbers.unshift(0);     // Add to start

// Removing elements
numbers.pop();          // Remove from end
numbers.shift();        // Remove from start

// Finding elements
console.log(numbers.indexOf(3));    // 2
console.log(numbers.includes(5));   // true

// Modifying elements
numbers[2] = 10;        // Replace element`
    },
    {
      title: 'Array Iteration',
      content: `There are several ways to iterate through arrays in JavaScript:
• for loop
• for...of loop
• forEach method
• map method
• filter method
• reduce method`,
      code: `const numbers = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of loop
for (let num of numbers) {
    console.log(num);
}

// forEach
numbers.forEach(num => console.log(num));

// map
const doubled = numbers.map(num => num * 2);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);`
    },
    {
      title: 'Array Methods',
      content: `JavaScript provides many built-in methods for array manipulation:
• concat() - Joins arrays
• slice() - Extracts parts of array
• splice() - Adds/removes elements
• sort() - Sorts elements
• reverse() - Reverses order
• join() - Converts array to string`,
      code: `let fruits = ['apple', 'banana', 'orange'];
let moreFruits = ['grape', 'mango'];

// Concatenating arrays
let allFruits = fruits.concat(moreFruits);

// Slicing arrays
let someFruits = fruits.slice(1, 3);

// Splicing arrays
fruits.splice(1, 1, 'kiwi');

// Sorting arrays
fruits.sort();

// Reversing arrays
fruits.reverse();

// Joining arrays
console.log(fruits.join(', '));`
    },
    {
      title: 'Advanced Array Concepts',
      content: `Advanced array concepts include:
• Spread operator
• Destructuring
• Array from iterable objects
• Multi-dimensional arrays
• TypedArrays for binary data`,
      code: `// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

// Destructuring
let [first, second, ...rest] = arr2;

// Array from iterable
let arrayFromString = Array.from('hello');

// Multi-dimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// TypedArray
let int32Array = new Int32Array(5);`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Arrays</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Working with Arrays</h2>
        <p className="text-gray-700 mb-4">
          Arrays are fundamental data structures in JavaScript that allow you to store and manipulate collections of data.
          Master these concepts to effectively work with data in your applications.
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
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Arrays; 