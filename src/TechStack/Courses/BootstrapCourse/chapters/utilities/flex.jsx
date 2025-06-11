import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Flex = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Flex Utilities in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Enable Flex</h2>
        <div className="mb-3">
          <div className="d-flex p-2 border mb-2">I'm a flexbox container!</div>
          <div className="d-inline-flex p-2 border">I'm an inline flexbox container!</div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="d-flex p-2">I'm a flexbox container!</div>
<div class="d-inline-flex p-2">I'm an inline flexbox container!</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Direction</h2>
        <div className="mb-3">
          <div className="d-flex flex-row border p-2 mb-2">
            <div className="p-2 border">Flex item 1</div>
            <div className="p-2 border">Flex item 2</div>
            <div className="p-2 border">Flex item 3</div>
          </div>
          <div className="d-flex flex-row-reverse border p-2 mb-2">
            <div className="p-2 border">Flex item 1</div>
            <div className="p-2 border">Flex item 2</div>
            <div className="p-2 border">Flex item 3</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="d-flex flex-row">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>

<div class="d-flex flex-row-reverse">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Justify Content</h2>
        <div className="mb-3">
          <div className="d-flex justify-content-start border p-2 mb-2">
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
          </div>
          <div className="d-flex justify-content-center border p-2 mb-2">
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
          </div>
          <div className="d-flex justify-content-end border p-2 mb-2">
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
          </div>
          <div className="d-flex justify-content-between border p-2">
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-between">...</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Align Items</h2>
        <div className="mb-3">
          <div className="d-flex align-items-start border" style={{height: '100px'}}>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
          </div>
          <div className="d-flex align-items-center border mt-2" style={{height: '100px'}}>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
            <div className="p-2 border">Flex item</div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-center">...</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Flex; 