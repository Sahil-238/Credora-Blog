import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ReduxToolkit = () => {
  const createSliceExample = `// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;  // Immer makes this immutable behind the scenes
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`;

  const storeSetupExample = `// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  // Middleware and DevTools are configured automatically!
});`;

  const asyncThunkExample = `// features/todos/todosSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('https://api.example.com/todos');
    return response.json();
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});`;

  const rtqExample = `// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = api;

// In your component:
const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();

  if (isLoading) return 'Loading...';
  
  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      <button onClick={() => addTodo({ title: 'New Todo' })}>
        Add Todo
      </button>
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Modern State Management</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Redux Toolkit (RTK)</h2>
        <p className="text-gray-600 mb-4">
          Redux Toolkit is the official, opinionated toolset for efficient Redux development.
          It addresses the three most common concerns about Redux: complex configuration,
          too much boilerplate, and too many packages to install.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Simplified store setup with configureStore</li>
              <li>Automatic Redux DevTools Configuration</li>
              <li>Immutable updates with Immer</li>
              <li>Automatic action creators with createSlice</li>
              <li>Built-in async handling with createAsyncThunk</li>
            </ul>
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">Creating a Slice</h3>
        <p className="text-gray-600 mb-4">
          createSlice combines reducer logic and actions into a single function:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {createSliceExample}
          </SyntaxHighlighter>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">Store Setup</h3>
        <p className="text-gray-600 mb-4">
          configureStore provides a simplified store setup with good defaults:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {storeSetupExample}
          </SyntaxHighlighter>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">Async Operations</h3>
        <p className="text-gray-600 mb-4">
          createAsyncThunk simplifies handling async operations:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {asyncThunkExample}
          </SyntaxHighlighter>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-3">RTK Query</h3>
        <p className="text-gray-600 mb-4">
          RTK Query is a powerful data fetching and caching tool:
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {rtqExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Zustand</h2>
        <p className="text-gray-600 mb-4">
          Zustand is a small, fast, and scalable state management solution. It's built with hooks in mind
          and reduces boilerplate without sacrificing flexibility.
        </p>

        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
{`// store.js
import create from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// Component.jsx
function BearCounter() {
  const bears = useStore((state) => state.bears);
  const increase = useStore((state) => state.increasePopulation);
  
  return (
    <div>
      <h1>{bears} bears</h1>
      <button onClick={increase}>Add bear</button>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-green-700">
            <strong>Zustand Benefits:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Minimal boilerplate</li>
              <li>No providers needed</li>
              <li>First-class TypeScript support</li>
              <li>Transient updates (no renders on state identity change)</li>
              <li>Redux DevTools support</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recoil</h2>
        <p className="text-gray-600 mb-4">
          Recoil is Facebook's state management library that provides a graph-based approach
          to state management. It's particularly good for complex state dependencies.
        </p>

        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
{`// atoms.js
import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListStatsState = selector({
  key: 'todoListStats',
  get: ({get}) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completed = todoList.filter((todo) => todo.isComplete).length;
    
    return {
      total,
      completed,
      uncompleted: total - completed,
    };
  },
});

// Component.jsx
import { useRecoilState, useRecoilValue } from 'recoil';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const stats = useRecoilValue(todoListStatsState);
  
  return (
    <div>
      <TodoListStats stats={stats} />
      <TodoListItems items={todoList} setItems={setTodoList} />
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p className="text-purple-700">
            <strong>Recoil Features:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Atomic state management</li>
              <li>Derived state through selectors</li>
              <li>Async state queries</li>
              <li>State persistence</li>
              <li>Code splitting compatibility</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Jotai</h2>
        <p className="text-gray-600 mb-4">
          Jotai is a primitive and flexible state management library for React with an atomic approach.
          It's designed to be simple and scale from a small to large application.
        </p>

        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
{`// atoms.js
import { atom } from 'jotai';

const textAtom = atom('hello');
const uppercaseAtom = atom(
  (get) => get(textAtom).toUpperCase()
);

// Component.jsx
import { useAtom } from 'jotai';

function TextInput() {
  const [text, setText] = useAtom(textAtom);
  const [uppercase] = useAtom(uppercaseAtom);
  
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Uppercase: {uppercase}</p>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-800">
            <strong>Jotai Advantages:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Atomic by design</li>
              <li>No string keys needed</li>
              <li>TypeScript-first approach</li>
              <li>Small bundle size</li>
              <li>React Suspense support</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Choosing the Right Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Use Redux Toolkit when:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Large-scale applications</li>
              <li>Complex state logic</li>
              <li>Need for robust dev tools</li>
              <li>Team is familiar with Redux</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Use Zustand when:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Simple state management needed</li>
              <li>Want to avoid boilerplate</li>
              <li>Need good TypeScript support</li>
              <li>Performance is crucial</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Use Recoil when:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Complex state dependencies</li>
              <li>Need atomic state management</li>
              <li>Working with async state</li>
              <li>Need code splitting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Use Jotai when:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Need atomic approach</li>
              <li>Want minimal bundle size</li>
              <li>Using React Suspense</li>
              <li>TypeScript is important</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/redux-basics"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Redux Basics
        </Link>
        <Link
          to="/react-course/zustand"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Zustand →
        </Link>
      </div>
    </motion.div>
  );
};

export default ReduxToolkit;