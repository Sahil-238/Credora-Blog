import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Exercises = () => {
  useEffect(() => {
    // Initialize any jQuery examples if needed
    return () => {
      // Cleanup jQuery events/plugins if needed
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Exercises</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <div className="space-y-4">
          
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Interactive Example</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Code</h3>
            <CodeEditor
              defaultValue={`// Your jQuery code here
$(() => {
  // DOM ready
});`}
              language="javascript"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Result</h3>
            <CodePreview />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-800">Example 1</h3>
            <CodeEditor
              defaultValue={`// Example code here`}
              language="javascript"
              height="100px"
            />
          </div>
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>
    </motion.div>
  );
};

export default Exercises;