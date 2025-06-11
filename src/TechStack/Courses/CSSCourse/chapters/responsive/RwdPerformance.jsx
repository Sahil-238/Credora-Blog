import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const RwdPerformance = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Responsive Design Performance</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Image Optimization</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h3 className="font-semibold mb-2">Responsive Images</h3>
          <pre className="bg-white p-3 rounded">
            {`<!-- Using srcset and sizes -->
<img src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
     sizes="(max-width: 320px) 280px,
            (max-width: 640px) 580px,
            800px"
     loading="lazy"
     alt="Optimized responsive image">

<!-- Using picture element -->
<picture>
  <source media="(min-width: 800px)" 
          srcset="hero.webp"
          type="image/webp">
  <source media="(min-width: 400px)" 
          srcset="hero-tablet.webp"
          type="image/webp">
  <img src="hero-mobile.jpg" 
       alt="Hero image"
       loading="lazy">`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CSS Loading Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Critical CSS</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`<!-- Inline critical CSS -->
<style>
  /* Above-the-fold styles */
  .header {
    display: flex;
    padding: 1rem;
  }
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" 
      href="styles.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'">`}
            </pre>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Media Query Loading</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`<!-- Conditional CSS loading -->
<link rel="stylesheet" 
      href="mobile.css" 
      media="screen and (max-width: 767px)">

<link rel="stylesheet"
      href="desktop.css"
      media="screen and (min-width: 768px)">`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Best Practices</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`/* Reduce paint operations */
.card {
  will-change: transform;
  transform: translateZ(0);
}

/* Use CSS containment */
.component {
  contain: content;
}

/* Efficient animations */
@media (prefers-reduced-motion: no-preference) {
  .animate {
    transition: transform 0.3s;
  }
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resource Loading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Font Loading</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`<!-- Font loading optimization -->
<link rel="preload"
      href="font.woff2"
      as="font"
      type="font/woff2"
      crossorigin>

<style>
  @font-face {
    font-family: 'CustomFont';
    font-display: swap;
    src: url('font.woff2') format('woff2');
  }
</style>`}
            </pre>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Asset Loading</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`<!-- Responsive asset loading -->
<link rel="preload" 
      href="critical.js"
      as="script">

<link rel="prefetch" 
      href="non-critical.js">

<link rel="dns-prefetch" 
      href="//api.example.com">`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Optimize and compress images</li>
          <li>Use modern image formats (WebP, AVIF)</li>
          <li>Implement lazy loading for images and iframes</li>
          <li>Minimize CSS and JavaScript files</li>
          <li>Use CSS containment where appropriate</li>
          <li>Implement critical CSS</li>
          <li>Optimize font loading</li>
          <li>Use responsive loading techniques</li>
          <li>Consider performance budgets</li>
          <li>Monitor Core Web Vitals</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Monitoring Tools</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="space-y-2">
            <li>• Google Lighthouse</li>
            <li>• Chrome DevTools Performance panel</li>
            <li>• WebPageTest</li>
            <li>• Core Web Vitals report</li>
            <li>• Browser Network panel</li>
          </ul>
          <p className="mt-4 text-gray-600">Regular performance monitoring helps maintain optimal responsive design implementation.</p>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default RwdPerformance; 