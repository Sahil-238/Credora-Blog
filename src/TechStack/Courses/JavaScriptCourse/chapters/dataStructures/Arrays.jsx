import React from 'react';
import { motion } from 'framer-motion';
import TopicNavigation from '../../../../../components/TopicNavigation';
import { FiCode } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Arrays = () => {
  const sections = [
    {
      title: 'Array Basics',
      content: `JavaScript arrays provide:
• Ordered collection of values
• Zero-based indexing
• Dynamic length
• Mixed data types
• Array literal notation
• Array constructor
• Sparse arrays`,
      code: `// Array creation
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'two', { three: 3 }, [4]];
const sparse = [1, , 3];  // sparse array

// Array constructor
const array = new Array(3);  // length 3
const filled = Array(3).fill(0);  // [0, 0, 0]

// Accessing elements
console.log(numbers[0]);  // 1
console.log(numbers[numbers.length - 1]);  // 5
console.log(numbers.at(-1));  // 5 (new method)

// Modifying arrays
numbers.push(6);  // add to end
numbers.unshift(0);  // add to start
numbers.pop();  // remove from end
numbers.shift();  // remove from start`
    },
    {
      title: 'Array Methods',
      content: `Common array methods:
• map()
• filter()
• reduce()
• forEach()
• find()
• some()
• every()
• includes()`,
      code: `const numbers = [1, 2, 3, 4, 5];

// Transformation
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Filtering
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// Reduction
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 15

// Finding elements
const found = numbers.find(n => n > 3);
console.log(found);  // 4

// Testing elements
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);

// Checking inclusion
console.log(numbers.includes(3));  // true`
    },
    {
      title: 'Array Manipulation',
      content: `Array manipulation methods:
• slice()
• splice()
• concat()
• join()
• reverse()
• sort()
• flat()
• flatMap()`,
      code: `const array = [1, 2, 3, 4, 5];

// Slicing (non-mutating)
const slice = array.slice(1, 3);  // [2, 3]
const copy = array.slice();  // shallow copy

// Splicing (mutating)
array.splice(1, 2, 'a', 'b');  // remove 2,3 add 'a','b'
console.log(array);  // [1, 'a', 'b', 4, 5]

// Concatenation
const merged = [1, 2].concat([3, 4]);
// or using spread operator
const spread = [...[1, 2], ...[3, 4]];

// Joining
console.log([1, 2, 3].join('-'));  // "1-2-3"

// Sorting
const sorted = [3, 1, 4, 1, 5].sort((a, b) => a - b);
console.log(sorted);  // [1, 1, 3, 4, 5]

// Flattening
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());  // [1, 2, 3, 4, [5]]
console.log(nested.flat(2));  // [1, 2, 3, 4, 5]`
    },
    {
      title: 'Array Patterns',
      content: `Common array patterns:
• Destructuring
• Spread operator
• Rest parameters
• Array copying
• Array filtering
• Array transformation
• Chaining methods`,
      code: `// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// Spread operator
const original = [1, 2, 3];
const copy = [...original];
const combined = [...original, 4, 5];

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Method chaining
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

// Array from iterable
const arrayFromSet = Array.from(new Set([1, 2, 2, 3]));
const arrayFromString = Array.from('hello');

// Array.isArray
console.log(Array.isArray([]));  // true
console.log(Array.isArray({}));  // false`
    },
    {
      title: 'Performance Considerations',
      content: `Array performance tips:
• Length caching
• Proper method choice
• Memory usage
• Sparse vs dense
• Pre-allocation
• Typed arrays
• Optimization techniques`,
      code: `// Length caching
const arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
  // Better than checking arr.length each time
}

// Proper method choice
// map() vs forEach()
const numbers = [1, 2, 3];

// Use map when transforming
const doubled = numbers.map(n => n * 2);

// Use forEach when not returning
numbers.forEach(n => console.log(n));

// Pre-allocation
const preallocated = new Array(1000);
preallocated.fill(0);  // if needed

// Typed arrays for numeric data
const int32Array = new Int32Array(1000);
const float64Array = new Float64Array(1000);

// Avoid sparse arrays
const sparse = [1, , 3];  // bad
const dense = [1, null, 3];  // better

// Efficient concatenation
const efficient = [].concat(arr1, arr2);
// or
const spread = [...arr1, ...arr2];`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">JavaScript Arrays</h1>
      
      {/* Content sections */}
      <div className="space-y-8">
        {/* Basic Array Operations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Array Operations</h2>
          <p className="text-gray-600 mb-4">
            Arrays in JavaScript are versatile data structures that can hold multiple values in a single variable.
          </p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Creating an array
const fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('mango');           // Add to end
fruits.unshift('grape');        // Add to beginning

// Removing elements
const last = fruits.pop();      // Remove from end
const first = fruits.shift();   // Remove from beginning

// Accessing elements
const secondFruit = fruits[1];  // Index-based access`}
          </SyntaxHighlighter>
        </section>

        {/* Array Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Array Methods</h2>
          <p className="text-gray-600 mb-4">
            JavaScript provides powerful built-in methods for array manipulation.
          </p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Mapping
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Filtering
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Reducing
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Finding elements
const found = numbers.find(num => num > 3);
const index = numbers.findIndex(num => num > 3);`}
          </SyntaxHighlighter>
        </section>

        {/* Common Patterns */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Array Patterns</h2>
          <p className="text-gray-600 mb-4">
            Here are some common patterns and best practices when working with arrays.
          </p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Copying arrays
const original = [1, 2, 3];
const copy1 = [...original];           // Spread operator
const copy2 = Array.from(original);    // Array.from()
const copy3 = original.slice();        // slice()

// Merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];     // Using spread
const concatenated = arr1.concat(arr2); // Using concat()`}
          </SyntaxHighlighter>
        </section>

        {/* Performance Considerations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Considerations</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-700">
              When working with large arrays, consider these performance tips:
            </p>
            <ul className="list-disc ml-6 mt-2 text-yellow-700">
              <li>Use appropriate methods for your use case</li>
              <li>Consider using typed arrays for numeric data</li>
              <li>Be cautious with nested loops on large arrays</li>
              <li>Use array methods instead of traditional for loops when possible</li>
            </ul>
          </div>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Mistakes</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-red-700 font-semibold mb-2">Avoid these common pitfalls:</p>
            <ul className="list-disc ml-6 text-red-700">
              <li>Not checking array bounds before accessing elements</li>
              <li>Modifying arrays while iterating over them</li>
              <li>Using delete operator instead of splice/pop/shift</li>
              <li>Not considering array mutability in functions</li>
            </ul>
          </div>
        </section>
      </div>

      
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Arrays; 