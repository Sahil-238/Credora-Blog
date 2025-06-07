import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridSm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Small Grid Breakpoint (sm)</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Small Breakpoint Overview</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">The small breakpoint (sm) applies to screen widths ≥576px.</p>
          <pre className="bg-white p-3 rounded">
            {`<!-- Example of sm breakpoint usage -->
<div class="container">
  <div class="row">
    <div class="col-sm-6">col-sm-6</div>
    <div class="col-sm-6">col-sm-6</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stacking to Horizontal</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Stack on extra small, horizontal on small -->
<div class="row">
  <div class="col-12 col-sm-6">
    Stack on mobile, side-by-side on sm and up
  </div>
  <div class="col-12 col-sm-6">
    Stack on mobile, side-by-side on sm and up
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mixed Column Sizes</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>

<div class="row">
  <div class="col-sm-3">col-sm-3</div>
  <div class="col-sm-6">col-sm-6</div>
  <div class="col-sm-3">col-sm-3</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Column Wrapping</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Columns will wrap to next line when total exceeds 12 -->
<div class="row">
  <div class="col-sm-4">col-sm-4</div>
  <div class="col-sm-4">col-sm-4</div>
  <div class="col-sm-4">col-sm-4</div>
  <div class="col-sm-4">col-sm-4</div>
  <div class="col-sm-4">col-sm-4</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Show/hide based on breakpoint -->
<div class="d-none d-sm-block">
  Visible from small breakpoint up
</div>

<div class="d-sm-none">
  Hidden from small breakpoint up
</div>

<!-- Responsive text alignment -->
<p class="text-start text-sm-center">
  Left aligned, center aligned from small up
</p>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Offsetting Columns</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row">
  <div class="col-sm-4">col-sm-4</div>
  <div class="col-sm-4 offset-sm-4">col-sm-4 offset-sm-4</div>
</div>

<div class="row">
  <div class="col-sm-3 offset-sm-3">col-sm-3 offset-sm-3</div>
  <div class="col-sm-3 offset-sm-3">col-sm-3 offset-sm-3</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use sm breakpoint for small tablets and large phones</li>
          <li>Consider mobile-first approach (xs) before adding sm styles</li>
          <li>Combine with other breakpoints for better responsiveness</li>
          <li>Test layouts at the breakpoint boundaries</li>
          <li>Use appropriate column counts for content readability</li>
          <li>Consider touch targets for small devices</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridSm; 