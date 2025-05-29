import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Assignment = () => {
  const sections = [
    {
      title: 'JavaScript Assignment Operators',
      content: `Assignment operators assign values to JavaScript variables.

The basic assignment operator is =, which assigns the value on the right to the variable on the left.

There are also compound assignment operators that combine an arithmetic operation with assignment:
• += Addition assignment
• -= Subtraction assignment
• *= Multiplication assignment
• /= Division assignment
• %= Modulus assignment
• **= Exponentiation assignment`,
      code: `// Basic assignment
let x = 10;

// Compound assignment
x += 5;  // Same as: x = x + 5
x -= 3;  // Same as: x = x - 3
x *= 2;  // Same as: x = x * 2
x /= 4;  // Same as: x = x / 4
x %= 3;  // Same as: x = x % 3
x **= 2; // Same as: x = x ** 2`
    },
    {
      title: 'Multiple Assignment',
      content: `You can assign values to multiple variables in one line.

You can also assign the same value to multiple variables in one line.`,
      code: `// Multiple assignment
let a = 5, b = 10, c = 15;

// Same value to multiple variables
let x, y, z;
x = y = z = 0;

// Destructuring assignment
let [first, second] = [1, 2];
let {name, age} = {name: "John", age: 30};`
    },
    {
      title: 'Assignment with Operations',
      content: `Assignment operators can be combined with operations.

The operation is performed before the assignment.`,
      code: `let x = 10;
let y = 5;

// Addition and assignment
x += y;      // x = 15

// Multiplication and assignment
x *= 2;      // x = 30

// Division and assignment
x /= 3;      // x = 10

// String concatenation and assignment
let str = "Hello";
str += " World";  // str = "Hello World"`
    },
    {
      title: 'Assignment with Type Conversion',
      content: `JavaScript automatically converts types during assignment operations.

Be careful with automatic type conversion as it might lead to unexpected results.`,
      code: `// Number to String
let num = 5;
let str = "Value is: ";
str += num;        // "Value is: 5"

// String to Number
let x = "5";
x *= 2;            // 10 (number)

// Boolean to Number
let bool = true;
let result = bool + 1;  // 2

// Undefined and Null
let a;
let b = null;
let c = undefined;
console.log(a);    // undefined
console.log(b);    // null
console.log(c);    // undefined`
    },
    {
      title: 'Chaining Assignments',
      content: `Assignment operators can be chained to assign the same value to multiple variables.

The assignment operator returns the assigned value, which allows for chaining.`,
      code: `// Chaining assignments
let a, b, c;
a = b = c = 5;

// With operations
let x, y, z;
x = y = z = 2 + 3;

// Complex chaining
let num1, num2, num3;
num1 = num2 = num3 = Math.floor(Math.random() * 10);`
    },
    {
      title: 'Assignment Best Practices',
      content: `Here are some best practices for using assignment operators:

• Always declare variables before using them
• Use const when the value won't change
• Use let when the value might change
• Avoid var (it has function scope instead of block scope)
• Be careful with type coercion
• Use explicit type conversion when needed`,
      code: `// Good practices
const PI = 3.14159;        // Constant value
let counter = 0;           // Value will change
let total = 0;            // Initialize before use

// Type conversion
let input = "42";
let number = Number(input);  // Explicit conversion

// Avoid these patterns
x = 5;                    // Undeclared variable
var y = 10;              // Using var
let result = "5" - 2;    // Implicit conversion`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Assignment Operators</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Assignment Operations</h2>
        <p className="text-gray-700 mb-4">
          Learn how to assign values to variables in JavaScript using different assignment operators.
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
        <h3 className="text-xl font-semibold mb-4">Common Assignment Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using assignment operator (=) instead of comparison operator (==)</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Not declaring variables before assignment</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Unexpected type coercion during compound assignment</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Assignment Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Always declare variables with let or const</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Initialize variables when declaring them</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use explicit type conversion when needed</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice using different assignment operators in our interactive editor.
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

export default Assignment; 