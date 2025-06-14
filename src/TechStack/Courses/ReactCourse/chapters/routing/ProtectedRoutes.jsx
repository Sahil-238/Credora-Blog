import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ProtectedRoutes = () => {
  const authWrapperExample = `// Auth Context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Implement login logic
    const user = await loginAPI(credentials);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};`;

  const protectedRouteExample = `// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login page with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Usage in Route Configuration
<Routes>
  <Route path="/login" element={<Login />} />
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>`;

  const roleBasedExample = `// Role-Based Protected Route
const RoleProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.roles.includes(requiredRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Usage
<Route
  path="/admin"
  element={
    <RoleProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </RoleProtectedRoute>
  }
/>`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Protected Routes</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Protected Routes</h2>
        <p className="text-gray-600 mb-4">
          Protected routes are routes that can only be accessed by authenticated users. They are essential
          for securing parts of your application and managing user access control.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Key Concept:</strong> Protected routes work by checking authentication state
            before rendering the route's content, redirecting unauthorized users to a login page.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Authentication Context</h2>
        <p className="text-gray-600 mb-4">
          Before implementing protected routes, you need a way to manage authentication state.
          React Context is commonly used to provide authentication information throughout your app.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {authWrapperExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Protected Route</h2>
        <p className="text-gray-600 mb-4">
          A protected route component wraps your route content and checks for authentication,
          redirecting to the login page if the user is not authenticated.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {protectedRouteExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Role-Based Access Control</h2>
        <p className="text-gray-600 mb-4">
          For more granular control, you can implement role-based protected routes that check
          not only for authentication but also for specific user roles or permissions.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {roleBasedExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Security</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Always verify tokens on the server</li>
              <li>Use secure storage for tokens</li>
              <li>Implement token refresh logic</li>
              <li>Handle session timeouts gracefully</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">User Experience</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Preserve intended destination</li>
              <li>Show loading states</li>
              <li>Provide clear error messages</li>
              <li>Handle deep linking properly</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Authentication Flow</h3>
            <p className="text-sm text-gray-600">Login → Token Storage → Protected Routes</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Permission Levels</h3>
            <p className="text-sm text-gray-600">User → Admin → Super Admin</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Route Groups</h3>
            <p className="text-sm text-gray-600">Public → Private → Admin Only</p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/nested-routes"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Nested Routes
        </Link>
        <Link
          to="/react-course/navigation"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Navigation →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProtectedRoutes;