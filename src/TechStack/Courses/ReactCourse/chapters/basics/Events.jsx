import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Events = () => {
  const basicEventsExample = `function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// Inline event handler
function Button() {
  return (
    <button onClick={() => console.log('Clicked!')}>
      Click me
    </button>
  );
}`;

  const eventObjectExample = `function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted');
  };

  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type something"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`;

  const passingArgumentsExample = `function ItemList() {
  const handleClick = (id, event) => {
    console.log('Item clicked:', id);
    console.log('Event:', event);
  };

  return (
    <ul>
      <li onClick={(e) => handleClick(1, e)}>Item 1</li>
      <li onClick={(e) => handleClick(2, e)}>Item 2</li>
      <li onClick={(e) => handleClick(3, e)}>Item 3</li>
    </ul>
  );
}

// Using bind (less common)
function ItemList() {
  const handleClick = (id, event) => {
    console.log('Item clicked:', id);
  };

  return (
    <ul>
      <li onClick={handleClick.bind(null, 1)}>Item 1</li>
      <li onClick={handleClick.bind(null, 2)}>Item 2</li>
      <li onClick={handleClick.bind(null, 3)}>Item 3</li>
    </ul>
  );
}`;

  const eventDelegationExample = `function TodoList() {
  const handleClick = (event) => {
    if (event.target.tagName === 'LI') {
      const id = event.target.dataset.id;
      console.log('Todo clicked:', id);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li data-id="1">Todo 1</li>
      <li data-id="2">Todo 2</li>
      <li data-id="3">Todo 3</li>
    </ul>
  );
}`;

  const customEventsExample = `// Child Component
function ChildComponent({ onCustomEvent }) {
  const triggerCustomEvent = () => {
    onCustomEvent({ type: 'custom', data: 'Hello from child!' });
  };

  return (
    <button onClick={triggerCustomEvent}>
      Trigger Custom Event
    </button>
  );
}

// Parent Component
function ParentComponent() {
  const handleCustomEvent = (event) => {
    console.log('Custom event received:', event);
  };

  return (
    <ChildComponent onCustomEvent={handleCustomEvent} />
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Events in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Handling Events</h2>
        <p className="text-gray-600 mb-4">
          React events are named using camelCase and passed as JSX attributes. They are similar to handling events on DOM elements but with some syntactical differences.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            React events are synthetic events that wrap the native browser events, ensuring consistent behavior across different browsers.
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicEventsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">The Event Object</h2>
        <p className="text-gray-600 mb-4">
          React passes synthetic events to event handlers. These events have the same interface as native events but work identically across all browsers.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {eventObjectExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Passing Arguments to Event Handlers</h2>
        <p className="text-gray-600 mb-4">
          There are several ways to pass additional data to event handlers. The most common approach is using arrow functions or the bind method.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {passingArgumentsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Event Delegation</h2>
        <p className="text-gray-600 mb-4">
          React's event system uses event delegation internally, but you can still implement your own delegation patterns when needed.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {eventDelegationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Events</h2>
        <p className="text-gray-600 mb-4">
          While React doesn't have true custom events like the DOM, you can achieve similar functionality using props and callback functions.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {customEventsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common React Events</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li><code className="bg-gray-100 px-2 py-1 rounded">onClick</code> - Clicking an element</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onChange</code> - Form input changes</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onSubmit</code> - Form submission</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onFocus</code> - Element receives focus</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onBlur</code> - Element loses focus</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onKeyDown</code> - Keyboard key is pressed</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onMouseEnter</code> - Mouse enters element</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">onMouseLeave</code> - Mouse leaves element</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use debounce/throttle for performance-intensive events</li>
          <li>Clean up event listeners in useEffect cleanup function</li>
          <li>Consider accessibility when handling keyboard events</li>
          <li>Use event pooling carefully in older React versions</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/state"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: State
        </Link>
        <Link
          to="/react-course/lifecycle"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Lifecycle <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Events;