import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Badges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Badges</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Badges</h2>
        <p className="text-gray-600 mb-4">
          Badges scale to match the size of the immediate parent element by using relative font sizing and em units.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h1>Example heading <span className="badge bg-secondary">New</span></h1>
              <h2>Example heading <span className="badge bg-secondary">New</span></h2>
              <h3>Example heading <span className="badge bg-secondary">New</span></h3>
              <h4>Example heading <span className="badge bg-secondary">New</span></h4>
              <h5>Example heading <span className="badge bg-secondary">New</span></h5>
              <h6>Example heading <span className="badge bg-secondary">New</span></h6>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Background Colors</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-2">
            <span className="badge bg-primary">Primary</span>
            <span className="badge bg-secondary">Secondary</span>
            <span className="badge bg-success">Success</span>
            <span className="badge bg-danger">Danger</span>
            <span className="badge bg-warning text-dark">Warning</span>
            <span className="badge bg-info text-dark">Info</span>
            <span className="badge bg-light text-dark">Light</span>
            <span className="badge bg-dark">Dark</span>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<!-- More badges... -->`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pill Badges</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-2">
            <span className="badge rounded-pill bg-primary">Primary</span>
            <span className="badge rounded-pill bg-secondary">Secondary</span>
            <span className="badge rounded-pill bg-success">Success</span>
            <span className="badge rounded-pill bg-danger">Danger</span>
            <span className="badge rounded-pill bg-warning text-dark">Warning</span>
            <span className="badge rounded-pill bg-info text-dark">Info</span>
            <span className="badge rounded-pill bg-light text-dark">Light</span>
            <span className="badge rounded-pill bg-dark">Dark</span>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<!-- More pill badges... -->`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Badges</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-2">
            <button type="button" className="btn btn-primary">
              Notifications <span className="badge bg-secondary">4</span>
            </button>
            <button type="button" className="btn btn-success">
              Messages <span className="badge bg-white text-success">7</span>
            </button>
            <button type="button" className="btn btn-danger">
              Updates <span className="badge bg-light text-danger">9</span>
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Positioned Badges</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-x-4">
            <button type="button" className="btn btn-primary position-relative">
              Inbox
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>

            <button type="button" className="btn btn-primary position-relative">
              Profile
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Badge in Headings</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="d-flex align-items-center">
              <h4 className="me-2">Heading with counter</h4>
              <span className="badge bg-primary">5</span>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="me-2">Tasks</h5>
              <span className="badge bg-success">Done</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="d-flex align-items-center">
  <h4 class="me-2">Heading with counter</h4>
  <span class="badge bg-primary">5</span>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use badges to highlight new, unread, or important items</li>
            <li>Choose appropriate colors to convey meaning</li>
            <li>Keep badge text short and concise</li>
            <li>Consider using pill badges for numbers or short text</li>
            <li>Ensure sufficient color contrast for accessibility</li>
            <li>Add <code className="bg-gray-100 px-2 py-1 rounded">aria-label</code> for screen readers when needed</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../buttons"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Buttons
        </Link>
        <Link
          to="../../layout/list-groups"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: List Groups →
        </Link>
      </div>
    </motion.div>
  );
};

export default Badges; 