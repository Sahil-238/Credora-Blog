import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Security = () => {
  const sections = [
    {
      title: 'Common Vulnerabilities',
      content: `JavaScript security risks:
• Cross-Site Scripting (XSS)
• Cross-Site Request Forgery
• SQL Injection
• DOM-based vulnerabilities
• Prototype pollution
• Insecure dependencies
• Data exposure`,
      code: `// XSS vulnerability example
function displayUserInput(input) {
  // Unsafe: Direct DOM manipulation
  document.getElementById('output').innerHTML = input;
  
  // Safe: Escape HTML
  const escaped = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  document.getElementById('output').innerHTML = escaped;
  
  // Better: Use textContent
  document.getElementById('output').textContent = input;
}

// CSRF protection
const csrfToken = Math.random().toString(36).substring(2);
document.cookie = \`csrf=\${csrfToken}; SameSite=Strict\`;

fetch('/api/data', {
  method: 'POST',
  headers: {
    'CSRF-Token': csrfToken
  },
  credentials: 'same-origin'
});`
    },
    {
      title: 'Input Validation',
      content: `Input validation:
• Data sanitization
• Type checking
• Schema validation
• Boundary validation
• Format validation
• Encoding/Decoding
• Whitelist validation`,
      code: `// Input validation class
class InputValidator {
  static validateEmail(email) {
    const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!pattern.test(email)) {
      throw new Error('Invalid email format');
    }
    return email.toLowerCase();
  }
  
  static validatePassword(password) {
    if (password.length < 8) {
      throw new Error('Password too short');
    }
    if (!/[A-Z]/.test(password)) {
      throw new Error('Password needs uppercase');
    }
    if (!/[a-z]/.test(password)) {
      throw new Error('Password needs lowercase');
    }
    if (!/[0-9]/.test(password)) {
      throw new Error('Password needs number');
    }
    return password;
  }
  
  static sanitizeHTML(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }
  
  static validateJSON(input) {
    try {
      const parsed = JSON.parse(input);
      return this.sanitizeObject(parsed);
    } catch (error) {
      throw new Error('Invalid JSON format');
    }
  }
  
  static sanitizeObject(obj) {
    if (Array.isArray(obj)) {
      return obj.map(item => this.sanitizeObject(item));
    }
    if (typeof obj === 'object' && obj !== null) {
      const clean = {};
      for (const [key, value] of Object.entries(obj)) {
        clean[this.sanitizeString(key)] = this.sanitizeObject(value);
      }
      return clean;
    }
    if (typeof obj === 'string') {
      return this.sanitizeString(obj);
    }
    return obj;
  }
  
  static sanitizeString(str) {
    return str.replace(/[<>]/g, '');
  }
}`
    },
    {
      title: 'Authentication & Authorization',
      content: `Security measures:
• Token-based auth
• Session management
• Password hashing
• OAuth integration
• Role-based access
• JWT handling
• Secure storage`,
      code: `// JWT handling
class AuthService {
  static generateToken(user) {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };
    
    const payload = {
      sub: user.id,
      name: user.name,
      roles: user.roles,
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
    };
    
    return this.signJWT(header, payload);
  }
  
  static verifyToken(token) {
    try {
      const [headerB64, payloadB64, signature] = token.split('.');
      
      const header = JSON.parse(atob(headerB64));
      const payload = JSON.parse(atob(payloadB64));
      
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        throw new Error('Token expired');
      }
      
      // Verify signature (simplified)
      const expectedSignature = this.calculateSignature(headerB64, payloadB64);
      if (signature !== expectedSignature) {
        throw new Error('Invalid signature');
      }
      
      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
  
  static signJWT(header, payload) {
    const headerB64 = btoa(JSON.stringify(header));
    const payloadB64 = btoa(JSON.stringify(payload));
    const signature = this.calculateSignature(headerB64, payloadB64);
    
    return \`\${headerB64}.\${payloadB64}.\${signature}\`;
  }
  
  static calculateSignature(headerB64, payloadB64) {
    // In practice, use a proper crypto library
    return 'signature';
  }
}`
    },
    {
      title: 'Secure Communication',
      content: `Communication security:
• HTTPS usage
• API security
• WebSocket security
• Content Security Policy
• CORS configuration
• Certificate pinning
• Request signing`,
      code: `// Secure API client
class SecureAPIClient {
  constructor(baseURL, options = {}) {
    this.baseURL = baseURL;
    this.options = {
      timeout: 5000,
      retries: 3,
      ...options
    };
  }
  
  async request(endpoint, options = {}) {
    const url = new URL(endpoint, this.baseURL);
    
    // Ensure HTTPS
    if (url.protocol !== 'https:') {
      throw new Error('HTTPS required');
    }
    
    const config = {
      ...this.options,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...this.options.headers,
        ...options.headers
      }
    };
    
    // Add request signing
    config.headers['X-Signature'] = this.signRequest(
      url.toString(),
      config.method,
      config.body
    );
    
    try {
      const response = await fetch(url, config);
      
      // Verify response
      this.verifyResponse(response);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
    } catch (error) {
      // Handle specific errors
      if (error.name === 'TypeError') {
        throw new Error('Network error');
      }
      throw error;
    }
  }
  
  signRequest(url, method, body) {
    // Implement request signing
    return 'signature';
  }
  
  verifyResponse(response) {
    // Verify response headers
    const signature = response.headers.get('X-Response-Signature');
    if (!signature) {
      throw new Error('Missing response signature');
    }
    
    // Implement signature verification
  }
}`
    },
    {
      title: 'Data Protection',
      content: `Data security:
• Encryption
• Secure storage
• Data masking
• Key management
• Secure cookies
• Local storage
• Memory protection`,
      code: `// Secure storage service
class SecureStorage {
  constructor(storage = localStorage) {
    this.storage = storage;
    this.prefix = 'secure_';
  }
  
  async setItem(key, value) {
    const encrypted = await this.encrypt(value);
    this.storage.setItem(
      this.prefix + key,
      JSON.stringify({
        value: encrypted,
        timestamp: Date.now()
      })
    );
  }
  
  async getItem(key) {
    const data = this.storage.getItem(this.prefix + key);
    if (!data) return null;
    
    const { value, timestamp } = JSON.parse(data);
    
    // Check expiry
    if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
      this.removeItem(key);
      return null;
    }
    
    return await this.decrypt(value);
  }
  
  removeItem(key) {
    this.storage.removeItem(this.prefix + key);
  }
  
  async encrypt(data) {
    // Use Web Crypto API in practice
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(JSON.stringify(data));
    
    // Implement encryption
    return btoa(String.fromCharCode(...new Uint8Array(dataBuffer)));
  }
  
  async decrypt(encrypted) {
    // Use Web Crypto API in practice
    const decoder = new TextDecoder();
    const dataBuffer = new Uint8Array(
      atob(encrypted)
        .split('')
        .map(char => char.charCodeAt(0))
    );
    
    // Implement decryption
    return JSON.parse(decoder.decode(dataBuffer));
  }
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Security</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Security</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript security, including common vulnerabilities, input validation, authentication, and data protection.
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
            <p className="text-gray-700">Not validating user input properly</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Using insecure storage methods</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Exposing sensitive data in client-side code</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always validate and sanitize input</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use secure communication protocols</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper authentication and authorization</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Security; 