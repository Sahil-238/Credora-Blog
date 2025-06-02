import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiEdit, FiRefreshCw, FiZap } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TopicNavigation from '../../../../components/TopicNavigation';

const DOM = () => {
  const sections = [
    {
      id: 'selecting',
      title: 'Selecting Elements',
      icon: <FiSearch />,
      code: `// Get element by ID
const element = document.getElementById('myId');

// Query selector (returns first match)
const container = document.querySelector('.container');

// Query selector all (returns NodeList)
const buttons = document.querySelectorAll('button');

// Get elements by class name
const items = document.getElementsByClassName('item');

// Get elements by tag name
const paragraphs = document.getElementsByTagName('p');

// Traversing the DOM
const parent = element.parentNode;
const children = element.children;
const next = element.nextElementSibling;
const prev = element.previousElementSibling;`,
      explanation: `DOM selection methods:
• getElementById: Find element by ID
• querySelector: Use CSS selectors
• querySelectorAll: Get all matching elements
• getElementsByClassName: Find by class
• getElementsByTagName: Find by tag
• Parent/child relationships
• Sibling navigation`
    },
    {
      id: 'manipulation',
      title: 'DOM Manipulation',
      icon: <FiEdit />,
      code: `// Creating elements
const div = document.createElement('div');
div.className = 'new-element';
div.textContent = 'Hello World';

// Modifying elements
element.innerHTML = '<span>New content</span>';
element.textContent = 'Plain text';
element.setAttribute('data-id', '123');
element.style.color = 'blue';
element.classList.add('active');

// Adding to DOM
parent.appendChild(div);
parent.insertBefore(div, referenceNode);
parent.replaceChild(newChild, oldChild);

// Removing from DOM
element.remove();
parent.removeChild(element);`,
      explanation: `Manipulate DOM elements:
• Create new elements
• Modify content and attributes
• Change styles and classes
• Add elements to the DOM
• Remove elements
• Replace elements
• Clone elements`
    },
    {
      id: 'events',
      title: 'Event Handling',
      icon: <FiRefreshCw />,
      code: `// Adding event listeners
element.addEventListener('click', function(event) {
  console.log('Clicked!', event);
});

// Event object properties
button.addEventListener('click', (e) => {
  e.preventDefault();  // Prevent default behavior
  e.stopPropagation(); // Stop event bubbling
  console.log(e.target); // Element that triggered
});

// Common events
document.addEventListener('DOMContentLoaded', init);
element.addEventListener('mouseover', showTooltip);
form.addEventListener('submit', handleSubmit);
input.addEventListener('change', updateValue);

// Event delegation
container.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    // Handle button clicks
  }
});`,
      explanation: `Event handling in JavaScript:
• addEventListener method
• Event object and its properties
• Event types (click, submit, etc.)
• Event bubbling and capturing
• Event delegation
• Preventing default behavior
• Custom events`
    },
    {
      id: 'performance',
      title: 'DOM Performance',
      icon: <FiZap />,
      code: `// Document Fragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}
container.appendChild(fragment);

// Batch DOM updates
requestAnimationFrame(() => {
  // Update DOM here
});

// Efficient querying
const cache = document.getElementById('myElement');
// Reuse cache instead of querying again

// Debouncing events
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleScroll = debounce(() => {
  // Handle scroll event
}, 100);`,
      explanation: `Optimize DOM performance:
• Use DocumentFragment
• Batch DOM updates
• Cache DOM queries
• Debounce event handlers
• Minimize reflows and repaints
• Virtual DOM concepts
• Memory management`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">DOM Manipulation</h1>
      <p className="text-gray-600 mb-8">
        Learn how to interact with the Document Object Model (DOM) to create dynamic and interactive web applications.
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

      {/* Interactive Demo Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Interactive DOM Playground</h3>
        <p className="text-gray-600 mb-4">
          Practice DOM manipulation in real-time with our interactive playground.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Open Playground
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
            View Examples
          </button>
        </div>
      </div>
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default DOM; 