import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiLink, FiGlobe, FiSearch, FiSettings } from 'react-icons/fi';

const URLModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">URL Module in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to URL Module</h2>
        <p className="text-gray-600 mb-4">
          The URL module in Node.js provides utilities for URL resolution and parsing. It offers both
          legacy API and newer WHATWG URL Standard API for working with URLs in a way that's
          consistent with web browsers.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiLink className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>URL parsing and formatting</li>
                <li>URL resolution and normalization</li>
                <li>Query string handling</li>
                <li>URL component manipulation</li>
                <li>Support for both legacy and WHATWG URL API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">WHATWG URL API</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiGlobe className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                The modern WHATWG URL API provides a standardized way to work with URLs:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const { URL } = require('url');

// Create a new URL object
const myURL = new URL('https://example.com:8080/path?query=value#hash');

// Access URL components
console.log(myURL.href);      // https://example.com:8080/path?query=value#hash
console.log(myURL.protocol);  // https:
console.log(myURL.hostname);  // example.com
console.log(myURL.port);      // 8080
console.log(myURL.pathname);  // /path
console.log(myURL.search);    // ?query=value
console.log(myURL.hash);      // #hash

// Modify URL components
myURL.pathname = '/new-path';
myURL.searchParams.append('key', 'value');
console.log(myURL.href);

// Working with search parameters
const params = myURL.searchParams;
params.append('page', '1');
params.set('limit', '10');
params.delete('query');

// Iterate over search parameters
for (const [key, value] of params) {
  console.log(\`\${key}: \${value}\`);
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Legacy URL API</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSearch className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                The legacy URL API is still available but considered legacy:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const url = require('url');

// Parse URL using legacy API
const parsedUrl = url.parse('https://example.com/path?query=value', true);
console.log(parsedUrl);
// Output:
// {
//   protocol: 'https:',
//   host: 'example.com',
//   pathname: '/path',
//   search: '?query=value',
//   query: { query: 'value' },
//   ...
// }

// Format URL object back to string
const urlString = url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/path',
  query: { key: 'value' }
});
console.log(urlString);

// Resolve URLs
const resolvedUrl = url.resolve('https://example.com/path/', './relative');
console.log(resolvedUrl); // https://example.com/path/relative`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Working with URLSearchParams</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSettings className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                URLSearchParams provides a way to work with query strings:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const { URLSearchParams } = require('url');

// Create from string
const params = new URLSearchParams('key1=value1&key2=value2');

// Create from object
const params2 = new URLSearchParams({
  sort: 'desc',
  page: '1',
  limit: '10'
});

// Manipulate parameters
params.append('key3', 'value3');
params.set('key1', 'new-value');
params.delete('key2');

// Check parameter existence
console.log(params.has('key1'));     // true
console.log(params.get('key1'));     // new-value
console.log(params.getAll('key1'));  // ['new-value']

// Iterate over parameters
for (const [key, value] of params) {
  console.log(\`\${key}: \${value}\`);
}

// Convert to string
console.log(params.toString());  // key1=new-value&key3=value3

// Sort parameters
params.sort();

// Use with fetch API
const queryString = new URLSearchParams({
  q: 'search term',
  lang: 'en'
}).toString();

const apiUrl = \`https://api.example.com/search?\${queryString}\`;`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">API URL Building</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`function buildApiUrl(baseUrl, path, params) {
  const url = new URL(path, baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  return url.toString();
}

const apiUrl = buildApiUrl(
  'https://api.example.com',
  '/users',
  { page: 1, limit: 10, sort: 'name' }
);`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">URL Validation</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

function isValidHttpUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (err) {
    return false;
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use WHATWG URL API over legacy url.parse()</li>
            <li>Always validate URLs before using them</li>
            <li>Use URLSearchParams for query string manipulation</li>
            <li>Handle URL encoding/decoding properly</li>
            <li>Consider URL security implications</li>
            <li>Use try-catch when parsing URLs</li>
            <li>Normalize URLs before comparison</li>
            <li>Be careful with relative URL resolution</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/path-module"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Path Module
        </Link>
        <Link
          to="/nodejs-course/os-module"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: OS Module →
        </Link>
      </div>
    </motion.div>
  );
};

export default URLModule; 