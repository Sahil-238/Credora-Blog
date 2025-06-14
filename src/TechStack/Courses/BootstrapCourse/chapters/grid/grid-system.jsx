import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridSystem = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Grid System</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Grid</h2>
        <div className="container">
          <div className="row mb-3">
            <div className="col border p-2">Column</div>
            <div className="col border p-2">Column</div>
            <div className="col border p-2">Column</div>
          </div>
          <div className="row mb-3">
            <div className="col-6 border p-2">col-6</div>
            <div className="col-6 border p-2">col-6</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
  <div class="row">
    <div class="col-6">col-6</div>
    <div class="col-6">col-6</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Grid</h2>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 col-md-6 col-lg-4 border p-2">
              col-12 col-md-6 col-lg-4
            </div>
            <div className="col-12 col-md-6 col-lg-4 border p-2">
              col-12 col-md-6 col-lg-4
            </div>
            <div className="col-12 col-md-6 col-lg-4 border p-2">
              col-12 col-md-6 col-lg-4
            </div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">col-12 col-md-6 col-lg-4</div>
    <div class="col-12 col-md-6 col-lg-4">col-12 col-md-6 col-lg-4</div>
    <div class="col-12 col-md-6 col-lg-4">col-12 col-md-6 col-lg-4</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Grid with Gutters</h2>
        <div className="container">
          <div className="row g-3 mb-3">
            <div className="col-6">
              <div className="border p-2">Column with gutter</div>
            </div>
            <div className="col-6">
              <div className="border p-2">Column with gutter</div>
            </div>
            <div className="col-6">
              <div className="border p-2">Column with gutter</div>
            </div>
            <div className="col-6">
              <div className="border p-2">Column with gutter</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="container">
  <div class="row g-3">
    <div class="col-6">
      <div>Column with gutter</div>
    </div>
    <div class="col-6">
      <div>Column with gutter</div>
    </div>
    <div class="col-6">
      <div>Column with gutter</div>
    </div>
    <div class="col-6">
      <div>Column with gutter</div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridSystem; 