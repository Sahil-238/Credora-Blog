import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDFrameworks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Frameworks for Responsive Design</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Popular CSS Frameworks</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            CSS frameworks provide pre-built components and utilities for creating responsive websites
            quickly and consistently. Here are some popular options and their key features.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Tailwind CSS</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
                <pre className="whitespace-pre-wrap">
{`<!-- Tailwind responsive classes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div class="p-4 text-sm md:text-base lg:text-lg">
    Responsive content
  </div>
</div>`}</pre>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Utility-first approach</li>
                <li>Highly customizable</li>
                <li>Built-in responsive design system</li>
                <li>Modern and growing ecosystem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Bootstrap</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
                <pre className="whitespace-pre-wrap">
{`<!-- Bootstrap grid system -->
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      Responsive column
    </div>
  </div>
</div>`}</pre>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Comprehensive component library</li>
                <li>12-column grid system</li>
                <li>Extensive documentation</li>
                <li>Large community support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Foundation</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
                <pre className="whitespace-pre-wrap">
{`<!-- Foundation grid -->
<div class="grid-x grid-margin-x">
  <div class="cell small-12 medium-6 large-4">
    Responsive cell
  </div>
</div>`}</pre>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enterprise-level framework</li>
                <li>Flexible grid system</li>
                <li>Advanced customization options</li>
                <li>Semantic structure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Framework Features</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Grid Systems</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
                <pre className="whitespace-pre-wrap">
{`/* Tailwind Grid */
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 md:col-span-6">
    Content
  </div>
</div>

/* Bootstrap Grid */
<div class="row">
  <div class="col-12 col-md-6">
    Content
  </div>
</div>

/* CSS Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Breakpoint Systems</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
                <pre className="whitespace-pre-wrap">
{`/* Tailwind default breakpoints */
sm: '640px'   // @media (min-width: 640px)
md: '768px'   // @media (min-width: 768px)
lg: '1024px'  // @media (min-width: 1024px)
xl: '1280px'  // @media (min-width: 1280px)
2xl: '1536px' // @media (min-width: 1536px)

/* Bootstrap breakpoints */
xs: 0,      // @media (min-width: 0)
sm: 576px,  // @media (min-width: 576px)
md: 768px,  // @media (min-width: 768px)
lg: 992px,  // @media (min-width: 992px)
xl: 1200px  // @media (min-width: 1200px)`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Framework Selection</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Framework</th>
                  <th className="p-3 border">Best For</th>
                  <th className="p-3 border">Learning Curve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Tailwind CSS</td>
                  <td className="p-3 border">Custom designs, modern applications</td>
                  <td className="p-3 border">Medium</td>
                </tr>
                <tr>
                  <td className="p-3 border">Bootstrap</td>
                  <td className="p-3 border">Rapid prototyping, traditional websites</td>
                  <td className="p-3 border">Low</td>
                </tr>
                <tr>
                  <td className="p-3 border">Foundation</td>
                  <td className="p-3 border">Enterprise applications, complex systems</td>
                  <td className="p-3 border">High</td>
                </tr>
                <tr>
                  <td className="p-3 border">Bulma</td>
                  <td className="p-3 border">Simple projects, clean designs</td>
                  <td className="p-3 border">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Choose frameworks based on project requirements</li>
          <li>Consider bundle size and performance impact</li>
          <li>Use framework features consistently</li>
          <li>Keep up with framework updates and best practices</li>
          <li>Customize framework defaults to match design needs</li>
          <li>Learn the underlying CSS principles</li>
          <li>Use framework documentation as reference</li>
          <li>Consider accessibility support in frameworks</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDFrameworks; 