import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const InputGroups = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Input Groups in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Input Groups</h2>
        <div className="mb-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Username" 
              aria-label="Username" 
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Recipient's username" 
              aria-label="Recipient's username" 
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">@example.com</span>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizing</h2>
        <div className="mb-3">
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">Small</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Default</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-lg">
            <span className="input-group-text">Large</span>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="input-group input-group-sm">
  <span class="input-group-text">Small</span>
  <input type="text" class="form-control">
</div>

<div class="input-group">
  <span class="input-group-text">Default</span>
  <input type="text" class="form-control">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text">Large</span>
  <input type="text" class="form-control">
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multiple Inputs</h2>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">First and last name</span>
            <input type="text" className="form-control" placeholder="First name" />
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" class="form-control" placeholder="First name">
  <input type="text" class="form-control" placeholder="Last name">
</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default InputGroups; 