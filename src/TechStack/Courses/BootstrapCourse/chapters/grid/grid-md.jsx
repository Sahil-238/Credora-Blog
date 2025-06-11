import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridMd = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Medium Grid Breakpoint (md)</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Medium Breakpoint Overview</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">The medium breakpoint (md) applies to screen widths ≥768px.</p>
          <pre className="bg-white p-3 rounded">
            {`<!-- Example of md breakpoint usage -->
<div class="container">
  <div class="row">
    <div class="col-md-4">col-md-4</div>
    <div class="col-md-4">col-md-4</div>
    <div class="col-md-4">col-md-4</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Patterns</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Different layouts across breakpoints -->
<div class="row">
  <div class="col-12 col-sm-6 col-md-4">
    Full on xs, half on sm, third on md
  </div>
  <div class="col-12 col-sm-6 col-md-4">
    Full on xs, half on sm, third on md
  </div>
  <div class="col-12 col-sm-12 col-md-4">
    Full on xs and sm, third on md
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Auto-layout at md</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Equal-width columns at md -->
<div class="row">
  <div class="col-md">Auto-width at md</div>
  <div class="col-md">Auto-width at md</div>
  <div class="col-md">Auto-width at md</div>
</div>

<!-- One column wider -->
<div class="row">
  <div class="col-md">Auto-width at md</div>
  <div class="col-md-6">Fixed width at md</div>
  <div class="col-md">Auto-width at md</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Ordering</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row">
  <div class="col-md-4 order-md-2">First, but second at md</div>
  <div class="col-md-4 order-md-3">Second, but third at md</div>
  <div class="col-md-4 order-md-1">Third, but first at md</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nesting at md</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row">
  <div class="col-md-9">
    Level 1: col-md-9
    <div class="row">
      <div class="col-md-6">Level 2: col-md-6</div>
      <div class="col-md-6">Level 2: col-md-6</div>
    </div>
  </div>
  <div class="col-md-3">
    Level 1: col-md-3
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alignment at md</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Vertical alignment -->
<div class="row align-items-md-start">
  <div class="col-md-4">Top aligned at md</div>
  <div class="col-md-4">Top aligned at md</div>
</div>

<div class="row align-items-md-center">
  <div class="col-md-4">Center aligned at md</div>
  <div class="col-md-4">Center aligned at md</div>
</div>

<!-- Individual alignment -->
<div class="row">
  <div class="col-md-4 align-self-md-start">Top</div>
  <div class="col-md-4 align-self-md-center">Center</div>
  <div class="col-md-4 align-self-md-end">Bottom</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use md breakpoint for tablets and small laptops</li>
          <li>Consider both smaller and larger breakpoints</li>
          <li>Plan column layouts for optimal content width</li>
          <li>Use responsive utilities for better UX</li>
          <li>Test navigation patterns at md breakpoint</li>
          <li>Consider touch and mouse interactions</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridMd; 