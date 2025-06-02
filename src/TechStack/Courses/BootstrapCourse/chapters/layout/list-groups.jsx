import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ListGroups = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap List Groups</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic List Group</h2>
        <p className="text-gray-600 mb-4">
          The most basic list group is an unordered list with list items and the proper classes.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Active and Disabled Items</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">An active item</li>
            <li className="list-group-item">A regular item</li>
            <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A regular item</li>
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
</ul>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Links and Buttons</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
              The current link item
            </a>
            <a href="#" className="list-group-item list-group-item-action">A second link item</a>
            <a href="#" className="list-group-item list-group-item-action">A third link item</a>
            <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
            <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <!-- More items... -->
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Flush List Groups</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <!-- More items... -->
</ul>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Numbered List Groups</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">A list item</li>
            <li className="list-group-item">A list item</li>
            <li className="list-group-item">A list item</li>
          </ol>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contextual Classes</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-group">
            <li className="list-group-item">A simple default list group item</li>
            <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
            <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
            <li className="list-group-item list-group-item-success">A simple success list group item</li>
            <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
            <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
            <li className="list-group-item list-group-item-info">A simple info list group item</li>
            <li className="list-group-item list-group-item-light">A simple light list group item</li>
            <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <!-- More items... -->
</ul>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">With Badges</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A second list item
              <span className="badge bg-primary rounded-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A third list item
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <!-- More items... -->
</ul>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Content</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
</div>`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../../components/badges"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Badges
        </Link>
        <Link
          to="../cards"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Cards →
        </Link>
      </div>
    </motion.div>
  );
};

export default ListGroups; 