import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DOMIntro = () => {
  const sections = [
    {
      title: 'What is the DOM?',
      content: `The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

Key points about DOM:
• The DOM represents the document as a tree structure
• Each element is a node in the tree
• The DOM provides methods to access and modify elements
• Changes to the DOM are reflected in the webpage immediately`,
      code: `// The DOM Tree Structure
document                          // Root node
  └── html
       ├── head
       │    ├── title
       │    └── meta
       └── body
            ├── div
            │    └── p
            └── script`
    },
    {
      title: 'Accessing DOM Elements',
      content: `JavaScript provides several methods to access DOM elements:
• getElementById() - Find element by ID
• getElementsByClassName() - Find elements by class name
• getElementsByTagName() - Find elements by tag name
• querySelector() - Find first element matching CSS selector
• querySelectorAll() - Find all elements matching CSS selector`,
      code: `// Different ways to access elements
const elementById = document.getElementById('myId');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementByQuery = document.querySelector('.myClass');
const elementsByQueryAll = document.querySelectorAll('p');

// Checking if elements exist
if (elementById) {
    console.log('Element found!');
}`
    },
    {
      title: 'Modifying DOM Elements',
      content: `Common ways to modify DOM elements:
• Changing content (innerHTML, textContent)
• Modifying attributes
• Changing styles
• Adding/removing classes
• Creating new elements
• Removing elements`,
      code: `// Modifying content
element.innerHTML = '<span>New content</span>';
element.textContent = 'New text';

// Working with attributes
element.setAttribute('class', 'newClass');
element.getAttribute('id');
element.removeAttribute('style');

// Modifying styles
element.style.color = 'blue';
element.style.backgroundColor = '#fff';

// Working with classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');`
    },
    {
      title: 'Creating and Removing Elements',
      content: `The DOM allows dynamic creation and removal of elements:
• createElement() - Create new elements
• appendChild() - Add child elements
• removeChild() - Remove child elements
• replaceChild() - Replace elements
• insertBefore() - Insert elements before others`,
      code: `// Creating new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New Element';

// Adding elements to the DOM
document.body.appendChild(newDiv);

// Removing elements
const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.removeChild(child);

// Inserting elements
const referenceNode = document.getElementById('reference');
parent.insertBefore(newDiv, referenceNode);`
    },
    {
      title: 'DOM Navigation',
      content: `The DOM tree can be navigated using various properties:
• parentNode - Access parent element
• childNodes - Access child elements
• firstChild/lastChild - Access first/last child
• nextSibling/previousSibling - Access adjacent siblings
• children - Access child elements (HTMLCollection)`,
      code: `// DOM Navigation
const parent = element.parentNode;
const children = element.childNodes;
const firstChild = element.firstChild;
const lastChild = element.lastChild;
const next = element.nextSibling;
const previous = element.previousSibling;

// Iterating through child elements
for (let child of element.children) {
    console.log(child.tagName);
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
      <h1 className="text-4xl font-bold mb-6">Introduction to the DOM</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Document Object Model</h2>
        <p className="text-gray-700 mb-4">
          The DOM is fundamental to web development, providing the interface between JavaScript and web pages.
          Understanding the DOM is crucial for creating interactive web applications.
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
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default DOMIntro; 