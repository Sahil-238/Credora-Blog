import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Testing = () => {
  const sections = [
    {
      title: 'Testing Basics',
      content: `JavaScript testing:
• Unit testing
• Integration testing
• End-to-end testing
• Test frameworks
• Test runners
• Assertions
• Test coverage`,
      code: `// Jest example
describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  });
  
  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  
  test('subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  
  test('throws error for invalid input', () => {
    expect(() => calculator.add('2', 3))
      .toThrow('Invalid input');
  });
});

// Mocha and Chai example
describe('UserService', () => {
  let userService;
  
  beforeEach(() => {
    userService = new UserService();
  });
  
  it('should create user with valid data', async () => {
    const userData = {
      name: 'John',
      email: 'john@example.com'
    };
    
    const user = await userService.createUser(userData);
    
    expect(user).to.have.property('id');
    expect(user.name).to.equal(userData.name);
    expect(user.email).to.equal(userData.email);
  });
});`
    },
    {
      title: 'Test Organization',
      content: `Test organization:
• Test suites
• Test cases
• Setup and teardown
• Test fixtures
• Test doubles
• Test utilities
• Test configuration`,
      code: `// Test suite organization
describe('Authentication', () => {
  describe('Login', () => {
    let authService;
    let mockUserRepo;
    
    beforeAll(() => {
      mockUserRepo = {
        findByEmail: jest.fn()
      };
      authService = new AuthService(mockUserRepo);
    });
    
    beforeEach(() => {
      jest.clearAllMocks();
    });
    
    it('should authenticate valid credentials', async () => {
      const credentials = {
        email: 'user@example.com',
        password: 'password123'
      };
      
      mockUserRepo.findByEmail.mockResolvedValue({
        id: 1,
        email: credentials.email,
        password: await hash(credentials.password)
      });
      
      const result = await authService.login(credentials);
      
      expect(result.success).toBe(true);
      expect(result.token).toBeDefined();
    });
    
    it('should reject invalid credentials', async () => {
      const credentials = {
        email: 'user@example.com',
        password: 'wrongpassword'
      };
      
      mockUserRepo.findByEmail.mockResolvedValue(null);
      
      const result = await authService.login(credentials);
      
      expect(result.success).toBe(false);
      expect(result.error).toBe('Invalid credentials');
    });
  });
  
  describe('Registration', () => {
    // Registration tests
  });
});`
    },
    {
      title: 'Mocking & Stubbing',
      content: `Test doubles:
• Mocks
• Stubs
• Spies
• Fakes
• Dummies
• Mock services
• Mock data`,
      code: `// Mock examples
describe('PaymentService', () => {
  let paymentService;
  let mockStripeClient;
  let mockLogger;
  
  beforeEach(() => {
    mockStripeClient = {
      charges: {
        create: jest.fn()
      }
    };
    
    mockLogger = {
      info: jest.fn(),
      error: jest.fn()
    };
    
    paymentService = new PaymentService(
      mockStripeClient,
      mockLogger
    );
  });
  
  it('should process payment successfully', async () => {
    const paymentData = {
      amount: 1000,
      currency: 'USD',
      source: 'tok_visa'
    };
    
    mockStripeClient.charges.create
      .mockResolvedValue({
        id: 'ch_123',
        status: 'succeeded'
      });
    
    const result = await paymentService
      .processPayment(paymentData);
    
    expect(result.success).toBe(true);
    expect(result.chargeId).toBe('ch_123');
    expect(mockLogger.info)
      .toHaveBeenCalledWith(
        expect.stringContaining('Payment processed')
      );
  });
  
  it('should handle payment failure', async () => {
    const paymentData = {
      amount: 1000,
      currency: 'USD',
      source: 'tok_chargeDeclined'
    };
    
    mockStripeClient.charges.create
      .mockRejectedValue(new Error('Card declined'));
    
    const result = await paymentService
      .processPayment(paymentData);
    
    expect(result.success).toBe(false);
    expect(result.error).toBe('Payment failed');
    expect(mockLogger.error)
      .toHaveBeenCalledWith(
        expect.stringContaining('Card declined')
      );
  });
});`
    },
    {
      title: 'Integration Testing',
      content: `Integration tests:
• API testing
• Database testing
• Service testing
• Component testing
• System testing
• Contract testing
• Performance testing`,
      code: `// Supertest API testing
describe('User API', () => {
  let app;
  let db;
  
  beforeAll(async () => {
    db = await createTestDatabase();
    app = createApp({ db });
  });
  
  afterAll(async () => {
    await db.close();
  });
  
  beforeEach(async () => {
    await db.clear();
  });
  
  describe('POST /api/users', () => {
    it('should create new user', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      };
      
      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);
      
      expect(response.body).toMatchObject({
        id: expect.any(Number),
        name: userData.name,
        email: userData.email
      });
      
      const user = await db.users.findById(response.body.id);
      expect(user).toBeDefined();
      expect(user.password).not.toBe(userData.password);
    });
    
    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({})
        .expect(400);
      
      expect(response.body.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('name is required'),
          expect.stringContaining('email is required'),
          expect.stringContaining('password is required')
        ])
      );
    });
  });
});`
    },
    {
      title: 'Test Coverage',
      content: `Coverage metrics:
• Statement coverage
• Branch coverage
• Function coverage
• Line coverage
• Path coverage
• Mutation testing
• Code quality`,
      code: `// Jest coverage configuration
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/index.js',
    '!src/setupTests.js'
  ]
};

// Mutation testing with Stryker
module.exports = {
  mutate: [
    'src/**/*.js',
    '!src/**/*.test.js'
  ],
  mutator: {
    name: 'javascript',
    excludedMutations: [
      'StringLiteral',
      'ObjectLiteral'
    ]
  },
  reporters: ['clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js')
  }
};`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Testing</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Testing</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript testing, including unit testing, integration testing, test organization, and coverage analysis.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {section.content}
                </p>
              </div>
              <div>
                <SyntaxHighlighter 
                  language="javascript"
                  style={atomDark}
                  className="rounded-lg"
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="mt-12 bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Common Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not cleaning up test data and mocks</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Testing implementation details instead of behavior</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Writing brittle tests that break easily</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Write clear and descriptive test cases</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Follow the Arrange-Act-Assert pattern</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Maintain high test coverage</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Testing; 