import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridXl = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Extra Large Grid Breakpoint (xl)</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Extra Large Breakpoint Overview</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">The extra large breakpoint (xl) applies to screen widths ≥1200px.</p>
          <pre className="bg-white p-3 rounded">
            {`<!-- Example of xl breakpoint usage -->
<div class="container">
  <div class="row">
    <div class="col-xl-2">col-xl-2</div>
    <div class="col-xl-2">col-xl-2</div>
    <div class="col-xl-2">col-xl-2</div>
    <div class="col-xl-2">col-xl-2</div>
    <div class="col-xl-2">col-xl-2</div>
    <div class="col-xl-2">col-xl-2</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Responsive Layout</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Complex multi-breakpoint layout -->
<div class="row">
  <!-- Main content -->
  <div class="col-12 col-lg-8 col-xl-9">
    <div class="row">
      <div class="col-sm-6 col-xl-4">Content block</div>
      <div class="col-sm-6 col-xl-4">Content block</div>
      <div class="col-sm-6 col-xl-4">Content block</div>
    </div>
  </div>
  <!-- Sidebar -->
  <div class="col-12 col-lg-4 col-xl-3">
    Sidebar content
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Layout</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="container-fluid">
  <div class="row">
    <!-- Sidebar -->
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
      <div class="d-flex flex-column">
        <!-- Sidebar content -->
      </div>
    </div>
    <!-- Main area -->
    <div class="col py-3">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
        <div class="col mb-4">Dashboard card</div>
        <div class="col mb-4">Dashboard card</div>
        <div class="col mb-4">Dashboard card</div>
        <div class="col mb-4">Dashboard card</div>
      </div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Content Grid</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row g-4">
  <!-- Featured content -->
  <div class="col-12 col-xl-8">
    <div class="featured-content">
      Large featured area
    </div>
  </div>
  <!-- Sidebar content -->
  <div class="col-12 col-xl-4">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-1 g-4">
      <div class="col">Sidebar item</div>
      <div class="col">Sidebar item</div>
      <div class="col">Sidebar item</div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Utilities for xl</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Display utilities -->
<div class="d-none d-xl-block">
  Only visible on xl screens and up
</div>

<!-- Spacing utilities -->
<div class="p-3 p-xl-5">
  Different padding on xl
</div>

<!-- Flex utilities -->
<div class="d-block d-xl-flex">
  Stack to flex on xl
</div>

<!-- Text alignment -->
<p class="text-start text-xl-center">
  Left aligned, centered on xl screens
</p>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Container Options</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Regular container -->
<div class="container">
  <!-- Max-width 1140px on xl -->
</div>

<!-- XL container -->
<div class="container-xl">
  <!-- 100% width until xl breakpoint -->
</div>

<!-- Fluid container -->
<div class="container-fluid">
  <!-- Always 100% width -->
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use xl breakpoint for large desktop displays</li>
          <li>Optimize content width for readability</li>
          <li>Consider multi-column layouts</li>
          <li>Implement advanced grid patterns</li>
          <li>Use whitespace effectively</li>
          <li>Maintain visual hierarchy</li>
          <li>Consider high-resolution images</li>
          <li>Test for ultra-wide displays</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridXl; 