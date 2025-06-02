import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Arithmetic = () => {
  const sections = [
    {
      title: 'JavaScript Arithmetic Operators',
      content: `Arithmetic operators perform arithmetic operations on numbers.

The basic arithmetic operators are:
• + Addition
• - Subtraction
• * Multiplication
• / Division
• % Modulus (Division Remainder)
• ** Exponentiation
• ++ Increment
• -- Decrement`,
      code: `// Basic arithmetic operations
let a = 10;
let b = 3;

let addition = a + b;       // 13
let subtraction = a - b;    // 7
let multiplication = a * b; // 30
let division = a / b;      // 3.333...
let modulus = a % b;       // 1
let exponentiation = a ** b; // 1000`
    },
    {
      title: 'Addition Operator',
      content: `The addition operator (+) adds numbers.

When used with strings, it concatenates (joins) them.

Note: Adding a number and a string will result in string concatenation!`,
      code: `// Number addition
let x = 5 + 2;          // 7
let y = 5 + 2 + 3;     // 10

// String concatenation
let text = "Hello" + " " + "World";  // "Hello World"

// Mixed operations
let result1 = 5 + 2 + "3";     // "73"   (number + number + string)
let result2 = "3" + 5 + 2;     // "352"  (string + number + number)
let result3 = 2 + "3" + 5;     // "235"  (number + string + number)`
    },
    {
      title: 'Subtraction Operator',
      content: `The subtraction operator (-) subtracts numbers.

When used with non-numbers, JavaScript will try to convert the values to numbers.`,
      code: `// Number subtraction
let x = 10 - 5;        // 5
let y = 5.5 - 2.5;     // 3

// With type conversion
let result1 = "10" - 5;      // 5    (string converted to number)
let result2 = 10 - "5";      // 5    (string converted to number)
let result3 = "10" - "5";    // 5    (both strings converted to numbers)
let result4 = "Hello" - 5;   // NaN  (cannot convert "Hello" to number)`
    },
    {
      title: 'Multiplication and Division',
      content: `The multiplication (*) operator multiplies numbers.
The division (/) operator divides numbers.

These operators also attempt type conversion when used with non-numbers.`,
      code: `// Multiplication
let product1 = 4 * 3;        // 12
let product2 = "5" * 2;      // 10   (string converted to number)
let product3 = "Hello" * 2;  // NaN

// Division
let quotient1 = 10 / 2;      // 5
let quotient2 = 10 / 3;      // 3.3333...
let quotient3 = "10" / 2;    // 5    (string converted to number)
let quotient4 = 10 / 0;      // Infinity
let quotient5 = -10 / 0;     // -Infinity
let quotient6 = 0 / 0;       // NaN`
    },
    {
      title: 'Modulus (Remainder)',
      content: `The modulus operator (%) returns the division remainder.

It's commonly used to:
• Check if a number is even or odd
• Keep a number within a range
• Find remainders in division operations`,
      code: `// Basic modulus operations
let remainder1 = 10 % 3;    // 1
let remainder2 = 15 % 4;    // 3
let remainder3 = 9 % 3;     // 0

// Check if number is even/odd
let isEven = (number % 2 === 0);

// Keep number in range (0-11)
let hour = 15 % 12;         // 3

// With decimals
let remainder4 = 10.5 % 3;  // 1.5`
    },
    {
      title: 'Increment and Decrement',
      content: `The increment operator (++) increases a number by 1.
The decrement operator (--) decreases a number by 1.

These operators can be used as:
• Prefix (++x): increments and returns new value
• Postfix (x++): returns original value, then increments`,
      code: `// Increment
let x = 5;
let y = ++x;    // x is 6, y is 6
let z = x++;    // z is 6, x is 7

// Decrement
let a = 5;
let b = --a;    // a is 4, b is 4
let c = a--;    // c is 4, a is 3

// In loops
for (let i = 0; i < 3; i++) {
  console.log(i);  // 0, 1, 2
}

// Common mistakes
let num = 5;
console.log(num++);  // 5 (prints then increments)
console.log(num);    // 6 (now incremented)`
    },
    {
      title: 'Operator Precedence',
      content: `Arithmetic operators follow mathematical precedence rules:

1. Parentheses ()
2. Exponents **
3. Multiplication * and Division /
4. Addition + and Subtraction -

Use parentheses to ensure operations happen in the intended order.`,
      code: `// Operator precedence examples
let result1 = 2 + 3 * 4;         // 14 (not 20)
let result2 = (2 + 3) * 4;       // 20
let result3 = 2 + 3 * 4 ** 2;    // 50
let result4 = (2 + 3) * (4 + 1); // 25

// Complex calculations
let complex = 2 + 3 * 4 / 2 - 1;
// Evaluated as: 2 + ((3 * 4) / 2) - 1
// Evaluated as: 2 + (12 / 2) - 1
// Evaluated as: 2 + 6 - 1
// Result: 7`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Arithmetic Operators</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Arithmetic Operations</h2>
        <p className="text-gray-700 mb-4">
          Learn how to perform mathematical calculations in JavaScript using arithmetic operators.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="prose max-w-none mb-6">
              <p className="whitespace-pre-line text-gray-700">{section.content}</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-lg font-semibold">Example</h3>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <FiPlay className="w-5 h-5" />
                </button>
              </div>
              <SyntaxHighlighter 
                language="javascript"
                style={atomDark}
                className="rounded-lg"
              >
                {section.code}
              </SyntaxHighlighter>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="mt-12 bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Common Arithmetic Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Forgetting about operator precedence</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Mixing string concatenation with addition</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Misunderstanding prefix vs postfix increment/decrement</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Arithmetic Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use parentheses to make operator precedence explicit</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Convert strings to numbers explicitly when needed</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Be careful with floating-point arithmetic</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice arithmetic operations in our interactive editor.
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

export default Arithmetic; 