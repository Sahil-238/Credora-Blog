import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridGutters = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Grid Gutters</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Default Gutters</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="container">
  <div class="row">
    <div class="col-6">Column</div>
    <div class="col-6">Column</div>
  </div>
</div>`}
          </pre>
          <p className="mt-2 text-gray-600">Default gutter width is 1.5rem (24px) on each side.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gutter Classes</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- No gutters -->
<div class="row g-0">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- 1rem gutters -->
<div class="row g-2">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- 2rem gutters -->
<div class="row g-4">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- 3rem gutters -->
<div class="row g-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Horizontal & Vertical Gutters</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Horizontal gutters -->
<div class="row gx-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- Vertical gutters -->
<div class="row gy-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- Both horizontal & vertical gutters -->
<div class="row g-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Gutters</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Different gutters at different breakpoints -->
<div class="row g-3 g-md-4 g-lg-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- Responsive horizontal gutters -->
<div class="row gx-2 gx-md-4 gx-lg-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>

<!-- Responsive vertical gutters -->
<div class="row gy-2 gy-md-4 gy-lg-5">
  <div class="col-6">Column</div>
  <div class="col-6">Column</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Row Columns with Gutters</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="container">
  <div class="row row-cols-2 g-4">
    <div class="col">
      <div class="p-3 border">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border">Custom column padding</div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nested Gutters</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="container">
  <div class="row g-5">
    <div class="col-6">
      <div class="row g-3">
        <div class="col-6">Nested</div>
        <div class="col-6">Nested</div>
      </div>
    </div>
    <div class="col-6">
      <div class="row g-3">
        <div class="col-6">Nested</div>
        <div class="col-6">Nested</div>
      </div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use consistent gutter sizes throughout your layout</li>
          <li>Consider responsive gutter sizes for different screen sizes</li>
          <li>Use g-0 when you need columns to touch</li>
          <li>Remember gutters add to the overall width</li>
          <li>Be mindful of nested gutters in complex layouts</li>
          <li>Use appropriate gutter sizes for content density</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridGutters; 