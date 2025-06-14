import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const RwdTypography = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Responsive Typography</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Fluid Typography</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h3 className="font-semibold mb-2">Using Viewport Units</h3>
          <pre className="bg-white p-3 rounded">
            {`/* Basic viewport units */
h1 {
  font-size: 5vw;
}

/* Clamped values */
h2 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

/* Fluid calculation */
p {
  font-size: calc(16px + 0.5vw);
}`}
          </pre>
          <p className="mt-2 text-gray-600">Viewport units and clamp() function allow text to scale smoothly with viewport size.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Media Query Approach</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`/* Base styles */
html {
  font-size: 16px;
}

/* Tablet typography */
@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

/* Desktop typography */
@media (min-width: 1024px) {
  html {
    font-size: 20px;
  }
}

/* Using rem units */
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
p { font-size: 1rem; }`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CSS Custom Properties</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`:root {
  --font-size-base: 16px;
  --font-size-h1: calc(var(--font-size-base) * 2.5);
  --font-size-h2: calc(var(--font-size-base) * 2);
  --line-height-base: 1.5;
}

@media (min-width: 768px) {
  :root {
    --font-size-base: 18px;
  }
}

h1 { 
  font-size: var(--font-size-h1);
  line-height: calc(var(--line-height-base) * 0.9);
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Modern Fluid Typography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Using CSS Locks</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`/* CSS locks formula */
h1 {
  font-size: calc(1.5rem + (3 - 1.5) * ((100vw - 300px) / (1600 - 300)));
  min-font-size: 1.5rem;
  max-font-size: 3rem;
}`}
            </pre>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Modern Viewport Units</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`/* Dynamic viewport units */
h1 {
  font-size: min(max(2rem, 5cqi), 4rem);
}

p {
  font-size: clamp(1rem, 2.5cqi, 1.5rem);
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Line Height</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`/* Fluid line height */
p {
  line-height: clamp(1.5, calc(1.3 + 0.5vw), 1.7);
}

/* Responsive line length */
.content {
  max-width: 65ch;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 3rem);
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use relative units (rem, em) for font sizes</li>
          <li>Set a base font size on the html element</li>
          <li>Implement fluid typography for smooth scaling</li>
          <li>Consider readability at all viewport sizes</li>
          <li>Maintain appropriate contrast ratios</li>
          <li>Test typography across different devices</li>
          <li>Use CSS custom properties for maintainability</li>
          <li>Consider font loading performance</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Typography Scale</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded">
            <pre className="bg-white p-3 rounded">
              {`:root {
  --scale-ratio: 1.25; /* Major third scale */
  
  --text-xs: calc(var(--font-size-base) / var(--scale-ratio));
  --text-sm: var(--font-size-base);
  --text-md: calc(var(--font-size-base) * var(--scale-ratio));
  --text-lg: calc(var(--text-md) * var(--scale-ratio));
  --text-xl: calc(var(--text-lg) * var(--scale-ratio));
  --text-2xl: calc(var(--text-xl) * var(--scale-ratio));
}`}
            </pre>
          </div>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default RwdTypography; 