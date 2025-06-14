import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridLg = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Large Grid Breakpoint (lg)</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Large Breakpoint Overview</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">The large breakpoint (lg) applies to screen widths ≥992px.</p>
          <pre className="bg-white p-3 rounded">
            {`<!-- Example of lg breakpoint usage -->
<div class="container">
  <div class="row">
    <div class="col-lg-3">col-lg-3</div>
    <div class="col-lg-3">col-lg-3</div>
    <div class="col-lg-3">col-lg-3</div>
    <div class="col-lg-3">col-lg-3</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complex Responsive Layouts</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Multi-breakpoint responsive layout -->
<div class="row">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    Full → Half → Third → Quarter
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    Full → Half → Third → Quarter
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    Full → Half → Third → Quarter
  </div>
  <div class="col-12 col-sm-6 col-md-12 col-lg-3">
    Full → Half → Full → Quarter
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sidebar Layouts</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Responsive sidebar layout -->
<div class="row">
  <!-- Sidebar -->
  <div class="col-12 col-lg-3 order-lg-2">
    <nav class="nav flex-column">
      <a class="nav-link" href="#">Link 1</a>
      <a class="nav-link" href="#">Link 2</a>
      <a class="nav-link" href="#">Link 3</a>
    </nav>
  </div>
  <!-- Main content -->
  <div class="col-12 col-lg-9 order-lg-1">
    Main content area
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Grid with Cards</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">Card content</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">Card content</p>
      </div>
    </div>
  </div>
  <!-- More cards... -->
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Utilities at lg</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Display utilities -->
<div class="d-none d-lg-block">
  Visible only on lg and up
</div>

<div class="d-lg-none">
  Hidden on lg and up
</div>

<!-- Spacing utilities -->
<div class="mt-3 mt-lg-5">
  Different margin-top for lg
</div>

<!-- Text utilities -->
<p class="text-center text-lg-start">
  Centered text, left-aligned on lg
</p>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Container Behavior</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Container types -->
<div class="container">
  <!-- Fixed width container on lg (992px) -->
</div>

<div class="container-fluid">
  <!-- Full width at all breakpoints -->
</div>

<div class="container-lg">
  <!-- 100% width until lg breakpoint -->
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use lg breakpoint for desktops and larger tablets</li>
          <li>Consider complex layouts with sidebars</li>
          <li>Plan for optimal reading width (50-75 characters)</li>
          <li>Use responsive images and media</li>
          <li>Test navigation patterns thoroughly</li>
          <li>Consider hover states and desktop interactions</li>
          <li>Optimize for larger viewports</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridLg; 