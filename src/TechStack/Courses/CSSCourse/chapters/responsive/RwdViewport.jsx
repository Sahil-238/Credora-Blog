import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDViewport = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Responsive Web Design - Viewport</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is the Viewport?</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </pre>
          </div>
          <p className="text-gray-600">This meta tag should be included in all your web pages.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Viewport Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">width=device-width</h3>
            <p className="text-gray-600">Sets the width of the page to follow the screen-width of the device</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mt-4">
              <pre className="whitespace-pre-wrap">
{`<meta name="viewport" content="width=device-width">`}
              </pre>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">initial-scale=1.0</h3>
            <p className="text-gray-600">Sets the initial zoom level when the page is first loaded</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mt-4">
              <pre className="whitespace-pre-wrap">
{`<meta name="viewport" content="initial-scale=1.0">`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Additional Viewport Settings</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Value</th>
                  <th className="p-3 border">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-mono">maximum-scale=1.0</td>
                  <td className="p-3 border">Prevents users from zooming the page</td>
                </tr>
                <tr>
                  <td className="p-3 border font-mono">user-scalable=no</td>
                  <td className="p-3 border">Disables zooming capabilities</td>
                </tr>
                <tr>
                  <td className="p-3 border font-mono">height=device-height</td>
                  <td className="p-3 border">Sets the height of the page to device height</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`<!-- Example with multiple settings -->
<meta name="viewport" 
      content="width=device-width, 
               initial-scale=1.0, 
               maximum-scale=1.0, 
               user-scalable=no">`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Always include the viewport meta tag in your web pages</li>
          <li>Consider accessibility when using maximum-scale and user-scalable</li>
          <li>Test your pages across different devices and screen sizes</li>
          <li>Use relative width values (%, vw) instead of absolute values (px)</li>
          <li>Ensure content is readable without zooming</li>
          <li>Consider the impact of viewport settings on accessibility</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDViewport; 