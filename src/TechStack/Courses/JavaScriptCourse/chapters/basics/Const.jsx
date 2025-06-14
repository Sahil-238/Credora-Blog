import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Const = () => {
  const sections = [
    {
      title: 'The const Keyword',
      content: `The const keyword was introduced in ES6 (2015).

Variables defined with const:
• Cannot be reassigned
• Must be assigned a value when declared
• Have block scope

Use const when you declare:
• A new Array
• A new Object
• A new Function
• A new RegExp`,
      code: `const PI = 3.14159;
PI = 3.14;      // Error: Assignment to constant variable

// Must be assigned a value
const GREETING;  // Error: Missing initializer in const declaration

// Correct way
const API_KEY = "abc123";
const MAX_SIZE = 100;`
    },
    {
      title: 'Block Scope',
      content: `const variables have block scope, similar to let.

A const variable cannot be accessed outside the block where it is declared:`,
      code: `{
  const x = 10;
  console.log(x); // 10
}
// console.log(x); // ReferenceError: x is not defined

if (true) {
  const DAYS_IN_WEEK = 7;
  console.log(DAYS_IN_WEEK); // 7
}
// console.log(DAYS_IN_WEEK); // ReferenceError`
    },
    {
      title: 'Objects and Arrays with const',
      content: `The const keyword only prevents reassignment of the variable identifier.

It does NOT prevent modification of the object or array that the constant references:`,
      code: `// Object with const
const person = {
  name: "John",
  age: 30
};

// This is allowed:
person.age = 31;
person.city = "New York";

// This is NOT allowed:
// person = { name: "Jane" }; // Error

// Array with const
const numbers = [1, 2, 3];

// This is allowed:
numbers.push(4);
numbers[0] = 0;

// This is NOT allowed:
// numbers = [4, 5, 6]; // Error`
    },
    {
      title: 'Preventing Object Modifications',
      content: `To make an object immutable, you can use:
• Object.freeze() - Prevents adding/removing/modifying properties
• Object.seal() - Prevents adding/removing properties, but allows modifying existing ones
• Object.preventExtensions() - Prevents adding properties`,
      code: `// Using Object.freeze()
const person = Object.freeze({
  name: "John",
  age: 30
});

// These will not work:
person.age = 31;        // Silently fails in non-strict mode
person.city = "London"; // Silently fails in non-strict mode

// Using Object.seal()
const config = Object.seal({
  theme: "dark",
  fontSize: 14
});

config.fontSize = 16;   // Allowed: modifying existing property
// config.color = "blue"; // Error: can't add new property

// Check if object is frozen/sealed
console.log(Object.isFrozen(person));  // true
console.log(Object.isSealed(config));  // true`
    },
    {
      title: 'const vs let vs var',
      content: `When to use const:
• For values that should not be reassigned
• For arrays and objects that will be modified but not reassigned
• For function declarations

When to use let:
• For values that will be reassigned
• In loops and iterations

When to use var:
• Legacy code only
• When you need to support very old browsers`,
      code: `// Using const (preferred for most cases)
const API_URL = "https://api.example.com";
const config = { theme: "dark" };
const calculate = (x, y) => x + y;

// Using let (for values that change)
let count = 0;
let isLoading = false;

// Using var (avoid in modern code)
var oldVariable = "legacy code";`
    },
    {
      title: 'Best Practices with const',
      content: `Common conventions when using const:

• Use UPPERCASE for constants that represent fixed values
• Use camelCase for objects and arrays
• Prefer const over let when possible
• Use const for imported modules`,
      code: `// Constants representing fixed values
const MAX_ITEMS = 100;
const API_KEY = "abc123";
const COLORS = Object.freeze({
  PRIMARY: "#007bff",
  SECONDARY: "#6c757d"
});

// Objects and arrays (camelCase)
const userConfig = {
  theme: "dark",
  language: "en"
};

// Imported modules
const express = require('express');
const React = require('react');`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript const Keyword</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding const Declaration</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use the const keyword to declare constants and create immutable bindings in JavaScript.
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
        <h3 className="text-xl font-semibold mb-4">Common Mistakes with const</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Trying to reassign a const variable</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Declaring a const without initialization</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Assuming const makes objects completely immutable</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices with const</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use const as the default choice when declaring variables</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use Object.freeze() when you need true immutability</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Follow naming conventions (UPPERCASE for fixed values)</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice using the const keyword in our interactive editor.
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

export default Const; 