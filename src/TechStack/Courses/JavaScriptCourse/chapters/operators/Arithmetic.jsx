import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Arithmetic = () => {
  const sections = [
    {
      title: 'Basic Arithmetic',
      content: `Basic arithmetic operators:
• Addition (+)
• Subtraction (-)
• Multiplication (*)
• Division (/)
• Modulus (%)
• Exponentiation (**)
• Increment (++)
• Decrement (--)`,
      code: `// Basic operations
let a = 10;
let b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.3333... (division)
console.log(a % b);   // 1 (modulus/remainder)
console.log(a ** b);  // 1000 (exponentiation)

// Increment and decrement
let x = 5;
console.log(x++);  // 5 (post-increment)
console.log(x);    // 6
console.log(++x);  // 7 (pre-increment)

console.log(x--);  // 7 (post-decrement)
console.log(x);    // 6
console.log(--x);  // 5 (pre-decrement)`
    },
    {
      title: 'Assignment Operators',
      content: `Assignment operators:
• Simple assignment (=)
• Addition assignment (+=)
• Subtraction assignment (-=)
• Multiplication assignment (*=)
• Division assignment (/=)
• Modulus assignment (%=)
• Exponentiation assignment (**=)`,
      code: `let x = 10;

// Addition assignment
x += 5;  // x = x + 5
console.log(x);  // 15

// Subtraction assignment
x -= 3;  // x = x - 3
console.log(x);  // 12

// Multiplication assignment
x *= 2;  // x = x * 2
console.log(x);  // 24

// Division assignment
x /= 4;  // x = x / 4
console.log(x);  // 6

// Modulus assignment
x %= 4;  // x = x % 4
console.log(x);  // 2

// Exponentiation assignment
x **= 3;  // x = x ** 3
console.log(x);  // 8

// Chaining assignments
let a, b, c;
a = b = c = 5;  // all variables are 5`
    },
    {
      title: 'Type Coercion',
      content: `Type coercion in arithmetic:
• Number conversion
• String concatenation
• Boolean conversion
• Undefined behavior
• NaN handling
• Infinity handling
• Type checking`,
      code: `// String concatenation vs addition
console.log(5 + 5);      // 10 (number addition)
console.log('5' + 5);    // '55' (string concatenation)
console.log(5 + '5');    // '55' (string concatenation)
console.log('5' + '5');  // '55' (string concatenation)

// Other arithmetic operations
console.log('10' - 5);   // 5 (number subtraction)
console.log('10' * 5);   // 50 (number multiplication)
console.log('10' / 5);   // 2 (number division)

// Boolean conversion
console.log(true + 1);   // 2 (true becomes 1)
console.log(false + 1);  // 1 (false becomes 0)

// Undefined and null
console.log(undefined + 1);  // NaN
console.log(null + 1);       // 1 (null becomes 0)

// NaN behavior
console.log(NaN + 5);        // NaN
console.log(NaN * 'hello');  // NaN

// Infinity
console.log(Infinity + 1);   // Infinity
console.log(-Infinity - 1);  // -Infinity
console.log(Infinity / Infinity);  // NaN`
    },
    {
      title: 'Numeric Precision',
      content: `Precision considerations:
• Floating-point precision
• Integer limits
• Decimal arithmetic
• Rounding issues
• Safe integers
• BigInt operations
• Precision handling`,
      code: `// Floating-point precision
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false

// Handling precision
function roundTo(num, places) {
  return Number(Math.round(num + 'e' + places) + 'e-' + places);
}

console.log(roundTo(0.1 + 0.2, 2));  // 0.3

// Integer limits
console.log(Number.MAX_SAFE_INTEGER);  
// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  
// -9007199254740991

// BigInt for large numbers
const bigInt = 9007199254740991n;
console.log(bigInt + 1n);  // 9007199254740992n

// Checking for safe integers
const num = 9007199254740992;
console.log(Number.isSafeInteger(num));  // false

// Decimal arithmetic library example
class Decimal {
  constructor(value) {
    this.value = value * 100;  // Store cents
  }
  
  add(other) {
    return new Decimal(
      (this.value + other.value) / 100
    );
  }
  
  toString() {
    return (this.value / 100).toFixed(2);
  }
}

const price1 = new Decimal(0.1);
const price2 = new Decimal(0.2);
console.log(price1.add(price2).toString());  // "0.30"`
    },
    {
      title: 'Performance Optimization',
      content: `Performance considerations:
• Operator precedence
• Bitwise operations
• Math object methods
• Type optimization
• Memory usage
• Computation order
• Code efficiency`,
      code: `// Operator precedence
let result = 2 + 3 * 4;  // 14
let result2 = (2 + 3) * 4;  // 20

// Bitwise operations (faster for some cases)
function isEven(n) {
  return (n & 1) === 0;
}

// Math object methods
console.log(Math.pow(2, 3));  // 8 (slower)
console.log(2 ** 3);         // 8 (faster)

// Optimizing calculations
function optimizedSum(arr) {
  let sum = 0;
  const len = arr.length;  // cache length
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}

// Using typed arrays for numeric operations
const numbers = new Float64Array(1000);
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Math.sqrt(i);
}

// Batch operations
function batchMultiply(arr, factor) {
  // Process in chunks of 1000
  const CHUNK_SIZE = 1000;
  for (let i = 0; i < arr.length; i += CHUNK_SIZE) {
    const end = Math.min(i + CHUNK_SIZE, arr.length);
    for (let j = i; j < end; j++) {
      arr[j] *= factor;
    }
  }
  return arr;
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Arithmetic Operators</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Arithmetic Operators</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript arithmetic operators, including basic operations, type coercion, precision handling, and performance considerations.
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
            <p className="text-gray-700">Not considering floating-point precision</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Misunderstanding operator precedence</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Ignoring type coercion rules</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use parentheses for clear operator precedence</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Handle floating-point arithmetic carefully</p>
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

export default Arithmetic; 