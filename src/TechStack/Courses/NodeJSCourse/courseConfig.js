const courseStructure = {
  basics: {
    title: 'Node.js Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'modules', title: 'Modules' },
      { id: 'npm', title: 'NPM' },
      { id: 'package-json', title: 'Package.json' },
      { id: 'events', title: 'Events' },
      { id: 'buffers', title: 'Buffers' },
      { id: 'streams', title: 'Streams' },
      { id: 'error-handling', title: 'Error Handling' }
    ]
  },
  core_modules: {
    title: 'Core Modules',
    sections: [
      { id: 'http-module', title: 'HTTP Module' },
      { id: 'fs-module', title: 'File System Module' },
      { id: 'path-module', title: 'Path Module' },
      { id: 'url-module', title: 'URL Module' },
      { id: 'os-module', title: 'OS Module' },
      { id: 'process', title: 'Process' },
      { id: 'crypto-module', title: 'Crypto Module' },
      { id: 'util-module', title: 'Util Module' }
    ]
  },
  web_development: {
    title: 'Web Development',
    sections: [
      { id: 'express-intro', title: 'Express.js Introduction' },
      { id: 'routing', title: 'Routing' },
      { id: 'middleware', title: 'Middleware' },
      { id: 'static-files', title: 'Static Files' },
      { id: 'template-engines', title: 'Template Engines' },
      { id: 'form-handling', title: 'Form Handling' },
      { id: 'file-upload', title: 'File Upload' },
      { id: 'cookies-sessions', title: 'Cookies & Sessions' }
    ]
  },
  database: {
    title: 'Database Integration',
    sections: [
      { id: 'mysql-setup', title: 'MySQL Setup' },
      { id: 'mysql-crud', title: 'MySQL CRUD Operations' },
      { id: 'mongodb-setup', title: 'MongoDB Setup' },
      { id: 'mongodb-crud', title: 'MongoDB CRUD Operations' },
      { id: 'mongoose', title: 'Mongoose ODM' },
      { id: 'migrations', title: 'Database Migrations' },
      { id: 'transactions', title: 'Transactions' }
    ]
  },
  authentication: {
    title: 'Authentication & Security',
    sections: [
      { id: 'user-auth', title: 'User Authentication' },
      { id: 'jwt', title: 'JWT Authentication' },
      { id: 'oauth', title: 'OAuth Integration' },
      { id: 'password-hashing', title: 'Password Hashing' },
      { id: 'security-best-practices', title: 'Security Best Practices' },
      { id: 'rate-limiting', title: 'Rate Limiting' },
      { id: 'cors', title: 'CORS' }
    ]
  },
  advanced: {
    title: 'Advanced Concepts',
    sections: [
      { id: 'async-patterns', title: 'Async Patterns' },
      { id: 'workers', title: 'Worker Threads' },
      { id: 'clustering', title: 'Clustering' },
      { id: 'microservices', title: 'Microservices' },
      { id: 'websockets', title: 'WebSockets' },
      { id: 'graphql', title: 'GraphQL' },
      { id: 'docker', title: 'Docker Integration' }
    ]
  },
  testing: {
    title: 'Testing',
    sections: [
      { id: 'unit-testing', title: 'Unit Testing' },
      { id: 'integration-testing', title: 'Integration Testing' },
      { id: 'jest', title: 'Jest Framework' },
      { id: 'mocha-chai', title: 'Mocha & Chai' },
      { id: 'api-testing', title: 'API Testing' },
      { id: 'mocking', title: 'Mocking' }
    ]
  },
  deployment: {
    title: 'Deployment & DevOps',
    sections: [
      { id: 'deployment-prep', title: 'Deployment Preparation' },
      { id: 'heroku', title: 'Heroku Deployment' },
      { id: 'aws', title: 'AWS Deployment' },
      { id: 'ci-cd', title: 'CI/CD Pipeline' },
      { id: 'monitoring', title: 'Monitoring & Logging' },
      { id: 'performance', title: 'Performance Optimization' }
    ]
  }
};

export default courseStructure; 