import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Tables</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Table</h2>
        <p className="text-gray-600 mb-4">
          Add the <code className="bg-gray-100 px-2 py-1 rounded">.table</code> class to any 
          <code className="bg-gray-100 px-2 py-1 rounded">&lt;table&gt;</code> element to apply 
          Bootstrap's default table styling.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <!-- More rows... -->
  </tbody>
</table>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table Variants</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Striped Rows</h3>
            <div className="overflow-x-auto">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Add <code className="bg-gray-100 px-2 py-1 rounded">.table-striped</code> for zebra-striped rows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Bordered Table</h3>
            <div className="overflow-x-auto">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Add <code className="bg-gray-100 px-2 py-1 rounded">.table-bordered</code> for borders on all sides.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Hoverable Rows</h3>
            <div className="overflow-x-auto">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Add <code className="bg-gray-100 px-2 py-1 rounded">.table-hover</code> for hover state on rows.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table Colors</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Class</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-primary">
                  <td>.table-primary</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-secondary">
                  <td>.table-secondary</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-success">
                  <td>.table-success</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-danger">
                  <td>.table-danger</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-warning">
                  <td>.table-warning</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-info">
                  <td>.table-info</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-light">
                  <td>.table-light</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr className="table-dark">
                  <td>.table-dark</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Tables</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Make tables responsive by wrapping them in <code className="bg-gray-100 px-2 py-1 rounded">.table-responsive</code>
            or add breakpoints like <code className="bg-gray-100 px-2 py-1 rounded">.table-responsive-sm</code>.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<!-- Responsive wrapper -->
<div class="table-responsive">
  <table class="table">
    <!-- Table content -->
  </table>
</div>

<!-- With breakpoint -->
<div class="table-responsive-md">
  <table class="table">
    <!-- Table content -->
  </table>
</div>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table Sizing</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Small Table</h3>
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Add <code className="bg-gray-100 px-2 py-1 rounded">.table-sm</code> for more compact tables.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table Head Options</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Use <code className="bg-gray-100 px-2 py-1 rounded">.table-light</code> or 
              <code className="bg-gray-100 px-2 py-1 rounded">.table-dark</code> on 
              <code className="bg-gray-100 px-2 py-1 rounded">&lt;thead&gt;</code>.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../../basics/colors"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Colors
        </Link>
        <Link
          to="../images"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Images →
        </Link>
      </div>
    </motion.div>
  );
};

export default Tables; 