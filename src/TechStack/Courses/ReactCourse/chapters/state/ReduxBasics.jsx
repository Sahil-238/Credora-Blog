import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ReduxBasics = () => {
  const storeExample = `// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  counter: 0,
  todos: []
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);
export default store;`;

  const actionsExample = `// actions.js
// Action Types
export const INCREMENT = 'INCREMENT';
export const ADD_TODO = 'ADD_TODO';

// Action Creators
export const increment = () => ({
  type: INCREMENT
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

// Usage in component
const handleAddTodo = () => {
  dispatch(addTodo({ id: Date.now(), text: 'New Todo' }));
};

const handleIncrement = () => {
  dispatch(increment());
};`;

  const connectExample = `// Traditional connect approach
import { connect } from 'react-redux';

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.counter
});

const mapDispatchToProps = {
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);`;

  const hooksExample = `// Modern hooks approach
import { useSelector, useDispatch } from 'react-redux';
import { increment, addTodo } from './actions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const count = useSelector(state => state.counter);

  const handleAddTodo = (text) => {
    dispatch(addTodo({ id: Date.now(), text }));
  };

  return (
    <div>
      <h2>Todos ({count})</h2>
      <button onClick={() => handleAddTodo('New Task')}>
        Add Todo
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};`;

  const practicalExample = `// Complete Todo Application Example
// store/todoSlice.js
const initialState = {
  todos: [],
  filter: 'all'
};

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

// Component
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div>
      <FilterButtons />
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Redux Basics</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Redux</h2>
        <p className="text-gray-600 mb-4">
          Redux is a predictable state container for JavaScript applications. It helps you write
          applications that behave consistently, run in different environments, and are easy to test.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Core Concepts:</strong> Redux follows three fundamental principles:
            Single source of truth, State is read-only, and Changes are made with pure functions.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Store and Reducers</h2>
        <p className="text-gray-600 mb-4">
          The store is the heart of Redux. It holds the application state and allows access to it.
          Reducers specify how the state changes in response to actions.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {storeExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Actions and Action Creators</h2>
        <p className="text-gray-600 mb-4">
          Actions are plain JavaScript objects that describe what happened in the application.
          Action creators are functions that create and return action objects.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {actionsExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Connecting Redux to React</h2>
        <p className="text-gray-600 mb-4">
          There are two main approaches to connect Redux with React components: the traditional
          connect HOC and the modern hooks approach.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {connectExample}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-600 mt-4 mb-4">
          The modern hooks approach provides a more intuitive and flexible way to work with Redux:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {hooksExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Practical Example: Todo Application</h2>
        <p className="text-gray-600 mb-4">
          Let's look at a more complete example that demonstrates Redux concepts in a practical
          todo application with filtering capabilities.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {practicalExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">State Structure</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keep state normalized</li>
              <li>Avoid deep nesting</li>
              <li>Use proper data types</li>
              <li>Consider state serialization</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Action Patterns</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use action creators</li>
              <li>Follow Flux Standard Actions</li>
              <li>Keep actions minimal</li>
              <li>Use meaningful type names</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use Redux</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Complex State</h3>
            <p className="text-sm text-gray-600">Many state updates across components</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Team Projects</h3>
            <p className="text-sm text-gray-600">Large applications with many developers</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">State Persistence</h3>
            <p className="text-sm text-gray-600">Need to cache or persist state</p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/context-api"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Context API
        </Link>
        <Link
          to="/react-course/redux-toolkit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Redux Toolkit →
        </Link>
      </div>
    </motion.div>
  );
};

export default ReduxBasics;