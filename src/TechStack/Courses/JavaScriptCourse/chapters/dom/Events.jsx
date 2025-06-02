import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Events = () => {
  const sections = [
    {
      title: 'Introduction to Events',
      content: `Events are actions or occurrences that happen in a web page, such as:
• User interactions (clicks, key presses)
• Browser actions (page load, resize)
• DOM modifications
• Form submissions
• Custom events

Events are the foundation of interactive web applications.`,
      code: `// Basic event handling
element.onclick = function() {
    console.log('Element clicked!');
};

// Modern event listener
element.addEventListener('click', function(event) {
    console.log('Element clicked!');
    console.log('Event type:', event.type);
});`
    },
    {
      title: 'Common Event Types',
      content: `JavaScript supports many types of events:

Mouse Events:
• click - When element is clicked
• dblclick - Double click
• mouseenter/mouseleave - Mouse over/out
• mousemove - Mouse movement

Keyboard Events:
• keydown - Key is pressed
• keyup - Key is released
• keypress - Character is typed

Form Events:
• submit - Form submission
• change - Input value changes
• focus/blur - Element focus/blur`,
      code: `// Mouse events
element.addEventListener('click', handleClick);
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);

// Keyboard events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Form events
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted');
});`
    },
    {
      title: 'Event Object',
      content: `The event object contains information about the event:
• event.type - Type of event
• event.target - Element that triggered event
• event.currentTarget - Element handling event
• event.preventDefault() - Prevent default behavior
• event.stopPropagation() - Stop event bubbling
• event.clientX/clientY - Mouse coordinates`,
      code: `element.addEventListener('click', function(event) {
    // Event type
    console.log('Event type:', event.type);
    
    // Target element
    console.log('Target:', event.target);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation
    event.stopPropagation();
    
    // Mouse coordinates
    console.log('X:', event.clientX, 'Y:', event.clientY);
});`
    },
    {
      title: 'Event Propagation',
      content: `Events in the DOM bubble up through the ancestor elements:
• Capturing Phase - Event travels down to target
• Target Phase - Event reaches target element
• Bubbling Phase - Event bubbles up to ancestors

Understanding event propagation is crucial for proper event handling.`,
      code: `// Event bubbling
parent.addEventListener('click', function() {
    console.log('Parent clicked');
});

child.addEventListener('click', function() {
    console.log('Child clicked');
});

// Capture phase
parent.addEventListener('click', function() {
    console.log('Parent capture');
}, true);

// Stop propagation
child.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Child only');
});`
    },
    {
      title: 'Event Delegation',
      content: `Event delegation is a technique of handling events at a higher level:
• Improves performance with many elements
• Handles dynamically added elements
• Reduces memory usage
• Simplifies event handling code

It relies on event bubbling to work.`,
      code: `// Event delegation example
document.getElementById('parent-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// Adding new elements
const list = document.getElementById('parent-list');
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
list.appendChild(newItem); // Will work with existing handler`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Events</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Events</h2>
        <p className="text-gray-700 mb-4">
          Events are the key to creating interactive web applications. They allow your code to respond
          to user actions and browser changes in real-time.
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

export default Events; 