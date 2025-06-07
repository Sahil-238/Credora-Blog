import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BestPractices = () => {
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
          Best practices in React development are proven approaches that help you write cleaner, 
          more maintainable, and performant code. Following these practices will make your applications 
          more scalable, easier to debug, and help your team collaborate more effectively.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Component Structure & Organization</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Component Naming</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Good</h4>
              <pre className="bg-green-100 p-3 rounded text-sm">
{`// PascalCase for components
const UserProfile = () => { ... };
const ProductCard = () => { ... };
const NavigationBar = () => { ... };`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
              <pre className="bg-red-100 p-3 rounded text-sm">
{`// camelCase or lowercase
const userProfile = () => { ... };
const productcard = () => { ... };
const navigation_bar = () => { ... };`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. File Organization</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   └── Modal/
│   └── features/
│       ├── UserProfile/
│       └── ProductList/
├── hooks/
├── services/
├── utils/
└── constants/`}
          </pre>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Component Size</h3>
          <p className="text-gray-600 mb-3">Keep components small and focused on a single responsibility:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Good - Single Responsibility</h4>
              <pre className="bg-green-100 p-3 rounded text-sm">
{`const UserAvatar = ({ user }) => (
  <img 
    src={user.avatar} 
    alt={user.name}
    className="avatar"
  />
);

const UserInfo = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
);`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid - Too Many Responsibilities</h4>
              <pre className="bg-red-100 p-3 rounded text-sm">
{`const UserComponent = ({ user }) => (
  <div>
    <img src={user.avatar} alt={user.name} />
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
    <form onSubmit={handleSubmit}>
      {/* Large form */}
    </form>
  </div>
);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">State Management Best Practices</h2>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. State Placement</h3>
          <p className="text-gray-600 mb-3">Keep state as close to where it's used as possible:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Good - Local State</h4>
              <pre className="bg-green-100 p-3 rounded text-sm">
{`const SearchInput = () => {
  const [query, setQuery] = useState('');
  
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid - Unnecessary Lifting</h4>
              <pre className="bg-red-100 p-3 rounded text-sm">
{`// Don't lift state if only one component uses it
const Parent = () => {
  const [query, setQuery] = useState('');
  
  return (
    <div>
      <SearchInput 
        query={query} 
        setQuery={setQuery} 
      />
    </div>
  );
};`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. State Updates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Good - Immutable Updates</h4>
              <pre className="bg-green-100 p-3 rounded text-sm">
{`// Array updates
setItems([...items, newItem]);
setItems(items.filter(item => item.id !== id));

// Object updates
setUser({ ...user, name: 'New Name' });
setUser(prev => ({ ...prev, age: prev.age + 1 }));`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid - Mutations</h4>
              <pre className="bg-red-100 p-3 rounded text-sm">
{`// Don't mutate state directly
items.push(newItem);
setItems(items);

user.name = 'New Name';
setUser(user);`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Complex State with useReducer</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const initialState = { count: 0, loading: false, error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'set_loading':
      return { ...state, loading: action.payload };
    case 'set_error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Best Practices</h2>
        
        <div className="bg-purple-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Memoization</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">React.memo for Components</h4>
              <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

// Only re-renders when props actually change`}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">useMemo for Expensive Calculations</h4>
              <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`const ExpensiveList = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};`}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">useCallback for Function References</h4>
              <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Stable reference
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Child onClick={handleClick} />
    </div>
  );
};`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. Lazy Loading</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`import { lazy, Suspense } from 'react';

// Lazy load components
const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

// Code splitting at route level
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));`}
          </pre>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Virtualization for Large Lists</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
};`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Props and PropTypes</h2>
        
        <div className="bg-green-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Props Destructuring</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Good</h4>
              <pre className="bg-white p-3 rounded text-sm">
{`const UserCard = ({ name, email, avatar }) => (
  <div>
    <img src={avatar} alt={name} />
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);`}
              </pre>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
              <pre className="bg-white p-3 rounded text-sm">
{`const UserCard = (props) => (
  <div>
    <img src={props.avatar} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.email}</p>
  </div>
);`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. Default Props</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick 
}) => (
  <button
    className={\`btn btn-\${variant} btn-\${size}\`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);`}
          </pre>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. TypeScript for Props (Recommended)</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`interface UserCardProps {
  name: string;
  email: string;
  avatar: string;
  isOnline?: boolean;
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  name, 
  email, 
  avatar, 
  isOnline = false,
  onClick 
}) => (
  <div onClick={onClick}>
    <img src={avatar} alt={name} />
    <h3>{name}</h3>
    <p>{email}</p>
    {isOnline && <span className="online-indicator" />}
  </div>
);`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Hooks Best Practices</h2>
        
        <div className="bg-indigo-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Single Responsibility</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Good: Focused on one concern
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};`}
          </pre>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. Consistent Return Values</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Good: Consistent object return
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // ... fetch logic
  
  return { data, loading, error, refetch };
};

// Good: Consistent array return
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  
  return [value, { toggle, setTrue, setFalse }];
};`}
          </pre>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Error Handling</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const useAsyncOperation = () => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null
  });
  
  const execute = useCallback(async (asyncFunction) => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const data = await asyncFunction();
      setState({ data, loading: false, error: null });
      return data;
    } catch (error) {
      setState({ data: null, loading: false, error });
      throw error;
    }
  }, []);
  
  return { ...state, execute };
};`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Code Quality & Testing</h2>
        
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. ESLint and Prettier</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// .eslintrc.js
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'error',
    'prefer-const': 'error'
  }
};

// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}`}
          </pre>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. Component Testing</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when button clicked', () => {
    render(<Counter initialCount={0} />);
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});`}
          </pre>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Accessibility</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const AccessibleButton = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={typeof children === 'string' ? children : undefined}
    className="btn"
  >
    {children}
  </button>
);

const AccessibleForm = () => (
  <form>
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      type="email"
      required
      aria-describedby="email-error"
    />
    <div id="email-error" role="alert">
      {error && <span>{error}</span>}
    </div>
  </form>
);`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Security Best Practices</h2>
        
        <div className="bg-red-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Avoid Dangerous HTML</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Safe</h4>
              <pre className="bg-white p-3 rounded text-sm">
{`// React automatically escapes
const SafeComponent = ({ userInput }) => (
  <div>{userInput}</div>
);

// Use a sanitization library
import DOMPurify from 'dompurify';

const SafeHTML = ({ html }) => (
  <div dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(html)
  }} />
);`}
              </pre>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Dangerous</h4>
              <pre className="bg-white p-3 rounded text-sm">
{`// Never trust user input directly
const DangerousComponent = ({ userInput }) => (
  <div dangerouslySetInnerHTML={{
    __html: userInput
  }} />
);`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">2. Environment Variables</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0

// Don't expose sensitive data
// ❌ Wrong: API_SECRET_KEY=secret123
// ✅ Right: Keep secrets on the server

// Usage
const apiUrl = process.env.REACT_APP_API_URL;
const version = process.env.REACT_APP_VERSION;`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Summary Checklist</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Code Quality</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Use PascalCase for components
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Keep components small and focused
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Use TypeScript for type safety
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Set up ESLint and Prettier
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Write unit tests
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Performance</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Use React.memo for expensive components
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Implement lazy loading
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Optimize bundle size
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Use useMemo and useCallback wisely
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Virtualize large lists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/debugging"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Previous: Debugging
        </Link>
        <Link
          to="/react-course"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Complete Course 🎉
        </Link>
      </div>
    </motion.div>
  );
};

export default BestPractices;