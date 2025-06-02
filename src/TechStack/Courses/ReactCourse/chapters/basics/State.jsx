import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const State = () => {
  const basicStateExample = `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}`;

  const multipleStateExample = `function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}`;

  const objectStateExample = `function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="age"
        type="number"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        name="email"
        type="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}`;

  const stateUpdateExample = `function Counter() {
  const [count, setCount] = useState(0);

  // Wrong way - may not work as expected
  const wrongIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // Correct way - using functional updates
  const correctIncrement = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={correctIncrement}>
        Increment Twice
      </button>
    </div>
  );
}`;

  const derivedStateExample = `function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: true }
  ]);

  // Derived state - calculated from existing state
  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const totalTodos = todos.length;

  return (
    <div>
      <h2>Todo Stats</h2>
      <p>Total: {totalTodos}</p>
      <p>Completed: {completedTodos.length}</p>
      <p>Remaining: {incompleteTodos.length}</p>
    </div>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">State in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is State?</h2>
        <p className="text-gray-600 mb-4">
          State is a way to store and manage component-specific data that can change over time. Unlike props, state is private and fully controlled by the component.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            When state changes, React automatically re-renders the component and its children, updating the UI to reflect the new data.
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicStateExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Multiple State Variables</h2>
        <p className="text-gray-600 mb-4">
          You can have as many state variables as you need in a component. Each call to useState creates an independent state variable.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {multipleStateExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Object State</h2>
        <p className="text-gray-600 mb-4">
          When state is an object, you need to make sure to spread the previous state when updating it, as state updates are merged.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {objectStateExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">State Updates</h2>
        <p className="text-gray-600 mb-4">
          State updates may be asynchronous, so you shouldn't rely on previous state values directly. Instead, use the functional update form when the new state depends on the previous state.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {stateUpdateExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Derived State</h2>
        <p className="text-gray-600 mb-4">
          Some values can be calculated directly from state instead of being stored as state themselves. This is called derived state.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {derivedStateExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">State Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Keep state minimal - don't store what you can compute</li>
            <li>Avoid redundant state - derive values when possible</li>
            <li>Use multiple state variables for unrelated state</li>
            <li>Use a single state object for related state</li>
            <li>Always use the functional update form when new state depends on old state</li>
            <li>Don't modify state directly - always use setState</li>
            <li>Keep state as local as possible</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Consider using useReducer for complex state logic</li>
          <li>Use context for state that needs to be accessed by many components</li>
          <li>Break down complex state into smaller, manageable pieces</li>
          <li>Use TypeScript to catch state-related bugs early</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/props"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: Props
        </Link>
        <Link
          to="/react-course/events"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Events <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default State;