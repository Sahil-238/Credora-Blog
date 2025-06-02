import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DOMElements = () => {
  const sections = [
    {
      title: 'Understanding DOM Elements',
      content: `DOM Elements are objects that represent HTML elements:
• Each HTML tag creates a DOM element
• Elements inherit from Node class
• Elements have properties and methods
• Elements can be created, modified, and removed
• Elements form a tree structure
• Elements can contain other elements`,
      code: `// HTML Structure
<div id="parent">
  <h1 class="title">Hello World</h1>
  <p>This is a paragraph</p>
</div>

// JavaScript representation
const parent = document.getElementById('parent');
const title = parent.querySelector('.title');
const paragraph = parent.getElementsByTagName('p')[0];

console.log(title instanceof HTMLElement);  // true
console.log(parent.nodeType);               // 1 (ELEMENT_NODE)
console.log(title.tagName);                // "H1"`
    },
    {
      title: 'Element Properties',
      content: `Common properties of DOM elements:
• id - Element identifier
• className - CSS classes
• classList - Class list methods
• tagName - Element tag name
• innerHTML - HTML content
• textContent - Text content
• style - CSS styles
• attributes - HTML attributes
• dataset - Custom data attributes`,
      code: `const element = document.querySelector('#myElement');

// Basic properties
element.id = 'newId';
element.className = 'class1 class2';
console.log(element.tagName);  // "DIV"

// Classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');

// Content
element.innerHTML = '<span>New content</span>';
element.textContent = 'Plain text';

// Styles
element.style.backgroundColor = 'blue';
element.style.fontSize = '16px';

// Data attributes
element.dataset.userId = '123';
console.log(element.dataset.userId);  // "123"`
    },
    {
      title: 'Element Dimensions',
      content: `Properties and methods for element dimensions:
• offsetWidth/Height - Total size
• clientWidth/Height - Inner size
• scrollWidth/Height - Scroll size
• getBoundingClientRect() - Position and size
• offsetLeft/Top - Position from offset parent
• scrollLeft/Top - Scroll position`,
      code: `const element = document.querySelector('.box');

// Element dimensions
console.log({
  offsetWidth: element.offsetWidth,    // Including padding and border
  offsetHeight: element.offsetHeight,
  clientWidth: element.clientWidth,    // Including padding
  clientHeight: element.clientHeight,
  scrollWidth: element.scrollWidth,    // Including overflow
  scrollHeight: element.scrollHeight
});

// Position and size
const rect = element.getBoundingClientRect();
console.log({
  top: rect.top,        // From viewport top
  left: rect.left,      // From viewport left
  width: rect.width,    // Content + padding + border
  height: rect.height,
  bottom: rect.bottom,  // From viewport top
  right: rect.right     // From viewport left
});

// Scroll position
element.scrollTop = 100;  // Scroll vertically
element.scrollLeft = 50;  // Scroll horizontally`
    },
    {
      title: 'Element Attributes',
      content: `Working with element attributes:
• getAttribute() - Get attribute value
• setAttribute() - Set attribute value
• hasAttribute() - Check attribute exists
• removeAttribute() - Remove attribute
• getAttributeNames() - List attributes
• toggleAttribute() - Toggle boolean attribute`,
      code: `const element = document.querySelector('input');

// Get/set attributes
element.setAttribute('type', 'email');
const type = element.getAttribute('type');

// Check attributes
if (element.hasAttribute('required')) {
  element.removeAttribute('required');
}

// List all attributes
const attrs = element.getAttributeNames();
attrs.forEach(name => {
  console.log(\`\${name}: \${element.getAttribute(name)}\`);
});

// Toggle attribute
element.toggleAttribute('disabled');

// Boolean attributes
element.disabled = true;
element.readonly = false;

// Custom attributes
element.setAttribute('data-user-id', '123');
console.log(element.dataset.userId);  // "123"`
    },
    {
      title: 'Element Positioning',
      content: `Methods for element positioning:
• offsetParent - Nearest positioned ancestor
• offsetLeft/Top - Position from offset parent
• scrollIntoView() - Scroll element into view
• focus() - Focus the element
• click() - Simulate click
• getBoundingClientRect() - Get position`,
      code: `const element = document.querySelector('.box');

// Get positioned parent
const parent = element.offsetParent;

// Position relative to parent
console.log({
  left: element.offsetLeft,
  top: element.offsetTop
});

// Scroll into view
element.scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'nearest'
});

// Focus element
element.focus({
  preventScroll: true
});

// Get position relative to viewport
const rect = element.getBoundingClientRect();
const viewportPosition = {
  fromTop: rect.top + window.scrollY,
  fromLeft: rect.left + window.scrollX
};`
    },
    {
      title: 'Element States and Visibility',
      content: `Managing element states and visibility:
• hidden property
• style.display
• style.visibility
• classList for state
• disabled property
• checked property
• selected property
• contentEditable`,
      code: `const element = document.querySelector('.box');

// Visibility
element.hidden = true;               // Display: none
element.style.visibility = 'hidden'; // Invisible but takes space
element.style.display = 'none';      // Removed from layout

// State classes
element.classList.toggle('is-active');
element.classList.toggle('is-hidden');
element.classList.toggle('is-disabled');

// Form element states
const input = document.querySelector('input');
input.disabled = true;
input.readOnly = true;
input.checked = true;  // For checkboxes/radio

// Select element
const select = document.querySelector('select');
select.selectedIndex = 2;
select.options[2].selected = true;

// Content editable
element.contentEditable = true;
element.contentEditable = 'plaintext-only';`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">DOM Elements</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding DOM Elements</h2>
        <p className="text-gray-700 mb-4">
          Learn about DOM elements, their properties, and how to manipulate them effectively in JavaScript.
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
            <p className="text-gray-700">Confusing offsetWidth/clientWidth/scrollWidth</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not considering cross-browser differences</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Modifying elements before they're loaded</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Cache element references for better performance</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use classList instead of className for toggles</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Batch DOM updates for better performance</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default DOMElements; 