import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Classes = () => {
  const sections = [
    {
      title: 'Class Basics',
      content: `JavaScript classes provide:
• Object-oriented programming
• Constructor method
• Instance methods
• Static methods
• Properties
• Inheritance
• Encapsulation`,
      code: `// Class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  sayHello() {
    return \`Hello, I'm \${this.name}\`;
  }

  // Static method
  static createAnonymous() {
    return new Person('Anonymous', 0);
  }
}

// Create instance
const person = new Person('John', 30);
console.log(person.sayHello());

// Use static method
const anonymous = Person.createAnonymous();`
    },
    {
      title: 'Class Properties',
      content: `Working with class properties:
• Instance properties
• Static properties
• Private fields
• Getters and setters
• Computed properties
• Property descriptors
• Field declarations`,
      code: `class Product {
  // Public field declarations
  name;
  price;
  
  // Private field
  #inventory = 0;
  
  // Static field
  static category = 'General';
  
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  // Getter
  get inStock() {
    return this.#inventory > 0;
  }
  
  // Setter
  set stock(value) {
    if (value < 0) throw new Error('Invalid stock value');
    this.#inventory = value;
  }
  
  // Computed method name
  ['get' + 'Info']() {
    return \`\${this.name}: $\${this.price}\`;
  }
}

const product = new Product('Phone', 599);
product.stock = 10;
console.log(product.inStock);  // true
console.log(Product.category);  // 'General'`
    },
    {
      title: 'Inheritance',
      content: `Class inheritance features:
• extends keyword
• super keyword
• Method overriding
• Constructor chaining
• Abstract classes
• Mixins
• Multiple inheritance patterns`,
      code: `// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return 'Some sound';
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }
  
  // Override method
  speak() {
    return 'Woof!';
  }
  
  // New method
  fetch() {
    return \`\${this.name} is fetching...\`;
  }
}

// Mixin example
const swimMixin = {
  swim() {
    return \`\${this.name} is swimming\`;
  }
};

// Apply mixin
Object.assign(Dog.prototype, swimMixin);

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());    // 'Woof!'
console.log(dog.swim());     // 'Rex is swimming'`
    },
    {
      title: 'Advanced Patterns',
      content: `Advanced class patterns:
• Factory patterns
• Singleton pattern
• Abstract factory
• Builder pattern
• Prototype pattern
• Chain of responsibility
• Observer pattern`,
      code: `// Singleton pattern
class Database {
  static #instance;
  
  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    Database.#instance = this;
  }
  
  query(sql) {
    // Execute query
  }
}

// Factory pattern
class UserFactory {
  static createUser(type) {
    switch(type) {
      case 'admin':
        return new AdminUser();
      case 'guest':
        return new GuestUser();
      default:
        return new RegularUser();
    }
  }
}

// Builder pattern
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  
  setAge(age) {
    this.user.age = age;
    return this;
  }
  
  setEmail(email) {
    this.user.email = email;
    return this;
  }
  
  build() {
    return this.user;
  }
}

const user = new UserBuilder('John')
  .setAge(30)
  .setEmail('john@example.com')
  .build();`
    },
    {
      title: 'Error Handling',
      content: `Class error handling:
• Constructor errors
• Method errors
• Property validation
• Custom errors
• Error propagation
• Recovery strategies
• Debugging`,
      code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class User {
  #email;
  
  constructor(email) {
    this.email = email;  // Use setter
  }
  
  set email(value) {
    if (!value.includes('@')) {
      throw new ValidationError('Invalid email format');
    }
    this.#email = value;
  }
  
  static create(data) {
    try {
      return new User(data.email);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
        return null;
      }
      throw error;  // Re-throw other errors
    }
  }
}

// Usage with error handling
try {
  const user = User.create({ email: 'invalid-email' });
  if (!user) {
    console.log('User creation failed');
  }
} catch (error) {
  console.error('Unexpected error:', error);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Classes</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Classes</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript classes, including inheritance, properties, methods, and advanced patterns.
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
            <p className="text-gray-700">Forgetting to call super() in derived class constructors</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Using this before super() in constructors</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not handling constructor errors properly</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use private fields for encapsulation</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error handling</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Follow SOLID principles in class design</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Classes; 