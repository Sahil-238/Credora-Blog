import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Spinners = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Spinners in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Border Spinner</h2>
        <div className="mb-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="mb-4">
          <div className="spinner-border text-primary me-2" role="status"></div>
          <div className="spinner-border text-secondary me-2" role="status"></div>
          <div className="spinner-border text-success me-2" role="status"></div>
          <div className="spinner-border text-danger me-2" role="status"></div>
          <div className="spinner-border text-warning me-2" role="status"></div>
          <div className="spinner-border text-info me-2" role="status"></div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="spinner-border text-primary" role="status"></div>
<div class="spinner-border text-secondary" role="status"></div>
<div class="spinner-border text-success" role="status"></div>
<div class="spinner-border text-danger" role="status"></div>
<div class="spinner-border text-warning" role="status"></div>
<div class="spinner-border text-info" role="status"></div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Growing Spinner</h2>
        <div className="mb-4">
          <div className="spinner-grow me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-primary me-2" role="status"></div>
          <div className="spinner-grow text-secondary me-2" role="status"></div>
          <div className="spinner-grow text-success me-2" role="status"></div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-primary" role="status"></div>
<div class="spinner-grow text-secondary" role="status"></div>
<div class="spinner-grow text-success" role="status"></div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Size</h2>
        <div className="mb-4">
          <div className="spinner-border spinner-border-sm me-2" role="status"></div>
          <div className="spinner-grow spinner-grow-sm me-2" role="status"></div>
          <div className="spinner-border me-2" style={{width: '3rem', height: '3rem'}} role="status"></div>
          <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status"></div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<!-- Small spinner -->
<div class="spinner-border spinner-border-sm" role="status"></div>
<div class="spinner-grow spinner-grow-sm" role="status"></div>

<!-- Large spinner -->
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"></div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Spinners;