import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AsyncAwait = () => {
  const sections = [
    {
      title: 'Understanding Async/Await',
      content: `Async/await is a modern way to handle promises:
• async functions always return promises
• await pauses execution until promise resolves
• Makes async code look synchronous
• Built on top of promises
• Introduced in ES2017
• Widely supported in modern browsers`,
      code: `// Async function declaration
async function getData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

// Async arrow function
const getData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
};

// Using async method in class
class DataService {
  async getData() {
    const response = await fetch('/api/data');
    return response.json();
  }
}`
    },
    {
      title: 'Error Handling',
      content: `Error handling with async/await:
• Use try/catch blocks
• Handle specific errors
• Chain catch blocks
• Finally block for cleanup
• Throw custom errors
• Handle promise rejections`,
      code: `async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error);
    } else {
      console.error('Other error:', error);
    }
    throw error;  // Re-throw or handle
  } finally {
    // Cleanup code here
    console.log('Fetch operation completed');
  }
}`
    },
    {
      title: 'Parallel Execution',
      content: `Running async operations in parallel:
• Promise.all() - Wait for all
• Promise.race() - Wait for first
• Promise.allSettled() - Wait for all to settle
• Promise.any() - Wait for first success
• Concurrent execution
• Performance optimization`,
      code: `// Wait for all promises
async function fetchAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    return { users, posts, comments };
  } catch (error) {
    console.error('One or more requests failed:', error);
  }
}

// Race promises
async function fetchFastest() {
  try {
    const data = await Promise.race([
      fetch('api1.com/data'),
      fetch('api2.com/data'),
      fetch('api3.com/data')
    ]);
    return data.json();
  } catch (error) {
    console.error('All requests failed:', error);
  }
}`
    },
    {
      title: 'Sequential vs Concurrent',
      content: `Different execution patterns:
• Sequential - One after another
• Concurrent - All at once
• Mixed - Some parallel, some sequential
• Control flow
• Error handling strategies
• Performance considerations`,
      code: `// Sequential execution
async function sequential() {
  const user = await fetchUser(userId);
  const posts = await fetchUserPosts(user.id);
  const comments = await fetchPostComments(posts[0].id);
  return { user, posts, comments };
}

// Concurrent execution
async function concurrent() {
  const userPromise = fetchUser(userId);
  const postsPromise = fetchUserPosts(userId);
  const commentsPromise = fetchPostComments(postId);
  
  const [user, posts, comments] = await Promise.all([
    userPromise,
    postsPromise,
    commentsPromise
  ]);
  
  return { user, posts, comments };
}`
    },
    {
      title: 'Advanced Patterns',
      content: `Advanced async/await patterns:
• Async iterators
• Async generators
• Cancellation
• Timeout handling
• Retry logic
• Rate limiting`,
      code: `// Async iterator
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(r => setTimeout(r, 1000));
    yield i;
  }
}

// Using async iterator
async function useGenerator() {
  for await (const num of generateSequence(1, 5)) {
    console.log(num);
  }
}

// Timeout wrapper
async function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), ms);
  });
  return Promise.race([promise, timeout]);
}

// Retry logic
async function withRetry(fn, maxAttempts = 3) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxAttempts - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
}`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Async/Await in JavaScript</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Async/Await</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use async/await for cleaner and more maintainable asynchronous code in JavaScript.
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
            <p className="text-gray-700">Forgetting to use try/catch with await</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Sequential execution when parallel is better</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not handling errors in Promise.all()</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always use try/catch with await</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Consider parallel execution for better performance</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error handling and retries</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default AsyncAwait; 