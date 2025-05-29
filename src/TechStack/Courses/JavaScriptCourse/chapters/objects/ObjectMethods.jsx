import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ObjectMethods = () => {
  const sections = [
    {
      title: 'Object Methods Overview',
      content: `JavaScript provides several built-in methods for objects:
• Object.keys() - Get array of property names
• Object.values() - Get array of property values
• Object.entries() - Get array of [key, value] pairs
• Object.assign() - Copy properties from objects
• Object.create() - Create object with specific prototype
• Object.defineProperty() - Define property with details`,
      code: `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Get object keys
console.log(Object.keys(person));
// ['name', 'age', 'city']

// Get object values
console.log(Object.values(person));
// ['John', 30, 'New York']

// Get entries (key-value pairs)
console.log(Object.entries(person));
// [['name', 'John'], ['age', 30], ['city', 'New York']]`
    },
    {
      title: 'Object Creation and Modification',
      content: `Methods for creating and modifying objects:
• Object.create() - Create with prototype
• Object.assign() - Copy properties
• Object.defineProperty() - Define single property
• Object.defineProperties() - Define multiple properties
• Object.freeze() - Make object immutable
• Object.seal() - Prevent adding/deleting properties`,
      code: `// Create object with prototype
const animal = {
  makeSound() {
    console.log('Some sound');
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log('Woof!');
};

// Copy properties
const source = { a: 1, b: 2 };
const target = { c: 3 };
Object.assign(target, source);
console.log(target);  // { c: 3, a: 1, b: 2 }

// Define property
Object.defineProperty(dog, 'breed', {
  value: 'Labrador',
  writable: false,
  enumerable: true
});

// Freeze object (make immutable)
const config = { api: 'http://api.example.com' };
Object.freeze(config);
// config.api = 'new url';  // Error in strict mode

// Seal object (prevent add/delete)
const settings = { theme: 'dark' };
Object.seal(settings);
settings.theme = 'light';     // OK
// delete settings.theme;     // Error in strict mode
// settings.newProp = true;  // Error in strict mode`
    },
    {
      title: 'Property Descriptors',
      content: `Object properties have descriptors that define their behavior:
• value - The property value
• writable - Can the value be changed
• enumerable - Shows up in enumerations
• configurable - Can be deleted/modified
• get - Getter function
• set - Setter function`,
      code: `const product = {};

// Define property with descriptor
Object.defineProperty(product, 'name', {
  value: 'Phone',
  writable: true,
  enumerable: true,
  configurable: true
});

// Define getter/setter
Object.defineProperty(product, 'price', {
  get() {
    return this._price;
  },
  set(value) {
    if (value < 0) throw new Error('Invalid price');
    this._price = value;
  }
});

// Using getter/setter
product.price = 499;
console.log(product.price);  // 499
// product.price = -10;     // Error: Invalid price

// Check property descriptors
console.log(
  Object.getOwnPropertyDescriptor(product, 'name')
);`
    },
    {
      title: 'Object Inspection Methods',
      content: `Methods for inspecting objects:
• Object.keys() - Get property names
• Object.getOwnPropertyNames() - Get all property names
• Object.getOwnPropertySymbols() - Get symbol properties
• Object.getPrototypeOf() - Get prototype
• Object.is() - Compare values
• instanceof - Check inheritance`,
      code: `const obj = {
  visible: true,
  [Symbol('id')]: 123
};

// Get keys (enumerable only)
console.log(Object.keys(obj));  // ['visible']

// Get all property names
console.log(Object.getOwnPropertyNames(obj));
// ['visible']

// Get symbol properties
console.log(Object.getOwnPropertySymbols(obj));
// [Symbol(id)]

// Check prototype
const arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype);
// true

// Compare values
console.log(Object.is(NaN, NaN));  // true
console.log(Object.is(0, -0));     // false

// Check inheritance
console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true`
    },
    {
      title: 'Object Manipulation Methods',
      content: `Methods for manipulating objects:
• Object.preventExtensions() - Prevent adding properties
• Object.seal() - Prevent add/delete properties
• Object.freeze() - Make completely immutable
• Object.isExtensible() - Check if can add properties
• Object.isSealed() - Check if sealed
• Object.isFrozen() - Check if frozen`,
      code: `const user = {
  name: 'John',
  age: 30
};

// Prevent extensions
Object.preventExtensions(user);
// user.email = 'john@example.com';  // Error in strict mode
console.log(Object.isExtensible(user));  // false

// Seal object
const config = { theme: 'dark' };
Object.seal(config);
config.theme = 'light';  // OK
// delete config.theme;  // Error in strict mode
console.log(Object.isSealed(config));  // true

// Freeze object
const constants = { PI: 3.14159 };
Object.freeze(constants);
// constants.PI = 3.14;  // Error in strict mode
console.log(Object.isFrozen(constants));  // true`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Object Methods</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Object Methods</h2>
        <p className="text-gray-700 mb-4">
          Learn about the built-in methods available for working with JavaScript objects, from basic property access to advanced object manipulation.
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
            <p className="text-gray-700">Assuming Object.freeze() deep freezes nested objects</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not understanding property descriptor defaults</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Modifying frozen or sealed objects</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use Object.freeze() for configuration objects</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Prefer Object.assign() or spread operator for shallow copies</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use property descriptors to control object behavior</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default ObjectMethods; 