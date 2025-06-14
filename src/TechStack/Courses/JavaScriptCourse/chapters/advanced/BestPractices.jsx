import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BestPractices = () => {
  const sections = [
    {
      title: 'Code Organization',
      content: `Code organization:
• File structure
• Module patterns
• Dependency management
• Code splitting
• Project architecture
• Design patterns
• Clean code principles`,
      code: `// Project structure
src/
  ├── components/
  │   ├── common/
  │   ├── features/
  │   └── layout/
  ├── hooks/
  ├── services/
  ├── utils/
  ├── constants/
  └── types/

// Module pattern
const UserService = (() => {
  // Private variables
  const apiUrl = 'https://api.example.com';
  const cache = new Map();
  
  // Private methods
  const validateUser = (user) => {
    if (!user.name) throw new Error('Name required');
    if (!user.email) throw new Error('Email required');
  };
  
  // Public API
  return {
    async createUser(userData) {
      validateUser(userData);
      const response = await fetch(\`\${apiUrl}/users\`, {
        method: 'POST',
        body: JSON.stringify(userData)
      });
      return response.json();
    },
    
    async getUser(id) {
      if (cache.has(id)) {
        return cache.get(id);
      }
      const response = await fetch(\`\${apiUrl}/users/\${id}\`);
      const user = await response.json();
      cache.set(id, user);
      return user;
    }
  };
})();`
    },
    {
      title: 'Coding Standards',
      content: `Coding standards:
• Naming conventions
• Code formatting
• Documentation
• Comments
• Error handling
• Type safety
• Code style`,
      code: `// Naming conventions
const DAYS_IN_WEEK = 7;  // Constants in UPPER_CASE
const firstName = 'John';  // Variables in camelCase
class UserService {}  // Classes in PascalCase
function calculateTotal() {}  // Functions in camelCase

// Documentation
/**
 * Processes a payment transaction.
 * @param {Object} paymentData - Payment information
 * @param {number} paymentData.amount - Amount to charge
 * @param {string} paymentData.currency - Currency code
 * @param {string} paymentData.source - Payment source token
 * @returns {Promise<Object>} Payment result
 * @throws {ValidationError} If payment data is invalid
 */
async function processPayment(paymentData) {
  // Implementation
}

// Error handling
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateUser(user) {
  if (!user.email?.includes('@')) {
    throw new ValidationError('Invalid email', 'email');
  }
}`
    },
    {
      title: 'Performance Optimization',
      content: `Performance practices:
• Code optimization
• Memory management
• Resource loading
• Caching strategies
• Lazy loading
• Bundle optimization
• Runtime optimization`,
      code: `// Resource loading
document.addEventListener('DOMContentLoaded', () => {
  // Load non-critical resources
  loadNonCriticalStyles();
  prefetchImportantResources();
});

// Lazy loading
const AdminDashboard = React.lazy(() => 
  import('./AdminDashboard')
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AdminDashboard />
    </Suspense>
  );
}

// Caching
class CacheManager {
  constructor(options = {}) {
    this.cache = new Map();
    this.maxSize = options.maxSize || 100;
    this.ttl = options.ttl || 3600000;  // 1 hour
  }
  
  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }
    
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
  
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
  
  evictOldest() {
    const oldest = [...this.cache.entries()]
      .reduce((a, b) => 
        a[1].timestamp < b[1].timestamp ? a : b
      );
    this.cache.delete(oldest[0]);
  }
}`
    },
    {
      title: 'Security Practices',
      content: `Security practices:
• Input validation
• Output encoding
• Authentication
• Authorization
• Data protection
• API security
• Error handling`,
      code: `// Input validation
const validator = {
  email: (value) => {
    const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return pattern.test(value);
  },
  
  password: (value) => {
    return value.length >= 8 &&
      /[A-Z]/.test(value) &&
      /[a-z]/.test(value) &&
      /[0-9]/.test(value);
  },
  
  sanitizeHTML: (value) => {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('No token provided');
    }
    
    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Authentication failed'
    });
  }
};

// API security
const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; script-src 'self'",
  'Strict-Transport-Security':
    'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block'
};`
    },
    {
      title: 'Maintainability',
      content: `Maintainability:
• Code readability
• Modularity
• Testing
• Documentation
• Version control
• Code review
• Refactoring`,
      code: `// Single Responsibility Principle
class UserManager {
  constructor(userRepository, emailService) {
    this.userRepository = userRepository;
    this.emailService = emailService;
  }
  
  async createUser(userData) {
    await this.validateUser(userData);
    const user = await this.userRepository.create(userData);
    await this.emailService.sendWelcomeEmail(user);
    return user;
  }
  
  async validateUser(userData) {
    // Validation logic
  }
}

// Dependency Injection
class OrderService {
  constructor(
    paymentService,
    inventoryService,
    notificationService
  ) {
    this.paymentService = paymentService;
    this.inventoryService = inventoryService;
    this.notificationService = notificationService;
  }
  
  async processOrder(order) {
    await this.paymentService.processPayment(order);
    await this.inventoryService.updateStock(order);
    await this.notificationService.notifyCustomer(order);
  }
}

// Feature flags
const featureFlags = {
  newUI: process.env.ENABLE_NEW_UI === 'true',
  beta: process.env.ENABLE_BETA_FEATURES === 'true'
};

function renderComponent() {
  if (featureFlags.newUI) {
    return <NewUIComponent />;
  }
  return <LegacyComponent />;
}`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Best Practices</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Best Practices</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript best practices, including code organization, standards, performance optimization, and maintainability.
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
            <p className="text-gray-700">Not following consistent coding standards</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Poor error handling and validation</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Ignoring performance optimization</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Write clean, maintainable code</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Follow established design patterns</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Document code thoroughly</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default BestPractices; 