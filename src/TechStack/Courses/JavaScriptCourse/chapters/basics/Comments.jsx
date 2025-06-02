import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Comments = () => {
  const sections = [
    {
      title: 'JavaScript Comments',
      content: `Comments can be used to:

• Explain JavaScript code
• Make code more readable
• Prevent execution of code during testing

JavaScript has two types of comments:
• Single-line comments (//)
• Multi-line comments (/* */)`,
      code: `// This is a single-line comment

/* This is a multi-line comment
   It can span across multiple lines
   and is useful for longer explanations */

let x = 5;  // Declare and initialize x`
    },
    {
      title: 'Single-line Comments',
      content: `Single-line comments start with //.

Any text between // and the end of the line will be ignored by JavaScript.

Single-line comments can be added:
• On their own line
• At the end of a line of code`,
      code: `// This is a comment
let x = 5;    // Initialize x
let y = x + 2;  // Add 2 to x

// The following line is not executed
// alert("Hello!");

// Multiple single-line comments
// Author: John Doe
// Date: 2024-03-15
// Purpose: Demonstrate comments`
    },
    {
      title: 'Multi-line Comments',
      content: `Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored by JavaScript.

Multi-line comments are useful for:
• Long explanations
• Documentation
• Debugging multiple lines
• License information`,
      code: `/* This is a multi-line comment.
   It can span across multiple lines
   and is often used for:
   - Documentation
   - Explanations
   - Debugging */

/* You can also use it to
   temporarily disable code:
let x = 5;
let y = x + 2;
console.log(y);
*/

/*
 * Some developers prefer
 * to format multi-line
 * comments this way
 */`
    },
    {
      title: 'Using Comments for Documentation',
      content: `Comments are often used to document code:

• Function documentation
• File headers
• Complex algorithm explanations
• API documentation
• TODO notes`,
      code: `/**
 * Calculates the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

// TODO: Implement input validation
function validateUser(user) {
  /* Add validation logic here:
     - Check username
     - Verify email
     - Validate password */
}

// FIXME: This function needs optimization
function slowFunction() {
  // ...
}`
    },
    {
      title: 'Comments Best Practices',
      content: `Follow these best practices for comments:

• Write clear, concise comments
• Keep comments up-to-date
• Don't over-comment obvious code
• Use comments to explain complex logic
• Document assumptions and limitations
• Use consistent formatting`,
      code: `// Good comments
function calculateTotal(items) {
  // Early return if no items
  if (!items.length) return 0;

  // Apply discount for orders over $100
  let total = items.reduce((sum, item) => sum + item.price, 0);
  return total > 100 ? total * 0.9 : total;
}

// Bad comments
// Add numbers
let sum = a + b; // Adds a and b

// Good documentation
/**
 * Processes user data and returns formatted result
 * Note: This function assumes input is pre-validated
 * @param {Object} userData - User information
 * @returns {Object} Formatted user data
 * @throws {Error} If required fields are missing
 */`
    },
    {
      title: 'Comments for Debugging',
      content: `Comments are useful for debugging:

• Temporarily disable code
• Add debug logging
• Mark areas for review
• Track changes and fixes`,
      code: `function processData(data) {
  // DEBUG: Log input data
  // console.log('Input:', data);

  /* Temporarily disable validation
  if (!isValid(data)) {
    throw new Error('Invalid data');
  }
  */

  // FIXME: Handle edge cases
  let result = data.map(item => {
    // TODO: Optimize this loop
    return transform(item);
  });

  // DEBUG: Log output
  // console.log('Output:', result);
  return result;
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Comments</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding JavaScript Comments</h2>
        <p className="text-gray-700 mb-4">
          Learn how to write clear and effective comments to document your JavaScript code and make it more maintainable.
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
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Comments; 