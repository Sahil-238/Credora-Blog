import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Operators = () => {
  const sections = [
    {
      title: 'JavaScript Operators',
      content: `JavaScript operators perform operations on operands (values and variables).

The different types of JavaScript operators:
• Arithmetic Operators
• Assignment Operators
• Comparison Operators
• Logical Operators
• Type Operators
• Bitwise Operators`,
      code: `// Examples of different operators
let x = 5;          // Assignment operator
let sum = 5 + 2;    // Arithmetic operator
let isEqual = x == 5; // Comparison operator
let and = true && false; // Logical operator
let type = typeof x;    // Type operator`
    },
    {
      title: 'Arithmetic Operators',
      content: `Arithmetic operators perform mathematical operations:
• + Addition
• - Subtraction
• * Multiplication
• / Division
• % Modulus (remainder)
• ** Exponentiation
• ++ Increment
• -- Decrement`,
      code: `// Basic arithmetic
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Increment/Decrement
let count = 5;
count++;      // Post-increment
++count;      // Pre-increment
count--;      // Post-decrement
--count;      // Pre-decrement`
    },
    {
      title: 'Assignment Operators',
      content: `Assignment operators assign values to variables:
• = Simple assignment
• += Add and assign
• -= Subtract and assign
• *= Multiply and assign
• /= Divide and assign
• %= Modulus and assign
• **= Exponentiation and assign`,
      code: `let x = 10;

// Assignment operators
x += 5;      // x = x + 5
console.log(x);  // 15

x -= 3;      // x = x - 3
console.log(x);  // 12

x *= 2;      // x = x * 2
console.log(x);  // 24

x /= 4;      // x = x / 4
console.log(x);  // 6

x %= 4;      // x = x % 4
console.log(x);  // 2

x **= 3;     // x = x ** 3
console.log(x);  // 8`
    },
    {
      title: 'Comparison Operators',
      content: `Comparison operators compare values:
• == Equal to (value)
• === Equal to (value and type)
• != Not equal to (value)
• !== Not equal to (value and type)
• > Greater than
• < Less than
• >= Greater than or equal
• <= Less than or equal`,
      code: `// Comparison operators
let a = 5;
let b = "5";

console.log(a == b);   // true (value equality)
console.log(a === b);  // false (strict equality)
console.log(a != b);   // false
console.log(a !== b);  // true

console.log(a > 4);    // true
console.log(a < 6);    // true
console.log(a >= 5);   // true
console.log(a <= 4);   // false

// Common pitfalls
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(0 == false);         // true
console.log(0 === false);        // false`
    },
    {
      title: 'Logical Operators',
      content: `Logical operators perform logical operations:
• && Logical AND
• || Logical OR
• ! Logical NOT
• ?? Nullish coalescing

These operators are often used in conditional statements and for default values.`,
      code: `// Logical operators
let isAdmin = true;
let isLoggedIn = true;

// Logical AND
if (isAdmin && isLoggedIn) {
    console.log('Welcome admin!');
}

// Logical OR
let userRole = isAdmin || 'guest';

// Logical NOT
if (!isLoggedIn) {
    console.log('Please log in');
}

// Nullish coalescing
let user = null;
let defaultUser = user ?? 'Anonymous';
console.log(defaultUser);  // 'Anonymous'

// Short-circuit evaluation
let result = isLoggedIn && 'Welcome';
let fallback = false || 'Default';`
    },
    {
      title: 'String Operators',
      content: `String operators work with text:
• + Concatenation
• += Concatenation assignment

Template literals provide a more modern way to work with strings using backticks (\`).`,
      code: `// String concatenation
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);  // "John Doe"

// String concatenation assignment
let greeting = "Hello ";
greeting += "World!";
console.log(greeting);  // "Hello World!"

// Template literals (modern way)
let age = 30;
let message = \`\${firstName} is \${age} years old\`;
console.log(message);  // "John is 30 years old"

// Multiline strings with template literals
let html = \`
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
\`;`
    },
    {
      title: 'Special Operators',
      content: `JavaScript has several special operators:
• typeof - Returns type of variable
• instanceof - Checks object type
• ?.  - Optional chaining
• ... - Spread/Rest operator
• delete - Deletes object property
• in - Checks if property exists`,
      code: `// typeof operator
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"

// instanceof
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // true

// Optional chaining
let user = { 
    address: { 
        street: "Main St" 
    } 
};
console.log(user?.address?.street);  // "Main St"

// Spread operator
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];

// Delete operator
let obj = { x: 1, y: 2 };
delete obj.x;

// in operator
console.log("x" in obj);  // false
console.log("y" in obj);  // true`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Operators</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Operators</h2>
        <p className="text-gray-700 mb-4">
          Operators are essential symbols that tell JavaScript to perform specific mathematical, relational,
          or logical operations. Understanding operators is crucial for performing calculations and making decisions in your code.
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
        <h3 className="text-xl font-semibold mb-4">Common Mistakes with Operators</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using == instead of === for comparison</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Forgetting operator precedence rules</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Misusing increment/decrement operators</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices with Operators</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Always use === for comparison unless == is specifically needed</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use parentheses to make operator precedence explicit</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Be careful with type coercion in operations</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice using different operators in our interactive editor.
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

export default Operators; 