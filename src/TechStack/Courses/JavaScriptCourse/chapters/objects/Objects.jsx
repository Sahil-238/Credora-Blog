import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Objects = () => {
  const sections = [
    {
      title: 'JavaScript Objects',
      content: `Objects are collections of key-value pairs that store data and behavior.

Key concepts:
• Properties and methods
• Object literals
• Constructor functions
• Prototypes
• Object methods`,
      code: `// Object literal
const person = {
  name: 'John',
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Accessing properties
console.log(person.name);      // Dot notation
console.log(person['age']);    // Bracket notation

// Adding properties
person.email = 'john@example.com';

// Deleting properties
delete person.age;

// Checking properties
console.log('name' in person);  // true
console.log(person.hasOwnProperty('email'));  // true`
    },
    {
      title: 'Object Creation',
      content: `There are multiple ways to create objects in JavaScript:
• Object literals
• Constructor functions
• Object.create()
• Classes (ES6+)
• Factory functions`,
      code: `// Object literal
const car = {
  brand: 'Toyota',
  model: 'Camry'
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return \`Hello, I'm \${this.name}\`;
  };
}

const john = new Person('John', 30);

// Object.create()
const personProto = {
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

const jane = Object.create(personProto);
jane.name = 'Jane';

// Class (ES6+)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  sayHello() {
    return \`Hello, \${this.name}\`;
  }
}

const user = new User('John', 'john@example.com');

// Factory function
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return \`Hello, I'm \${name}\`;
    }
  };
}

const bob = createPerson('Bob', 25);`
    },
    {
      title: 'Object Properties',
      content: `Object properties can be:
• Data properties
• Accessor properties
• Computed properties
• Property descriptors
• Symbol properties`,
      code: `// Data properties
const person = {
  name: 'John',
  age: 30
};

// Accessor properties (getters/setters)
const account = {
  _balance: 0,
  
  get balance() {
    return \`$\${this._balance}\`;
  },
  
  set balance(value) {
    if (value >= 0) {
      this._balance = value;
    }
  }
};

account.balance = 100;
console.log(account.balance);  // "$100"

// Computed properties
const propertyName = 'age';
const user = {
  name: 'John',
  [propertyName]: 30
};

// Property descriptors
Object.defineProperty(person, 'id', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false
});

// Symbol properties
const id = Symbol('id');
const user2 = {
  [id]: 123,
  name: 'John'
};

console.log(user2[id]);  // 123`
    },
    {
      title: 'Object Methods',
      content: `Objects have built-in methods for:
• Property manipulation
• Object copying
• Property enumeration
• Object comparison
• Object freezing`,
      code: `// Object.keys()
const person = { name: 'John', age: 30 };
console.log(Object.keys(person));  // ['name', 'age']

// Object.values()
console.log(Object.values(person));  // ['John', 30]

// Object.entries()
console.log(Object.entries(person));  
// [['name', 'John'], ['age', 30]]

// Object.assign()
const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result);  // { a: 1, b: 2 }

// Object spread operator
const clone = { ...person };

// Object.freeze()
const frozen = Object.freeze({ x: 1 });
frozen.x = 2;  // Fails silently or throws error in strict mode

// Object.seal()
const sealed = Object.seal({ x: 1 });
sealed.x = 2;    // Allowed
sealed.y = 3;    // Not allowed

// Object.is()
console.log(Object.is(NaN, NaN));  // true
console.log(Object.is(0, -0));     // false

// Object.getOwnPropertyDescriptor()
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
/*
{
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true
}
*/`
    },
    {
      title: 'Object Patterns',
      content: `Common object patterns in JavaScript:
• Module pattern
• Singleton pattern
• Factory pattern
• Prototype pattern
• Mixin pattern`,
      code: `// Module pattern
const calculator = (function() {
  let result = 0;
  
  return {
    add(x) {
      result += x;
      return this;
    },
    subtract(x) {
      result -= x;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

// Singleton pattern
const Database = (function() {
  let instance;
  
  function createInstance() {
    return {
      data: [],
      add(item) {
        this.data.push(item);
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Factory pattern
function createShape(type) {
  switch(type) {
    case 'circle':
      return {
        radius: 0,
        draw() {
          console.log('Drawing circle');
        }
      };
    case 'square':
      return {
        side: 0,
        draw() {
          console.log('Drawing square');
        }
      };
  }
}

// Mixin pattern
const swimmable = {
  swim() {
    console.log(\`\${this.name} is swimming\`);
  }
};

const flyable = {
  fly() {
    console.log(\`\${this.name} is flying\`);
  }
};

class Duck {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Duck.prototype, swimmable, flyable);

const duck = new Duck('Donald');
duck.swim();  // "Donald is swimming"
duck.fly();   // "Donald is flying"`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Objects</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Objects</h2>
        <p className="text-gray-700 mb-4">
          Learn how to work with objects, the fundamental building blocks of JavaScript.
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
        <h3 className="text-xl font-semibold mb-4">Object Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use object literals for simple objects</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use classes for complex objects with methods</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Avoid modifying built-in object prototypes</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use Object.freeze() for immutable objects</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Objects; 