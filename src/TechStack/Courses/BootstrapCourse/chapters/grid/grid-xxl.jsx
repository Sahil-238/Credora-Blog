import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridXxl = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Extra Extra Large Grid Breakpoint (xxl)</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">XXL Breakpoint Overview</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">The extra extra large breakpoint (xxl) applies to screen widths ≥1400px.</p>
          <pre className="bg-white p-3 rounded">
            {`<!-- Example of xxl breakpoint usage -->
<div class="container">
  <div class="row">
    <div class="col-xl-3 col-xxl-2">col-xl-3 col-xxl-2</div>
    <div class="col-xl-3 col-xxl-2">col-xl-3 col-xxl-2</div>
    <div class="col-xl-3 col-xxl-2">col-xl-3 col-xxl-2</div>
    <div class="col-xl-3 col-xxl-2">col-xl-3 col-xxl-2</div>
    <div class="col-xl-6 col-xxl-2">col-xl-6 col-xxl-2</div>
    <div class="col-xl-6 col-xxl-2">col-xl-6 col-xxl-2</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ultra-Wide Layouts</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Complex ultra-wide layout -->
<div class="container-xxl">
  <div class="row">
    <!-- Left sidebar -->
    <div class="col-lg-3 col-xxl-2">
      <nav class="nav flex-column">
        <!-- Navigation items -->
      </nav>
    </div>
    
    <!-- Main content -->
    <div class="col-lg-6 col-xxl-8">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4">
        <div class="col">Content card</div>
        <div class="col">Content card</div>
        <div class="col">Content card</div>
        <div class="col">Content card</div>
      </div>
    </div>
    
    <!-- Right sidebar -->
    <div class="col-lg-3 col-xxl-2">
      <!-- Additional content -->
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Grid Features</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Responsive column reordering -->
<div class="row">
  <div class="col-xxl-4 order-xxl-2">First on mobile, second on xxl</div>
  <div class="col-xxl-4 order-xxl-1">Second on mobile, first on xxl</div>
  <div class="col-xxl-4 order-xxl-3">Third on mobile and xxl</div>
</div>

<!-- Column offset -->
<div class="row">
  <div class="col-xxl-6 offset-xxl-3">
    Centered content on xxl screens
  </div>
</div>

<!-- Nested grids -->
<div class="row">
  <div class="col-xxl-8">
    <div class="row">
      <div class="col-xxl-6">Nested content</div>
      <div class="col-xxl-6">Nested content</div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Utilities for XXL</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Display utilities -->
<div class="d-none d-xxl-block">
  Only visible on xxl screens
</div>

<!-- Spacing utilities -->
<div class="p-4 p-xxl-6">
  Larger padding on xxl screens
</div>

<!-- Flex utilities -->
<div class="d-flex flex-column flex-xxl-row">
  Stack on smaller screens, row on xxl
</div>

<!-- Text utilities -->
<p class="text-center text-xxl-start">
  Centered text, left-aligned on xxl screens
</p>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Container Behavior</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Container options -->
<div class="container">
  <!-- Max-width 1320px on xxl -->
</div>

<div class="container-xxl">
  <!-- 100% width until xxl breakpoint -->
</div>

<div class="container-fluid">
  <!-- Always 100% width -->
</div>

<!-- Mixed container behavior -->
<div class="container-lg container-xxl">
  <!-- Different max-widths at different breakpoints -->
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use xxl breakpoint for ultra-wide displays</li>
          <li>Consider multi-panel layouts</li>
          <li>Optimize content density</li>
          <li>Maintain readable line lengths</li>
          <li>Use appropriate image resolutions</li>
          <li>Test on 4K displays</li>
          <li>Consider viewport height variations</li>
          <li>Implement advanced grid patterns</li>
          <li>Use whitespace strategically</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridXxl; 