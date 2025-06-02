import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Buttons</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Buttons</h2>
        <p className="text-gray-600 mb-4">
          Bootstrap includes several predefined button styles, each serving its own semantic purpose.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-2 space-y-2">
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<!-- More buttons... -->`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Tags</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-2">
            <a className="btn btn-primary" href="#" role="button">Link</a>
            <button className="btn btn-primary" type="submit">Button</button>
            <input className="btn btn-primary" type="button" value="Input" />
            <input className="btn btn-primary" type="submit" value="Submit" />
            <input className="btn btn-primary" type="reset" value="Reset" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Outline Buttons</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-2 space-y-2">
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <button type="button" className="btn btn-outline-secondary">Secondary</button>
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-danger">Danger</button>
            <button type="button" className="btn btn-outline-warning">Warning</button>
            <button type="button" className="btn btn-outline-info">Info</button>
            <button type="button" className="btn btn-outline-light">Light</button>
            <button type="button" className="btn btn-outline-dark">Dark</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<!-- More outline buttons... -->`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Sizes</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <button type="button" className="btn btn-primary btn-lg me-2">Large button</button>
              <button type="button" className="btn btn-secondary btn-lg">Large button</button>
            </div>
            <div>
              <button type="button" className="btn btn-primary me-2">Default button</button>
              <button type="button" className="btn btn-secondary">Default button</button>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-sm me-2">Small button</button>
              <button type="button" className="btn btn-secondary btn-sm">Small button</button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<!-- Large buttons -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>

<!-- Small buttons -->
<button type="button" class="btn btn-primary btn-sm">Small button</button>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button States</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <button type="button" className="btn btn-primary me-2">Normal</button>
              <button type="button" className="btn btn-primary active me-2">Active</button>
              <button type="button" className="btn btn-primary" disabled>Disabled</button>
            </div>
            <div>
              <a href="#" className="btn btn-primary me-2" role="button">Normal Link</a>
              <a href="#" className="btn btn-primary active me-2" role="button">Active Link</a>
              <a href="#" className="btn btn-primary disabled" role="button" aria-disabled="true">Disabled Link</a>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<!-- Active state -->
<button type="button" class="btn btn-primary active">Active</button>

<!-- Disabled state -->
<button type="button" class="btn btn-primary" disabled>Disabled</button>

<!-- Disabled link -->
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Disabled Link</a>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Groups</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Left</button>
              <button type="button" className="btn btn-primary">Middle</button>
              <button type="button" className="btn btn-primary">Right</button>
            </div>
            <div>
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-primary">1</button>
                <button type="button" className="btn btn-primary">2</button>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Dropdown
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Block Buttons</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">Block button</button>
            <button className="btn btn-primary" type="button">Block button</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Block button</button>
  <button class="btn btn-primary" type="button">Block button</button>
</div>`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../alerts"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Alerts
        </Link>
        <Link
          to="../badges"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Badges →
        </Link>
      </div>
    </motion.div>
  );
};

export default Buttons; 