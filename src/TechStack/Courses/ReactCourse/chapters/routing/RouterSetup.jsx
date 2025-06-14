import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiNavigation, FiLayers, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RouterSetup = () => {
  const basicSetupExample = `// Install React Router
npm install react-router-dom

// Basic Router Setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`;

  const nestedRoutesExample = `// Nested Routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":id" element={<BlogPost />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Layout Component
function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>Footer content</footer>
    </div>
  );
}`;

  const routeProtectionExample = `import { Navigate, useLocation } from 'react-router-dom';

// Auth Context
const AuthContext = React.createContext(null);

function useAuth() {
  return React.useContext(AuthContext);
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Usage in Router
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="public" element={<PublicPage />} />
            <Route
              path="protected"
              element={
                <ProtectedRoute>
                  <ProtectedPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Router Setup</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding React Router</h2>
        <p className="text-gray-600 mb-4">
          React Router is the standard routing library for React applications. It enables the creation of single-page applications with navigation without the page refreshing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiNavigation className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Declarative</h3>
            <p className="text-gray-600">
              Route definitions in JSX
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiLayers className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Nested</h3>
            <p className="text-gray-600">
              Support for nested routes
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Dynamic</h3>
            <p className="text-gray-600">
              Dynamic route matching
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Router Setup</h2>
        <p className="text-gray-600 mb-4">
          Setting up React Router involves installing the package and defining your routes. Here's how to create a basic router setup.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicSetupExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nested Routes</h2>
        <p className="text-gray-600 mb-4">
          React Router supports nested routes, allowing you to create complex layouts and navigation hierarchies.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {nestedRoutesExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Protected Routes</h2>
        <p className="text-gray-600 mb-4">
          Implementing protected routes is a common requirement for applications with authentication.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {routeProtectionExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Router Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Keep route configuration organized</li>
            <li>Use dynamic routes for similar pages</li>
            <li>Implement proper error boundaries</li>
            <li>Handle loading states</li>
            <li>Use proper route naming conventions</li>
            <li>Implement proper route guards</li>
            <li>Consider code splitting for routes</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use lazy loading for better performance</li>
          <li>Implement proper route transitions</li>
          <li>Handle route parameters properly</li>
          <li>Use route loaders for data fetching</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/yup"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Yup Validation
        </Link>
        <Link
          to="/react-course/basic-routing"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Basic Routing <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default RouterSetup;