import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Colors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Colors</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Theme Colors</h2>
        <p className="text-gray-600 mb-4">
          Bootstrap comes with a default color palette that can be used for various components and utilities.
          These colors convey meaning to users and can be customized using CSS variables.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Basic Colors</h3>
            <div className="space-y-2">
              <div className="p-3 bg-primary text-white rounded">.bg-primary</div>
              <div className="p-3 bg-secondary text-white rounded">.bg-secondary</div>
              <div className="p-3 bg-success text-white rounded">.bg-success</div>
              <div className="p-3 bg-danger text-white rounded">.bg-danger</div>
              <div className="p-3 bg-warning text-dark rounded">.bg-warning</div>
              <div className="p-3 bg-info text-dark rounded">.bg-info</div>
              <div className="p-3 bg-light text-dark rounded">.bg-light</div>
              <div className="p-3 bg-dark text-white rounded">.bg-dark</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Usage Example</h3>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
              {`<!-- Background color -->
<div class="bg-primary">Primary background</div>

<!-- Text color -->
<p class="text-primary">Primary text</p>

<!-- Border color -->
<div class="border border-primary">Primary border</div>`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Colors</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-2">
            <p className="text-primary">.text-primary</p>
            <p className="text-secondary">.text-secondary</p>
            <p className="text-success">.text-success</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-warning bg-dark">.text-warning</p>
            <p className="text-info bg-dark">.text-info</p>
            <p className="text-light bg-dark">.text-light</p>
            <p className="text-dark">.text-dark</p>
            <p className="text-body">.text-body</p>
            <p className="text-muted">.text-muted</p>
            <p className="text-white bg-dark">.text-white</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Background Colors</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Subtle Backgrounds</h3>
            <div className="space-y-2">
              <div className="p-3 bg-primary-subtle rounded">.bg-primary-subtle</div>
              <div className="p-3 bg-secondary-subtle rounded">.bg-secondary-subtle</div>
              <div className="p-3 bg-success-subtle rounded">.bg-success-subtle</div>
              <div className="p-3 bg-danger-subtle rounded">.bg-danger-subtle</div>
              <div className="p-3 bg-warning-subtle rounded">.bg-warning-subtle</div>
              <div className="p-3 bg-info-subtle rounded">.bg-info-subtle</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Gradient Backgrounds</h3>
            <div className="space-y-2">
              <div className="p-3 bg-gradient text-white rounded">.bg-gradient</div>
              <div className="p-3 bg-primary bg-gradient text-white rounded">.bg-primary.bg-gradient</div>
              <div className="p-3 bg-success bg-gradient text-white rounded">.bg-success.bg-gradient</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Border Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
              <div className="p-3 border border-primary rounded">.border-primary</div>
              <div className="p-3 border border-secondary rounded">.border-secondary</div>
              <div className="p-3 border border-success rounded">.border-success</div>
              <div className="p-3 border border-danger rounded">.border-danger</div>
              <div className="p-3 border border-warning rounded">.border-warning</div>
              <div className="p-3 border border-info rounded">.border-info</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Subtle Borders</h3>
            <div className="space-y-2">
              <div className="p-3 border border-primary-subtle rounded">.border-primary-subtle</div>
              <div className="p-3 border border-success-subtle rounded">.border-success-subtle</div>
              <div className="p-3 border border-danger-subtle rounded">.border-danger-subtle</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Color Variables</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Bootstrap 5 uses CSS custom properties (variables) for its color system:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
}`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../typography"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Typography
        </Link>
        <Link
          to="../../components/tables"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Tables →
        </Link>
      </div>
    </motion.div>
  );
};

export default Colors; 