import React from 'react';
import { motion } from 'framer-motion';

const RwdIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to Responsive Web Design</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Responsive Web Design?</h2>
        <p className="text-gray-600 mb-4">
          Responsive Web Design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
          It's about creating websites that work seamlessly across desktop computers, tablets, and mobile phones.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Principles:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Fluid Grids: Using relative width values instead of fixed pixel widths</li>
            <li>Flexible Images: Images that scale within their containing elements</li>
            <li>Media Queries: CSS rules that apply different styles for different screen sizes</li>
            <li>Mobile-First Approach: Designing for mobile devices first, then enhancing for larger screens</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Setup</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Viewport Meta Tag</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </pre>
          </div>
          <p className="text-gray-600">
            The viewport meta tag ensures proper rendering on mobile devices and controls the viewport's size and scaling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Responsive CSS</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Basic responsive container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Responsive text */
body {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Breakpoints</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Width</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mobile</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">320px - 480px</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Small screen mobile devices</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tablet</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">481px - 768px</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">iPads, tablets</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Laptop</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">769px - 1024px</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Small screens, laptops</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Desktop</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1025px - 1200px</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Desktops, large screens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Benefits of Responsive Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">User Experience</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Better accessibility across devices</li>
              <li>Improved readability and navigation</li>
              <li>Consistent experience on all screens</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Business Benefits</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Increased mobile traffic</li>
              <li>Better SEO performance</li>
              <li>Lower maintenance costs</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-2">
          <li>Always include the viewport meta tag</li>
          <li>Use relative units (%, em, rem) instead of fixed pixels</li>
          <li>Test on real devices when possible</li>
          <li>Consider touch targets on mobile devices</li>
          <li>Optimize images for different screen sizes</li>
          <li>Keep performance in mind for mobile users</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default RwdIntro; 