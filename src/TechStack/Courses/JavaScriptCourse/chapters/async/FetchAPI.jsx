import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FetchAPI = () => {
  const sections = [
    {
      title: 'Introduction to Fetch API',
      content: `The Fetch API provides:
• Modern interface for HTTP requests
• Promise-based architecture
• JSON and other data formats
• Request/Response objects
• Headers manipulation
• Request configuration
• Stream handling`,
      code: `// Basic GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Using async/await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`
    },
    {
      title: 'Request Configuration',
      content: `Configure fetch requests with:
• HTTP methods (GET, POST, etc.)
• Headers
• Body data
• Credentials
• Cache control
• Mode (cors, no-cors, etc.)
• Redirect handling`,
      code: `// POST request with JSON data
fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({
    title: 'New Post',
    content: 'Post content'
  })
})
.then(response => response.json())
.then(data => console.log(data));

// File upload
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('https://api.example.com/upload', {
  method: 'POST',
  body: formData
});

// Configure credentials
fetch('https://api.example.com/user', {
  credentials: 'include',  // Send cookies
  mode: 'cors',           // CORS mode
  cache: 'no-cache'       // Cache control
});`
    },
    {
      title: 'Response Handling',
      content: `Working with Response object:
• Status codes
• Headers
• Body methods (json, text, blob)
• Response type checking
• Error handling
• Response cloning
• Stream handling`,
      code: `async function handleResponse() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    // Check status
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    // Get headers
    console.log(response.headers.get('Content-Type'));
    
    // Different response types
    const jsonData = await response.json();
    // const textData = await response.text();
    // const blobData = await response.blob();
    // const formData = await response.formData();
    
    return jsonData;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Clone response
async function handleStreamResponse() {
  const response = await fetch('https://api.example.com/stream');
  const clone = response.clone();  // Clone for multiple reads
  
  const data1 = await response.json();
  const data2 = await clone.json();
}`
    },
    {
      title: 'Advanced Features',
      content: `Advanced Fetch API features:
• Request abortion
• Timeout implementation
• Progress tracking
• Stream handling
• Cache API integration
• Service Worker interaction`,
      code: `// Abort controller
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    }
  });

// Abort after timeout
setTimeout(() => controller.abort(), 5000);

// Timeout wrapper
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}`
    },
    {
      title: 'Error Handling Patterns',
      content: `Common error handling patterns:
• Network errors
• HTTP status errors
• Timeout handling
• Retry logic
• Fallback strategies
• Error reporting`,
      code: `async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
      
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Exponential backoff
      const waitTime = Math.min(1000 * Math.pow(2, i), 10000);
      await new Promise(r => setTimeout(r, waitTime));
      
      console.log(\`Retry attempt \${i + 1}\`);
    }
  }
}

// Usage with error boundary
try {
  const data = await fetchWithRetry('https://api.example.com/data');
  console.log(data);
} catch (error) {
  if (error.name === 'TypeError') {
    console.error('Network error:', error);
  } else if (error.response) {
    console.error('HTTP error:', error.response.status);
  } else {
    console.error('Other error:', error);
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
      <h1 className="text-4xl font-bold mb-6">Fetch API</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding the Fetch API</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use the Fetch API for making HTTP requests in JavaScript, including advanced features and best practices.
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
            <p className="text-gray-700">Not checking response.ok status</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Forgetting to handle network errors</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Using response body multiple times without cloning</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always check response.ok before processing</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error handling and retries</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use appropriate request configurations</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default FetchAPI; 