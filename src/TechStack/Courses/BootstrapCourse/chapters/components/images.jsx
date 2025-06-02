import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Images = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Images</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Images</h2>
        <p className="text-gray-600 mb-4">
          Images in Bootstrap can be made responsive with <code className="bg-gray-100 px-2 py-1 rounded">.img-fluid</code>.
          This applies <code className="bg-gray-100 px-2 py-1 rounded">max-width: 100%</code> and 
          <code className="bg-gray-100 px-2 py-1 rounded">height: auto</code> to the image.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <img 
              src="https://via.placeholder.com/800x400" 
              className="img-fluid rounded" 
              alt="Responsive image"
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<img src="..." class="img-fluid" alt="Responsive image">`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Image Thumbnails</h2>
        <p className="text-gray-600 mb-4">
          Add <code className="bg-gray-100 px-2 py-1 rounded">.img-thumbnail</code> to give an image a 
          rounded border appearance.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img 
              src="https://via.placeholder.com/200" 
              className="img-thumbnail" 
              alt="Thumbnail"
            />
            <img 
              src="https://via.placeholder.com/200" 
              className="img-thumbnail" 
              alt="Thumbnail"
            />
            <img 
              src="https://via.placeholder.com/200" 
              className="img-thumbnail" 
              alt="Thumbnail"
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<img src="..." class="img-thumbnail" alt="Thumbnail">`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Aligning Images</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Using Utilities</h3>
            <p className="text-gray-600 mb-4">
              Align images with float utilities or text alignment classes.
            </p>
            <div className="space-y-4">
              <div>
                <img 
                  src="https://via.placeholder.com/200" 
                  className="float-start rounded me-3" 
                  alt="Float start"
                />
                <p>
                  This is some text that wraps around the image that has been floated to the start (left).
                  The image has margin on the end (right) side to create space between the image and text.
                </p>
              </div>
              <div className="clearfix"></div>
              <div>
                <img 
                  src="https://via.placeholder.com/200" 
                  className="float-end rounded ms-3" 
                  alt="Float end"
                />
                <p>
                  This is some text that wraps around the image that has been floated to the end (right).
                  The image has margin on the start (left) side to create space between the image and text.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
              {`<!-- Float start -->
<img src="..." class="float-start" alt="...">

<!-- Float end -->
<img src="..." class="float-end" alt="...">

<!-- Center -->
<img src="..." class="d-block mx-auto" alt="...">`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Picture Element</h3>
            <p className="text-gray-600 mb-4">
              Use the <code className="bg-gray-100 px-2 py-1 rounded">&lt;picture&gt;</code> element 
              for more flexibility in specifying image resources.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
              {`<picture>
  <source srcset="..." media="(min-width: 800px)">
  <source srcset="..." media="(min-width: 400px)">
  <img src="..." class="img-fluid" alt="...">
</picture>`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Image Shapes</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <img 
                src="https://via.placeholder.com/200" 
                className="rounded" 
                alt="Rounded"
              />
              <p className="text-center mt-2">.rounded</p>
            </div>
            <div>
              <img 
                src="https://via.placeholder.com/200" 
                className="rounded-circle" 
                alt="Circle"
              />
              <p className="text-center mt-2">.rounded-circle</p>
            </div>
            <div>
              <img 
                src="https://via.placeholder.com/200" 
                className="rounded-pill" 
                alt="Pill"
              />
              <p className="text-center mt-2">.rounded-pill</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<!-- Rounded corners -->
<img src="..." class="rounded" alt="...">

<!-- Circle -->
<img src="..." class="rounded-circle" alt="...">

<!-- Pill shape -->
<img src="..." class="rounded-pill" alt="...">`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Figures</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <figure className="figure">
            <img 
              src="https://via.placeholder.com/400x300" 
              className="figure-img img-fluid rounded" 
              alt="Figure"
            />
            <figcaption className="figure-caption text-center">
              A caption for the above image.
            </figcaption>
          </figure>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">
    A caption for the above image.
  </figcaption>
</figure>`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../tables"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Tables
        </Link>
        <Link
          to="../jumbotron"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Jumbotron →
        </Link>
      </div>
    </motion.div>
  );
};

export default Images; 