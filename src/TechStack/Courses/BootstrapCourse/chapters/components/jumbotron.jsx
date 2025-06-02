import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Jumbotron</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Jumbotron</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            While the <code className="bg-gray-100 px-2 py-1 rounded">.jumbotron</code> class was removed in Bootstrap 5, 
            you can still create jumbotron-style hero sections using Bootstrap's utility classes and components.
          </p>
          <div className="bg-light p-5 rounded-3 mb-4">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Custom Jumbotron</h1>
              <p className="col-md-8 fs-4">
                Using utility classes, you can recreate the same style as the previous Bootstrap 4 jumbotron.
                This example shows how to create a full-width hero section with custom padding and styling.
              </p>
              <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<div class="bg-light p-5 rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Custom Jumbotron</h1>
    <p class="col-md-8 fs-4">Using utility classes...</p>
    <button class="btn btn-primary btn-lg" type="button">Example button</button>
  </div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hero Section Variations</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Dark Background</h3>
            <div className="bg-dark text-white p-5 rounded-3 mb-4">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Dark Hero Section</h1>
                <p className="col-md-8 fs-4">
                  Create contrast with a dark background and light text.
                  Perfect for dramatic hero sections or feature highlights.
                </p>
                <button className="btn btn-outline-light btn-lg" type="button">Learn more</button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
              {`<div class="bg-dark text-white p-5 rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Dark Hero Section</h1>
    <p class="col-md-8 fs-4">Create contrast...</p>
    <button class="btn btn-outline-light btn-lg" type="button">Learn more</button>
  </div>
</div>`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">With Background Image</h3>
            <div 
              className="p-5 text-white rounded-3 mb-4"
              style={{
                backgroundImage: 'url(https://via.placeholder.com/1200x400)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Hero with Background</h1>
                <p className="col-md-8 fs-4">
                  Add visual interest with a background image.
                  Use an overlay to ensure text remains readable.
                </p>
                <button className="btn btn-light btn-lg" type="button">Get Started</button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
              {`<div class="p-5 text-white rounded-3" style="background-image: url('...');">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Hero with Background</h1>
    <p class="col-md-8 fs-4">Add visual interest...</p>
    <button class="btn btn-light btn-lg" type="button">Get Started</button>
  </div>
</div>`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Considerations</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            When creating hero sections, consider these responsive design tips:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use responsive text utilities (<code className="bg-gray-100 px-2 py-1 rounded">.display-*</code>) for headings</li>
            <li>Control text width with grid classes (<code className="bg-gray-100 px-2 py-1 rounded">.col-md-8</code>)</li>
            <li>Adjust padding with breakpoint-specific utilities (<code className="bg-gray-100 px-2 py-1 rounded">.py-*</code>)</li>
            <li>Consider text contrast with background images</li>
            <li>Test on various screen sizes</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">With Additional Content</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Hero with Features</h1>
              <p className="col-md-8 fs-4">
                Combine your hero section with additional content blocks to create more engaging layouts.
              </p>
              <hr className="my-4" />
              <div className="row g-4 py-4">
                <div className="col-md-4">
                  <h3>Feature One</h3>
                  <p>Some representative placeholder content for the feature.</p>
                </div>
                <div className="col-md-4">
                  <h3>Feature Two</h3>
                  <p>More placeholder content for another feature.</p>
                </div>
                <div className="col-md-4">
                  <h3>Feature Three</h3>
                  <p>Final piece of placeholder content for features.</p>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" type="button">Call to action</button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Hero with Features</h1>
    <p class="col-md-8 fs-4">Combine your hero section...</p>
    <hr class="my-4">
    <div class="row g-4 py-4">
      <div class="col-md-4">
        <h3>Feature One</h3>
        <p>Content...</p>
      </div>
      <!-- More features... -->
    </div>
    <button class="btn btn-primary btn-lg" type="button">Call to action</button>
  </div>
</div>`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../images"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Images
        </Link>
        <Link
          to="../alerts"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Alerts →
        </Link>
      </div>
    </motion.div>
  );
};

export default Jumbotron; 