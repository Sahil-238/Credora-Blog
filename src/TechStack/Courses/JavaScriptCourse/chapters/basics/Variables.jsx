import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Variables = () => {
  const sections = [
    {
      title: 'What are Variables?',
      content: `Variables are containers for storing data values. In JavaScript:
• Variables are used to store data values
• Variables are declared using var, let, or const
• Variables can hold different types of data
• Variables can be reassigned (except const)
• Variables have scope and hoisting rules`,
      code: `// Declaring variables
let message = "Hello";
var count = 42;
const PI = 3.14159;

// Changing variable values
message = "World";  // OK
count = 43;        // OK
// PI = 3.14;      // Error: can't reassign const

// Multiple declarations
let a = 1, b = 2, c = 3;

// Declaration without initialization
let uninitializedVar;
console.log(uninitializedVar); // undefined`
    },
    {
      title: 'Variable Declaration Keywords',
      content: `JavaScript has three keywords for declaring variables:

let:
• Block-scoped
• Can be reassigned
• Cannot be redeclared in same scope
• Not hoisted

const:
• Block-scoped
• Cannot be reassigned
• Cannot be redeclared
• Must be initialized

var:
• Function-scoped
• Can be reassigned
• Can be redeclared
• Hoisted`,
      code: `// let examples
let x = 10;
x = 20;           // OK
// let x = 30;    // Error: can't redeclare

// const examples
const API_KEY = "abc123";
// API_KEY = "xyz";  // Error: can't reassign
const USER = { name: "John" };
USER.name = "Jane";   // OK: object properties can change

// var examples
var count = 1;
var count = 2;    // OK: can redeclare
function example() {
    var local = "only in function";
}`
    },
    {
      title: 'Variable Scope',
      content: `Variable scope determines where variables are accessible:

Global Scope:
• Declared outside any function
• Accessible everywhere
• Attached to window object (var)

Function Scope:
• Declared inside function
• Only accessible in function
• var is function-scoped

Block Scope:
• Declared inside block
• let and const are block-scoped
• var ignores block scope`,
      code: `// Global scope
let globalVar = "accessible everywhere";

function testScope() {
    // Function scope
    let functionVar = "only here";
    var alsoFunctionVar = "only here";
    
    if (true) {
        // Block scope
        let blockVar = "only in block";
        var notBlockVar = "function scope";
        console.log(blockVar);     // OK
    }
    // console.log(blockVar);      // Error
    console.log(notBlockVar);      // OK
}

console.log(globalVar);            // OK
// console.log(functionVar);       // Error`
    },
    {
      title: 'Variable Hoisting',
      content: `Hoisting is JavaScript's behavior of moving declarations to the top:

var hoisting:
• Declaration is hoisted
• Initialization is not hoisted
• Can use before declaration (undefined)

let/const hoisting:
• Declarations are hoisted
• Cannot use before declaration
• Temporal Dead Zone (TDZ)`,
      code: `// var hoisting
console.log(x);        // undefined
var x = 5;

// let/const hoisting
// console.log(y);     // Error: TDZ
let y = 5;

// Function scope and hoisting
function example() {
    var x = 1;
    {
        console.log(x);  // undefined
        var x = 2;
    }
}

// Block scope and TDZ
{
    // console.log(z);  // Error: TDZ
    let z = 3;
}`
    },
    {
      title: 'Best Practices',
      content: `Follow these best practices for variables:
• Use const by default
• Use let when values need to change
• Avoid var
• Use meaningful names
• Use camelCase for variables
• Use UPPER_CASE for constants
• Declare variables at the top
• Initialize variables when declared`,
      code: `// Good variable practices
const MAX_ITEMS = 100;
const API_ENDPOINT = 'https://api.example.com';

let currentUser = null;
let itemCount = 0;

// Meaningful names
const firstName = 'John';          // Good
const fn = 'John';                // Bad

// Initialization
let users = [];                   // Good
let userList;                     // Avoid

// Consistent naming
const getUserData = () => {
    const userData = {};          // Local const
    let userAge = 25;            // Local let
    return { ...userData, userAge };
};`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Variables</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Variables</h2>
        <p className="text-gray-700 mb-4">
          Variables are fundamental building blocks in JavaScript, used to store and manage data in your programs.
          Understanding how to properly declare and use variables is crucial for effective JavaScript programming.
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
        <h3 className="text-xl font-semibold mb-4">Common Variable Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using a variable before declaring it</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Redeclaring let variables</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using const for values that need to change</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Variable Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Always declare variables at the beginning of their scope</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use const by default, and let only when needed</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use meaningful variable names that describe their purpose</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice declaring and using variables in our interactive editor.
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

export default Variables; 