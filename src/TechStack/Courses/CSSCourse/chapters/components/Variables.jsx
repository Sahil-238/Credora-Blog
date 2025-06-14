import React from 'react';
import { motion } from 'framer-motion';

const Variables = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Variables (Custom Properties)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Working with CSS Variables</h2>
        <div className="space-y-6">
          {/* Basic Variables */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Declaring Variables</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --spacing-unit: 1rem;
  --border-radius: 0.375rem;
}

.element {
  color: var(--text-color);
  margin: var(--spacing-unit);
  background-color: var(--primary-color);
}`}
              </pre>
            </div>
            <div className="space-y-4" style={{
              '--demo-primary': '#3b82f6',
              '--demo-secondary': '#8b5cf6',
              '--demo-spacing': '1rem',
            }}>
              <div style={{ 
                backgroundColor: 'var(--demo-primary)',
                padding: 'var(--demo-spacing)',
                borderRadius: '0.375rem'
              }} className="text-white">
                Using primary color variable
              </div>
              <div style={{ 
                backgroundColor: 'var(--demo-secondary)',
                padding: 'var(--demo-spacing)',
                borderRadius: '0.375rem'
              }} className="text-white">
                Using secondary color variable
              </div>
            </div>
          </div>

          {/* Variable Scope */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Variable Scope</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.component {
  --component-bg: #e5e7eb;
  --component-color: #1f2937;
}

.component .child {
  background-color: var(--component-bg);
  color: var(--component-color);
}

/* Overriding variables */
.component.dark {
  --component-bg: #1f2937;
  --component-color: #e5e7eb;
}`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ '--local-bg': '#e5e7eb', '--local-color': '#1f2937' }}>
                <div style={{ 
                  backgroundColor: 'var(--local-bg)',
                  color: 'var(--local-color)',
                  padding: '1rem',
                  borderRadius: '0.375rem'
                }}>
                  Light theme component
                </div>
              </div>
              <div style={{ '--local-bg': '#1f2937', '--local-color': '#e5e7eb' }}>
                <div style={{ 
                  backgroundColor: 'var(--local-bg)',
                  color: 'var(--local-color)',
                  padding: '1rem',
                  borderRadius: '0.375rem'
                }}>
                  Dark theme component
                </div>
              </div>
            </div>
          </div>

          {/* Fallback Values */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Fallback Values</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.element {
  /* With fallback value */
  color: var(--undefined-color, #374151);
  
  /* Multiple fallbacks */
  margin: var(--spacing, var(--default-spacing, 1rem));
  
  /* Calculations with variables */
  width: calc(var(--base-width, 100px) * 2);
}`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ 
                color: 'var(--undefined-color, #374151)',
                padding: '1rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '0.375rem'
              }}>
                Using fallback color
              </div>
              <div style={{ 
                width: 'calc(var(--base-width, 100px) * 2)',
                padding: '1rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '0.375rem'
              }}>
                Calculated width with fallback
              </div>
            </div>
          </div>

          {/* Media Queries */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Variables in Media Queries</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`:root {
  --container-width: 100%;
}

@media (min-width: 768px) {
  :root {
    --container-width: 750px;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-width: 970px;
  }
}`}
              </pre>
            </div>
            <div className="w-full bg-blue-100 p-4 rounded text-center">
              Responsive container width (check at different screen sizes)
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">CSS Variables Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use semantic names for variables</li>
          <li>Organize variables by purpose or component</li>
          <li>Provide fallback values for critical properties</li>
          <li>Use scoped variables for component-specific styles</li>
          <li>Update variables for different themes/modes</li>
          <li>Consider responsive design with variables</li>
          <li>Document variable usage and purpose</li>
          <li>Keep variable declarations organized in root</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Variables; 