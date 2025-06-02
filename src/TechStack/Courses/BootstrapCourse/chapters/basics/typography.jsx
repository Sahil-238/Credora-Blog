import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Typography = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap Typography</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Default Settings</h2>
        <p className="text-gray-600 mb-4">
          Bootstrap sets basic global display, typography, and link styles. When more control is needed, 
          check out the textual utility classes.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Default font stack: Native system stack</li>
            <li>Base font size: 1rem (16px)</li>
            <li>Line height: 1.5</li>
            <li>Body color: #212529</li>
            <li>Body background: #fff</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Headings</h2>
        <p className="text-gray-600 mb-4">
          All HTML headings, from <code className="bg-gray-100 px-2 py-1 rounded">&lt;h1&gt;</code> to 
          <code className="bg-gray-100 px-2 py-1 rounded">&lt;h6&gt;</code>, are available:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h1 className="h1">h1. Bootstrap heading</h1>
          <h2 className="h2">h2. Bootstrap heading</h2>
          <h3 className="h3">h3. Bootstrap heading</h3>
          <h4 className="h4">h4. Bootstrap heading</h4>
          <h5 className="h5">h5. Bootstrap heading</h5>
          <h6 className="h6">h6. Bootstrap heading</h6>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
          {`<!-- Using HTML tags -->
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>

<!-- Using classes -->
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Display Headings</h2>
        <p className="text-gray-600 mb-4">
          Traditional heading elements are designed to work best in the meat of your page content. 
          When you need a heading to stand out, consider using a display heading:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h1 className="display-1">Display 1</h1>
          <h1 className="display-2">Display 2</h1>
          <h1 className="display-3">Display 3</h1>
          <h1 className="display-4">Display 4</h1>
          <h1 className="display-5">Display 5</h1>
          <h1 className="display-6">Display 6</h1>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lead & Alignment</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="lead mb-4">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
              {`<p class="lead">
  This is a lead paragraph.
</p>`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Text Alignment</h3>
            <p className="text-start mb-2">Left aligned text.</p>
            <p className="text-center mb-2">Center aligned text.</p>
            <p className="text-end">Right aligned text.</p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
              {`<p class="text-start">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-end">Right aligned text.</p>`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Decoration & Font Weight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Text Decoration</h3>
            <p className="text-decoration-underline mb-2">Underlined text</p>
            <p className="text-decoration-line-through mb-2">Strikethrough text</p>
            <p className="text-decoration-none">No decoration</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Font Weight & Italics</h3>
            <p className="fw-bold mb-2">Bold text</p>
            <p className="fw-bolder mb-2">Bolder weight text</p>
            <p className="fw-normal mb-2">Normal weight text</p>
            <p className="fw-light mb-2">Light weight text</p>
            <p className="fst-italic">Italic text</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Transform</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lowercase mb-2">Lowercased text</p>
          <p className="text-uppercase mb-2">Uppercased text</p>
          <p className="text-capitalize">capitalized text</p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mt-4">
            {`<p class="text-lowercase">Lowercased text</p>
<p class="text-uppercase">Uppercased text</p>
<p class="text-capitalize">capitalized text</p>`}
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../grid-basic"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Grid Basics
        </Link>
        <Link
          to="../colors"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Colors →
        </Link>
      </div>
    </motion.div>
  );
};

export default Typography; 