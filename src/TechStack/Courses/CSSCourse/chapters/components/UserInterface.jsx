import React from 'react';
import { motion } from 'framer-motion';

const UserInterface = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS User Interface</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">UI Elements and Properties</h2>
        <div className="space-y-6">
          {/* Cursors */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Cursors</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.cursor-default { cursor: default; }
.cursor-pointer { cursor: pointer; }
.cursor-text { cursor: text; }
.cursor-move { cursor: move; }
.cursor-not-allowed { cursor: not-allowed; }
.cursor-grab { cursor: grab; }
.cursor-zoom-in { cursor: zoom-in; }`}
              </pre>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="cursor-default p-4 bg-gray-100 text-center rounded">Default</div>
              <div className="cursor-pointer p-4 bg-blue-100 text-center rounded">Pointer</div>
              <div className="cursor-text p-4 bg-green-100 text-center rounded">Text</div>
              <div className="cursor-move p-4 bg-yellow-100 text-center rounded">Move</div>
              <div className="cursor-not-allowed p-4 bg-red-100 text-center rounded">Not Allowed</div>
              <div className="cursor-grab p-4 bg-purple-100 text-center rounded">Grab</div>
              <div className="cursor-zoom-in p-4 bg-pink-100 text-center rounded">Zoom In</div>
              <div className="cursor-wait p-4 bg-indigo-100 text-center rounded">Wait</div>
            </div>
          </div>

          {/* Resizing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Resizing</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.resize-none { resize: none; }
.resize-y { resize: vertical; }
.resize-x { resize: horizontal; }
.resize { resize: both; }`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Vertical resize:</p>
                <textarea className="w-full p-2 border rounded resize-y h-24" placeholder="Try resizing vertically..."></textarea>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Both directions:</p>
                <textarea className="w-full p-2 border rounded resize h-24" placeholder="Try resizing in both directions..."></textarea>
              </div>
            </div>
          </div>

          {/* User Select */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">User Select</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.select-none { user-select: none; }
.select-text { user-select: text; }
.select-all { user-select: all; }
.select-auto { user-select: auto; }`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="select-none p-4 bg-gray-100 rounded">
                This text cannot be selected (select-none)
              </div>
              <div className="select-all p-4 bg-blue-100 rounded">
                Click once to select all this text (select-all)
              </div>
              <div className="select-text p-4 bg-green-100 rounded">
                This text can be selected normally (select-text)
              </div>
            </div>
          </div>

          {/* Outline */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Outline</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.outline-none { outline: none; }
.outline { outline: 2px solid; }
.outline-offset-2 { outline-offset: 2px; }
.focus-visible:outline { 
  outline: 2px solid currentColor; 
}`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Modern outline (using ring)
              </button>
              <button className="p-4 bg-purple-500 text-white rounded hover:bg-purple-600 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Focus-visible outline
              </button>
            </div>
          </div>

          {/* Pointer Events */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Pointer Events</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.pointer-events-none { pointer-events: none; }
.pointer-events-auto { pointer-events: auto; }`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-4 bg-gray-500 text-white rounded pointer-events-none opacity-50">
                Disabled (pointer-events-none)
              </button>
              <button className="p-4 bg-green-500 text-white rounded hover:bg-green-600">
                Enabled (pointer-events-auto)
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">UI Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use appropriate cursors to indicate interactivity</li>
          <li>Implement proper focus states for accessibility</li>
          <li>Consider touch targets for mobile devices</li>
          <li>Maintain consistent interactive behaviors</li>
          <li>Use pointer-events strategically</li>
          <li>Implement proper disabled states</li>
          <li>Consider user selection behavior</li>
          <li>Test interface on different devices</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default UserInterface; 