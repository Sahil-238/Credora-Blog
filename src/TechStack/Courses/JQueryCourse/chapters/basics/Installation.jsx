import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Installation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Installing jQuery</h1>
      
      <h2>Different Ways to Include jQuery</h2>
      <p>There are several ways to include jQuery in your project:</p>

      <h3>1. Using CDN</h3>
      <p>The quickest way to include jQuery is through a CDN:</p>
      
      <CodeEditor
        defaultValue={`<!-- Latest minified jQuery -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>`}
        language="html"
      />

      <h3>2. Local Installation</h3>
      <p>Download jQuery and include it locally:</p>
      
      <CodeEditor
        defaultValue={`<!-- Local jQuery file -->
<script src="js/jquery-3.7.1.min.js"></script>`}
        language="html"
      />

      <h3>3. Using npm</h3>
      <p>For modern web applications using npm:</p>
      
      <CodeEditor
        defaultValue={`# Install jQuery
npm install jquery

# In your JavaScript file
import $ from 'jquery';`}
        language="bash"
      />

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="text-yellow-700">
          <strong>Best Practice:</strong> Always include jQuery before your custom scripts
          and verify the installation by checking if jQuery is defined:
        </p>
        <CodeEditor
          defaultValue={`<script>
if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded');
} else {
    console.log('jQuery is loaded');
}
</script>`}
          language="html"
        />
      </div>
    </motion.div>
  );
};

export default Installation; 