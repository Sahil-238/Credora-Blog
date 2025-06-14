import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridColumns = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Grid Columns</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Grid Columns</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="container">
  <!-- Equal width columns -->
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>

  <!-- Specified width columns -->
  <div class="row">
    <div class="col-4">Column</div>
    <div class="col-4">Column</div>
    <div class="col-4">Column</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Columns</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="container">
  <div class="row">
    <!-- Stack on mobile, side by side on desktop -->
    <div class="col-12 col-md-6">Column</div>
    <div class="col-12 col-md-6">Column</div>
  </div>

  <!-- Responsive column widths -->
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">Column</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">Column</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">Column</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">Column</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Auto-layout Columns</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Equal-width -->
<div class="row">
  <div class="col">1 of 3</div>
  <div class="col">2 of 3</div>
  <div class="col">3 of 3</div>
</div>

<!-- One column width -->
<div class="row">
  <div class="col">1 of 3</div>
  <div class="col-6">2 of 3 (wider)</div>
  <div class="col">3 of 3</div>
</div>

<!-- Variable width content -->
<div class="row justify-content-md-center">
  <div class="col col-lg-2">1 of 3</div>
  <div class="col-md-auto">Variable width content</div>
  <div class="col col-lg-2">3 of 3</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Column Ordering</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Order classes -->
<div class="row">
  <div class="col order-last">First, but last</div>
  <div class="col">Second, but unordered</div>
  <div class="col order-first">Third, but first</div>
</div>

<!-- Responsive ordering -->
<div class="row">
  <div class="col-md-4 order-md-2">First, but second on md</div>
  <div class="col-md-4 order-md-3">Second, but third on md</div>
  <div class="col-md-4 order-md-1">Third, but first on md</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Column Offset</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Offset columns -->
<div class="row">
  <div class="col-md-4">col-md-4</div>
  <div class="col-md-4 offset-md-4">col-md-4 offset-md-4</div>
</div>

<!-- Responsive offset -->
<div class="row">
  <div class="col-sm-5 col-md-6">col-sm-5 col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">col-sm-5 offset-sm-2</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Column Alignment</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Vertical alignment -->
<div class="row align-items-start">
  <div class="col">Top aligned</div>
  <div class="col">Top aligned</div>
</div>

<div class="row align-items-center">
  <div class="col">Center aligned</div>
  <div class="col">Center aligned</div>
</div>

<div class="row align-items-end">
  <div class="col">Bottom aligned</div>
  <div class="col">Bottom aligned</div>
</div>

<!-- Individual column alignment -->
<div class="row">
  <div class="col align-self-start">Top</div>
  <div class="col align-self-center">Center</div>
  <div class="col align-self-end">Bottom</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nesting</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="row">
  <div class="col-sm-9">
    Level 1: col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">Level 2: col-8 col-sm-6</div>
      <div class="col-4 col-sm-6">Level 2: col-4 col-sm-6</div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the 12-column grid system effectively</li>
          <li>Plan responsive breakpoints carefully</li>
          <li>Consider mobile-first design</li>
          <li>Use auto-layout columns when possible</li>
          <li>Maintain consistent column patterns</li>
          <li>Use appropriate column ordering for different screen sizes</li>
          <li>Keep nesting levels manageable</li>
          <li>Use offset columns judiciously</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridColumns; 