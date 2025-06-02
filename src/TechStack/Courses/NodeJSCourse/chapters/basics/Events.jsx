import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiRadio, FiActivity, FiAlertCircle, FiCode } from 'react-icons/fi';

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Events in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Event-Driven Programming</h2>
        <p className="text-gray-600 mb-4">
          Node.js uses an event-driven architecture where certain types of objects (called "emitters")
          emit named events that cause listeners (functions) to be called. This pattern is the backbone
          of Node.js's non-blocking I/O operations.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiRadio className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Concepts</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Events are handled asynchronously</li>
                <li>Multiple listeners can respond to the same event</li>
                <li>Events can carry data through arguments</li>
                <li>Events are handled in the order they are registered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">The EventEmitter Class</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiActivity className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                The EventEmitter class is the core of Node.js's event system. It provides methods to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Emit events</li>
                <li>Register event listeners</li>
                <li>Remove event listeners</li>
                <li>Handle events once</li>
              </ul>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const EventEmitter = require('events');

// Create a new emitter instance
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('event', (data) => {
  console.log('Event occurred:', data);
});

// Emit an event
myEmitter.emit('event', 'Hello World');`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Event Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Listener Management</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`// Add listener
emitter.on('event', listener);

// Add one-time listener
emitter.once('event', listener);

// Remove listener
emitter.off('event', listener);

// Remove all listeners
emitter.removeAllListeners('event');

// Get listener count
emitter.listenerCount('event');`}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Event Emission</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`// Emit event with data
emitter.emit('event', arg1, arg2);

// Emit error event
emitter.emit('error', new Error());

// Check if has listeners
emitter.eventNames();

// Get max listeners
emitter.getMaxListeners();

// Set max listeners
emitter.setMaxListeners(20);`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating Custom Event Emitters</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCode className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                You can create custom classes that extend EventEmitter to add event capabilities:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  addUser(user) {
    this.users.add(user);
    this.emit('userJoined', user);
  }

  removeUser(user) {
    this.users.delete(user);
    this.emit('userLeft', user);
  }

  sendMessage(user, message) {
    this.emit('message', { user, message });
  }
}

// Usage
const room = new ChatRoom();

room.on('userJoined', (user) => {
  console.log(\`\${user} joined the room\`);
});

room.on('message', ({ user, message }) => {
  console.log(\`\${user}: \${message}\`);
});

room.addUser('Alice');
room.sendMessage('Alice', 'Hello everyone!');`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Error Events</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiAlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Error events are special in Node.js. If an error event is emitted and there are no listeners,
                Node.js will throw the error and crash the process.
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const myEmitter = new EventEmitter();

// Always handle error events
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err);
});

// This won't crash the process
myEmitter.emit('error', new Error('Something went wrong'));`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Always handle 'error' events</li>
            <li>Remove listeners when they're no longer needed</li>
            <li>Use descriptive event names</li>
            <li>Don't emit events in constructors</li>
            <li>Be careful with memory leaks from listeners</li>
            <li>Consider using once() for one-time events</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/package-json"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Package.json
        </Link>
        <Link
          to="/nodejs-course/buffers"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Buffers →
        </Link>
      </div>
    </motion.div>
  );
};

export default Events; 