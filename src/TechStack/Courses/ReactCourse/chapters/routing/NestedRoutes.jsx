import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const NestedRoutes = () => {
  const basicExample = `// Parent Route Component
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="overview">Overview</Link>
        <Link to="stats">Stats</Link>
        <Link to="settings">Settings</Link>
      </nav>
      {/* Outlet renders the child route components */}
      <Outlet />
    </div>
  );
};

// Route Configuration
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<Overview />} />
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>`;

  const dynamicExample = `// Parent Route with Dynamic Parameter
<Route path="/users/:userId" element={<UserProfile />}>
  <Route path="posts" element={<UserPosts />} />
  <Route path="followers" element={<UserFollowers />} />
  <Route path="following" element={<UserFollowing />} />
</Route>

// UserProfile Component
const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Profile {userId}</h1>
      <nav>
        <Link to="posts">Posts</Link>
        <Link to="followers">Followers</Link>
        <Link to="following">Following</Link>
      </nav>
      <Outlet context={{ userId }} />
    </div>
  );
};`;

  const outletContextExample = `// Child Component using Outlet Context
const UserPosts = () => {
  const { userId } = useOutletContext();
  return <div>Posts for user {userId}</div>;
};`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Nested Routes</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Nested Routes</h2>
        <p className="text-gray-600 mb-4">
          Nested routes allow you to create complex UI hierarchies where child routes render within
          parent components. This pattern is perfect for building layouts with shared navigation
          and persistent UI elements.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Key Concept:</strong> The <code>Outlet</code> component is used to render child
            route elements within their parent route component.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Nested Routes</h2>
        <p className="text-gray-600 mb-4">
          Here's a basic example of nested routes in a dashboard layout. The parent route contains
          shared navigation, while child routes render different content sections.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {basicExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dynamic Nested Routes</h2>
        <p className="text-gray-600 mb-4">
          Nested routes can also work with dynamic parameters, allowing you to create complex
          data-driven UIs while maintaining clean URL structures.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {dynamicExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sharing Data with Outlet Context</h2>
        <p className="text-gray-600 mb-4">
          React Router's Outlet Context allows parent routes to pass data to their child routes,
          making it easy to share state and avoid prop drilling.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {outletContextExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Route Organization</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keep route hierarchy shallow</li>
              <li>Use index routes for default content</li>
              <li>Group related routes together</li>
              <li>Maintain consistent URL patterns</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Component Structure</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keep parent components focused on layout</li>
              <li>Use Outlet context sparingly</li>
              <li>Handle loading states appropriately</li>
              <li>Implement error boundaries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Dashboards</h3>
            <p className="text-sm text-gray-600">Shared navigation with multiple views</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">User Profiles</h3>
            <p className="text-sm text-gray-600">Different sections of user data</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Settings Pages</h3>
            <p className="text-sm text-gray-600">Multiple configuration sections</p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/route-parameters"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Route Parameters
        </Link>
        <Link
          to="/react-course/protected-routes"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Protected Routes →
        </Link>
      </div>
    </motion.div>
  );
};

export default NestedRoutes;