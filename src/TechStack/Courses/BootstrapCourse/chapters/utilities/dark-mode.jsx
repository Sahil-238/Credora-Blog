import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const DarkMode = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dark Mode in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dark Theme</h2>
        <div className="p-4 bg-dark text-white rounded mb-3">
          <h3 className="h4 mb-3">Dark Background</h3>
          <p>This is an example of dark mode content. Bootstrap's dark mode can be enabled by adding <code>data-bs-theme="dark"</code> to the <code>html</code> or any container element.</p>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<!-- Enable dark mode -->
<html data-bs-theme="dark">
  ...
</html>

<!-- Or on a container -->
<div data-bs-theme="dark">
  ...
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dark Components</h2>
        <div data-bs-theme="dark" className="p-4 bg-dark rounded">
          <div className="mb-3">
            <button type="button" className="btn btn-primary me-2">Primary</button>
            <button type="button" className="btn btn-secondary me-2">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
          </div>
          <div className="mb-3">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">Dark Card</h5>
                <p className="card-text">Some example text for the dark themed card.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div data-bs-theme="dark">
  <!-- Buttons -->
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>

  <!-- Card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Dark Card</h5>
      <p class="card-text">Some example text for the dark themed card.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Dark Elements</h2>
        <div className="mb-3">
          <div className="p-3 bg-dark-subtle text-emphasis-dark rounded mb-2">Dark subtle background</div>
          <div className="p-3 border border-dark-subtle rounded mb-2">Dark subtle border</div>
          <p className="text-dark-emphasis">Dark emphasis text</p>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<!-- Dark utilities -->
<div class="bg-dark-subtle text-emphasis-dark">Dark subtle background</div>
<div class="border border-dark-subtle">Dark subtle border</div>
<p class="text-dark-emphasis">Dark emphasis text</p>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default DarkMode; 