import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Alerts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Alerts</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Alerts</h2>
        <p className="text-gray-600 mb-4">
          Alerts are available for any length of text, as well as an optional close button. 
          Use the <code className="bg-gray-100 px-2 py-1 rounded">.alert</code> class along with contextual classes.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-3">
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert—check it out!
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert—check it out!
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert—check it out!
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>

<!-- More alerts... -->`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alerts with Additional Content</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="alert alert-success mb-4" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is going 
              to run a bit longer so that you can see how spacing within an alert works with this kind 
              of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message...</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities...</p>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dismissible Alerts</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`}
          </div>
          <p className="text-gray-600 mt-4">
            Add <code className="bg-gray-100 px-2 py-1 rounded">.alert-dismissible</code> and a close button 
            to create a dismissible alert. Note that you'll need Bootstrap's JavaScript to enable functionality.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alerts with Icons</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="alert alert-primary d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
              <use xlinkHref="#info-fill"/>
            </svg>
            <div>
              An example alert with an icon
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alert Links</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="alert alert-primary" role="alert">
            A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>.
</div>`}
          </div>
          <p className="text-gray-600 mt-4">
            Use <code className="bg-gray-100 px-2 py-1 rounded">.alert-link</code> to quickly provide matching 
            colored links within any alert.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use appropriate contextual classes to convey meaning</li>
            <li>Include the <code className="bg-gray-100 px-2 py-1 rounded">role="alert"</code> attribute for accessibility</li>
            <li>Keep alert messages clear and concise</li>
            <li>Consider using icons to enhance visual communication</li>
            <li>Use dismissible alerts for temporary messages</li>
            <li>Ensure sufficient color contrast for text readability</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../jumbotron"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Jumbotron
        </Link>
        <Link
          to="../buttons"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Buttons →
        </Link>
      </div>
    </motion.div>
  );
};

export default Alerts; 