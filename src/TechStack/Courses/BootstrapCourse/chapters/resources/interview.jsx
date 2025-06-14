import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Interview = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Interview Questions</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Concepts</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: What is Bootstrap and why is it used?</p>
            <div className="pl-4">
              <p className="mb-2">A: Bootstrap is a free, open-source front-end framework developed by Twitter. It's used for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rapid responsive web development</li>
                <li>Consistent styling across projects</li>
                <li>Cross-browser compatibility</li>
                <li>Mobile-first approach</li>
                <li>Pre-built components and utilities</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: What are the advantages of using Bootstrap?</p>
            <div className="pl-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Easy to use and learn</li>
                <li>Responsive grid system</li>
                <li>Extensive pre-styled components</li>
                <li>Large community and resources</li>
                <li>Regular updates and maintenance</li>
                <li>Customizable with Sass</li>
                <li>Consistent browser support</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: Explain Bootstrap's grid system.</p>
            <div className="pl-4">
              <p className="mb-2">A: Bootstrap's grid system is:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Based on a 12-column layout</li>
                <li>Responsive and mobile-first</li>
                <li>Uses containers, rows, and columns</li>
                <li>Has six breakpoints (xs, sm, md, lg, xl, xxl)</li>
                <li>Supports nesting and ordering</li>
              </ul>
              <pre className="bg-white p-3 rounded mt-2">
                {`<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Components & Utilities</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: What are Bootstrap utilities and how are they used?</p>
            <div className="pl-4">
              <p className="mb-2">A: Bootstrap utilities are CSS classes for common styling tasks:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spacing (margin and padding)</li>
                <li>Colors and backgrounds</li>
                <li>Display properties</li>
                <li>Flexbox utilities</li>
                <li>Text alignment and decoration</li>
              </ul>
              <pre className="bg-white p-3 rounded mt-2">
                {`<!-- Example utility classes -->
<div class="mt-3 p-4 bg-primary text-white d-flex justify-content-between">
  <div>Left content</div>
  <div>Right content</div>
</div>`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: How do you create a responsive navigation bar in Bootstrap?</p>
            <div className="pl-4">
              <p className="mb-2">A: A responsive navbar can be created using:</p>
              <pre className="bg-white p-3 rounded">
                {`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Topics</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: How do you customize Bootstrap using Sass?</p>
            <div className="pl-4">
              <p className="mb-2">A: Bootstrap can be customized using Sass by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modifying Sass variables</li>
                <li>Creating custom color schemes</li>
                <li>Adjusting breakpoints</li>
                <li>Customizing component styles</li>
              </ul>
              <pre className="bg-white p-3 rounded mt-2">
                {`// Custom Sass variables
$primary: #007bff;
$theme-colors: (
  "primary": $primary,
  "custom": #ff0000
);

// Import Bootstrap
@import "~bootstrap/scss/bootstrap";`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: How do you optimize Bootstrap for production?</p>
            <div className="pl-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Remove unused components and utilities</li>
                <li>Minify CSS and JavaScript files</li>
                <li>Use a CSS purge tool</li>
                <li>Implement proper caching</li>
                <li>Load resources asynchronously</li>
                <li>Use CDN for better performance</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold mb-2">Q: Explain Bootstrap's JavaScript components and dependencies.</p>
            <div className="pl-4">
              <p className="mb-2">A: Bootstrap's JavaScript components:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Require Popper.js for some components</li>
                <li>Can be used individually or bundled</li>
                <li>Support data attributes for initialization</li>
                <li>Can be controlled programmatically</li>
              </ul>
              <pre className="bg-white p-3 rounded mt-2">
                {`// Initialize a tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Always use the container class for proper padding and margins</li>
            <li>Implement mobile-first design approach</li>
            <li>Use semantic HTML elements</li>
            <li>Customize Bootstrap using Sass instead of overriding styles</li>
            <li>Keep accessibility in mind when building components</li>
            <li>Use utility classes for minor styling adjustments</li>
            <li>Properly nest grid elements</li>
            <li>Test across different browsers and devices</li>
            <li>Keep up with Bootstrap updates and changes</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Pitfalls</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Overriding Bootstrap styles with custom CSS</li>
            <li>Not using the grid system correctly</li>
            <li>Forgetting to include required JavaScript dependencies</li>
            <li>Not considering mobile-first approach</li>
            <li>Using outdated Bootstrap versions</li>
            <li>Mixing different versions of Bootstrap</li>
            <li>Not optimizing for production</li>
            <li>Ignoring accessibility features</li>
          </ul>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Interview; 