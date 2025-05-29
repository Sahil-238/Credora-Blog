import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiLayers, FiCpu, FiClock } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Advanced = () => {
  const sections = [
    {
      id: 'objects',
      title: 'Objects and Prototypes',
      icon: <FiBox />,
      code: `// Object Creation
const person = {
  name: "John",
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Object Methods
Object.keys(person);    // ["name", "age", "greet"]
Object.values(person);  // ["John", 30, ƒ]

// Prototypes
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  return \`Hello, \${this.name}\`;
};

const john = new Person("John");
console.log(john.sayHello());  // "Hello, John"`,
      explanation: `Advanced object concepts in JavaScript:
• Object methods and properties
• Prototypal inheritance
• Constructor functions
• The 'this' keyword
• Object destructuring
• Property descriptors`
    },
    {
      id: 'arrays',
      title: 'Advanced Array Methods',
      icon: <FiLayers />,
      code: `// Array Methods
const numbers = [1, 2, 3, 4, 5];

// Map: Transform elements
const doubled = numbers.map(n => n * 2);

// Filter: Select elements
const evens = numbers.filter(n => n % 2 === 0);

// Reduce: Accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Find and FindIndex
const found = numbers.find(n => n > 3);
const index = numbers.findIndex(n => n > 3);

// Spread and Rest
const combined = [...numbers, 6, 7];
const [first, second, ...rest] = numbers;`,
      explanation: `Modern array methods provide powerful ways to:
• Transform data with map()
• Filter elements with filter()
• Accumulate values with reduce()
• Search elements with find()
• Destructure arrays
• Use spread/rest operators`
    },
    {
      id: 'classes',
      title: 'Classes and OOP',
      icon: <FiCpu />,
      code: `// Class Declaration
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} barks!\`;
  }
}

// Static Methods
class MathOperations {
  static add(x, y) {
    return x + y;
  }
}

// Private Fields
class Counter {
  #count = 0;
  
  increment() {
    this.#count++;
  }
}`,
      explanation: `Object-Oriented Programming in JavaScript:
• Class syntax and constructors
• Inheritance with extends
• Method overriding
• Static methods and properties
• Private fields and methods
• Getters and setters`
    },
    {
      id: 'async',
      title: 'Promises and Async/Await',
      icon: <FiClock />,
      code: `// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

// Promise Chaining
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Promise.all
const promises = [
  fetch('/api/users'),
  fetch('/api/posts')
];

Promise.all(promises)
  .then(([users, posts]) => {
    // Handle both responses
  });`,
      explanation: `Asynchronous JavaScript features:
• Promises for handling async operations
• async/await for cleaner async code
• Error handling with try/catch
• Promise methods: all, race, allSettled
• Async iteration
• Event loop and microtasks`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Advanced JavaScript Concepts</h1>
      <p className="text-gray-600 mb-8">
        Dive deep into advanced JavaScript concepts that will take your programming skills to the next level.
      </p>

      <div className="space-y-12">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <span className="text-blue-600 mr-3">{section.icon}</span>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Example Code</h3>
                <SyntaxHighlighter 
                  language="javascript" 
                  style={atomDark}
                  className="rounded-lg"
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Explanation</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {section.explanation}
                </p>
              </div>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Challenge Section */}
      <div className="mt-12 bg-purple-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Advanced Challenges</h3>
        <p className="text-gray-600 mb-4">
          Put your advanced JavaScript knowledge to the test with these challenging exercises.
        </p>
        <div className="flex space-x-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Start Challenge
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            View Solutions
          </button>
        </div>
      </div>
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Advanced; 