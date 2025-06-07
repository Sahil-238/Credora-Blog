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
      state.value += 1;
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

export const { useGetTodosQuery, useAddTodoMutation } = api;`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Redux Toolkit (RTK)</h1>

      <p className="text-gray-600 mb-4">
        Redux Toolkit is the official, opinionated toolset for efficient Redux development. It simplifies the process of writing Redux logic and includes tools like <code>createSlice</code>, <code>configureStore</code>, and <code>createAsyncThunk</code>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-blue-700">
          <strong>Key Features:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Simplified store setup with configureStore</li>
            <li>Immutable updates with Immer</li>
            <li>Automatic Redux DevTools</li>
            <li>createSlice for reducers + actions</li>
            <li>Built-in async handling via createAsyncThunk</li>
          </ul>
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-3">1. Creating a Slice</h3>
      <p className="text-gray-600 mb-4">A slice contains the reducer logic and actions:</p>
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {createSliceExample}
        </SyntaxHighlighter>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-3">2. Store Setup</h3>
      <p className="text-gray-600 mb-4">Use <code>configureStore</code> to combine slices and setup middleware/devtools:</p>
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {storeSetupExample}
        </SyntaxHighlighter>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-3">3. Async Operations with createAsyncThunk</h3>
      <p className="text-gray-600 mb-4">
        For fetching APIs or performing side effects, use <code>createAsyncThunk</code>:
      </p>
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {asyncThunkExample}
        </SyntaxHighlighter>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-3">4. RTK Query</h3>
      <p className="text-gray-600 mb-4">
        RTK Query is a powerful data fetching library that simplifies caching and updates:
      </p>
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {rtqExample}
        </SyntaxHighlighter>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/redux-basics"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Redux Basics
        </Link>
        {/* You can replace this with your next topic or remove if none */}
        <span className="text-gray-400 italic">End of State Management Topics</span>
      </div>
    </motion.div>
  );
};

export default ReduxToolkit;
