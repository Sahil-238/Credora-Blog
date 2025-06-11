import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const ButtonGroups = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Button Groups in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Button Group</h2>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">Left</button>
          <button type="button" className="btn btn-primary">Middle</button>
          <button type="button" className="btn btn-primary">Right</button>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Button Toolbar</h2>
        <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-primary">1</button>
            <button type="button" className="btn btn-primary">2</button>
            <button type="button" className="btn btn-primary">3</button>
          </div>
          <div className="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" className="btn btn-secondary">4</button>
            <button type="button" className="btn btn-secondary">5</button>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
  </div>
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-secondary">4</button>
    <button type="button" class="btn btn-secondary">5</button>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizing</h2>
        <div className="mb-3">
          <div className="btn-group btn-group-lg mb-2" role="group">
            <button type="button" className="btn btn-primary">Large</button>
            <button type="button" className="btn btn-primary">Button</button>
          </div>
        </div>
        <div className="mb-3">
          <div className="btn-group mb-2" role="group">
            <button type="button" className="btn btn-primary">Default</button>
            <button type="button" className="btn btn-primary">Button</button>
          </div>
        </div>
        <div className="mb-3">
          <div className="btn-group btn-group-sm" role="group">
            <button type="button" className="btn btn-primary">Small</button>
            <button type="button" className="btn btn-primary">Button</button>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<!-- Large -->
<div class="btn-group btn-group-lg">...</div>

<!-- Default -->
<div class="btn-group">...</div>

<!-- Small -->
<div class="btn-group btn-group-sm">...</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default ButtonGroups;