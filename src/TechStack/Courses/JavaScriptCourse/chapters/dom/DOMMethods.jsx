import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DOMMethods = () => {
  const sections = [
    {
      title: 'Element Selection Methods',
      content: `Methods to select DOM elements:
• getElementById() - Select by ID
• getElementsByClassName() - Select by class
• getElementsByTagName() - Select by tag
• querySelector() - Select first match
• querySelectorAll() - Select all matches
• closest() - Find nearest ancestor
• matches() - Test if element matches selector`,
      code: `// By ID
const element = document.getElementById('myId');

// By class name
const elements = document.getElementsByClassName('myClass');

// By tag name
const divs = document.getElementsByTagName('div');

// CSS selector (first match)
const first = document.querySelector('.myClass');

// CSS selector (all matches)
const all = document.querySelectorAll('.myClass');

// Find ancestor
const ancestor = element.closest('.container');

// Test if matches
const isMatch = element.matches('.active');`
    },
    {
      title: 'Element Creation and Modification',
      content: `Methods to create and modify elements:
• createElement() - Create new element
• createTextNode() - Create text node
• appendChild() - Add child element
• removeChild() - Remove child element
• replaceChild() - Replace child element
• insertBefore() - Insert before element
• cloneNode() - Clone element`,
      code: `// Create element
const div = document.createElement('div');
div.className = 'container';
div.id = 'myDiv';

// Create text node
const text = document.createTextNode('Hello World');
div.appendChild(text);

// Clone element
const clone = div.cloneNode(true);  // true for deep clone

// Insert into document
document.body.appendChild(div);

// Insert before another element
const reference = document.getElementById('ref');
document.body.insertBefore(div, reference);

// Remove element
const parent = div.parentNode;
parent.removeChild(div);

// Replace element
parent.replaceChild(newElement, oldElement);`
    },
    {
      title: 'Element Content Methods',
      content: `Methods to manipulate element content:
• innerHTML - Get/set HTML content
• textContent - Get/set text content
• innerText - Get/set visible text
• outerHTML - Get/set HTML including element
• value - Get/set form element value
• setAttribute() - Set attribute
• getAttribute() - Get attribute`,
      code: `// HTML content
element.innerHTML = '<span>Hello</span>';

// Text content (including hidden)
element.textContent = 'Hello World';

// Visible text only
element.innerText = 'Hello World';

// Including the element itself
element.outerHTML = '<div>New Content</div>';

// Form values
inputElement.value = 'New value';

// Attributes
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');

// Custom data attributes
element.dataset.customId = '456';
console.log(element.dataset.customId);`
    },
    {
      title: 'Element Style Methods',
      content: `Methods to manipulate element styles:
• style property - Direct CSS
• classList - Class manipulation
• getComputedStyle() - Get actual styles
• getBoundingClientRect() - Get dimensions
• offsetWidth/Height - Element size
• clientWidth/Height - Visible size
• scrollWidth/Height - Scroll size`,
      code: `// Direct style
element.style.backgroundColor = 'red';
element.style.marginTop = '20px';

// Class list manipulation
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.classList.replace('old', 'new');
element.classList.contains('active');

// Get computed styles
const styles = getComputedStyle(element);
console.log(styles.backgroundColor);

// Get dimensions
const rect = element.getBoundingClientRect();
console.log(rect.width, rect.height, rect.top, rect.left);

// Element measurements
console.log(element.offsetWidth);  // Including borders
console.log(element.clientWidth);  // Excluding borders
console.log(element.scrollWidth);  // Including overflow`
    },
    {
      title: 'DOM Traversal Methods',
      content: `Methods to traverse the DOM:
• parentNode/parentElement
• children/childNodes
• firstChild/firstElementChild
• lastChild/lastElementChild
• nextSibling/nextElementSibling
• previousSibling/previousElementSibling`,
      code: `// Parent access
const parent = element.parentNode;
const parentEl = element.parentElement;

// Child access
const children = element.children;       // Elements only
const childNodes = element.childNodes;   // All nodes

// First/last child
const first = element.firstElementChild;
const last = element.lastElementChild;

// Siblings
const next = element.nextElementSibling;
const prev = element.previousElementSibling;

// Check relationships
const hasChildren = element.hasChildNodes();
const isChild = parent.contains(element);`
    },
    {
      title: 'Document Methods',
      content: `Methods available on document object:
• document.createElement()
• document.createTextNode()
• document.createDocumentFragment()
• document.importNode()
• document.adoptNode()
• document.write()
• document.open()
• document.close()`,
      code: `// Create fragment (performance)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);

// Import node from another document
const iframe = document.querySelector('iframe');
const node = iframe.contentDocument.getElementById('myId');
const copy = document.importNode(node, true);

// Adopt node (moves it)
const adopted = document.adoptNode(node);

// Write to document (careful!)
document.write('<h1>New Content</h1>');
document.close();`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">DOM Methods</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding DOM Methods</h2>
        <p className="text-gray-700 mb-4">
          Learn about the various methods available for manipulating the Document Object Model (DOM) in JavaScript.
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
            <p className="text-gray-700">Not checking if elements exist before manipulation</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Using innerHTML with user input (XSS risk)</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Excessive DOM manipulation without fragments</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Cache DOM elements you use frequently</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use DocumentFragment for batch updates</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Prefer modern methods like querySelector</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default DOMMethods; 