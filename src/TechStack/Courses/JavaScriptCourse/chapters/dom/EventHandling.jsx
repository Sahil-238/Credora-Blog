import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const EventHandling = () => {
  const sections = [
    {
      title: 'Introduction to Events',
      content: `Events in JavaScript:
• Are actions or occurrences
• Can be triggered by users
• Can be triggered by browser
• Can be handled with event handlers
• Follow event bubbling/capturing
• Can be prevented or stopped

Common event types:
• Mouse events (click, hover)
• Keyboard events (keypress)
• Form events (submit, change)
• Window events (load, resize)
• Document events (DOMContentLoaded)`,
      code: `// Basic event handling
const button = document.querySelector('button');

// Using addEventListener
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target:', event.target);
});

// Using onclick property
button.onclick = function(event) {
  console.log('Button clicked!');
};

// Multiple handlers
button.addEventListener('click', handler1);
button.addEventListener('click', handler2);

// Remove handler
button.removeEventListener('click', handler1);`
    },
    {
      title: 'Event Object Properties',
      content: `The event object contains:
• type - Event type
• target - Element that triggered event
• currentTarget - Element handling event
• timeStamp - When event occurred
• clientX/Y - Mouse coordinates
• key/code - Keyboard info
• preventDefault() - Prevent default action
• stopPropagation() - Stop bubbling`,
      code: `document.addEventListener('click', function(event) {
  console.log({
    type: event.type,           // "click"
    target: event.target,       // Element clicked
    currentTarget: event.currentTarget,
    timeStamp: event.timeStamp, // Time of click
    clientX: event.clientX,     // Mouse X position
    clientY: event.clientY      // Mouse Y position
  });
});

// Form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission
  // Handle form data
});

// Link click
link.addEventListener('click', function(event) {
  event.preventDefault();  // Prevent navigation
  // Custom navigation logic
});`
    },
    {
      title: 'Event Bubbling and Capturing',
      content: `Event propagation phases:
• Capturing phase (top down)
• Target phase (element itself)
• Bubbling phase (bottom up)

Control with:
• stopPropagation()
• stopImmediatePropagation()
• addEventListener third parameter`,
      code: `// Event bubbling example
document.body.addEventListener('click', function(event) {
  console.log('Body clicked');
});

document.querySelector('button').addEventListener('click', function(event) {
  console.log('Button clicked');
  event.stopPropagation();  // Stop bubbling
});

// Capture phase
element.addEventListener('click', function(event) {
  console.log('Capture phase');
}, true);  // true for capture phase

// Stop all handlers
element.addEventListener('click', function(event) {
  console.log('First handler');
  event.stopImmediatePropagation();
});

element.addEventListener('click', function(event) {
  console.log('Never called');
});`
    },
    {
      title: 'Event Delegation',
      content: `Event delegation benefits:
• Better performance
• Dynamic elements
• Less memory usage
• Fewer event listeners
• Automatic handling of new elements

Use when:
• Many similar event handlers
• Dynamically added elements
• Parent-child relationships`,
      code: `// Without delegation (bad)
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function(event) {
    console.log('Button clicked');
  });
});

// With delegation (good)
document.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    console.log('Button clicked');
  }
});

// Complex delegation example
document.querySelector('table').addEventListener('click', function(event) {
  const cell = event.target.closest('td');
  if (!cell) return;  // Not clicked on cell
  
  if (cell.matches('.edit-button')) {
    editRow(cell.parentNode);
  } else if (cell.matches('.delete-button')) {
    deleteRow(cell.parentNode);
  }
});`
    },
    {
      title: 'Custom Events',
      content: `Create custom events:
• new CustomEvent()
• dispatchEvent()
• detail property for data
• bubbles option
• cancelable option

Use for:
• Component communication
• Custom interactions
• Framework events
• Application state changes`,
      code: `// Create custom event
const event = new CustomEvent('userLogin', {
  bubbles: true,
  cancelable: true,
  detail: {
    userId: 123,
    username: 'john'
  }
});

// Dispatch event
document.dispatchEvent(event);

// Listen for custom event
document.addEventListener('userLogin', function(event) {
  console.log('User logged in:', event.detail.username);
});

// Cancelable custom event
element.addEventListener('customAction', function(event) {
  if (shouldCancel) {
    event.preventDefault();
  }
});

// Check if event was cancelled
const event = new CustomEvent('customAction', {
  cancelable: true
});
const cancelled = !element.dispatchEvent(event);`
    },
    {
      title: 'Event Performance',
      content: `Optimize event handling:
• Use event delegation
• Debounce/throttle events
• Remove unused listeners
• Avoid inline handlers
• Cache event targets
• Use passive listeners
• Batch DOM updates`,
      code: `// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Usage
window.addEventListener('resize', debounce(function() {
  console.log('Resized');
}, 250));

window.addEventListener('scroll', throttle(function() {
  console.log('Scrolled');
}, 100));

// Passive event listener
document.addEventListener('touchstart', function() {
  console.log('Touch start');
}, { passive: true });`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Event Handling in JavaScript</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Events</h2>
        <p className="text-gray-700 mb-4">
          Learn how to handle user interactions and browser events effectively in JavaScript, including event delegation and performance optimization.
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
            <p className="text-gray-700">Not removing event listeners (memory leaks)</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Using too many individual event listeners</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Forgetting to prevent default behavior when needed</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use event delegation for better performance</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Debounce/throttle frequent events</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Remove event listeners when elements are removed</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default EventHandling; 