import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BestPractices = () => {
  const [activeTab, setActiveTab] = useState('code');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const examples = {
    code: {
      title: 'Code Organization',
      code: `// File structure
src/
  components/
    common/
      Button/
        Button.jsx
        Button.test.jsx
        Button.styles.js
        index.js
    features/
      Auth/
        components/
        hooks/
        utils/
        constants.js
        types.ts
  hooks/
    useAuth.js
    useForm.js
  utils/
    api.js
    validation.js
  constants/
    routes.js
    config.js

// Component organization
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.styles';

const Button = ({ 
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={styles[variant][size]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;`,
      explanation: 'Structured organization of code and components for maintainability.'
    },
    patterns: {
      title: 'Design Patterns',
      code: `// Compound Components Pattern
const Menu = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    <MenuContext.Provider value={{ activeItem, setActiveItem }}>
      <nav>{children}</nav>
    </MenuContext.Provider>
  );
};

Menu.Item = ({ value, children }) => {
  const { activeItem, setActiveItem } = useMenuContext();
  return (
    <button
      onClick={() => setActiveItem(value)}
      className={activeItem === value ? 'active' : ''}
    >
      {children}
    </button>
  );
};

// Render Props Pattern
const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url)
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return render({ data, loading, error });
};

// HOC Pattern
const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const { isAuthenticated, loading } = useAuth();
    
    if (loading) return <Loading />;
    if (!isAuthenticated) return <Navigate to="/login" />;
    
    return <WrappedComponent {...props} />;
  };
};`,
      explanation: 'Common React design patterns for component composition and reuse.'
    },
    performance: {
      title: 'Performance',
      code: `// Memoization
const MemoizedComponent = memo(function Component({ data }) {
  return <div>{data}</div>;
}, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});

// Lazy Loading
const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}

// Optimized List Rendering
function VirtualList({ items }) {
  const renderItem = useCallback(({ index, style }) => (
    <div style={style}>{items[index]}</div>
  ), [items]);

  return (
    <FixedSizeList
      height={400}
      width={600}
      itemCount={items.length}
      itemSize={50}
    >
      {renderItem}
    </FixedSizeList>
  );
}`,
      explanation: 'Performance optimization techniques for React applications.'
    },
    security: {
      title: 'Security',
      code: `// XSS Prevention
function SafeHtml({ content }) {
  return <div dangerouslySetInnerHTML={{ 
    __html: DOMPurify.sanitize(content) 
  }} />;
}

// Authentication
function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <Loading />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// API Security
const api = {
  async fetch(url, options = {}) {
    const token = getAuthToken();
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error('API Error');
    }
    
    return response.json();
  }
};`,
      explanation: 'Security best practices for React applications.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Best Practices</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Core Principles</h2>
        <p className="text-gray-600 mb-4">
          Following best practices ensures maintainable, performant, and secure React
          applications. These principles guide development decisions and improve code quality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Write readable and maintainable code
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiLayout className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Architecture</h3>
            <p className="text-gray-600">
              Structure applications effectively
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiShield className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Security</h3>
            <p className="text-gray-600">
              Implement security measures
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practice Examples</h2>
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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Code Quality</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">ESLint Configuration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">TypeScript Configuration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Component Guidelines</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Component Structure</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keep components focused and single-responsibility</li>
              <li>Use functional components with hooks</li>
              <li>Implement proper prop validation</li>
              <li>Extract reusable logic into custom hooks</li>
              <li>Follow consistent naming conventions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">State Management</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use local state for component-specific data</li>
              <li>Implement Context API for shared state</li>
              <li>Consider Redux for complex applications</li>
              <li>Optimize re-renders with memoization</li>
              <li>Handle side effects properly</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Practices</h2>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="mb-4 text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? 'Hide Advanced Topics' : 'Show Advanced Topics'}
        </button>
        {showAdvanced && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Error Boundaries</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    
    return this.props.children;
  }
}`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Performance Monitoring</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`const PerformanceMonitor = ({ children }) => {
  const handleRender = useCallback((
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    if (actualDuration > 16) {
      console.warn(
        \`Component \${id} took \${actualDuration}ms to render\`
      );
    }
  }, []);
  
  return (
    <Profiler id="App" onRender={handleRender}>
      {children}
    </Profiler>
  );
};`}
              </pre>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Refactor an existing component following best practices:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Implement proper component structure</li>
              <li>Add TypeScript types and prop validation</li>
              <li>Optimize performance with memoization</li>
              <li>Add error boundaries and logging</li>
              <li>Write comprehensive tests</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/deployment"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Deployment
        </Link>
        <Link
          to="/react-course/conclusion"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Conclusion →
        </Link>
      </div>
    </motion.div>
  );
};

export default BestPractices; 