import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Closures = () => {
  const sections = [
    {
      title: 'Understanding Closures',
      content: `A closure is the combination of a function and the lexical environment within which that function was declared.

Key concepts:
• Lexical scoping
• Inner functions
• Data privacy
• State preservation
• Function factories`,
      code: `// Basic closure
function createCounter() {
  let count = 0;  // Private variable
  
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

// Another counter won't affect the first one
const counter2 = createCounter();
console.log(counter2());  // 1`
    },
    {
      title: 'Data Privacy',
      content: `Closures provide a way to create private variables and methods.

Benefits:
• Encapsulation
• Information hiding
• State protection
• Interface control
• Implementation hiding`,
      code: `// Module pattern with private data
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // Private variable
  
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return \`Deposited \${amount}. New balance: \${balance}\`;
      }
    },
    
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return \`Withdrawn \${amount}. New balance: \${balance}\`;
      }
      return 'Insufficient funds';
    },
    
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.getBalance());  // 100
console.log(account.deposit(50));   // Deposited 50. New balance: 150
console.log(account.withdraw(70));  // Withdrawn 70. New balance: 80
console.log(account.balance);       // undefined (private)`
    },
    {
      title: 'Function Factories',
      content: `Closures can be used to create functions with some pre-set parameters.

Use cases:
• Partial application
• Currying
• Configuration
• Specialized functions
• Memoization`,
      code: `// Multiplier factory
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// URL generator factory
function createUrlGenerator(baseUrl) {
  return function(endpoint) {
    return \`\${baseUrl}/\${endpoint}\`;
  };
}

const apiUrl = createUrlGenerator('https://api.example.com');
console.log(apiUrl('users'));    // https://api.example.com/users
console.log(apiUrl('products')); // https://api.example.com/products

// Memoization with closure
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log('Fetching from cache');
      return cache[key];
    }
    
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveFunction = memoize((n) => {
  console.log('Computing...');
  return n * 2;
});

console.log(expensiveFunction(5));  // Computing... 10
console.log(expensiveFunction(5));  // Fetching from cache 10`
    },
    {
      title: 'Event Handlers',
      content: `Closures are commonly used in event handling to maintain state.

Applications:
• Click counters
• Throttling
• Debouncing
• Event delegation
• State management`,
      code: `// Click counter
function createClickCounter(element) {
  let count = 0;
  
  element.addEventListener('click', function() {
    count++;
    element.textContent = \`Clicked \${count} times\`;
  });
}

// Throttle function
function throttle(fn, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      fn.apply(this, args);
      lastCall = now;
    }
  };
}

const throttledScroll = throttle(() => {
  console.log('Scroll event');
}, 1000);

window.addEventListener('scroll', throttledScroll);

// Debounce function
function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});`
    },
    {
      title: 'Common Patterns',
      content: `Closures are used in many common JavaScript patterns.

Patterns:
• Module pattern
• Revealing module
• IIFE with closures
• Partial application
• Currying`,
      code: `// Module pattern
const calculator = (function() {
  let result = 0;
  
  return {
    add: function(x) {
      result += x;
      return this;
    },
    subtract: function(x) {
      result -= x;
      return this;
    },
    multiply: function(x) {
      result *= x;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
})();

calculator.add(5).multiply(2).subtract(3);
console.log(calculator.getResult());  // 7

// Currying with closures
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6

// IIFE with closure
const counter = (function() {
  let count = 0;
  
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Closures</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Closures in JavaScript</h2>
        <p className="text-gray-700 mb-4">
          Learn how closures provide data privacy and state preservation in JavaScript functions.
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
        <h3 className="text-xl font-semibold mb-4">Closure Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use closures for data privacy and encapsulation</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Be mindful of memory usage with closures</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use closures to create specialized functions</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Consider using classes for complex object-oriented patterns</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Closures; 