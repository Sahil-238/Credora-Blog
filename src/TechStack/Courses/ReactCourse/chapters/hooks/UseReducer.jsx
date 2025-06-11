import React, { useReducer } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example 1: Simple Counter Reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Example 2: Todo List Reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const UseReducer = () => {
  // Counter state
  const [counterState, counterDispatch] = useReducer(counterReducer, { count: 0 });

  // Todo list state
  const [todos, todosDispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      todosDispatch({ type: 'ADD_TODO', payload: newTodo.trim() });
      setNewTodo('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useReducer Hook</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useReducer?</h2>
        <p className="text-gray-600 mb-4">
          useReducer is a Hook that manages complex state logic in React components. It's similar to Redux's pattern and is preferable to useState when you have:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Complex state logic involving multiple sub-values</li>
          <li>State that depends on previous state</li>
          <li>Deep updates through complex data structures</li>
        </ul>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
          <p className="text-pink-700">
            <strong>Best Practice:</strong> Use useReducer when state logic becomes too complex for useState or when you need more predictable state updates.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Counter Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="text-center space-y-4">
            <p className="text-2xl font-mono">{counterState.count}</p>
            <div className="space-x-2">
              <button
                onClick={() => counterDispatch({ type: 'DECREMENT' })}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                -
              </button>
              <button
                onClick={() => counterDispatch({ type: 'RESET' })}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Reset
              </button>
              <button
                onClick={() => counterDispatch({ type: 'INCREMENT' })}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(counterReducer, { count: 0 });`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Complex Todo List Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <form onSubmit={handleAddTodo} className="mb-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </form>
          <ul className="space-y-2">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => todosDispatch({
                      type: 'TOGGLE_TODO',
                      payload: todo.id
                    })}
                    className="h-4 w-4"
                  />
                  <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => todosDispatch({
                    type: 'DELETE_TODO',
                    payload: todo.id
                  })}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {todos.length > 0 && (
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {todos.filter(t => !t.completed).length} items left
              </span>
              <button
                onClick={() => todosDispatch({ type: 'CLEAR_COMPLETED' })}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const [todos, dispatch] = useReducer(todoReducer, []);`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use useReducer</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Perfect for:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>Complex state logic</li>
              <li>State that depends on previous state</li>
              <li>Related state transitions</li>
              <li>State shared across components</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">
              <strong>⚠️ Consider useState instead when:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-yellow-700">
              <li>State is simple and independent</li>
              <li>State updates are straightforward</li>
              <li>You don't need state history</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Keep reducers pure - no side effects</li>
          <li>Use action types as constants to avoid typos</li>
          <li>Structure actions with type and payload</li>
          <li>Consider using TypeScript for better type safety</li>
          <li>Split complex reducers into smaller functions</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/useRef"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/useCallback"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UseReducer;