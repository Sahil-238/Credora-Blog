import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BreakContinue = () => {
  const sections = [
    {
      title: 'Break and Continue Statements',
      content: `Break and continue statements are used to control the flow of loops:

• break - terminates the loop and continues with the next statement after the loop
• continue - skips the rest of the current iteration and continues with the next iteration`,
      code: `// Break example
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

// Continue example
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);  // Outputs: 0, 1, 3, 4
}`
    },
    {
      title: 'Break Statement',
      content: `The break statement can be used to:
• Exit a loop prematurely
• Jump out of a switch statement
• Exit nested loops (with labels)

Common use cases:
• Finding a specific item in an array
• Early termination when a condition is met
• Exiting infinite loops
• Menu systems`,
      code: `// Finding item in array
const numbers = [1, 3, 5, 7, 9, 11];
let found = false;

for (let num of numbers) {
  if (num === 7) {
    found = true;
    break;
  }
}

console.log(found);  // true

// Breaking nested loops with labels
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(\`(\${i}, \${j})\`);
  }
}

// Menu system
while (true) {
  const choice = prompt("1: Continue, 2: Exit");
  if (choice === "2") break;
}`
    },
    {
      title: 'Continue Statement',
      content: `The continue statement is used to:
• Skip the rest of the current loop iteration
• Continue with the next iteration
• Filter out unwanted values

Use cases:
• Skipping specific values
• Processing only certain items
• Avoiding nested code blocks
• Implementing filters`,
      code: `// Skip even numbers
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);  // Outputs odd numbers
}

// Process only valid items
const items = [1, null, 2, undefined, 3];
for (let item of items) {
  if (!item) continue;
  console.log(item * 2);
}

// Filter in array processing
const numbers = [1, 2, 3, 4, 5];
const evenSquares = [];

for (let num of numbers) {
  if (num % 2 !== 0) continue;
  evenSquares.push(num * num);
}

// Nested loops with continue
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) continue;
    console.log(\`(\${i}, \${j})\`);
  }
}`
    },
    {
      title: 'Break vs Continue',
      content: `Choosing between break and continue:

break:
• Use when you want to exit the loop completely
• When you've found what you're looking for
• When an error condition occurs
• In menu systems or user input loops

continue:
• Use when you want to skip the current iteration
• For filtering out unwanted values
• To avoid deeply nested if statements
• When processing only certain items`,
      code: `// break example - find first even number
const numbers = [1, 3, 5, 6, 7, 9];
let firstEven;

for (let num of numbers) {
  if (num % 2 === 0) {
    firstEven = num;
    break;  // Exit loop after finding first even number
  }
}

// continue example - process only positive numbers
const values = [-1, 2, -3, 4, -5, 6];
let sum = 0;

for (let val of values) {
  if (val < 0) continue;  // Skip negative numbers
  sum += val;
}

// Practical example - form validation
const formFields = {
  username: "john_doe",
  email: "",
  age: "25"
};

let isValid = true;

for (let field in formFields) {
  if (!formFields[field]) {
    console.log(\`\${field} is required\`);
    isValid = false;
    continue;  // Check other fields
  }
  
  // Process valid field
  console.log(\`\${field} is valid\`);
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
      <h1 className="text-4xl font-bold mb-6">Break and Continue Statements</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Loop Control Statements</h2>
        <p className="text-gray-700 mb-4">
          Learn how to control loop execution using break and continue statements in JavaScript.
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

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use break when you need to exit a loop completely</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use continue to skip iterations and avoid nested if statements</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Be cautious with labeled statements - they can make code harder to read</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default BreakContinue; 