import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiZap, FiCpu, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PerformanceHooks = () => {
  const useMemoExample = `// useMemo Hook
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ data, filter }) {
  // Memoize expensive calculation
  const filteredData = useMemo(() => {
    console.log('Filtering data...');
    return data.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]); // Only recompute if data or filter changes

  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Example with complex calculations
function DataAnalytics({ numbers }) {
  const stats = useMemo(() => {
    console.log('Computing statistics...');
    return {
      average: numbers.reduce((a, b) => a + b, 0) / numbers.length,
      max: Math.max(...numbers),
      min: Math.min(...numbers),
      sum: numbers.reduce((a, b) => a + b, 0)
    };
  }, [numbers]);

  return (
    <div>
      <p>Average: {stats.average}</p>
      <p>Maximum: {stats.max}</p>
      <p>Minimum: {stats.min}</p>
      <p>Sum: {stats.sum}</p>
    </div>
  );
}`;

  const useCallbackExample = `// useCallback Hook
import React, { useState, useCallback } from 'react';

function SearchComponent({ onSearch }) {
  // Memoize callback function
  const handleSearch = useCallback((searchTerm) => {
    console.log('Searching:', searchTerm);
    onSearch(searchTerm);
  }, [onSearch]); // Only recreate if onSearch changes

  return <SearchInput onSearch={handleSearch} />;
}

// Example with event handlers
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text }
    ]);
  }, []); // Empty deps array as it doesn't depend on props/state

  const removeTodo = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <TodoItems
        todos={todos}
        onRemove={removeTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
}`;

  const useTransitionExample = `// useTransition Hook
import React, { useState, useTransition } from 'react';

function SearchableList({ items }) {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent update: Update input immediately
    setQuery(e.target.value);

    // Non-urgent update: Filter list with transition
    startTransition(() => {
      setFilteredItems(
        items.filter(item =>
          item.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    });
  };

  return (
    <div>
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Example with tab switching
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div>
      <TabButtons onSelect={selectTab} />
      <div style={{ opacity: isPending ? 0.8 : 1 }}>
        {tab === 'home' && <HomeTab />}
        {tab === 'posts' && <PostsTab />}
        {tab === 'contact' && <ContactTab />}
      </div>
    </div>
  );
}`;

  const useDeferredValueExample = `// useDeferredValue Hook
import React, { useState, useDeferredValue } from 'react';

function SearchResults({ query }) {
  // Defer updating the search results
  const deferredQuery = useDeferredValue(query);

  // This will use the deferred value
  const searchResults = useMemo(
    () => computeSearchResults(deferredQuery),
    [deferredQuery]
  );

  return (
    <div style={{
      opacity: query !== deferredQuery ? 0.8 : 1,
      transition: 'opacity 0.2s'
    }}>
      {searchResults.map(result => (
        <SearchResult key={result.id} data={result} />
      ))}
    </div>
  );
}

// Example with list rendering
function VirtualList({ items }) {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 100));
  const deferredItems = useDeferredValue(visibleItems);

  // Scroll handler updates visible items immediately
  const handleScroll = (e) => {
    const newVisibleItems = computeVisibleItems(items, e.target.scrollTop);
    setVisibleItems(newVisibleItems);
  };

  return (
    <div onScroll={handleScroll}>
      {deferredItems.map(item => (
        <ListItem key={item.id} data={item} />
      ))}
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Performance Optimization Hooks</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Performance Hooks</h2>
        <p className="text-gray-600 mb-4">
          React's performance hooks help optimize rendering and computation in your components, ensuring smooth user experiences even with complex UI updates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiZap className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Memoization</h3>
            <p className="text-gray-600">
              Cache expensive computations
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCpu className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Transitions</h3>
            <p className="text-gray-600">
              Prioritize UI updates
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Deferred Values</h3>
            <p className="text-gray-600">
              Defer non-critical updates
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useMemo Hook</h2>
        <p className="text-gray-600 mb-4">
          The useMemo hook memoizes expensive computations, preventing unnecessary recalculations when dependencies haven't changed.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useMemoExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useCallback Hook</h2>
        <p className="text-gray-600 mb-4">
          The useCallback hook memoizes callback functions, preventing unnecessary re-renders of child components that depend on these functions.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useCallbackExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useTransition Hook</h2>
        <p className="text-gray-600 mb-4">
          The useTransition hook helps manage state transitions by marking updates as non-urgent, allowing urgent updates to take priority.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useTransitionExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useDeferredValue Hook</h2>
        <p className="text-gray-600 mb-4">
          The useDeferredValue hook creates a deferred version of a value that can lag behind the main value, useful for deferring expensive re-renders.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {useDeferredValueExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Hooks Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Only memoize expensive computations</li>
            <li>Use appropriate dependency arrays</li>
            <li>Profile before optimizing</li>
            <li>Consider the cost of memoization</li>
            <li>Use transitions for non-urgent updates</li>
            <li>Implement proper error boundaries</li>
            <li>Monitor performance metrics</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use React DevTools Profiler</li>
          <li>Measure performance impact</li>
          <li>Consider code splitting</li>
          <li>Optimize rendering strategies</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/custom-hooks"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Custom Hooks
        </Link>
        <Link
          to="/react-course/state-management"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: State Management <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PerformanceHooks; 