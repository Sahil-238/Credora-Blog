import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DataTypes = () => {
  const sections = [
    {
      title: 'JavaScript Data Types',
      content: `JavaScript has 8 basic data types:

1. Number: For integers and floating-point numbers
2. String: For text
3. Boolean: For true/false values
4. Undefined: For unassigned values
5. Null: For intentionally empty values
6. Object: For complex data structures
7. Symbol: For unique identifiers
8. BigInt: For large integers

JavaScript is a dynamically typed language, meaning variables can hold different types of values.`,
      code: `// Numbers
let integer = 42;
let float = 3.14;

// String
let text = "Hello World";

// Boolean
let isTrue = true;
let isFalse = false;

// Undefined
let undefinedVar;

// Null
let emptyValue = null;

// Object
let person = {
  name: "John",
  age: 30
};

// Symbol
let sym = Symbol("id");

// BigInt
let bigNumber = 9007199254740991n;`
    },
    {
      title: 'Numbers',
      content: `JavaScript has only one type of number:
• 64-bit floating-point
• Can represent integers and decimals
• Has special values: Infinity, -Infinity, and NaN

Numbers can be written with or without decimals:`,
      code: `// Regular numbers
let x = 34;
let y = 34.00;
let z = 123e5;    // 12300000
let w = 123e-5;   // 0.00123

// Special numbers
let infinite = Infinity;
let negInfinite = -Infinity;
let notANumber = NaN;

// Number operations
let sum = 10 + 20;
let division = 10 / 3;
let modulus = 10 % 3;

// Number methods
let num = 123.456;
console.log(num.toFixed(2));     // "123.46"
console.log(num.toPrecision(4)); // "123.5"`
    },
    {
      title: 'Strings',
      content: `Strings are used for storing and manipulating text.
Strings can be created using:
• Single quotes
• Double quotes
• Template literals (backticks)

Template literals allow:
• Multiline strings
• String interpolation
• Embedded expressions`,
      code: `// String creation
let single = 'Hello';
let double = "World";
let backticks = \`Hello World\`;

// String concatenation
let greeting = single + " " + double;

// Template literals
let name = "John";
let age = 30;
let message = \`Hello, my name is \${name} 
and I am \${age} years old\`;

// String methods
let text = "JavaScript";
console.log(text.length);        // 10
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.substring(0, 4)); // "Java"`
    },
    {
      title: 'Booleans',
      content: `Booleans can have only two values:
• true
• false

Booleans are often used in:
• Conditional statements
• Comparisons
• Logical operations`,
      code: `// Boolean values
let isActive = true;
let isLoggedIn = false;

// Comparison operators
let x = 5;
let y = 10;
console.log(x > y);    // false
console.log(x < y);    // true
console.log(x === 5);  // true

// Logical operators
let a = true;
let b = false;
console.log(a && b);   // false
console.log(a || b);   // true
console.log(!a);       // false`
    },
    {
      title: 'Undefined and Null',
      content: `Undefined means a variable has been declared but not assigned a value.

Null is an assignment value representing "nothing" or "empty".

Key differences:
• undefined is a type itself
• null is an object
• undefined is automatic
• null is assigned`,
      code: `// Undefined
let undefinedVar;
console.log(undefinedVar);      // undefined
console.log(typeof undefinedVar); // "undefined"

// Null
let nullVar = null;
console.log(nullVar);           // null
console.log(typeof nullVar);    // "object"

// Common uses
let user = null;      // User not loaded yet
let error = undefined; // Error not set

// Checking for null/undefined
console.log(user === null);     // true
console.log(error === undefined); // true`
    },
    {
      title: 'Objects',
      content: `Objects are collections of key-value pairs.

Objects can contain:
• Properties (values)
• Methods (functions)
• Nested objects
• Arrays

Objects are reference types, meaning they are stored and copied by reference.`,
      code: `// Object creation
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Boston"
  },
  greet: function() {
    return "Hello, " + this.name;
  }
};

// Accessing properties
console.log(person.name);      // "John"
console.log(person["age"]);    // 30

// Modifying properties
person.age = 31;
person.email = "john@example.com";

// Object methods
console.log(person.greet());   // "Hello, John"

// Object destructuring
let { name, age } = person;`
    },
    {
      title: 'Symbol and BigInt',
      content: `Symbol is a unique and immutable primitive value that can be used as a key for object properties.

BigInt is used for integers larger than 2^53 - 1.

These are newer additions to JavaScript:
• Symbol was added in ES6
• BigInt was added in ES2020`,
      code: `// Symbol
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");
console.log(sym2 === sym3);  // false

// Symbol as object key
let obj = {
  [sym1]: "value"
};
console.log(obj[sym1]);  // "value"

// BigInt
let bigInt = 9007199254740991n;
let anotherBigInt = BigInt("9007199254740991");

// BigInt operations
let sum = bigInt + 1n;
let product = bigInt * 2n;

// Cannot mix BigInt with regular numbers
// let invalid = bigInt + 1; // TypeError`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Data Types</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding JavaScript Data Types</h2>
        <p className="text-gray-700 mb-4">
          Learn about the different types of data in JavaScript and how to work with them effectively.
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
        <h3 className="text-xl font-semibold mb-4">Common Data Type Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Confusing null and undefined</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Not handling NaN properly</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Mixing BigInt with regular numbers</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Data Type Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use strict equality (===) for comparisons</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Check for undefined/null with optional chaining</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use type conversion functions explicitly</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Experiment with different data types in our interactive editor.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Open Editor
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
            View Examples
          </button>
        </div>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default DataTypes; 