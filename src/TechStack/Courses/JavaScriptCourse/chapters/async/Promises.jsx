import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Promises = () => {
  const sections = [
    {
      title: 'Understanding Promises',
      content: `A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

Key concepts:
• Promises have three states: pending, fulfilled, rejected
• Promises are immutable once settled
• Promises can be chained
• Promises help manage asynchronous code
• Promises solve callback hell`,
      code: `// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Async operation
    const success = true;
    
    if (success) {
        resolve('Operation successful!');
    } else {
        reject('Operation failed!');
    }
});

// Using the Promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));`
    },
    {
      title: 'Promise Methods',
      content: `Promises provide several methods for handling async operations:
• then() - Handle successful completion
• catch() - Handle errors
• finally() - Execute code regardless of outcome
• Promise.all() - Handle multiple promises
• Promise.race() - Handle first settled promise
• Promise.resolve() - Create resolved promise
• Promise.reject() - Create rejected promise`,
      code: `// Promise methods
myPromise
    .then(result => {
        console.log('Success:', result);
        return processResult(result);
    })
    .catch(error => {
        console.error('Error:', error);
        return handleError(error);
    })
    .finally(() => {
        console.log('Cleanup operations');
    });

// Multiple promises
Promise.all([promise1, promise2, promise3])
    .then(results => console.log('All done:', results))
    .catch(error => console.error('One failed:', error));

// Race condition
Promise.race([promise1, promise2])
    .then(winner => console.log('First to complete:', winner));`
    },
    {
      title: 'Promise Chaining',
      content: `Promise chaining allows sequential async operations:
• Each .then() returns a new Promise
• Values are passed through the chain
• Errors can be caught at any point
• Avoid nested .then() calls
• Keep the chain flat for readability`,
      code: `// Promise chaining
fetchUserData(userId)
    .then(user => {
        console.log('User:', user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
        return fetchPostComments(posts[0].id);
    })
    .then(comments => {
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Error in chain:', error);
    });`
    },
    {
      title: 'Error Handling',
      content: `Proper error handling in Promises:
• Use .catch() for error handling
• Errors propagate through the chain
• throw creates rejected promises
• Error objects contain stack traces
• Multiple catch blocks possible`,
      code: `// Error handling in Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an error
        reject(new Error('Network error'));
    });
}

fetchData()
    .then(data => {
        // This won't run
        console.log(data);
    })
    .catch(error => {
        console.error('Caught error:', error.message);
        // Handle the error or throw
        throw new Error('Custom error');
    })
    .catch(error => {
        // Handle the custom error
        console.error('Final error handler:', error.message);
    });`
    },
    {
      title: 'Real-World Examples',
      content: `Common use cases for Promises:
• API calls
• File operations
• Database queries
• Image loading
• Authentication flows
• Caching operations`,
      code: `// API call example
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
        return processData(data);
    })
    .catch(error => {
        console.error('Error:', error);
        showErrorMessage(error);
    });

// Multiple API calls
const userPromise = fetch('/api/user');
const postsPromise = fetch('/api/posts');
const commentsPromise = fetch('/api/comments');

Promise.all([userPromise, postsPromise, commentsPromise])
    .then(([user, posts, comments]) => {
        // All data available here
        updateUI(user, posts, comments);
    })
    .catch(error => handleError(error));`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Promises</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Asynchronous Programming with Promises</h2>
        <p className="text-gray-700 mb-4">
          Promises are a powerful way to handle asynchronous operations in JavaScript. They provide
          a clean and organized approach to managing async code and handling errors.
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
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Promises; 