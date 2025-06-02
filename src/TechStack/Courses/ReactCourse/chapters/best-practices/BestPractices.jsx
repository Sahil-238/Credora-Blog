import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiShield, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BestPractices = () => {
  const componentPatternExample = `// Component patterns
// 1. Functional Components with Hooks
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  if (!user) return <Loading />;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// 2. Compound Components
const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.Panel = function TabPanel({ children, tabId }) {
  const { activeTab } = useTabsContext();
  if (activeTab !== tabId) return null;
  return children;
};

// Usage
<Tabs defaultTab="profile">
  <Tabs.Panel tabId="profile">
    <UserProfile />
  </Tabs.Panel>
  <Tabs.Panel tabId="settings">
    <Settings />
  </Tabs.Panel>
</Tabs>

// 3. Render Props
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return render(position);
};

// Usage
<MouseTracker
  render={({ x, y }) => (
    <div>Cursor position: {x}, {y}</div>
  )}
/>`;

  const performanceExample = `// Performance optimizations
// 1. Memoization
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data.map(item => (
    <Item key={item.id} {...item} />
  ))}</div>;
});

// 2. Lazy Loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}

// 3. Virtual Lists
function VirtualList({ items }) {
  const [visibleRange, setVisibleRange] = useState({
    start: 0,
    end: 50
  });

  const visibleItems = items.slice(
    visibleRange.start,
    visibleRange.end
  );

  return (
    <div onScroll={handleScroll}>
      <div style={{ height: items.length * 50 }}>
        <div style={{
          transform: \`translateY(\${visibleRange.start * 50}px)\`
        }}>
          {visibleItems.map(item => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. Event Throttling/Debouncing
function SearchInput() {
  const debouncedSearch = useCallback(
    debounce((term) => {
      performSearch(term);
    }, 300),
    []
  );

  return (
    <input
      type="text"
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
}`;

  const securityExample = `// Security best practices
// 1. XSS Prevention
function SafeHtml({ content }) {
  // Use DOMPurify to sanitize HTML
  const sanitizedContent = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{
    __html: sanitizedContent
  }} />;
}

// 2. Secure Forms
function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include CSRF token if applicable
          'X-CSRF-Token': getCsrfToken()
        },
        body: JSON.stringify(credentials),
        credentials: 'include' // Include cookies
      });
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        autoComplete="username"
        onChange={/* handle change */}
      />
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        onChange={/* handle change */}
      />
    </form>
  );
}

// 3. Environment Variables
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

// 4. Content Security Policy
// In index.html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self' 'unsafe-inline' 'unsafe-eval';
           style-src 'self' 'unsafe-inline';
           img-src 'self' data: https:;
           font-src 'self';"
/>`;

  const accessibilityExample = `// Accessibility best practices
// 1. Semantic HTML
function Article() {
  return (
    <article>
      <header>
        <h1>Article Title</h1>
        <time dateTime="2024-03-20">March 20, 2024</time>
      </header>
      <main>
        <p>Article content...</p>
      </main>
      <footer>
        <nav aria-label="Article navigation">
          <a href="/prev">Previous</a>
          <a href="/next">Next</a>
        </nav>
      </footer>
    </article>
  );
}

// 2. ARIA attributes
function Dialog({ isOpen, onClose, title, children }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <h2 id="dialog-title">{title}</h2>
      <div id="dialog-description">
        {children}
      </div>
      <button
        onClick={onClose}
        aria-label="Close dialog"
      >
        ×
      </button>
    </div>
  );
}

// 3. Keyboard Navigation
function TabList() {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        setActiveTab(prev => Math.min(prev + 1, tabs.length - 1));
        break;
      case 'ArrowLeft':
        setActiveTab(prev => Math.max(prev - 1, 0));
        break;
      default:
        break;
    }
  };

  return (
    <div
      role="tablist"
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === index}
          tabIndex={activeTab === index ? 0 : -1}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// 4. Focus Management
function FocusTrap({ children }) {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Best Practices</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Best Practices</h2>
        <p className="text-gray-600 mb-4">
          Following React best practices helps create maintainable, performant, and accessible applications while ensuring code quality and security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheck className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Code Quality</h3>
            <p className="text-gray-600">
              Maintainable patterns
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiShield className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Security</h3>
            <p className="text-gray-600">
              Secure practices
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Performance</h3>
            <p className="text-gray-600">
              Optimization techniques
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Component Patterns</h2>
        <p className="text-gray-600 mb-4">
          Using proper component patterns helps create reusable, maintainable, and scalable components.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {componentPatternExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Optimization</h2>
        <p className="text-gray-600 mb-4">
          Implementing performance optimizations ensures your application remains fast and responsive as it grows.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {performanceExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Security Best Practices</h2>
        <p className="text-gray-600 mb-4">
          Following security best practices helps protect your application and users from common vulnerabilities.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {securityExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Accessibility</h2>
        <p className="text-gray-600 mb-4">
          Making your application accessible ensures it can be used by everyone, including people with disabilities.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {accessibilityExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">General Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Keep components small and focused</li>
            <li>Use TypeScript for better type safety</li>
            <li>Implement proper error boundaries</li>
            <li>Write meaningful tests</li>
            <li>Use proper code organization</li>
            <li>Follow consistent naming conventions</li>
            <li>Document your code properly</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use ESLint and Prettier</li>
          <li>Implement code reviews</li>
          <li>Keep dependencies updated</li>
          <li>Monitor performance metrics</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/deployment"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Deployment
        </Link>
        <Link
          to="/react-course/conclusion"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Conclusion <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BestPractices; 