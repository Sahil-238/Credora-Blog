import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Comparison = () => {
  const sections = [
    {
      title: 'Basic Comparison',
      content: `Basic comparison operators:
• Equal (==)
• Not equal (!=)
• Strict equal (===)
• Strict not equal (!==)
• Greater than (>)
• Less than (<)
• Greater than or equal (>=)
• Less than or equal (<=)`,
      code: `// Equal and not equal
console.log(5 == 5);    // true
console.log(5 == '5');  // true (type coercion)
console.log(5 != 3);    // true
console.log(5 != '5');  // false (type coercion)

// Strict equal and not equal
console.log(5 === 5);    // true
console.log(5 === '5');  // false (no type coercion)
console.log(5 !== 3);    // true
console.log(5 !== '5');  // true (no type coercion)

// Greater and less than
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 3);  // false

// String comparison
console.log('apple' < 'banana');  // true
console.log('apple' > 'Apple');   // true (lowercase > uppercase)
console.log('2' > '12');         // true (string comparison)`
    },
    {
      title: 'Type Coercion',
      content: `Type coercion rules:
• Number conversion
• String conversion
• Boolean conversion
• Object conversion
• null and undefined
• Symbol comparison
• Type precedence`,
      code: `// Number coercion
console.log(5 == '5');     // true
console.log(5 == true);    // true (true becomes 1)
console.log(0 == false);   // true (false becomes 0)
console.log(null == 0);    // false
console.log(undefined == null);  // true

// Object coercion
console.log([1] == 1);    // true ([1] becomes "1")
console.log([1] == '1');  // true
console.log({} == '[object Object]');  // true

// Complex coercion examples
console.log([] == false);   // true
console.log(![] == false);  // true
console.log([] == ![]);     // true

// Avoiding coercion with strict equality
console.log(5 === '5');     // false
console.log(true === 1);    // false
console.log(null === undefined);  // false
console.log([1] === 1);     // false

// Symbol comparison
const sym1 = Symbol('test');
const sym2 = Symbol('test');
console.log(sym1 == sym2);   // false
console.log(sym1 === sym2);  // false`
    },
    {
      title: 'Object Comparison',
      content: `Object comparison details:
• Reference equality
• Deep equality
• Property comparison
• Array comparison
• Object methods
• Custom comparison
• Performance impact`,
      code: `// Reference equality
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 == obj2);   // false
console.log(obj1 === obj2);  // false
console.log(obj1 === obj3);  // true

// Deep equality function
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || 
      typeof obj2 !== 'object' ||
      obj1 === null ||
      obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  return keys1.every(key => 
    keys2.includes(key) && 
    deepEqual(obj1[key], obj2[key])
  );
}

// Array comparison
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2);  // false
console.log(deepEqual(arr1, arr2));  // true

// Custom comparison
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  equals(other) {
    return other instanceof Person &&
           this.name === other.name &&
           this.age === other.age;
  }
}`
    },
    {
      title: 'Comparison Edge Cases',
      content: `Special comparison cases:
• NaN comparison
• Infinity comparison
• -0 and +0
• null vs undefined
• Empty values
• Mixed types
• Corner cases`,
      code: `// NaN comparisons
console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false
console.log(Number.isNaN(NaN));  // true

// Infinity
console.log(Infinity > 1000000);   // true
console.log(-Infinity < -1000000); // true
console.log(Infinity > Infinity);   // false
console.log(Infinity === Infinity); // true

// Zero comparisons
console.log(0 === -0);        // true
console.log(1/0 === 1/-0);    // false
console.log(Object.is(0, -0)); // false

// null and undefined
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null == 0);          // false
console.log(undefined == 0);      // false

// Empty values
console.log('' == 0);     // true
console.log('' == false); // true
console.log([] == false); // true
console.log({} == false); // false

// Mixed type comparisons
console.log([1,2] < '12');     // true
console.log([1,2] == '1,2');   // true
console.log([[]] == false);     // true
console.log([[]] == 0);        // true
console.log([[[[]]]] == 0);    // true`
    },
    {
      title: 'Best Practices',
      content: `Comparison best practices:
• Use strict equality
• Handle edge cases
• Type checking
• Object comparison
• Array comparison
• Error handling
• Performance tips`,
      code: `// Type-safe comparisons
function safeCompare(a, b) {
  // Handle null/undefined
  if (a == null || b == null) {
    return a === b;
  }
  
  // Handle different types
  if (typeof a !== typeof b) {
    return false;
  }
  
  // Handle NaN
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  
  // Handle objects
  if (typeof a === 'object') {
    return deepEqual(a, b);
  }
  
  // Default strict comparison
  return a === b;
}

// Array comparison utility
function compareArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  return arr1.every((item, index) => 
    safeCompare(item, arr2[index])
  );
}

// Safe number comparison
function compareNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
  
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return Number.isNaN(a) && Number.isNaN(b);
  }
  
  // Handle -0 and +0
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  
  return a === b;
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Comparison Operators</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Comparison Operators</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript comparison operators, including equality, type coercion, object comparison, and best practices.
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
            <p className="text-gray-700">Using loose equality without understanding coercion</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not handling special values like NaN</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Comparing objects by reference when deep equality is needed</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use strict equality (===) by default</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper object comparison methods</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Handle edge cases explicitly</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Comparison; 