import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RouteParameters = () => {
  const basicExample = `// Route definition
<Route path="/users/:userId" element={<UserProfile />} />

// UserProfile component
const UserProfile = () => {
  const { userId } = useParams();
  return <div>User Profile for ID: {userId}</div>;
};`;

  const optionalParamsExample = `// Optional parameters
<Route path="/products/:category?/:id?" element={<Product />} />

const Product = () => {
  const { category, id } = useParams();
  return (
    <div>
      Category: {category || 'All'}
      {id && <span>Product ID: {id}</span>}
    </div>
  );
};`;

  const searchParamsExample = `const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'asc';
  const filter = searchParams.get('filter') || '';

  const updateSort = (newSort) => {
    setSearchParams({ sort: newSort, filter });
  };

  return (
    <div>
      <select value={sort} onChange={(e) => updateSort(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {/* Rest of the component */}
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Route Parameters</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Route Parameters</h2>
        <p className="text-gray-600 mb-4">
          Route parameters are dynamic segments in your URL pattern that allow you to capture values
          from the URL and use them in your components. They are essential for building dynamic
          and data-driven applications.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Route Parameters</h2>
        <p className="text-gray-600 mb-4">
          Route parameters are defined in your route path using a colon (:) followed by the parameter name.
          React Router will capture these values and make them available through the useParams hook.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {basicExample}
          </SyntaxHighlighter>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Tip:</strong> Route parameters are commonly used for displaying user profiles,
            product details, or any content that needs a unique identifier.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Optional Parameters</h2>
        <p className="text-gray-600 mb-4">
          You can make route parameters optional by adding a question mark (?) after the parameter name.
          This allows the route to match even when the parameter is not provided.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {optionalParamsExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Search Parameters</h2>
        <p className="text-gray-600 mb-4">
          In addition to route parameters, React Router provides the useSearchParams hook to work
          with query string parameters (e.g., ?sort=asc&filter=active).
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {searchParamsExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Parameter Naming</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use descriptive parameter names</li>
              <li>Keep names short but meaningful</li>
              <li>Use camelCase for consistency</li>
              <li>Avoid special characters</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Parameter Validation</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Always validate parameter values</li>
              <li>Handle missing parameters gracefully</li>
              <li>Provide fallback values</li>
              <li>Consider type conversion needs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">User Profiles</h3>
            <code className="text-sm">/users/:userId</code>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Product Details</h3>
            <code className="text-sm">/products/:productId</code>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Blog Posts</h3>
            <code className="text-sm">/blog/:slug</code>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/basic-routing"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Basic Routing
        </Link>
        <Link
          to="/react-course/nested-routes"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Nested Routes →
        </Link>
      </div>
    </motion.div>
  );
};

export default RouteParameters;