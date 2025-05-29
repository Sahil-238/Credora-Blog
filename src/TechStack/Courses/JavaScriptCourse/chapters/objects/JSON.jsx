import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JSON = () => {
  const sections = [
    {
      title: 'What is JSON?',
      content: `JSON (JavaScript Object Notation) is:
• A lightweight data format
• Language independent
• Easy to read and write
• Used for data exchange
• Based on JavaScript objects
• Supports basic data types:
  - Strings
  - Numbers
  - Booleans
  - null
  - Arrays
  - Objects`,
      code: `// JSON data example
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "music", "sports"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "spouse": null
}`
    },
    {
      title: 'JSON Methods in JavaScript',
      content: `JavaScript provides two main methods for working with JSON:
• JSON.stringify() - Convert to JSON string
• JSON.parse() - Parse JSON string to object

These methods handle:
• Data type conversion
• Nested objects and arrays
• Special values (null, undefined, etc.)`,
      code: `// Converting to JSON string
const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'music']
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// {"name":"John","age":30,"hobbies":["reading","music"]}

// Parsing JSON string
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.name);  // "John"
console.log(parsedPerson.hobbies[0]);  // "reading"`
    },
    {
      title: 'Advanced JSON.stringify()',
      content: `JSON.stringify() has additional parameters:
• replacer - Filter or transform values
• space - Add indentation

The replacer can be:
• Array of allowed properties
• Function for custom transformation
• null to include all properties`,
      code: `const data = {
  name: 'John',
  age: 30,
  password: 'secret',
  date: new Date()
};

// With indentation
console.log(JSON.stringify(data, null, 2));

// With property filter
console.log(JSON.stringify(data, ['name', 'age']));

// With replacer function
console.log(JSON.stringify(data, (key, value) => {
  if (key === 'password') return undefined;
  if (value instanceof Date) return value.toISOString();
  return value;
}, 2));`
    },
    {
      title: 'JSON.parse() with Reviver',
      content: `JSON.parse() accepts a reviver function:
• Transform values during parsing
• Reconstruct special objects
• Handle custom data types
• Validate values
• Format dates`,
      code: `const jsonString = '{"name":"John","birth":"2000-01-01"}';

// Parse with date reviver
const person = JSON.parse(jsonString, (key, value) => {
  if (key === 'birth') return new Date(value);
  return value;
});

console.log(person.birth instanceof Date);  // true

// Parsing with validation
const data = JSON.parse('{"age":25}', (key, value) => {
  if (key === 'age' && value < 0) {
    throw new Error('Invalid age');
  }
  return value;
});`
    },
    {
      title: 'Common JSON Patterns',
      content: `Common patterns when working with JSON:
• Deep cloning objects
• Storing data in localStorage
• API requests and responses
• Config file parsing
• Data serialization`,
      code: `// Deep clone object
const deepClone = obj => JSON.parse(JSON.stringify(obj));

// LocalStorage with JSON
localStorage.setItem('user', JSON.stringify({
  name: 'John',
  preferences: { theme: 'dark' }
}));

const user = JSON.parse(localStorage.getItem('user'));

// API request
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const data = await response.json();
  return data;
}

// Config handling
const config = JSON.parse(fs.readFileSync('config.json'));`
    },
    {
      title: 'JSON Limitations',
      content: `JSON has several limitations:
• Cannot serialize functions
• Cannot handle circular references
• No support for undefined
• No date type (stored as string)
• No special number values (Infinity, NaN)
• No comments allowed
• Requires double quotes for keys`,
      code: `// Function is lost
const obj = {
  name: 'John',
  greet: function() { console.log('Hi!'); }
};
console.log(JSON.stringify(obj));
// {"name":"John"}

// Circular reference error
const circular = { name: 'John' };
circular.self = circular;
// JSON.stringify(circular); // Error!

// Special values
console.log(JSON.stringify({
  undef: undefined,    // Omitted
  inf: Infinity,       // null
  nan: NaN,           // null
  date: new Date()     // ISO string
}));`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Working with JSON</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding JSON</h2>
        <p className="text-gray-700 mb-4">
          Learn how to work with JSON (JavaScript Object Notation) in JavaScript, including parsing, stringifying, and handling common use cases.
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
            <p className="text-gray-700">Not handling JSON.parse() errors</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Assuming all properties will be serialized</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Forgetting about circular references</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always use try-catch with JSON.parse()</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use reviver/replacer for custom types</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Validate JSON data after parsing</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default JSON; 