import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiLayers, FiShield, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AdvancedRouting = () => {
  const lazyLoadingExample = `// Lazy loading routes
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="dashboard/*"
              element={
                <Suspense fallback={<DashboardLoader />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="settings"
              element={
                <Suspense fallback={<SettingsLoader />}>
                  <Settings />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <Suspense fallback={<ProfileLoader />}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`;

  const routeGuardsExample = `// Advanced route protection
import { Navigate, useLocation } from 'react-router-dom';

// Role-based route guard
function RoleGuard({ children, requiredRoles }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!requiredRoles.some(role => user.roles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// Permission-based route guard
function PermissionGuard({ children, requiredPermissions }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasPermissions = requiredPermissions.every(
    permission => user.permissions.includes(permission)
  );

  if (!hasPermissions) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// Usage in routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="admin/*"
          element={
            <RoleGuard requiredRoles={['admin']}>
              <AdminPanel />
            </RoleGuard>
          }
        />
        <Route
          path="reports"
          element={
            <PermissionGuard
              requiredPermissions={['view_reports', 'download_reports']}
            >
              <Reports />
            </PermissionGuard>
          }
        />
      </Route>
    </Routes>
  );
}`;

  const routeDataLoadingExample = `// Data loading with routes
import { useLoaderData, defer, Await } from 'react-router-dom';

// Loader function
async function dashboardLoader() {
  return defer({
    stats: fetchDashboardStats(),
    recentActivity: fetchRecentActivity(),
    notifications: fetchNotifications()
  });
}

// Component with suspense boundaries
function Dashboard() {
  const data = useLoaderData();

  return (
    <div>
      <Suspense fallback={<StatsLoader />}>
        <Await
          resolve={data.stats}
          errorElement={<StatsError />}
        >
          {(stats) => <DashboardStats stats={stats} />}
        </Await>
      </Suspense>

      <Suspense fallback={<ActivityLoader />}>
        <Await
          resolve={data.recentActivity}
          errorElement={<ActivityError />}
        >
          {(activity) => <RecentActivity data={activity} />}
        </Await>
      </Suspense>

      <Suspense fallback={<NotificationsLoader />}>
        <Await
          resolve={data.notifications}
          errorElement={<NotificationsError />}
        >
          {(notifications) => (
            <Notifications data={notifications} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}

// Route configuration
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <DashboardError />
  }
]);`;

  const customRoutingExample = `// Custom routing behavior
import { useNavigate, useLocation } from 'react-router-dom';

// Modal routing
function ModalRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const background = location.state?.background;

  return (
    <div className="modal">
      {children}
      <button onClick={() => navigate(background ?? '/')}>
        Close
      </button>
    </div>
  );
}

// Breadcrumb navigation
function BreadcrumbRoute({ children }) {
  const location = useLocation();
  const paths = location.pathname.split('/')
    .filter(Boolean);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {paths.map((path, index) => {
          const to = \`/\${paths.slice(0, index + 1).join('/')}\`;
          return (
            <Link key={to} to={to}>
              {path}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}

// Animated route transitions
function AnimatedRoute({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Advanced Routing Concepts</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lazy Loading Routes</h2>
        <p className="text-gray-600 mb-4">
          Lazy loading routes is a powerful optimization technique that allows you to split your application code into smaller chunks and load them on demand.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiLayers className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Code Splitting</h3>
            <p className="text-gray-600">
              Split code by route
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiShield className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Performance</h3>
            <p className="text-gray-600">
              Improved load times
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Suspense</h3>
            <p className="text-gray-600">
              Loading states
            </p>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg mt-4">
          {lazyLoadingExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Route Guards</h2>
        <p className="text-gray-600 mb-4">
          Implement sophisticated route protection with role-based and permission-based access control.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {routeGuardsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Route Data Loading</h2>
        <p className="text-gray-600 mb-4">
          React Router provides powerful data loading capabilities with loaders and suspense boundaries.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {routeDataLoadingExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Routing Patterns</h2>
        <p className="text-gray-600 mb-4">
          Implement custom routing behaviors like modal routes, breadcrumb navigation, and animated transitions.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {customRoutingExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Routing Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Implement proper code splitting</li>
            <li>Use route-based chunking</li>
            <li>Handle loading states gracefully</li>
            <li>Implement proper error boundaries</li>
            <li>Use route-based data prefetching</li>
            <li>Consider route-based code optimization</li>
            <li>Implement proper route transitions</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use route-based code splitting wisely</li>
          <li>Implement proper loading indicators</li>
          <li>Consider route-based prefetching</li>
          <li>Use route metadata for analytics</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/basic-routing"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Basic Routing
        </Link>
        <Link
          to="/react-course/hooks"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: React Hooks <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default AdvancedRouting; 