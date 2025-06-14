import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AJAX = () => {
  const sections = [
    {
      title: 'Understanding AJAX',
      content: `AJAX (Asynchronous JavaScript and XML):
• Asynchronous web requests
• Update page without reload
• Multiple data formats (XML, JSON)
• XMLHttpRequest object
• Modern alternatives (Fetch API)
• Browser compatibility
• Error handling`,
      code: `// Traditional XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.error('Error:', xhr.status);
    }
  }
};

xhr.send();

// Modern approach with Fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
    },
    {
      title: 'XMLHttpRequest Object',
      content: `XMLHttpRequest features:
• readyState property
• onreadystatechange event
• status and statusText
• response types
• timeout handling
• progress events
• error handling`,
      code: `const xhr = new XMLHttpRequest();

// Configure request
xhr.open('POST', 'https://api.example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.timeout = 5000;  // 5 seconds

// Handle state changes
xhr.onreadystatechange = function() {
  console.log('State:', xhr.readyState);
  // 0: UNSENT
  // 1: OPENED
  // 2: HEADERS_RECEIVED
  // 3: LOADING
  // 4: DONE
};

// Handle events
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log('Success:', data);
  }
};

xhr.onerror = function() {
  console.error('Request failed');
};

xhr.ontimeout = function() {
  console.error('Request timed out');
};

// Track progress
xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    console.log(\`\${percentComplete}% completed\`);
  }
};

// Send request
xhr.send(JSON.stringify({ key: 'value' }));`
    },
    {
      title: 'AJAX with jQuery',
      content: `jQuery AJAX methods:
• $.ajax() - Main method
• $.get() - GET shorthand
• $.post() - POST shorthand
• $.getJSON() - JSON shorthand
• Promise interface
• Error handling
• Request configuration`,
      code: `// jQuery AJAX
$.ajax({
  url: 'https://api.example.com/data',
  method: 'POST',
  dataType: 'json',
  data: { key: 'value' },
  headers: {
    'Authorization': 'Bearer token123'
  },
  success: function(response) {
    console.log('Success:', response);
  },
  error: function(xhr, status, error) {
    console.error('Error:', error);
  }
});

// GET shorthand
$.get('https://api.example.com/data')
  .done(function(data) {
    console.log('Success:', data);
  })
  .fail(function(error) {
    console.error('Error:', error);
  });

// POST with JSON
$.post('https://api.example.com/data',
  { key: 'value' },
  function(response) {
    console.log('Success:', response);
  },
  'json'
);`
    },
    {
      title: 'Error Handling',
      content: `AJAX error handling:
• Network errors
• HTTP status codes
• Timeout errors
• Parse errors
• Cross-origin errors
• Retry strategies
• Error reporting`,
      code: `function makeAjaxRequest(url, options = {}) {
  const xhr = new XMLHttpRequest();
  
  return new Promise((resolve, reject) => {
    xhr.open(options.method || 'GET', url);
    
    // Set headers
    Object.entries(options.headers || {}).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value);
    });
    
    // Handle success
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } catch (error) {
          reject(new Error('Invalid JSON response'));
        }
      } else {
        reject(new Error(\`HTTP Error: \${xhr.status}\`));
      }
    };
    
    // Handle errors
    xhr.onerror = function() {
      reject(new Error('Network error'));
    };
    
    xhr.ontimeout = function() {
      reject(new Error('Request timed out'));
    };
    
    // Send request
    xhr.send(options.body);
  });
}

// Usage with error handling
async function fetchData() {
  try {
    const data = await makeAjaxRequest('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' })
    });
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error.message);
    // Implement retry logic or fallback
  }
}`
    },
    {
      title: 'Best Practices',
      content: `AJAX best practices:
• Use modern alternatives
• Handle all errors
• Show loading states
• Implement timeouts
• Cache responses
• Rate limiting
• Progress indication
• Cross-browser support`,
      code: `// Modern AJAX wrapper
class AjaxService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.cache = new Map();
  }

  async request(endpoint, options = {}) {
    const url = this.baseUrl + endpoint;
    const cacheKey = \`\${options.method || 'GET'}-\${url}\`;

    // Check cache
    if (options.useCache && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Show loading
    this.showLoading();

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const data = await response.json();

      // Cache response
      if (options.useCache) {
        this.cache.set(cacheKey, data);
      }

      return data;

    } catch (error) {
      this.handleError(error);
      throw error;
    } finally {
      this.hideLoading();
    }
  }

  showLoading() {
    // Implement loading UI
  }

  hideLoading() {
    // Hide loading UI
  }

  handleError(error) {
    // Implement error handling
    console.error('Request failed:', error);
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
      <h1 className="text-4xl font-bold mb-6">AJAX in JavaScript</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding AJAX</h2>
        <p className="text-gray-700 mb-4">
          Learn about AJAX (Asynchronous JavaScript and XML) and how to make asynchronous HTTP requests in JavaScript.
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
            <p className="text-gray-700">Not handling all possible error cases</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Forgetting to parse JSON responses</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not showing loading states to users</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use modern alternatives like Fetch API</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error handling</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Show appropriate loading and error states</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default AJAX; 