import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiLink, FiNavigation, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BasicRouting = () => {
  const navigationExample = `// Using Link component
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

// Using NavLink for active styles
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'active-link' : 'link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'active-link' : 'link'
        }
      >
        About
      </NavLink>
    </nav>
  );
}`;

  const programmaticNavigationExample = `// Using useNavigate hook
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}

// Navigation with state and replace
function ProductPage() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteProduct(id);
    navigate('/products', {
      replace: true,
      state: { message: 'Product deleted' }
    });
  };

  return (
    <button onClick={handleDelete}>
      Delete Product
    </button>
  );
}`;

  const routeParamsExample = `// Using URL Parameters
import { useParams, useSearchParams } from 'react-router-dom';

// Route definition
<Route path="/products/:id" element={<ProductDetail />} />

// Component using parameters
function ProductDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('variant');

  return (
    <div>
      <h1>Product {id}</h1>
      {variant && <p>Variant: {variant}</p>}
    </div>
  );
}

// Optional parameters
<Route path="/categories/:id?/products" element={<ProductList />} />

function ProductList() {
  const { id } = useParams();
  return (
    <div>
      {id ? (
        <h1>Products in category {id}</h1>
      ) : (
        <h1>All Products</h1>
      )}
    </div>
  );
}`;

  const locationExample = `// Using location
import { useLocation } from 'react-router-dom';

function ProductList() {
  const location = useLocation();

  React.useEffect(() => {
    // Access location state
    if (location.state?.message) {
      showNotification(location.state.message);
    }
  }, [location]);

  // Access query parameters
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const sort = searchParams.get('sort');

  return (
    <div>
      <h1>Products</h1>
      {category && <p>Category: {category}</p>}
      {sort && <p>Sorted by: {sort}</p>}
    </div>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Basic Routing in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Navigation Components</h2>
        <p className="text-gray-600 mb-4">
          React Router provides several components for handling navigation in your application. The most commonly used are Link and NavLink components.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiLink className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Link</h3>
            <p className="text-gray-600">
              Basic navigation component
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiNavigation className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">NavLink</h3>
            <p className="text-gray-600">
              Active-aware navigation
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Navigate</h3>
            <p className="text-gray-600">
              Programmatic navigation
            </p>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg mt-4">
          {navigationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Programmatic Navigation</h2>
        <p className="text-gray-600 mb-4">
          Sometimes you need to navigate programmatically, such as after form submissions or based on certain conditions. The useNavigate hook provides this functionality.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {programmaticNavigationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Route Parameters</h2>
        <p className="text-gray-600 mb-4">
          React Router makes it easy to work with URL parameters and query strings using hooks like useParams and useSearchParams.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {routeParamsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Location and History</h2>
        <p className="text-gray-600 mb-4">
          The useLocation hook provides access to the current location object, which contains information about the current URL and any state passed during navigation.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {locationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Routing Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Use semantic URLs for better SEO</li>
            <li>Handle loading and error states</li>
            <li>Implement proper 404 handling</li>
            <li>Use route constants</li>
            <li>Implement proper navigation guards</li>
            <li>Consider URL parameters for filters</li>
            <li>Use proper route naming conventions</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use relative paths when possible</li>
          <li>Implement proper route transitions</li>
          <li>Consider scroll restoration</li>
          <li>Use route state for temporary data</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/router-setup"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Router Setup
        </Link>
        <Link
          to="/react-course/advanced-routing"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Advanced Routing <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BasicRouting;