import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Loops = () => {
  const sections = [
    {
      title: 'JavaScript Loops',
      content: `Loops are used to execute a block of code multiple times.

JavaScript supports several types of loops:
• for - loops through a block of code a number of times
• for/in - loops through the properties of an object
• for/of - loops through the values of an iterable object
• while - loops through a block of code while a condition is true
• do/while - loops through a block of code once, and then repeats while a condition is true`,
      code: `// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

// for/in loop (objects)
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for/of loop (arrays, strings)
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do/while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);`
    },
    {
      title: 'For Loop',
      content: `The for loop has three expressions:
• Initialization - executed once before the loop starts
• Condition - checked before each iteration
• Increment/Decrement - executed after each iteration

Common use cases:
• Iterating over arrays
• Counting up or down
• Repeating operations`,
      code: `// Basic counting
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Counting down
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Iterating over array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Step size
for (let i = 0; i <= 10; i += 2) {
  console.log(i);  // Even numbers: 0, 2, 4, 6, 8, 10
}

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(\`(\${i}, \${j})\`);
  }
}`
    },
    {
      title: 'For...in Loop',
      content: `The for...in loop iterates over the enumerable properties of an object.

Best used for:
• Object properties
• Debugging object contents
• Dynamic property access

Note: Not recommended for arrays, use for...of instead.`,
      code: `// Object properties
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Inherited properties
const car = {
  brand: "Toyota",
  model: "Camry"
};

const myCar = Object.create(car);
myCar.year = 2020;

for (let prop in myCar) {
  if (myCar.hasOwnProperty(prop)) {
    console.log(\`\${prop}: \${myCar[prop]}\`);
  }
}

// Array indices (not recommended)
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(\`Index \${index}: \${colors[index]}\`);
}`
    },
    {
      title: 'For...of Loop',
      content: `The for...of loop iterates over iterable objects:
• Arrays
• Strings
• Maps
• Sets
• NodeLists
• Arguments object

Benefits:
• Simpler syntax than traditional for loop
• Works with break and continue
• No need to track index`,
      code: `// Arrays
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

// Strings
const text = "Hello";
for (let char of text) {
  console.log(char);
}

// Maps
const map = new Map([
  ["name", "John"],
  ["age", 30]
]);
for (let [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}

// Sets
const set = new Set([1, 2, 3]);
for (let value of set) {
  console.log(value);
}

// DOM NodeList
const elements = document.querySelectorAll('p');
for (let el of elements) {
  el.style.color = 'blue';
}`
    },
    {
      title: 'While Loop',
      content: `The while loop executes a block of code as long as a condition is true.

Use cases:
• Unknown number of iterations
• Event-driven loops
• Reading input until a condition is met
• Game loops`,
      code: `// Basic while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Reading input example
let input = '';
while (input !== 'quit') {
  // In browser, this would be user input
  input = prompt('Enter command (quit to exit):');
  console.log('You entered: ' + input);
}

// Array processing
const numbers = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// Random number game
let target = Math.floor(Math.random() * 10);
let guess;
while (guess !== target) {
  guess = parseInt(prompt('Guess number (0-9):'));
  if (guess < target) console.log('Too low!');
  if (guess > target) console.log('Too high!');
}`
    },
    {
      title: 'Do...While Loop',
      content: `The do...while loop is similar to while loop, but:
• Code block executes at least once
• Condition is checked after execution

Use cases:
• Menu systems
• Input validation
• Game loops with initial state
• User interaction patterns`,
      code: `// Basic do...while
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);

// Menu system
let choice;
do {
  console.log("1. Start Game");
  console.log("2. Settings");
  console.log("3. Exit");
  choice = prompt("Enter choice:");
  
  switch(choice) {
    case "1":
      console.log("Starting game...");
      break;
    case "2":
      console.log("Opening settings...");
      break;
    case "3":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice!");
  }
} while (choice !== "3");

// Input validation
let password;
do {
  password = prompt("Enter password:");
} while (password.length < 8);

// Game loop with initial state
let game = {
  isRunning: true,
  score: 0
};

do {
  // Game logic here
  game.score += Math.floor(Math.random() * 10);
  console.log(\`Score: \${game.score}\`);
  
  if (game.score >= 100) {
    game.isRunning = false;
  }
} while (game.isRunning);`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Loops</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding JavaScript Loops</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use different types of loops in JavaScript to execute code multiple times.
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
        <h3 className="text-xl font-semibold mb-4">Loop Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Choose the right loop for your use case (for...of for arrays, for...in for objects)</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Be careful with infinite loops - always ensure a way to break the loop</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Consider performance when working with large datasets</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Loops; 