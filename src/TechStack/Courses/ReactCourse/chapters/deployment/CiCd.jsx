import React from 'react';

const CiCd = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CI/CD</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding CI/CD</h2>
        <p className="text-gray-600 mb-6">
          CI/CD (Continuous Integration/Continuous Deployment) is a development practice that automates 
          the building, testing, and deployment of applications. For React projects, CI/CD ensures that 
          your code changes are automatically validated and deployed, reducing manual errors and speeding 
          up the development cycle.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Continuous Integration (CI)</h3>
            <p className="text-blue-700 text-sm">
              Automatically build and test code changes when they're pushed to version control.
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-800 mb-2">Continuous Deployment (CD)</h3>
            <p className="text-green-700 text-sm">
              Automatically deploy tested code changes to production or staging environments.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Benefits of CI/CD for React Apps</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Development Benefits</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Early bug detection through automated testing</li>
                <li>• Consistent build and deployment process</li>
                <li>• Faster feedback loops for developers</li>
                <li>• Reduced manual deployment errors</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Business Benefits</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Faster time to market</li>
                <li>• More reliable releases</li>
                <li>• Better team collaboration</li>
                <li>• Improved code quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Popular CI/CD Platforms</h2>
        
        <div className="space-y-4 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub Actions</h3>
            <p className="text-gray-600 text-sm mb-2">
              Integrated with GitHub repositories, offers free minutes for public repos.
            </p>
            <div className="bg-gray-50 rounded p-2 text-xs">
              <strong>Best for:</strong> GitHub-hosted projects, simple workflows
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Netlify</h3>
            <p className="text-gray-600 text-sm mb-2">
              Specialized for frontend deployments with automatic builds from Git.
            </p>
            <div className="bg-gray-50 rounded p-2 text-xs">
              <strong>Best for:</strong> Static sites, JAMstack applications
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Vercel</h3>
            <p className="text-gray-600 text-sm mb-2">
              Optimized for React, Next.js, and other frontend frameworks.
            </p>
            <div className="bg-gray-50 rounded p-2 text-xs">
              <strong>Best for:</strong> React apps, serverless functions
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">CircleCI / Jenkins</h3>
            <p className="text-gray-600 text-sm mb-2">
              Enterprise-grade solutions with extensive customization options.
            </p>
            <div className="bg-gray-50 rounded p-2 text-xs">
              <strong>Best for:</strong> Complex workflows, enterprise environments
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">GitHub Actions for React</h2>
        
        <h3 className="text-xl font-medium text-gray-700 mb-3">Basic Workflow Setup</h3>
        <p className="text-gray-600 mb-4">
          Create a <code className="bg-gray-100 px-2 py-1 rounded">.github/workflows/ci.yml</code> file in your repository:
        </p>
        
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test -- --coverage --watchAll=false
      
    - name: Run linting
      run: npm run lint
      
    - name: Build application
      run: npm run build`}
          </pre>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Deployment Workflow</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build application
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.0
      with:
        publish-dir: './build'
        production-branch: main
        github-token: \\$\\{\\{ secrets.GITHUB_TOKEN \\}\\}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: \\$\\{\\{ secrets.NETLIFY_AUTH_TOKEN \\}\\}
        NETLIFY_SITE_ID: \\$\\{\\{ secrets.NETLIFY_SITE_ID \\}\\}`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Environment Variables & Secrets</h2>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Security Best Practices</h4>
          <p className="text-yellow-700 text-sm">
            Never commit sensitive information like API keys or tokens to your repository. 
            Use environment variables and secrets management instead.
          </p>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">GitHub Secrets Setup</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Go to your repository Settings → Secrets and variables → Actions</li>
            <li>Click "New repository secret"</li>
            <li>Add secrets like <code>NETLIFY_AUTH_TOKEN</code>, <code>REACT_APP_API_KEY</code></li>
            <li>Reference in workflows using <code>{`$\{{ secrets.SECRET_NAME }}`}</code></li>          </ol>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Environment-Specific Builds</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`    - name: Build for production
      run: npm run build
      env:
        REACT_APP_API_URL: \\$\\{\\{ secrets.PROD_API_URL \\}\\}
        REACT_APP_ENVIRONMENT: production
        
    - name: Build for staging
      run: npm run build
      env:
        REACT_APP_API_URL: \\$\\{\\{ secrets.STAGING_API_URL \\}\\}
        REACT_APP_ENVIRONMENT: staging`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing in CI/CD Pipeline</h2>
        
        <h3 className="text-xl font-medium text-gray-700 mb-3">Test Configuration</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-2">Update your <code>package.json</code> scripts:</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm">
{`{
  "scripts": {
    "test": "react-scripts test",
    "test:ci": "react-scripts test --coverage --watchAll=false",
    "test:e2e": "cypress run"
  }
}`}
          </div>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Quality Gates</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`    - name: Check test coverage
      run: |
        npm test -- --coverage --watchAll=false
        npx codecov
        
    - name: Quality gate check
      run: |
        if [ "$COVERAGE" -lt "80" ]; then
          echo "Coverage is below 80%"
          exit 1
        fi`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Deployment Strategies</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Blue-Green Deployment</h4>
            <p className="text-gray-600 text-sm mb-2">
              Maintain two identical production environments, switching between them for deployments.
            </p>
            <div className="bg-blue-50 p-2 rounded text-xs">
              <strong>Pros:</strong> Zero downtime, easy rollback
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Rolling Deployment</h4>
            <p className="text-gray-600 text-sm mb-2">
              Gradually replace old instances with new ones during deployment.
            </p>
            <div className="bg-green-50 p-2 rounded text-xs">
              <strong>Pros:</strong> Resource efficient, gradual rollout
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Feature Flags</h4>
            <p className="text-gray-600 text-sm mb-2">
              Deploy code with features disabled, enable them selectively.
            </p>
            <div className="bg-purple-50 p-2 rounded text-xs">
              <strong>Pros:</strong> Safe testing, gradual feature rollout
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Canary Deployment</h4>
            <p className="text-gray-600 text-sm mb-2">
              Deploy to a small subset of users before full rollout.
            </p>
            <div className="bg-yellow-50 p-2 rounded text-xs">
              <strong>Pros:</strong> Risk mitigation, real user feedback
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Monitoring & Rollback</h2>
        
        <h3 className="text-xl font-medium text-gray-700 mb-3">Deployment Monitoring</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <ul className="text-gray-700 space-y-2">
            <li><strong>Health Checks:</strong> Automated endpoints to verify app status</li>
            <li><strong>Error Tracking:</strong> Integration with Sentry, Bugsnag, or similar</li>
            <li><strong>Performance Monitoring:</strong> Core Web Vitals, loading times</li>
            <li><strong>User Analytics:</strong> Track user behavior and engagement</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Automated Rollback</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`    - name: Health check
      run: |
        sleep 30
        curl -f https://your-app.com/health || exit 1
        
    - name: Rollback on failure
      if: failure()
      run: |
        echo "Deployment failed, rolling back..."
        # Your rollback commands here`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 p-4">
            <h4 className="font-semibold text-green-800 mb-2">Pipeline Design</h4>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• Keep pipelines fast (under 10 minutes when possible)</li>
              <li>• Run tests in parallel to reduce execution time</li>
              <li>• Use caching for dependencies and build artifacts</li>
              <li>• Implement proper error handling and notifications</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Security</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• Never expose secrets in logs or build outputs</li>
              <li>• Use least privilege access for deployment credentials</li>
              <li>• Regularly rotate API keys and tokens</li>
              <li>• Scan dependencies for vulnerabilities</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Maintenance</h4>
            <ul className="text-purple-700 space-y-1 text-sm">
              <li>• Document your CI/CD processes and workflows</li>
              <li>• Monitor pipeline performance and optimize regularly</li>
              <li>• Keep dependencies and actions up to date</li>
              <li>• Test your rollback procedures periodically</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Pitfalls & Solutions</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Problem: Flaky Tests</h4>
            <p className="text-red-700 text-sm mb-2">Tests that pass/fail inconsistently break CI/CD reliability.</p>
            <div className="bg-red-100 p-2 rounded text-xs">
              <strong>Solution:</strong> Identify and fix flaky tests, use test retries sparingly, improve test isolation
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 mb-2">Problem: Slow Builds</h4>
            <p className="text-orange-700 text-sm mb-2">Long pipeline execution times slow down development.</p>
            <div className="bg-orange-100 p-2 rounded text-xs">
              <strong>Solution:</strong> Use caching, parallel execution, and optimize Docker layers
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Problem: Environment Drift</h4>
            <p className="text-yellow-700 text-sm mb-2">Differences between development and production environments.</p>
            <div className="bg-yellow-100 p-2 rounded text-xs">
              <strong>Solution:</strong> Use containerization, infrastructure as code, and consistent environments
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-800">
          ← Previous: Deployment
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Next: Dev Tools →
        </button>
      </div>
    </div>
  );
};

export default CiCd;