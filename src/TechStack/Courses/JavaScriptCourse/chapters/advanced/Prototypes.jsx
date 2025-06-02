import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Prototypes = () => {
  const sections = [
    {
      title: 'Understanding Prototypes',
      content: `JavaScript prototypes provide:
• Object inheritance
• Property lookup chain
• Method sharing
• Dynamic dispatch
• Constructor functions
• Instance creation
• Property descriptors`,
      code: `// Constructor function
function Animal(name) {
  this.name = name;
}

// Adding method to prototype
Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

// Create instances
const cat = new Animal('Cat');
const dog = new Animal('Dog');

console.log(cat.speak());  // "Cat makes a sound"
console.log(dog.speak());  // "Dog makes a sound"

// Check prototype chain
console.log(cat.__proto__ === Animal.prototype);  // true
console.log(cat.__proto__.__proto__ === Object.prototype);  // true`
    },
    {
      title: 'Prototype Chain',
      content: `Prototype chain features:
• Property lookup
• Method inheritance
• Shadowing
• Object.create()
• hasOwnProperty
• instanceof operator
• isPrototypeOf`,
      code: `// Create prototype chain
const animal = {
  eats: true,
  walk() {
    return 'Walking...';
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

const longEar = Object.create(rabbit);
longEar.earLength = 10;

// Property lookup
console.log(longEar.jumps);    // true (from rabbit)
console.log(longEar.eats);     // true (from animal)
console.log(longEar.walk());   // "Walking..." (from animal)

// Check own properties
console.log(longEar.hasOwnProperty('earLength'));  // true
console.log(longEar.hasOwnProperty('jumps'));      // false

// Check prototype chain
console.log(animal.isPrototypeOf(longEar));    // true
console.log(rabbit.isPrototypeOf(longEar));    // true
console.log(longEar instanceof Animal);         // false`
    },
    {
      title: 'Inheritance Patterns',
      content: `Inheritance patterns:
• Classical inheritance
• Prototypal inheritance
• Parasitic inheritance
• Mixin patterns
• Factory functions
• Constructor stealing
• Multiple inheritance`,
      code: `// Classical inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

function Dog(name, breed) {
  Animal.call(this, name);  // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add/override methods
Dog.prototype.speak = function() {
  return \`\${this.name} barks\`;
};

// Mixin pattern
const swimMixin = {
  swim() {
    return \`\${this.name} is swimming\`;
  }
};

// Apply mixin
Object.assign(Dog.prototype, swimMixin);

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());  // "Rex barks"
console.log(dog.swim());   // "Rex is swimming"`
    },
    {
      title: 'Property Descriptors',
      content: `Property descriptors:
• Configurable
• Enumerable
• Writable
• Value
• Get/Set
• defineProperty
• getOwnPropertyDescriptor
• preventExtensions`,
      code: `const obj = {};

// Define property with descriptor
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: false,      // Can't change value
  enumerable: true,     // Shows up in for...in
  configurable: false   // Can't delete or reconfigure
});

// Define accessor property
Object.defineProperty(obj, 'fullName', {
  get() {
    return \`\${this.name} Doe\`;
  },
  set(value) {
    [this.name] = value.split(' ');
  }
});

// Get property descriptor
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
/*
{
  value: 'John',
  writable: false,
  enumerable: true,
  configurable: false
}
*/

// Prevent extensions
Object.preventExtensions(obj);
obj.age = 30;  // Fails silently or throws in strict mode`
    },
    {
      title: 'Advanced Patterns',
      content: `Advanced prototype patterns:
• Factory functions
• Composition
• Delegation
• Differential inheritance
• Prototype pollution
• Performance optimization
• Memory management`,
      code: `// Factory function pattern
function createPerson(name) {
  const person = Object.create(personProto);
  person.name = name;
  return person;
}

const personProto = {
  sayHello() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Composition over inheritance
function withLogging(obj) {
  return Object.create(obj, {
    log: {
      value: function(msg) {
        console.log(\`[\${new Date()}] \${msg}\`);
      }
    }
  });
}

function withValidation(obj) {
  return Object.create(obj, {
    validate: {
      value: function(schema) {
        // Validation logic
      }
    }
  });
}

// Usage
const base = {
  save() { /* save logic */ }
};

const enhanced = withValidation(withLogging(base));`
    },
    {
      title: 'Performance & Security',
      content: `Performance considerations:
• Prototype chain length
• Property access speed
• Memory usage
• Security concerns
• Prototype pollution
• Object freezing
• Best practices`,
      code: `// Optimize property access
function optimizeObject(obj) {
  // Define frequently accessed properties directly
  Object.defineProperties(obj, {
    _cache: {
      value: new Map(),
      writable: true
    },
    _lastAccess: {
      value: 0,
      writable: true
    }
  });
  
  return obj;
}

// Prevent prototype pollution
function createSafeObject(data) {
  return Object.create(null, {
    data: {
      value: Object.freeze({ ...data }),
      enumerable: true
    }
  });
}

// Secure object creation
const safeProto = Object.freeze({
  method() {
    // Safe method
  }
});

function createSecureObject() {
  return Object.create(safeProto, {
    // Define properties with appropriate descriptors
  });
}

// Monitor prototype changes
function monitorPrototype(obj) {
  const handler = {
    set(target, prop, value) {
      console.log(\`Attempting to set \${prop}\`);
      return Reflect.set(target, prop, value);
    },
    get(target, prop) {
      console.log(\`Accessing \${prop}\`);
      return Reflect.get(target, prop);
    }
  };
  
  return new Proxy(obj, handler);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Prototypes</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Prototypes</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript prototypes, including inheritance, property descriptors, and advanced patterns.
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
            <p className="text-gray-700">Forgetting to set constructor after changing prototype</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Creating deep prototype chains</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not protecting against prototype pollution</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use Object.create() for inheritance</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Keep prototype chains short</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper security measures</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Prototypes; 