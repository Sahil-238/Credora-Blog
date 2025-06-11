import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Range = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Range Input</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Range</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Min and Max</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">

<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="-5" max="5" step="0.5" id="customRange3">`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`.custom-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  appearance: none;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  appearance: none;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Range with Labels</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<div class="range">
  <label for="customRange4" class="form-label">Example range with labels</label>
  <div class="d-flex justify-content-between">
    <span>0</span>
    <span>25</span>
    <span>50</span>
    <span>75</span>
    <span>100</span>
  </div>
  <input type="range" class="form-range" min="0" max="100" step="25" id="customRange4">
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Range with Value Display</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<label for="customRange5" class="form-label">Range with value</label>
<div class="d-flex gap-2 align-items-center">
  <input type="range" class="form-range" id="customRange5">
  <span id="rangeValue">50</span>
</div>

<script>
const range = document.getElementById('customRange5');
const value = document.getElementById('rangeValue');
range.addEventListener('input', (e) => {
  value.textContent = e.target.value;
});
</script>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always include labels for better accessibility</li>
          <li>Use appropriate min, max, and step values</li>
          <li>Consider adding visual feedback for selected values</li>
          <li>Provide clear value indicators when needed</li>
          <li>Ensure sufficient touch target size on mobile</li>
          <li>Use consistent styling across your application</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Range; 