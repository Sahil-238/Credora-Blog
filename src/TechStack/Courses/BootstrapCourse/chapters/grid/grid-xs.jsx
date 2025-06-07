import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridXS = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Extra Small Grid (xs) in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic XS Grid</h2>
        <p className="mb-4">Extra small grid columns are applied by default and have no breakpoint (no media query). They apply from 0px up.</p>
        <div className="container">
          <div className="row mb-3">
            <div className="col-6 border p-2">col-6</div>
            <div className="col-6 border p-2">col-6</div>
          </div>
          <div className="row mb-3">
            <div className="col-4 border p-2">col-4</div>
            <div className="col-4 border p-2">col-4</div>
            <div className="col-4 border p-2">col-4</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="container">
  <div class="row">
    <div class="col-6">col-6</div>
    <div class="col-6">col-6</div>
  </div>
  <div class="row">
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Auto-layout Columns</h2>
        <div className="container">
          <div className="row mb-3">
            <div className="col border p-2">col (auto)</div>
            <div className="col border p-2">col (auto)</div>
          </div>
          <div className="row mb-3">
            <div className="col border p-2">col (auto)</div>
            <div className="col-6 border p-2">col-6</div>
            <div className="col border p-2">col (auto)</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="container">
  <div class="row">
    <div class="col">col (auto)</div>
    <div class="col">col (auto)</div>
  </div>
  <div class="row">
    <div class="col">col (auto)</div>
    <div class="col-6">col-6</div>
    <div class="col">col (auto)</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Offset Columns</h2>
        <div className="container">
          <div className="row mb-3">
            <div className="col-4 border p-2">col-4</div>
            <div className="col-4 offset-4 border p-2">col-4 offset-4</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 offset-3 border p-2">col-3 offset-3</div>
            <div className="col-3 offset-3 border p-2">col-3 offset-3</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="container">
  <div class="row">
    <div class="col-4">col-4</div>
    <div class="col-4 offset-4">col-4 offset-4</div>
  </div>
  <div class="row">
    <div class="col-3 offset-3">col-3 offset-3</div>
    <div class="col-3 offset-3">col-3 offset-3</div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridXS; 