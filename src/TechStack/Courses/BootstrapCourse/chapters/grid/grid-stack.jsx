import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridStack = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Grid Stack</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vertical Stacking</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="vstack gap-3">
  <div class="p-2 bg-light border">First item</div>
  <div class="p-2 bg-light border">Second item</div>
  <div class="p-2 bg-light border">Third item</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Horizontal Stacking</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="hstack gap-3">
  <div class="p-2 bg-light border">First item</div>
  <div class="p-2 bg-light border">Second item</div>
  <div class="p-2 bg-light border">Third item</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stack with Justify Content</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Center aligned -->
<div class="hstack gap-3 justify-content-center">
  <div class="p-2 bg-light border">First</div>
  <div class="p-2 bg-light border">Second</div>
</div>

<!-- Space between -->
<div class="hstack gap-3 justify-content-between">
  <div class="p-2 bg-light border">First</div>
  <div class="p-2 bg-light border">Second</div>
</div>

<!-- Space around -->
<div class="hstack gap-3 justify-content-around">
  <div class="p-2 bg-light border">First</div>
  <div class="p-2 bg-light border">Second</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stack with Dividers</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="hstack gap-3">
  <div class="p-2 bg-light border">First</div>
  <div class="vr"></div>
  <div class="p-2 bg-light border">Second</div>
  <div class="vr"></div>
  <div class="p-2 bg-light border">Third</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Stacks</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Stack vertical on mobile, horizontal on desktop -->
<div class="d-flex flex-column flex-md-row gap-3">
  <div class="p-2 bg-light border">First</div>
  <div class="p-2 bg-light border">Second</div>
  <div class="p-2 bg-light border">Third</div>
</div>

<!-- With alignment -->
<div class="d-flex flex-column flex-md-row gap-3 align-items-center">
  <div class="p-2 bg-light border">First</div>
  <div class="p-2 bg-light border">Second</div>
  <div class="p-2 bg-light border">Third</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stack with Forms</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="vstack gap-3">
  <div class="form-floating">
    <input type="email" class="form-control" id="email" placeholder="Email">
    <label for="email">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="password" placeholder="Password">
    <label for="password">Password</label>
  </div>
  <button class="btn btn-primary">Sign in</button>
</div>

<!-- Horizontal form layout -->
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here...">
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reset</button>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use vstack for vertical layouts</li>
          <li>Use hstack for horizontal layouts</li>
          <li>Add gap utilities for spacing</li>
          <li>Consider responsive behavior</li>
          <li>Use dividers when needed for visual separation</li>
          <li>Combine with other flex utilities for complex layouts</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridStack; 