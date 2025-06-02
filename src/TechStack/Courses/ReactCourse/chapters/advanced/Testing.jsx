import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCode, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Testing = () => {
  const [activeTab, setActiveTab] = useState('unit');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const examples = {
    unit: {
      title: 'Unit Testing',
      code: `import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});`,
      explanation: 'Unit tests verify individual components in isolation.'
    },
    integration: {
      title: 'Integration Testing',
      code: `import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

describe('TodoList Integration', () => {
  test('adds and completes a todo', async () => {
    render(<TodoList />);
    
    // Add new todo
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await userEvent.type(input, 'New Todo');
    await userEvent.click(addButton);
    
    // Verify todo was added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
    
    // Complete todo
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    // Verify todo was completed
    await waitFor(() => {
      expect(checkbox).toBeChecked();
    });
  });
});`,
      explanation: 'Integration tests verify multiple components working together.'
    },
    snapshot: {
      title: 'Snapshot Testing',
      code: `import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button Component', () => {
  test('matches snapshot', () => {
    const tree = renderer
      .create(<Button label="Click me" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('matches disabled snapshot', () => {
    const tree = renderer
      .create(<Button label="Click me" disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});`,
      explanation: 'Snapshot tests capture component output and detect changes.'
    },
    e2e: {
      title: 'E2E Testing',
      code: `import { test, expect } from '@playwright/test';

test('user can login and view dashboard', async ({ page }) => {
  await page.goto('/login');
  
  // Fill login form
  await page.fill('[name=email]', 'user@example.com');
  await page.fill('[name=password]', 'password123');
  await page.click('button[type=submit]');
  
  // Verify redirect to dashboard
  await expect(page).toHaveURL('/dashboard');
  
  // Verify dashboard content
  await expect(page.getByRole('heading', {
    name: 'Welcome back'
  })).toBeVisible();
});`,
      explanation: 'End-to-end tests verify complete user flows in a real browser environment.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Testing React Applications</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Testing</h2>
        <p className="text-gray-600 mb-4">
          Testing is crucial for maintaining reliable React applications. Different types
          of tests serve different purposes and provide various levels of confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheckCircle className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Unit Tests</h3>
            <p className="text-gray-600">
              Test individual components
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Integration Tests</h3>
            <p className="text-gray-600">
              Test component interactions
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiShield className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">E2E Tests</h3>
            <p className="text-gray-600">
              Test complete user flows
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing Examples</h2>
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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Test Organization</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// Component file structure
src/
  components/
    Button/
      Button.jsx
      Button.test.jsx
      Button.styles.js
      index.js

// Test file organization
describe('Button Component', () => {
  describe('Rendering', () => {
    test('renders with default props', () => {});
    test('renders in disabled state', () => {});
  });

  describe('Interactions', () => {
    test('calls onClick when clicked', () => {});
    test('does not call onClick when disabled', () => {});
  });
});`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Testing Hooks</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing Tools</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Jest Configuration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Custom Test Utilities</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// test-utils.js
import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { Provider } from 'react-redux';
import store from './store';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Testing</h2>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="mb-4 text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? 'Hide Advanced Topics' : 'Show Advanced Topics'}
        </button>
        {showAdvanced && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Testing Async Code</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`test('loads user data', async () => {
  const mockUser = { id: 1, name: 'John' };
  jest.spyOn(api, 'fetchUser').mockResolvedValue(mockUser);

  render(<UserProfile userId={1} />);
  
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });
  
  expect(api.fetchUser).toHaveBeenCalledWith(1);
});`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Testing Error Boundaries</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <div>Something went wrong</div>;
  }
  
  return children;
};

test('renders error message on error', () => {
  const ThrowError = () => {
    throw new Error('Test error');
  };
  
  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );
  
  expect(screen.getByText(/something went wrong/i))
    .toBeInTheDocument();
});`}
              </pre>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Create a test suite for a form component with the following requirements:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Unit tests for form validation</li>
              <li>Integration tests for form submission</li>
              <li>Snapshot tests for different form states</li>
              <li>Mock API calls and test error handling</li>
              <li>Test accessibility compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/performance"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Performance
        </Link>
        <Link
          to="/react-course/deployment"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Deployment →
        </Link>
      </div>
    </motion.div>
  );
};

export default Testing; 