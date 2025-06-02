import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMap, FiShield, FiLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Routing = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const examples = {
    basics: {
      title: 'Basic Routing',
      code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      explanation: 'Basic routing setup with React Router v6 including navigation and route definitions.'
    },
    params: {
      title: 'Route Parameters',
      code: `// Dynamic Routes
<Routes>
  <Route path="/users" element={<UserList />} />
  <Route path="/users/:id" element={<UserProfile />} />
  <Route path="/posts/:category/:id" element={<Post />} />
</Routes>

// Accessing Parameters
function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then(setUser);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// Optional Parameters
<Route path="/products/:category?/:id?" element={<Product />} />

function Product() {
  const { category, id } = useParams();
  
  return (
    <div>
      {category && <h2>Category: {category}</h2>}
      {id && <h3>Product ID: {id}</h3>}
    </div>
  );
}`,
      explanation: 'Route parameters allow dynamic routing based on URL segments.'
    },
    nested: {
      title: 'Nested Routes',
      code: `function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

// App Routes
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/dashboard/*" element={<Dashboard />} />
</Routes>

// Outlet Component
function Layout() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>`,
      explanation: 'Nested routes allow for complex routing hierarchies and layouts.'
    },
    navigation: {
      title: 'Programmatic Navigation',
      code: `import { useNavigate, useLocation } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate(from, { replace: true });
    } catch (error) {
      // Handle error
    }
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
}

// Navigation with State
function ProductList() {
  const navigate = useNavigate();

  const viewProduct = (product) => {
    navigate(\`/products/\${product.id}\`, {
      state: { product }
    });
  };

  return (
    <div>
      {products.map(product => (
        <button onClick={() => viewProduct(product)}>
          View {product.name}
        </button>
      ))}
    </div>
  );
}

// Accessing Navigation State
function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}`,
      explanation: 'Programmatic navigation allows for dynamic routing based on user actions or application state.'
    },
    protection: {
      title: 'Protected Routes',
      code: `import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const auth = useAuth(); // Custom auth hook
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

// Role-based Protection
function AdminRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (auth.user.role !== 'admin') {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// Multiple Layout Protection
function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="/admin/*" element={<AdminPanel />} />
        </Route>
      </Route>
    </Routes>
  );
}`,
      explanation: 'Protected routes ensure that certain routes are only accessible to authenticated or authorized users.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Routing in React</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Routing</h2>
        <p className="text-gray-600 mb-4">
          React Router enables navigation between different components in a React
          application, creating a single-page application experience with multiple views.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiMap className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Navigation</h3>
            <p className="text-gray-600">
              Handle URL-based navigation
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiShield className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Protection</h3>
            <p className="text-gray-600">
              Secure routes and redirects
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiLink className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Dynamic</h3>
            <p className="text-gray-600">
              Handle dynamic route parameters
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Routing Examples</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                className={`px-6 py-3 whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {example.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {examples[activeTab].code}
            </pre>
            <p className="text-gray-600">
              {examples[activeTab].explanation}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Routing Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Organize Routes</h3>
                <p className="text-gray-600">
                  Keep route definitions organized and maintainable
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Handle Not Found</h3>
                <p className="text-gray-600">
                  Always provide a fallback route for undefined paths
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Protect Routes</h3>
                <p className="text-gray-600">
                  Implement proper authentication and authorization
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Loading States</h3>
                <p className="text-gray-600">
                  Show loading indicators during route transitions
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Create a blog application with the following routing features:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Public routes (Home, Blog List, Post View)</li>
              <li>Protected routes (Admin Dashboard, Create/Edit Post)</li>
              <li>Dynamic post routes with categories</li>
              <li>Nested routes for admin section</li>
              <li>Loading states and error boundaries</li>
              <li>404 page for undefined routes</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/hooks"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Hooks
        </Link>
        <Link
          to="/react-course/state-management"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: State Management →
        </Link>
      </div>
    </motion.div>
  );
};

export default Routing; 