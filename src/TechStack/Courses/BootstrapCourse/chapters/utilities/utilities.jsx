import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Utilities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Utilities</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Spacing Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Margin utilities -->
<div class="mt-3">Margin top 3</div>
<div class="mb-4">Margin bottom 4</div>
<div class="ms-2">Margin start 2</div>
<div class="me-auto">Margin end auto</div>
<div class="mx-3">Margin x-axis 3</div>
<div class="my-4">Margin y-axis 4</div>

<!-- Padding utilities -->
<div class="pt-3">Padding top 3</div>
<div class="pb-4">Padding bottom 4</div>
<div class="ps-2">Padding start 2</div>
<div class="pe-3">Padding end 3</div>
<div class="px-3">Padding x-axis 3</div>
<div class="py-4">Padding y-axis 4</div>

<!-- Gap utilities -->
<div class="d-flex gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Color Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Background colors -->
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-success">Success background</div>
<div class="bg-danger">Danger background</div>
<div class="bg-warning">Warning background</div>
<div class="bg-info">Info background</div>
<div class="bg-light">Light background</div>
<div class="bg-dark">Dark background</div>

<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="text-warning">Warning text</p>
<p class="text-info">Info text</p>
<p class="text-light bg-dark">Light text</p>
<p class="text-dark">Dark text</p>

<!-- Link colors -->
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Display Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Display options -->
<div class="d-none">Hidden on all</div>
<div class="d-block">Visible block</div>
<div class="d-inline">Inline element</div>
<div class="d-inline-block">Inline-block element</div>
<div class="d-flex">Flex container</div>
<div class="d-inline-flex">Inline-flex container</div>

<!-- Responsive display -->
<div class="d-none d-md-block">Hidden on small, visible from medium up</div>
<div class="d-md-none">Visible on small, hidden from medium up</div>

<!-- Print display -->
<div class="d-print-none">Hide on print only</div>
<div class="d-none d-print-block">Show on print only</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Flex Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Flex container -->
<div class="d-flex">
  <!-- Flex direction -->
  <div class="flex-row">Row</div>
  <div class="flex-column">Column</div>
  
  <!-- Justify content -->
  <div class="justify-content-start">Start</div>
  <div class="justify-content-center">Center</div>
  <div class="justify-content-end">End</div>
  <div class="justify-content-between">Between</div>
  <div class="justify-content-around">Around</div>
  
  <!-- Align items -->
  <div class="align-items-start">Start</div>
  <div class="align-items-center">Center</div>
  <div class="align-items-end">End</div>
  
  <!-- Flex wrap -->
  <div class="flex-wrap">Wrap</div>
  <div class="flex-nowrap">No wrap</div>
  
  <!-- Order -->
  <div class="order-1">First</div>
  <div class="order-2">Second</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Position Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Position options -->
<div class="position-static">Static</div>
<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>

<!-- Arrange elements -->
<div class="position-relative">
  <div class="position-absolute top-0 start-0">Top left</div>
  <div class="position-absolute top-0 end-0">Top right</div>
  <div class="position-absolute bottom-0 start-0">Bottom left</div>
  <div class="position-absolute bottom-0 end-0">Bottom right</div>
  <div class="position-absolute top-50 start-50 translate-middle">Center</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Text Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Text alignment -->
<p class="text-start">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">Right aligned text</p>

<!-- Text wrapping -->
<div class="text-wrap">Wrapped text</div>
<div class="text-nowrap">No wrap text</div>
<div class="text-break">Break text</div>

<!-- Text transform -->
<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>
<p class="text-capitalize">capitalized text</p>

<!-- Font weight and italics -->
<p class="fw-bold">Bold text</p>
<p class="fw-bolder">Bolder text</p>
<p class="fw-normal">Normal text</p>
<p class="fw-light">Light text</p>
<p class="fst-italic">Italic text</p>

<!-- Monospace -->
<p class="font-monospace">Monospace text</p>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Border Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Border width -->
<div class="border">Default border</div>
<div class="border-1">Border width 1</div>
<div class="border-2">Border width 2</div>
<div class="border-3">Border width 3</div>
<div class="border-4">Border width 4</div>
<div class="border-5">Border width 5</div>

<!-- Border color -->
<div class="border border-primary">Primary border</div>
<div class="border border-secondary">Secondary border</div>
<div class="border border-success">Success border</div>

<!-- Border radius -->
<div class="rounded">Rounded</div>
<div class="rounded-top">Rounded top</div>
<div class="rounded-circle">Circle</div>
<div class="rounded-pill">Pill</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use utility classes for quick styling</li>
          <li>Combine utilities for complex layouts</li>
          <li>Consider responsive variants</li>
          <li>Keep specificity in mind</li>
          <li>Use semantic classes for components</li>
          <li>Document custom utility extensions</li>
          <li>Maintain consistent spacing</li>
          <li>Use color utilities systematically</li>
          <li>Consider accessibility implications</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Utilities; 