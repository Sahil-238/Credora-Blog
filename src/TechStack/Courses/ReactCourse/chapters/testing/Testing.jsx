import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiTarget, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Testing = () => {
  const jestExample = `// Jest + React Testing Library example
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter component', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<Counter initialCount={0} />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    
    const button = screen.getByRole('button', { name: /increment/i });
    await user.click(button);
    await user.click(button);
    
    expect(screen.getByText(/count: 2/i)).toBeInTheDocument();
  });
});

// Testing async operations
test('loads and displays user data', async () => {
  render(<UserProfile userId="123" />);

  // Check loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for data to load
  const userName = await screen.findByText(/john doe/i);
  expect(userName).toBeInTheDocument();
});

// Testing error states
test('handles error states', async () => {
  server.use(
    rest.get('/api/user/:id', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<UserProfile userId="123" />);
  const error = await screen.findByText(/error/i);
  expect(error).toBeInTheDocument();
});`;

  const cypressExample = `// Cypress E2E testing
describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('adds a new todo', () => {
    cy.get('[data-testid="todo-input"]')
      .type('Learn Cypress{enter}');

    cy.get('[data-testid="todo-list"]')
      .should('contain', 'Learn Cypress');
  });

  it('completes a todo', () => {
    // Add a todo
    cy.get('[data-testid="todo-input"]')
      .type('Learn Cypress{enter}');

    // Complete it
    cy.get('[data-testid="todo-item"]')
      .first()
      .find('[data-testid="todo-checkbox"]')
      .click();

    // Verify it's completed
    cy.get('[data-testid="todo-item"]')
      .first()
      .should('have.class', 'completed');
  });

  it('filters todos', () => {
    // Add todos
    const todos = ['Learn Cypress', 'Write tests'];
    todos.forEach(todo => {
      cy.get('[data-testid="todo-input"]')
        .type(\`\${todo}{enter}\`);
    });

    // Complete first todo
    cy.get('[data-testid="todo-item"]')
      .first()
      .find('[data-testid="todo-checkbox"]')
      .click();

    // Filter by active
    cy.get('[data-testid="filter-active"]').click();
    cy.get('[data-testid="todo-list"]')
      .should('have.length', 1)
      .and('contain', 'Write tests');

    // Filter by completed
    cy.get('[data-testid="filter-completed"]').click();
    cy.get('[data-testid="todo-list"]')
      .should('have.length', 1)
      .and('contain', 'Learn Cypress');
  });
});

// Custom commands
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-testid="email-input"]').type(email);
  cy.get('[data-testid="password-input"]').type(password);
  cy.get('[data-testid="login-button"]').click();
});

// Using custom command
it('logs in and views dashboard', () => {
  cy.login('user@example.com', 'password123');
  cy.url().should('include', '/dashboard');
  cy.get('[data-testid="welcome-message"]')
    .should('contain', 'Welcome back');
});`;

  const testingLibraryExample = `// React Testing Library examples
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Testing form submission
test('submits form with user data', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(
    <UserForm onSubmit={handleSubmit} />
  );

  await user.type(
    screen.getByLabelText(/name/i),
    'John Doe'
  );
  await user.type(
    screen.getByLabelText(/email/i),
    'john@example.com'
  );
  await user.click(
    screen.getByRole('button', { name: /submit/i })
  );

  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com'
  });
});

// Testing routing
test('navigates to about page', async () => {
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await user.click(
    screen.getByRole('link', { name: /about/i })
  );

  expect(screen.getByText(/about us/i))
    .toBeInTheDocument();
});

// Testing async data fetching
test('displays fetched data', async () => {
  render(<UserList />);

  // Initial loading state
  expect(screen.getByText(/loading/i))
    .toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText(/john doe/i))
      .toBeInTheDocument();
  });

  // Check if all users are displayed
  expect(screen.getAllByRole('listitem'))
    .toHaveLength(3);
});

// Testing error boundaries
test('renders error boundary fallback', async () => {
  const ThrowError = () => {
    throw new Error('Test error');
  };

  render(
    <ErrorBoundary fallback={<div>Error occurred</div>}>
      <ThrowError />
    </ErrorBoundary>
  );

  expect(screen.getByText(/error occurred/i))
    .toBeInTheDocument();
});`;

  const mockingExample = `// Mocking examples
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock server setup
const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ])
    );
  }),

  rest.post('/api/users', (req, res, ctx) => {
    const { name } = req.body;
    return res(
      ctx.json({ id: Date.now(), name })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Testing with mocked API
test('loads and displays users', async () => {
  render(<UserList />);

  const users = await screen.findAllByRole('listitem');
  expect(users).toHaveLength(2);
  expect(users[0]).toHaveTextContent('John Doe');
});

// Mock module
jest.mock('./api', () => ({
  fetchUser: jest.fn()
    .mockResolvedValue({ id: 1, name: 'John' })
}));

// Mock timer
jest.useFakeTimers();

test('updates after delay', () => {
  render(<DelayedComponent />);
  
  jest.advanceTimersByTime(1000);
  
  expect(screen.getByText(/updated/i))
    .toBeInTheDocument();
});

// Mock window methods
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo
});

test('scrolls to top', () => {
  render(<ScrollButton />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
});`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Testing React Applications</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Testing</h2>
        <p className="text-gray-600 mb-4">
          Testing is crucial for building reliable React applications. Different testing approaches help ensure your application works as expected at various levels.
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
            <FiTarget className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Integration Tests</h3>
            <p className="text-gray-600">
              Test component interactions
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">E2E Tests</h3>
            <p className="text-gray-600">
              Test full user flows
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Jest and React Testing Library</h2>
        <p className="text-gray-600 mb-4">
          Jest combined with React Testing Library provides a powerful testing solution focused on testing components the way users interact with them.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {jestExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cypress</h2>
        <p className="text-gray-600 mb-4">
          Cypress is a modern end-to-end testing framework that makes it easy to set up, write, run and debug tests.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {cypressExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing Library Best Practices</h2>
        <p className="text-gray-600 mb-4">
          React Testing Library encourages testing your components in a way that resembles how users interact with your app.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {testingLibraryExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mocking</h2>
        <p className="text-gray-600 mb-4">
          Effective mocking strategies are essential for isolating components and testing them independently.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {mockingExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Test behavior, not implementation</li>
            <li>Write maintainable tests</li>
            <li>Use meaningful assertions</li>
            <li>Follow the testing pyramid</li>
            <li>Mock external dependencies</li>
            <li>Test error cases</li>
            <li>Keep tests focused</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use testing-library queries appropriately</li>
          <li>Implement continuous integration</li>
          <li>Monitor test coverage</li>
          <li>Write testable code</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/state-management"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: State Management
        </Link>
        <Link
          to="/react-course/deployment"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Deployment <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Testing; 