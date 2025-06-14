import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Cards</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Card</h2>
        <p className="text-gray-600 mb-4">
          Cards are built with minimal markup but require some structure. They're containers that include 
          options for headers, footers, content, and more.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content Types</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                  2 days ago
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<!-- Card with header and footer -->
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>

<!-- Card with subtitle -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text...</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sizing and Text Alignment</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div className="card text-end">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<!-- Centered text -->
<div class="card text-center">
  <div class="card-body">...</div>
</div>

<!-- Right-aligned text -->
<div class="card text-end">
  <div class="card-body">...</div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Navigation</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="true" href="#">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">...</div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Card Groups</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="card-group">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card...</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <!-- More cards... -->
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Card Grid</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card...</p>
      </div>
    </div>
  </div>
  <!-- More columns... -->
</div>`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../list-groups"
          className="text-blue-600 hover:text-blue-800"
        >
          ← List Groups
        </Link>
        <Link
          to="../dropdowns"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Dropdowns →
        </Link>
      </div>
    </motion.div>
  );
};

export default Cards; 