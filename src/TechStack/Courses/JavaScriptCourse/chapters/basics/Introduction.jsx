import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCode, FiBookOpen } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Introduction = () => {
  const sections = [
    {
      title: 'What is JavaScript?',
      content: `JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced.`,
      code: `// Your first JavaScript program
console.log("Hello, World!");

// Variables and basic operations
let message = "Welcome to JavaScript!";
console.log(message);

// Simple function
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Student")); // Output: Hello, Student`
    },
    {
      title: 'Why Study JavaScript?',
      content: `JavaScript is one of the 3 languages all web developers must learn:

1. HTML to define the content of web pages
2. CSS to specify the layout of web pages
3. JavaScript to program the behavior of web pages

This tutorial covers every version of JavaScript:

• The Original JavaScript ES1 ES2 ES3 (1997-1999)
• The First Main Revision ES5 (2009)
• The Second Revision ES6 (2015)
• The Yearly Additions (2016, 2017 ... 2021, 2022, 2023)`,
      code: `// Modern JavaScript Features (ES6+)
// Arrow functions
const add = (a, b) => a + b;

// Template literals
const name = "JavaScript";
console.log(\`Hello, \${name}!\`);

// Destructuring
const { x, y } = { x: 10, y: 20 };

// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];`
    },
    {
      title: 'Learning Speed',
      content: `In this tutorial, the learning speed is your choice.

Everything is up to you.

If you are struggling, take a break, or re-read the material.

Always make sure you understand all the "Try-it-Yourself" examples.

The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code!`,
      code: `// Practice Example
// Create a function that calculates the area of a rectangle
function calculateArea(width, height) {
  return width * height;
}

// Try different values
console.log(calculateArea(5, 3));  // Output: 15
console.log(calculateArea(10, 8)); // Output: 80

// Challenge: Create your own function
// Write a function to calculate the perimeter`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Tutorial</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          Welcome to the JavaScript Tutorial. This comprehensive guide will take you from the basics
          to advanced concepts in JavaScript programming.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <FiCode className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-1">Easy to Learn</h3>
            <p className="text-sm text-gray-600">Step-by-step tutorials with examples</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <FiPlay className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-1">Interactive</h3>
            <p className="text-sm text-gray-600">Practice with live code editors</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <FiBookOpen className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-1">Comprehensive</h3>
            <p className="text-sm text-gray-600">Cover all essential topics</p>
          </div>
        </div>
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

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          The best way to learn JavaScript is by practicing! Try writing your first JavaScript code in our online editor.
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

export default Introduction; 