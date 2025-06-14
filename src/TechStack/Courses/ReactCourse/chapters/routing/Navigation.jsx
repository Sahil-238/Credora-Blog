import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Navigation = () => {
  const useNavigateExample = `// Basic Navigation
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const success = await loginUser(credentials);
    if (success) {
      navigate('/dashboard');
    }
  };

  return <button onClick={handleLogin}>Login</button>;
};`;

  const navigationOptionsExample = `// Navigation with Options
const navigate = useNavigate();

// Replace current entry in history stack
navigate('/new-page', { replace: true });

// Pass state to the next route
navigate('/user-profile', { 
  state: { userId: 123, from: 'dashboard' }
});

// Navigate relative to current route
navigate('../other-section');
navigate('./sub-section');

// Go back or forward
navigate(-1);    // Go back one page
navigate(-2);    // Go back two pages
navigate(1);     // Go forward one page`;

  const locationExample = `// Using useLocation
const ProfilePage = () => {
  const location = useLocation();
  const { userId, from } = location.state || {};

  useEffect(() => {
    // Log navigation source
    console.log('Navigated from:', from);
  }, [from]);

  return (
    <div>
      <h1>User Profile</h1>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
};`;

  const searchParamsExample = `// Using Search Params
const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'asc';

  const handleSort = (newSort) => {
    setSearchParams({ page, sort: newSort });
  };

  return (
    <div>
      <select 
        value={sort}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Programmatic Navigation</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Programmatic Navigation</h2>
        <p className="text-gray-600 mb-4">
          Programmatic navigation allows you to control routing in your React application through
          JavaScript code rather than user interactions with Link components. This is essential for
          handling navigation after form submissions, API calls, or complex user interactions.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Key Concept:</strong> The <code>useNavigate</code> hook is the primary tool for
            programmatic navigation in React Router v6+, replacing the history object from earlier versions.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Navigation with useNavigate</h2>
        <p className="text-gray-600 mb-4">
          The useNavigate hook provides a function that lets you navigate programmatically.
          This is commonly used after form submissions or when certain conditions are met.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {useNavigateExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Navigation Options</h2>
        <p className="text-gray-600 mb-4">
          The navigate function supports various options to control how navigation occurs,
          including replacing history entries and passing state to the next route.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {navigationOptionsExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Working with Location</h2>
        <p className="text-gray-600 mb-4">
          The useLocation hook gives you access to the current location object and any state
          that was passed during navigation.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {locationExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Managing Search Parameters</h2>
        <p className="text-gray-600 mb-4">
          The useSearchParams hook provides a way to read and modify the query string in the URL.
          This is useful for handling filters, pagination, and other URL-based state.
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
            <h3 className="font-medium text-lg mb-4">Navigation Patterns</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use Link for user-initiated navigation</li>
              <li>Use navigate for programmatic control</li>
              <li>Handle navigation errors gracefully</li>
              <li>Preserve important state between routes</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Common Pitfalls</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Avoid navigation in render methods</li>
              <li>Clean up subscriptions before navigation</li>
              <li>Don't overuse location state</li>
              <li>Handle navigation race conditions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Form Submissions</h3>
            <p className="text-sm text-gray-600">Navigate after successful submit</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Authentication</h3>
            <p className="text-sm text-gray-600">Redirect after login/logout</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Wizards</h3>
            <p className="text-sm text-gray-600">Multi-step form navigation</p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/protected-routes"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Protected Routes
        </Link>
        <Link
          to="/react-course/context-api"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Context API →
        </Link>
      </div>
    </motion.div>
  );
};

export default Navigation;