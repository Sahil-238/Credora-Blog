import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Select = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Select</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Select</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizing</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Large select -->
<select class="form-select form-select-lg mb-3">
  <option selected>Large select</option>
  <option value="1">One</option>
</select>

<!-- Default select -->
<select class="form-select mb-3">
  <option selected>Default select</option>
  <option value="1">One</option>
</select>

<!-- Small select -->
<select class="form-select form-select-sm">
  <option selected>Small select</option>
  <option value="1">One</option>
</select>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multiple Select</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<select class="form-select" multiple aria-label="Multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- With size attribute -->
<select class="form-select" size="3" aria-label="Size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Disabled select -->
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Disabled option -->
<select class="form-select" aria-label="Select with disabled option">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2" disabled>Two (disabled)</option>
  <option value="3">Three</option>
</select>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Validation</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<select class="form-select is-valid" required>
  <option value="">Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select is-invalid" required>
  <option value="">Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<div class="invalid-feedback">
  Please select a valid option.
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always include a default option with empty value</li>
          <li>Use appropriate aria-label for accessibility</li>
          <li>Group related options using optgroup</li>
          <li>Provide clear, descriptive option text</li>
          <li>Consider using form-floating for floating labels</li>
          <li>Include validation feedback when necessary</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Select; 